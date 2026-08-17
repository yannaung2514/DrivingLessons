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
    
    // Create filename: wordId_timestamp.jpg
    const filename = `${wordId}_${Date.now()}.jpg`;
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

    return urlData.publicUrl;
}

/**
 * Delete photo from Supabase Storage
 * @param {string} photoUrl - Public URL of the photo
 */
async function deletePhotoFromSupabase(photoUrl) {
    if (!supabaseClient || !photoUrl) return;

    // Extract file path from URL
    const urlParts = photoUrl.split('/storage/v1/object/public/traffic-photos/');
    if (urlParts.length < 2) return;
    
    const filePath = urlParts[1];

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
            // Upload to Supabase
            const publicUrl = await uploadPhotoToSupabase(wordId, dataUrl);
            
            // Save URL to localStorage (for quick access)
            wordPhotos[wordId] = publicUrl;
            savePhotos();
            
            console.log('✅ Photo uploaded to Supabase');
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
    const photoUrl = wordPhotos[wordId];
    
    if (window.supabaseConfigured && supabaseClient && photoUrl && photoUrl.startsWith('http')) {
        // Delete from Supabase
        await deletePhotoFromSupabase(photoUrl);
    }
    
    // Remove from localStorage
    delete wordPhotos[wordId];
    savePhotos();
}