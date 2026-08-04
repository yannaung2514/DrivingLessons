// API configuration template — copy this file to config.js and add your API keys.
// config.js is excluded from git via .gitignore.
// For a free/no-credit setup, use Gemini only.
const apiConfig = {
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