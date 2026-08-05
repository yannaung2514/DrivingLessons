// API configuration template — copy this file to config.js and add your API keys.
// config.js is excluded from git via .gitignore.
// NOTE: config.js is OPTIONAL. script.js has a built-in default config, so the
// app works on Vercel even without config.js. If you load config.js locally
// (via <script src="config.js"></script>), it overrides the default via window.apiConfig.
// For a free/no-credit setup, use Gemini only.
window.apiConfig = {
    kanjiCount: 10,
    maxRetries: 2, // Retries per provider before moving to the next

    providers: [
        {
            name: 'gemini',
            apiKey: '', // ← Add your Gemini API key here (starts with "AIza...")
            model: 'gemini-3.5-flash',
            apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent',
        },
    ],
};

// Proxy server settings (set to true only if running server.js locally)
window.apiConfig.useProxy = false;
