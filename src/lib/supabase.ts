// Supabase client configuration
// This file sets up the Supabase client for database operations

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client for API routes
export const createServerSupabaseClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
};

// Database table names
export const TABLES = {
  USERS: 'users',
  PROFILES: 'profiles', 
  LINKS: 'links',
  ANALYTICS: 'analytics'
} as const;