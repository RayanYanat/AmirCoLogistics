/*
  # Fix RLS Policy Security Issue

  1. RLS Policy Enhancement
    - Replace the overly permissive RLS policy on `contact_submissions`
    - Add validation checks to prevent abuse:
      * Ensure name is not empty and has reasonable length (1-100 chars)
      * Ensure email is not empty, matches basic email format, and has reasonable length (1-255 chars)
      * Ensure message is not empty and has reasonable length (1-5000 chars)
      * Ensure fields contain actual content (not just whitespace)
    - This prevents spam and malicious submissions while keeping the form public

  2. Security Notes
    - The new policy still allows public submissions but with proper validation
    - Input validation at the database level provides an additional security layer
    - Prevents database spam and resource exhaustion attacks
    - Validates email format using regex pattern to ensure basic correctness
*/

-- Drop the existing overly permissive policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create a more restrictive policy with validation
CREATE POLICY "Validated contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Ensure name is provided and within reasonable length
    name IS NOT NULL 
    AND length(trim(name)) > 0 
    AND length(name) <= 100
    -- Ensure email is provided, matches basic format, and within reasonable length
    AND email IS NOT NULL 
    AND length(trim(email)) > 0 
    AND length(email) <= 255
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    -- Ensure message is provided and within reasonable length
    AND message IS NOT NULL 
    AND length(trim(message)) > 0 
    AND length(message) <= 5000
    -- Optional fields validation (if provided, must be reasonable length)
    AND (company IS NULL OR length(company) <= 255)
    AND (phone IS NULL OR length(phone) <= 50)
  );