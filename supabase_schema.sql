-- Supabase schema for LearnKanji
-- Run this in Supabase SQL Editor

-- Drop existing table if you want to recreate (WARNING: deletes all data)
-- DROP TABLE IF EXISTS public.kanji_data;

-- Create kanji_data table (one row per kanji)
CREATE TABLE IF NOT EXISTS public.kanji_data (
  id SERIAL PRIMARY KEY,
  char TEXT UNIQUE NOT NULL,
  on_yomi TEXT,
  kun_yomi TEXT,
  english TEXT,
  jlpt_new INTEGER,
  grade INTEGER,
  strokes INTEGER,
  myanmar TEXT,
  compounds JSONB DEFAULT '[]'::jsonb,
  examples JSONB DEFAULT '[]'::jsonb,
  notes TEXT,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS) for public read access
ALTER TABLE public.kanji_data ENABLE ROW LEVEL SECURITY;

-- Allow public read access (anon key can read)
CREATE POLICY "Allow public read" ON public.kanji_data
  FOR SELECT USING (true);

-- Allow public insert (anon key can insert)
CREATE POLICY "Allow public insert" ON public.kanji_data
  FOR INSERT WITH CHECK (true);

-- Allow public update (anon key can update)
CREATE POLICY "Allow public update" ON public.kanji_data
  FOR UPDATE USING (true) WITH CHECK (true);

-- Allow public delete (anon key can delete)
CREATE POLICY "Allow public delete" ON public.kanji_data
  FOR DELETE USING (true);

-- Create index on char for fast lookups
CREATE INDEX IF NOT EXISTS idx_kanji_data_char ON public.kanji_data (char);

-- Create index on updated_at for sorting
CREATE INDEX IF NOT EXISTS idx_kanji_data_updated_at ON public.kanji_data (updated_at DESC);