// ============================================================
// Supabase Client & Photo Storage
// ============================================================

// Initialize Supabase client (if configured)
let supabaseClient = null;

if (window.supabaseConfigured) {
    // Load Supabase client library
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    script.onload = () => {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('✅ Supabase connected');
    };
    document.head.appendChild(script);
}

// ============================================================
// Photo Storage Functions (Supabase or localStorage fallback)
// ============================================================

/**
 * Upload photo to Supabase Storage
 * @param {string} wordId - The word ID
 * @param {string} dataUrl - Base64 data URL
 * @returns {Promise<string>} Public URL of uploaded photo
 */
async function uploadPhotoToSupabase(wordId, dataUrl) {
    if (!supabaseClient) {
        throw new Error('Supabase not initialized');
    }

    // Convert data URL to blob
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    
    // Create filename: wordId.jpg (no timestamp, so it's predictable)
    const filename = `${wordId}.jpg`;
    const filePath = `photos/${filename}`;

    // Upload to Supabase Storage
    const { data, error } = await supabaseClient.storage
        .from('traffic-photos')
        .upload(filePath, blob, {
            contentType: 'image/jpeg',
            upsert: true
        });

    if (error) throw error;

    // Get public URL
    const { data: urlData } = supabaseClient.storage
        .from('traffic-photos')
        .getPublicUrl(filePath);

    // Add a cache-buster so the browser doesn't reuse the OLD photo at this
    // same URL when the file is overwritten with a new image.
    return urlData.publicUrl + '?v=' + Date.now();
}

/**
 * Get photo URL from word ID (constructs URL without database lookup)
 * @param {string} wordId - The word ID
 * @returns {string} Public URL of the photo
 */
function getPhotoUrlFromWordId(wordId) {
    if (!supabaseClient) return null;
    
    const filename = `${wordId}.jpg`;
    const filePath = `photos/${filename}`;
    
    const { data: urlData } = supabaseClient.storage
        .from('traffic-photos')
        .getPublicUrl(filePath);
    
    return urlData.publicUrl;
}

/**
 * List all photos in the traffic-photos bucket and rebuild the
 * word->photo mapping (from the <wordId>.jpg filenames).
 * Photos live only in Storage; this is how we know which words have photos
 * when the user is on a new browser/device (localStorage is empty).
 */
async function loadPhotosFromSupabase() {
    if (!supabaseClient) return 0;

    try {
        const { data, error } = await supabaseClient.storage
            .from('traffic-photos')
            .list('photos');

        if (error) throw error;

        let count = 0;
        (data || []).forEach(file => {
            if (!file || !file.name) return;
            // Filename is "<wordId>.jpg" -> strip extension to get wordId
            if (!file.name.toLowerCase().endsWith('.jpg')) return;
            const wordId = file.name.slice(0, -4);
            if (!wordId) return;
            if (wordPhotos[wordId] && wordPhotos[wordId].startsWith('http')) return; // already have it
            wordPhotos[wordId] = getPhotoUrlFromWordId(wordId);
            count++;
        });

        if (count > 0) {
            savePhotos();
            console.log(`✅ Loaded ${count} photo(s) from Supabase Storage`);
        }
        return count;
    } catch (error) {
        console.warn('Could not list photos from Supabase:', error);
        return 0;
    }
}

/**
 * Delete photo from Supabase Storage
 * @param {string} wordId - The word ID
 */
async function deletePhotoFromSupabase(wordId) {
    if (!supabaseClient || !wordId) return;

    const filename = `${wordId}.jpg`;
    const filePath = `photos/${filename}`;

    const { error } = await supabaseClient.storage
        .from('traffic-photos')
        .remove([filePath]);

    if (error) console.warn('Failed to delete photo from Supabase:', error);
}

/**
 * Save photo (Supabase or localStorage)
 * @param {string} wordId - The word ID
 * @param {string} dataUrl - Base64 data URL
 */
async function savePhoto(wordId, dataUrl) {
    if (window.supabaseConfigured && supabaseClient) {
        try {
            // Upload to Supabase Storage
            const publicUrl = await uploadPhotoToSupabase(wordId, dataUrl);
            
            // Save URL to localStorage (for quick access)
            wordPhotos[wordId] = publicUrl;
            savePhotos();
            
            console.log('✅ Photo uploaded to Supabase Storage');
            return publicUrl;
        } catch (error) {
            console.error('Supabase upload failed, falling back to localStorage:', error);
            // Fall back to localStorage
            wordPhotos[wordId] = dataUrl;
            savePhotos();
            return dataUrl;
        }
    } else {
        // Use localStorage only
        wordPhotos[wordId] = dataUrl;
        savePhotos();
        return dataUrl;
    }
}

