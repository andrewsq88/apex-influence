import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, budget, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }
    // TODO: Integrate with email service (Resend, SendGrid)
    // TODO: Add to CRM (HubSpot via Composio)
    console.log('New contact form submission:', { name, email, company, budget, message });
    return NextResponse.json({ success: true, message: 'Thank you! We will be in touch within 24 hours.' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
