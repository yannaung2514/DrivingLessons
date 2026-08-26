const fs = require('fs');
const path = require('path');

const htmlFile = '規制標識一覧 - 禁止行為を伝えるための標識.html';
const html = fs.readFileSync(htmlFile, 'utf8');
const imgDir = './規制標識一覧 - 禁止行為を伝えるための標識_files';

// More flexible regex to extract sign entries
// Pattern: <p>NUMBER.<b>SIGN_NAME</b> (with possible annotations in between)
// Then: <p><img ... src="PATH" ...>DESCRIPTION</p>
const signPattern = /<p>(\d+)\.<b>([^<]+)<\/b>.*?<\/p>\s*<p><img[^>]+src="([^"]+)"[^>]*>([^<]*)<\/p>/g;

const signs = [];
let match;

while ((match = signPattern.exec(html)) !== null) {
    const num = parseInt(match[1]);
    const name = match[2].trim();
    const imgSrc = match[3];
    let desc = match[4].trim();
    
    // Skip if no description or image
    if (!name || !imgSrc) continue;
    
    // Clean up description
    desc = desc.replace(/\s+/g, ' ').trim();
    
    signs.push({
        num: num,
        name: name,
        description: desc,
        imageSrc: imgSrc
    });
}

console.log(`Found ${signs.length} signs`);
console.log('\nAll signs:');
signs.forEach(s => {
    console.log(`${s.num}. ${s.name}`);
    console.log(`   Description: ${s.description}`);
    console.log(`   Image: ${s.imageSrc}`);
    console.log('');
});

// Save to JSON
fs.writeFileSync('_extracted_signs.json', JSON.stringify(signs, null, 2));
console.log('\nSaved to _extracted_signs.json');
