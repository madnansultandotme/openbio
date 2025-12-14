// User login API endpoint
// POST /api/auth/login

import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword } from '@/lib/auth';
import { createServerSupabaseClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // TODO: Implement user login logic
    // 1. Validate input data
    // 2. Find user by email
    // 3. Verify password
    // 4. Generate JWT token
    // 5. Set secure HTTP-only cookie
    // 6. Return user data (without sensitive info)

    return NextResponse.json(
      { message: 'Login successful', user: { email } },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }
}