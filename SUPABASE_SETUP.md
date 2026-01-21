# Supabase Setup Instructions

Your project is now configured to connect to your own Supabase project from supabase.com.

## Step 1: Create Your Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Fill in your project details and create the project

## Step 2: Get Your Credentials

1. Once your project is created, go to your project dashboard
2. Click on the "Settings" icon (gear icon) in the sidebar
3. Go to "API" section
4. Copy your:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")

## Step 3: Update Your .env File

Open the `.env` file in your project root and replace the placeholders:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your_actual_anon_key_here
```

## Step 4: Create Database Schema

Your contact form needs a table called `contact_submissions`. Run this SQL in your Supabase SQL Editor:

```sql
-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for contact form submissions)
CREATE POLICY "Allow anonymous contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to view submissions (optional - for admin panel)
CREATE POLICY "Allow authenticated users to view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
```

## Step 5: Test Your Connection

1. Start your development server (it starts automatically)
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your Supabase dashboard → Table Editor → `contact_submissions` to see the submission

## Optional: Generate TypeScript Types

If you want TypeScript types for your database schema:

1. Install Supabase CLI: `npm install -g supabase`
2. Run: `supabase gen types typescript --project-id "your-project-ref" > src/lib/types/database.ts`
3. Update `src/lib/supabase.ts` to import and use the types

## Need Help?

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client Reference](https://supabase.com/docs/reference/javascript/introduction)