/**
 * Delete photo (Supabase or localStorage)
 * @param {string} wordId - The word ID
 */
async function deletePhoto(wordId) {
    if (window.supabaseConfigured && supabaseClient) {
        // Delete from Supabase Storage
        await deletePhotoFromSupabase(wordId);
    }
    
    // Remove from localStorage
    delete wordPhotos[wordId];
    savePhotos();
}

// ============================================================
// Database Operations for Vocabulary Words
// ============================================================

/**
 * Fetch all words from Supabase database
 * @returns {Promise<Array>} Array of word objects
 */
async function fetchWordsFromDatabase() {
    if (!supabaseClient) {
        console.warn('Supabase not initialized, using local data');
        return null;
    }

    try {
        const { data, error } = await supabaseClient
            .from('traffic_words')
            .select('*')
            .order('category', { ascending: true })
            .order('word', { ascending: true });

        if (error) throw error;

        console.log(`✅ Fetched ${data.length} words from database`);
        return data;
    } catch (error) {
        console.error('Failed to fetch words from database:', error);
        return null;
    }
}

/**
 * Insert a new word into the database
 * @param {Object} wordObj - { word, reading, myanmar, category }
 * @returns {Promise<Object|null>} Inserted word or null
 */
async function insertWordToDatabase(wordObj) {
    if (!supabaseClient) {
        console.warn('Supabase not initialized');
        return null;
    }

    try {
        const { data, error } = await supabaseClient
            .from('traffic_words')
            .insert([wordObj])
            .select()
            .single();

        if (error) throw error;

        console.log('✅ Word inserted to database:', data.word);
        return data;
    } catch (error) {
        console.error('Failed to insert word:', error);
        return null;
    }
}

/**
 * Update a word in the database
 * @param {string} id - Word ID
 * @param {Object} updates - Fields to update
 * @returns {Promise<Object|null>} Updated word or null
 */
async function updateWordInDatabase(id, updates) {
    if (!supabaseClient) {
        console.warn('Supabase not initialized');
        return null;
    }

    try {
        const { data, error } = await supabaseClient
            .from('traffic_words')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        console.log('✅ Word updated in database:', data.word);
        return data;
    } catch (error) {
        console.error('Failed to update word:', error);
        return null;
    }
}

/**
 * Delete a word from the database
 * @param {string} id - Word ID
 * @returns {Promise<boolean>} Success status
 */
async function deleteWordFromDatabase(id) {
    if (!supabaseClient) {
        console.warn('Supabase not initialized');
        return false;
    }

    try {
        const { error } = await supabaseClient
            .from('traffic_words')
            .delete()
            .eq('id', id);

        if (error) throw error;

        console.log('✅ Word deleted from database');
        return true;
    } catch (error) {
        console.error('Failed to delete word:', error);
        return false;
    }
}

/**
 * Seed initial words to database (one-time setup)
 * @param {Array} words - Array of word objects from trafficwords.js
 * @returns {Promise<number>} Number of words inserted
 */
async function seedWordsToDatabase(words) {
    if (!supabaseClient) {
        console.warn('Supabase not initialized');
        return 0;
    }

    try {
        // Check if database already has words
        const { data: existing } = await supabaseClient
            .from('traffic_words')
            .select('id')
            .limit(1);

        if (existing && existing.length > 0) {
            console.log('Database already has words, skipping seed');
            return 0;
        }

        // Insert all words
        const wordsToInsert = words.map(w => ({
            word: w.word,
            reading: w.reading,
            myanmar: w.meaning,  // Map 'meaning' from trafficwords.js to 'myanmar' in database
            category: w.category
        }));

        const { data, error } = await supabaseClient
            .from('traffic_words')
            .insert(wordsToInsert)
            .select();

        if (error) throw error;

        console.log(`✅ Seeded ${data.length} words to database`);
        return data.length;
    } catch (error) {
        console.error('Failed to seed words:', error);
        return 0;
    }
}