const fs = require('fs');
const path = require('path');

function getArgValue(name) {
  const arg = process.argv.find((item) => item.startsWith(`--${name}=`));
  return arg ? arg.split('=')[1] : undefined;
}

const SUPABASE_URL = getArgValue('url') || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = getArgValue('key') || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing Supabase configuration.');
  console.error('Provide either environment variables or command-line arguments:');
  console.error('  SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, or --url=... --key=...');
  process.exit(1);
}

const sourcePath = path.join(__dirname, 'kanjidata.js');
const source = fs.readFileSync(sourcePath, 'utf8');
const match = source.match(/const\s+kanjiMasterData\s*=\s*(\[([\s\S]*)\]);/m);
if (!match) {
  throw new Error('Could not locate kanjiMasterData array in kanjidata.js');
}

const kanjiData = JSON.parse(match[1]);

// Build one row per kanji with JSONB compounds and examples
const rows = kanjiData.map((kanji) => ({
  char: kanji.char || null,
  on_yomi: kanji.on || null,
  kun_yomi: kanji.kun || null,
  english: kanji.english || null,
  jlpt_new: kanji.jlpt_new ?? null,
  grade: kanji.grade ?? null,
  strokes: kanji.strokes ?? null,
  myanmar: kanji.myanmar || null,
  compounds: Array.isArray(kanji.compounds) ? kanji.compounds : [],
  examples: Array.isArray(kanji.ex) ? kanji.ex : [],
}));

const chunkSize = 100;
const maxRetries = 3;
const retryDelayMs = 1000;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function retryFetch(url, options, retries = maxRetries) {
  try {
    const response = await fetch(url, options);
    if (response.status === 401 || response.status === 403) {
      throw new Error('Authentication failed: invalid Supabase API key. Verify the key and project URL.');
    }
    if (response.ok || response.status === 404) {
      return response;
    }
    if (retries > 0 && (response.status >= 500 || response.status === 429)) {
      await delay(retryDelayMs);
      return retryFetch(url, options, retries - 1);
    }
    return response;
  } catch (err) {
    if (retries > 0 && /network|ECONNRESET|ECONNREFUSED|ETIMEDOUT/i.test(err.message)) {
      await delay(retryDelayMs);
      return retryFetch(url, options, retries - 1);
    }
    throw err;
  }
}

async function testAuth() {
  const response = await retryFetch(`${SUPABASE_URL}/rest/v1/kanji_data?select=char&limit=1`, {
    method: 'GET',
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok && response.status !== 404) {
    const body = await response.text();
    throw new Error(`Supabase auth test failed: ${response.status} ${response.statusText}\n${body}`);
  }
}

async function insertChunk(chunk) {
  const response = await retryFetch(`${SUPABASE_URL}/rest/v1/kanji_data`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal,resolution=merge-duplicates',
    },
    body: JSON.stringify(chunk),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Supabase insert failed: ${response.status} ${response.statusText}\n${body}`);
  }
}

async function main() {
  console.log(`Using Supabase URL: ${SUPABASE_URL}`);
  console.log('Testing Supabase credentials...');
  await testAuth();
  console.log('Credential check passed.');

  console.log(`Preparing ${rows.length} rows for insert...`);

  for (let i = 0; i < rows.length; i += chunkSize) {
    const chunk = rows.slice(i, i + chunkSize);
    console.log(`Inserting rows ${i + 1}..${i + chunk.length}...`);
    await insertChunk(chunk);
  }

  console.log('All rows inserted successfully.');
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});