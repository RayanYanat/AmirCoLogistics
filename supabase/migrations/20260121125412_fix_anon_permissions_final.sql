/*
  # Fix anon role permissions for contact submissions

  1. Changes
    - Grant INSERT permission to anon role as postgres user
    - Ensure policy allows anon inserts
    - Fix permission denied issues

  2. Security
    - RLS enabled
    - Anonymous users can only INSERT
*/

-- Ensure we're running as postgres
RESET ROLE;

-- Grant INSERT to anon
GRANT INSERT ON TABLE public.contact_submissions TO anon;

-- Verify the policy exists
DROP POLICY IF EXISTS "anon_insert_policy" ON contact_submissions;

CREATE POLICY "anon_insert_policy"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
