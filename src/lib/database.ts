import { createClient } from '@supabase/supabase-js';

const dbUrl = import.meta.env.VITE_SUPABASE_URL;
const dbAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!dbUrl || !dbAnonKey) {
  throw new Error('Missing database environment variables. Please check your .env file.');
}

export const db = createClient(dbUrl, dbAnonKey, {
  auth: {
    persistSession: false,
  },
});
