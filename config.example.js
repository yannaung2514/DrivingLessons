// API configuration template — copy this file to config.js and add your API key.
// config.js is excluded from git via .gitignore.
const apiConfig = {
    apiKey: '', // ← Add your Gemini API key here (starts with "AIza...")
    model: 'gemini-3.5-flash',
    apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent',
    kanjiCount: 10,
    maxRetries: 3,
};