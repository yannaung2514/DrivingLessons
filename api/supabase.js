// Vercel serverless function — reads/writes kanji data to Supabase.
// Uses the service role key server-side (never exposed to the browser).
// NOTE: Keys must come from environment variables ONLY — never hardcode them.
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://zfnwbfbijrpaypxnjryb.supabase.co';
// Accept either the canonical name or the shorter "SUPABASE_SERVICE_KEY" so it
// works regardless of the env var name you configured in the dashboard.
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY / SUPABASE_SERVICE_KEY environment variable is required.');
}


// Helper to call Supabase REST API
async function supabaseFetch(path, options = {}) {
    const url = `${SUPABASE_URL}/rest/v1${path}`;
    const headers = {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
        ...(options.headers || {}),
    };
    return fetch(url, { ...options, headers });
}

module.exports = async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, apikey, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    try {
        // GET /api/supabase — fetch kanji data (optionally by char, or random selection)
        if (req.method === 'GET') {
            const { char, limit = '100', random } = req.query || {};
            let query = '/kanji_data?select=*';
            if (char) {
                query += `&char=eq.${encodeURIComponent(char)}`;
            }
            if (random === 'true') {
                // Fetch all chars then pick random in the app, or use order=random
                query += '&order=random';
            }
            query += `&limit=${limit}`;
            const response = await supabaseFetch(query, { method: 'GET' });
            const data = await response.json();
            if (!response.ok) {
                return res.status(response.status).json({ error: data });
            }
            return res.status(200).json(data);
        }

        // POST /api/supabase — insert/upsert kanji data (one row per kanji)
        if (req.method === 'POST') {
            const body = req.body || [];
            const rows = Array.isArray(body) ? body : [body];
            if (rows.length === 0) {
                return res.status(400).json({ error: 'No data provided' });
            }
            const response = await supabaseFetch('/kanji_data', {
                method: 'POST',
                headers: {
                    Prefer: 'return=minimal,resolution=merge-duplicates',
                },
                body: JSON.stringify(rows),
            });
            if (!response.ok) {
                const errText = await response.text();
                return res.status(response.status).json({ error: errText });
            }
            return res.status(201).json({ success: true, inserted: rows.length });
        }

        // PATCH /api/supabase?char=一 — update kanji data for a char (AI override, edits, notes)
        if (req.method === 'PATCH') {
            const { char } = req.query || {};
            const body = req.body || {};
            if (!char) {
                return res.status(400).json({ error: 'Missing char query param' });
            }
            // Add updated_at timestamp
            body.updated_at = new Date().toISOString();
            const response = await supabaseFetch(`/kanji_data?char=eq.${encodeURIComponent(char)}`, {
                method: 'PATCH',
                headers: { Prefer: 'return=minimal' },
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                const errText = await response.text();
                return res.status(response.status).json({ error: errText });
            }
            return res.status(200).json({ success: true });
        }

        // DELETE /api/supabase?char=一 — delete kanji data for a char
        if (req.method === 'DELETE') {
            const { char } = req.query || {};
            if (!char) {
                return res.status(400).json({ error: 'Missing char query param' });
            }
            const response = await supabaseFetch(`/kanji_data?char=eq.${encodeURIComponent(char)}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                const errText = await response.text();
                return res.status(response.status).json({ error: errText });
            }
            return res.status(200).json({ success: true });
        }

        return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
        console.error('Supabase API error:', error.message);
        return res.status(500).json({ error: error.message });
    }
};