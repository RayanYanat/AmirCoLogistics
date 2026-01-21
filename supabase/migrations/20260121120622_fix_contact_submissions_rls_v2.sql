/*
  # Fix contact submissions RLS policy - v2

  1. Changes
    - Drop existing policy
    - Grant INSERT permission to anon role explicitly
    - Create simple INSERT policy for anon users

  2. Security
    - Allows anonymous users to submit contact forms
    - No restrictions on insertion
*/

DROP POLICY IF EXISTS "Allow anonymous contact submissions" ON contact_submissions;

GRANT INSERT ON contact_submissions TO anon;

CREATE POLICY "Enable insert for anon"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);