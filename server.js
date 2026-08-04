const http = require('http');
const fs = require('fs');
const path = require('path');

// Load server configuration (providers with API keys)
let serverConfig;
try {
    serverConfig = require('./server-config.js');
} catch (e) {
    console.error('Failed to load server-config.js:', e.message);
    console.error('Copy config.example.js to server-config.js and add your API keys.');
    process.exit(1);
}

const PORT = process.env.PORT || 3001;

// Simple in-memory rate limiting
const rateLimits = new Map();

function checkRateLimit(providerName, maxRequests = 10, windowMs = 60000) {
    const now = Date.now();
    const key = providerName;
    const record = rateLimits.get(key) || { count: 0, resetAt: now + windowMs };

    if (now > record.resetAt) {
        record.count = 0;
        record.resetAt = now + windowMs;
    }

    record.count++;
    rateLimits.set(key, record);

    if (record.count > maxRequests) {
        const waitMs = record.resetAt - now;
        throw new Error(`Rate limit exceeded for ${providerName}. Try again in ${Math.ceil(waitMs / 1000)}s.`);
    }
}

// CORS headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

const server = http.createServer(async (req, res) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(204, corsHeaders);
        res.end();
        return;
    }

    // Only handle POST /api/generate
    if (req.method !== 'POST' || req.url !== '/api/generate') {
        res.writeHead(404, { 'Content-Type': 'application/json', ...corsHeaders });
        res.end(JSON.stringify({ error: 'Not found. Use POST /api/generate' }));
        return;
    }

    try {
        // Parse request body
        const body = await parseBody(req);
        const { provider, prompt } = body;

        if (!provider || !prompt) {
            res.writeHead(400, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ error: 'Missing provider or prompt' }));
            return;
        }

        // Find provider config
        const providerConfig = serverConfig.providers.find(p => p.name === provider);
        if (!providerConfig) {
            res.writeHead(400, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ error: `Unknown provider: ${provider}` }));
            return;
        }

        if (!providerConfig.apiKey) {
            res.writeHead(500, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ error: `No API key configured for ${provider}` }));
            return;
        }

        // Check rate limit
        try {
            checkRateLimit(provider);
        } catch (rlError) {
            res.writeHead(429, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ error: rlError.message }));
            return;
        }

        console.log(`[${new Date().toISOString()}] ${provider} request`);

        // Make request to AI provider
        let aiResponse;
        if (provider === 'gemini') {
            aiResponse = await callGemini(providerConfig, prompt);
        } else {
            aiResponse = await callOpenAICompat(providerConfig, prompt);
        }

        res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
        res.end(JSON.stringify(aiResponse));

    } catch (error) {
        console.error('Proxy error:', error.message);
        res.writeHead(500, { 'Content-Type': 'application/json', ...corsHeaders });
        res.end(JSON.stringify({ error: error.message }));
    }
});

// Parse HTTP request body
function parseBody(req) {
    return new Promise((resolve, reject) => {
        let data = '';
        req.on('data', chunk => data += chunk);
        req.on('end', () => {
            try {
                resolve(JSON.parse(data));
            } catch (e) {
                reject(new Error('Invalid JSON body'));
            }
        });
        req.on('error', reject);
    });
}

// Call Gemini API
async function callGemini(config, prompt) {
    const url = new URL(config.apiUrl);
    url.searchParams.set('key', config.apiKey);

    const body = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 16384,
            candidateCount: 1,
            responseMimeType: 'application/json',
        },
    };

    const response = await fetch(url.toString(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Gemini API failed (${response.status}): ${text.substring(0, 200)}`);
    }

    return await response.json();
}

// Call OpenAI-compatible API (OpenAI, OpenRouter, DeepSeek)
async function callOpenAICompat(config, prompt) {
    const response = await fetch(config.apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.apiKey}`,
        },
        body: JSON.stringify({
            model: config.model,
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.2,
            max_tokens: 4096,
            response_format: { type: 'json_object' },
        }),
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`${config.name} API failed (${response.status}): ${text.substring(0, 200)}`);
    }

    return await response.json();
}

// Start server
server.listen(PORT, () => {
    console.log(`LearnKanji proxy server running on http://localhost:${PORT}`);
    console.log(`Proxying to: ${serverConfig.providers.map(p => p.name).join(', ')}`);
    console.log(`Press Ctrl+C to stop`);
});