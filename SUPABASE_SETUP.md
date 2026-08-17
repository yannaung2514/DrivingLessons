# Supabase Setup Instructions

## 1. Create Storage Bucket

1. Go to your Supabase dashboard: https://supabase.com/dashboard/
2. Select your project
3. Go to **Storage** (left sidebar)
4. Click **New bucket**
5. Name it: `traffic-photos`
6. Set it to **Public bucket** (so photos can be viewed without authentication)
7. Click **Create bucket**

## 2. Set Storage Policies

To allow photo uploads, you need to set up storage policies:

1. In the Storage section, click on the `traffic-photos` bucket
2. Go to **Policies** tab
3. Click **New policy** → **Enable insert for all users**
4. Repeat for:
   - **Enable select for all users** (view photos)
   - **Enable delete for all users** (delete photos)
   - **Enable update for all users** (update photos)

Or use this SQL in the SQL Editor:

```sql
-- Allow public access to traffic-photos bucket
CREATE POLICY "Public Access"
ON storage.objects FOR ALL
USING (bucket_id = 'traffic-photos')
WITH CHECK (bucket_id = 'traffic-photos');
```

## 3. Get Your Credentials

1. Go to **Settings** → **API**
2. Copy:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public key** (starts with `eyJ...`)

## 4. Configure for Local Development

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

3. Install a local server (if not already installed):
   ```bash
   npm install
   ```

4. Run the app:
   ```bash
   npm start
   ```

## 5. Deploy to Vercel

When deploying to Vercel:

1. Go to your Vercel project settings
2. Go to **Environment Variables**
3. Add:
   - `VITE_SUPABASE_URL` = your project URL
   - `VITE_SUPABASE_ANON_KEY` = your anon key
4. Deploy!

## Storage Limits

Supabase free tier includes:
- **1 GB** storage space (plenty for hundreds of traffic sign photos)
- **2 GB** bandwidth per month
- **500 MB** file size limit per upload

Your photos are automatically downscaled to 360px max, so you'll easily stay within limits.

## Troubleshooting

**Photos not uploading?**
- Check browser console for errors
- Verify storage bucket is set to **Public**
- Check storage policies allow insert/select/delete

**Getting "bucket not found" error?**
- Make sure you created the bucket named exactly `traffic-photos`

**Photos not showing after upload?**
- Check that storage policies allow SELECT
- Verify the bucket is public