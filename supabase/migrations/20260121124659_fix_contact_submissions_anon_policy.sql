/*
  # Fix contact submissions RLS policy for anonymous users

  1. Changes
    - Drop existing policy
    - Create new policy specifically for anon role
    - Allow INSERT operations for anonymous users

  2. Security
    - RLS remains enabled
    - Anonymous users can only INSERT, not read/update/delete
    - Policy uses anon role explicitly
*/

-- Drop existing policy
DROP POLICY IF EXISTS "Allow public contact form submissions" ON contact_submissions;

-- Create policy for anon role
CREATE POLICY "Allow anonymous inserts"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
