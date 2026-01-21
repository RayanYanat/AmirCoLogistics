/*
  # Re-enable RLS for contact submissions with working policy

  1. Changes
    - Enable RLS on contact_submissions table
    - Create a simple policy allowing anonymous users to insert contact form submissions
    - No complex validation in policy (handled by application layer)

  2. Security
    - RLS is enabled to protect the table
    - Anonymous users can only INSERT, not read/update/delete submissions
    - Submissions are write-only for public users
*/

-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop any existing policies
DROP POLICY IF EXISTS "Enable insert for anon" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create simple policy for anonymous inserts
CREATE POLICY "Allow public contact form submissions"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);