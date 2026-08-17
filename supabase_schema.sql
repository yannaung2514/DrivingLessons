-- Supabase Database Schema for Traffic Rules App

-- Create vocabulary words table
CREATE TABLE IF NOT EXISTS traffic_words (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    word TEXT NOT NULL,              -- Kanji (e.g., 信号)
    reading TEXT NOT NULL,           -- Hiragana (e.g., しんごう)
    myanmar TEXT NOT NULL,           -- Burmese meaning
    category TEXT NOT NULL,          -- Category (e.g., 信号, 交差点)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster category filtering
CREATE INDEX IF NOT EXISTS idx_traffic_words_category ON traffic_words(category);

-- Enable Row Level Security (RLS)
ALTER TABLE traffic_words ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (read/write for all users)
-- For a personal app, this is fine. For production, add authentication.

-- Allow SELECT for all users
CREATE POLICY "Enable read access for all users"
ON traffic_words FOR SELECT
USING (true);

-- Allow INSERT for all users
CREATE POLICY "Enable insert access for all users"
ON traffic_words FOR INSERT
WITH CHECK (true);

-- Allow UPDATE for all users
CREATE POLICY "Enable update access for all users"
ON traffic_words FOR UPDATE
USING (true)
WITH CHECK (true);

-- Allow DELETE for all users
CREATE POLICY "Enable delete access for all users"
ON traffic_words FOR DELETE
USING (true);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER update_traffic_words_updated_at
BEFORE UPDATE ON traffic_words
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();