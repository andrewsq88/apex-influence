import { NextRequest, NextResponse } from 'next/server';

/**
 * Legacy endpoint. The contact page now opens the visitor's email app (mailto:) and no longer
 * posts here. Submissions are validated and acknowledged but never logged or stored, so no
 * personal data ends up in server logs.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }
    return NextResponse.json({ success: true, message: 'Thank you! We will be in touch within 24 hours.' }, { status: 200 });
  } catch {
    console.error('Contact form error: invalid request');
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
