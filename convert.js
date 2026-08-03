const fs = require('fs');

// Read the CSV file as a buffer
const buf = fs.readFileSync('kanjimaster.csv');

// Try Shift-JIS decoding (common for Japanese CSV files)
let text;
try {
    const decoder = new TextDecoder('shift-jis');
    text = decoder.decode(buf);
    console.log('Decoded with shift-jis');
} catch (e) {
    console.log('shift-jis not supported, using utf-8');
    text = buf.toString('utf-8');
}

// Parse CSV line (comma-separated, handling quoted fields)
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            if (inQuotes && line[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (ch === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += ch;
        }
    }
    result.push(current);
    return result;
}

const lines = text.split(/\r?\n/);
console.log('Total lines:', lines.length);
console.log('Header:', lines[0]);

const data = [];
for (let i = 1; i < lines.length; i++) {
    const columns = parseCSVLine(lines[i]);
    const firstCol = (columns[0] || '').trim();
    if (!firstCol) continue;

    // Extract the first valid CJK kanji character
    let kanji = null;
    for (const ch of firstCol) {
        const code = ch.charCodeAt(0);
        if ((code >= 0x4e00 && code <= 0x9fff) || (code >= 0x3400 && code <= 0x4dbf)) {
            kanji = ch;
            break;
        }
    }
    if (!kanji) continue;

    const on = (columns[1] || '').trim();
    const kun = (columns[2] || '').trim();
    let english = (columns[3] || '').trim();
    // Remove surrounding quotes if present
    english = english.replace(/^"(.*)"$/, '$1');

    data.push({ char: kanji, on, kun, english, compound: '', ex: [] });
}

console.log('Parsed kanji entries:', data.length);
if (data.length > 0) {
    console.log('First entry:', JSON.stringify(data[0]));
    console.log('Last entry:', JSON.stringify(data[data.length - 1]));
}

// Write the JS file
const js = '// Kanji data from kanjimaster.csv\n' +
    '// Loaded via <script> tag so it works without a web server (file:// protocol).\n' +
    'const kanjiMasterData = ' + JSON.stringify(data, null, 2) + ';\n';

fs.writeFileSync('kanjimaster.js', js, 'utf-8');
console.log('Created kanjimaster.js with ' + data.length + ' kanji entries');