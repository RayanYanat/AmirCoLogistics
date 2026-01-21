import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export async function submitContactForm(data: ContactSubmission) {
  const trimmedName = data.name.trim();
  const trimmedEmail = data.email.trim();
  const trimmedCompany = data.company?.trim();
  const trimmedPhone = data.phone?.trim();
  const trimmedMessage = data.message.trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    throw new Error('Name, email, and message are required');
  }

  const payload = {
    name: trimmedName,
    email: trimmedEmail,
    company: trimmedCompany || null,
    phone: trimmedPhone || null,
    message: trimmedMessage,
  };

  const { error } = await supabase
    .from('contact_submissions')
    .insert([payload]);

  if (error) {
    console.error('Supabase error:', error);
    throw new Error(error.message || 'Failed to submit form');
  }

  return true;
}
