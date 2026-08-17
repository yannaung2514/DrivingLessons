// ============================================================
// Supabase Configuration
// ============================================================
// For deployment, set these as window variables before loading this script:
// <script>
//   window.VITE_SUPABASE_URL = 'https://your-project.supabase.co';
//   window.VITE_SUPABASE_ANON_KEY = 'your-anon-key';
// </script>
//
// Or create a config-override.js file with:
// window.VITE_SUPABASE_URL = 'https://your-project.supabase.co';
// window.VITE_SUPABASE_ANON_KEY = 'your-anon-key';

const SUPABASE_URL = window.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = window.VITE_SUPABASE_ANON_KEY || '';

// Check if Supabase is configured
window.supabaseConfigured = !!(SUPABASE_URL && SUPABASE_ANON_KEY);

if (!window.supabaseConfigured) {
    console.warn('Supabase not configured. Photos will be stored in localStorage only.');
    console.warn('To enable cloud storage, set window.VITE_SUPABASE_URL and window.VITE_SUPABASE_ANON_KEY');
}