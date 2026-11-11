'use client';

import { Analytics, type BeforeSendEvent } from '@vercel/analytics/next';
import { useConsent } from '@/lib/consent';

/** Drop query strings and hashes so no form data, tokens or emails reach analytics. */
function stripQuery(event: BeforeSendEvent): BeforeSendEvent | null {
  try {
    const u = new URL(event.url);
    return { ...event, url: u.origin + u.pathname };
  } catch {
    return null;
  }
}

/** Vercel Web Analytics loads only after the visitor accepts in the cookie notice. */
export function ConsentedAnalytics() {
  const consent = useConsent();
  if (consent !== 'accepted') return null;
  return <Analytics beforeSend={stripQuery} />;
}
