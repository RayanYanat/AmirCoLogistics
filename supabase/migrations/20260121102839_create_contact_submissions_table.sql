/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text, required) - Contact person's name (max 100 chars)
      - `email` (text, required) - Contact person's email (max 255 chars, validated format)
      - `company` (text, optional) - Company name (max 255 chars)
      - `phone` (text, optional) - Phone number (max 50 chars)
      - `message` (text, required) - Message content (max 5000 chars)
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert their own contact submissions
    - Policy validates all required fields and formats before allowing insertion

  3. Validation
    - Name: required, non-empty after trim, max 100 characters
    - Email: required, non-empty after trim, max 255 characters, valid email format
    - Message: required, non-empty after trim, max 5000 characters
    - Company: optional, max 255 characters if provided
    - Phone: optional, max 50 characters if provided
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    (name IS NOT NULL) AND
    (length(TRIM(BOTH FROM name)) > 0) AND
    (length(name) <= 100) AND
    (email IS NOT NULL) AND
    (length(TRIM(BOTH FROM email)) > 0) AND
    (length(email) <= 255) AND
    (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'::text) AND
    (message IS NOT NULL) AND
    (length(TRIM(BOTH FROM message)) > 0) AND
    (length(message) <= 5000) AND
    ((company IS NULL) OR (length(company) <= 255)) AND
    ((phone IS NULL) OR (length(phone) <= 50))
  );