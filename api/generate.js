// Vercel serverless function — proxies Gemini API requests.
// Reads GEMINI_API_KEY from Vercel environment variables (never exposed to the browser).
module.exports = async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { prompt } = req.body || {};
    if (!prompt) {
        return res.status(400).json({ error: 'Missing prompt' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY not configured in Vercel environment variables' });
    }

    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent';

    try {
        const response = await fetch(`${apiUrl}?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.2,
                    maxOutputTokens: 16384,
                    candidateCount: 1,
                    responseMimeType: 'application/json',
                },
            }),
        });

        const data = await response.json();
        if (!response.ok) {
            return res.status(response.status).json({ error: data });
        }

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}