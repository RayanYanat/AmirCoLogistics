/*
  # Reset contact submissions RLS completely

  1. Changes
    - Drop ALL existing policies
    - Revoke and regrant table permissions
    - Create fresh INSERT policy for anonymous users
    - Ensure proper role grants

  2. Security
    - RLS enabled
    - Anonymous users can INSERT only
    - No validation in WITH CHECK to avoid conflicts
*/

-- Drop all existing policies
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Allow public contact form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON contact_submissions;

-- Ensure RLS is enabled
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Revoke all and regrant specific permissions
REVOKE ALL ON contact_submissions FROM anon;
REVOKE ALL ON contact_submissions FROM authenticated;

GRANT INSERT ON contact_submissions TO anon;
GRANT ALL ON contact_submissions TO authenticated;

-- Create simple INSERT policy for anon
CREATE POLICY "anon_insert_policy"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
