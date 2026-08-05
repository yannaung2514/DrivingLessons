// Process kanjidata.js: translate all English text in 'myanmar' fields to Burmese.
// Uses dictionary files (dict1.txt, dict2.txt, dict3.txt) with format: token=translation
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const KANJI_FILE = path.join(__dirname, '..', 'kanjidata.js');

// Load dictionary from all dict files
function loadDict() {
    const dict = {};
    for (let i = 1; i <= 5; i++) {
        const file = path.join(__dirname, `dict${i}.txt`);
        if (!fs.existsSync(file)) continue;
        const lines = fs.readFileSync(file, 'utf8').split('\n');
        for (const line of lines) {
            const idx = line.indexOf('=');
            if (idx === -1) continue;
            const key = line.substring(0, idx).trim();
            const val = line.substring(idx + 1).trim();
            if (key && val) dict[key] = val;
        }
    }
    return dict;
}

// Translate a single token using the dictionary
function translateToken(token, dict) {
    const trimmed = token.trim();
    if (!trimmed) return '';
    // If no English letters, it's already Burmese
    if (!/[A-Za-z]/.test(trimmed)) return trimmed;
    // Direct lookup
    if (dict[trimmed]) return dict[trimmed];
    // Try case-insensitive
    const lower = trimmed.toLowerCase();
    for (const [key, val] of Object.entries(dict)) {
        if (key.toLowerCase() === lower) return val;
    }
    return null; // Not found
}

// Main
const dict = loadDict();
console.log(`Dictionary loaded: ${Object.keys(dict).length} entries`);

const content = fs.readFileSync(KANJI_FILE, 'utf8');
const start = content.indexOf('[');
const end = content.lastIndexOf(']');
const prefix = content.substring(0, start);
const suffix = content.substring(end + 1);
const data = JSON.parse(content.substring(start, end + 1));

let fixed = 0;
let stillEnglish = 0;
let untranslated = new Set();

for (const item of data) {
    if (!item.myanmar || !/[A-Za-z]/.test(item.myanmar)) continue;

    // Split by 、 and , (Japanese/Chinese separators)
    const parts = item.myanmar.split(/[、,]/);
    const translatedParts = [];

    for (const part of parts) {
        const trimmed = part.trim();
        if (!trimmed) continue;

        const result = translateToken(trimmed, dict);
        if (result !== null) {
            translatedParts.push(result);
        } else if (!/[A-Za-z]/.test(trimmed)) {
            // Pure Burmese — keep
            translatedParts.push(trimmed);
        } else {
            // English not in dictionary — try to translate the english field as fallback
            untranslated.add(trimmed);
            stillEnglish++;
        }
    }

    if (translatedParts.length > 0) {
        item.myanmar = translatedParts.join('、');
        fixed++;
    }
}

// Save
const output = prefix + JSON.stringify(data, null, 2) + suffix;
fs.writeFileSync(KANJI_FILE, output, 'utf8');

console.log(`Fixed: ${fixed} entries`);
console.log(`Still has English: ${data.filter(x => x.myanmar && /[A-Za-z]/.test(x.myanmar)).length}`);
console.log(`Untranslated tokens: ${untranslated.size}`);
console.log('Sample untranslated:', [...untranslated].slice(0, 50).join(', '));