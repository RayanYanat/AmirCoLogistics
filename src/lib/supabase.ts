import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export async function submitContactForm(data: ContactSubmission) {
  const trimmedCompany = data.company?.trim();
  const trimmedPhone = data.phone?.trim();

  const { error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        name: data.name.trim(),
        email: data.email.trim(),
        company: trimmedCompany || null,
        phone: trimmedPhone || null,
        message: data.message.trim(),
      },
    ]);

  if (error) {
    throw error;
  }
}
