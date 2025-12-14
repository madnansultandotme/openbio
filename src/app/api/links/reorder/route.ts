// Links reordering API endpoint
// PUT /api/links/reorder - Reorder links via drag and drop

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

export async function PUT(request: NextRequest) {
  try {
    const { linkIds } = await request.json(); // Array of link IDs in new order

    // TODO: Implement reorder links logic
    // 1. Validate user session
    // 2. Get user ID from session
    // 3. Verify all links belong to user
    // 4. Update position for each link
    // 5. Return success response

    return NextResponse.json(
      { message: 'Links reordered successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Reorder links error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}