/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required) - Full name of the person contacting
      - `email` (text, required) - Email address for follow-up
      - `company` (text, optional) - Company or organization name
      - `phone` (text, optional) - Contact phone number
      - `message` (text, required) - Message content from the contact form
      - `created_at` (timestamptz) - Timestamp of when the submission was created

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy to allow public inserts (anyone can submit a contact form)
    - No read access to public (only administrators can read submissions)
    
  3. Important Notes
    - This table stores contact form submissions from the website
    - Public can only insert data (submit forms)
    - Read access would typically be granted to authenticated admin users
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  phone text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);