'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CONSENT_STORAGE_KEY } from '@/lib/site';

type Choice = 'accepted' | 'declined' | null;

declare global {
  interface Window {
    __apexLoadAds?: () => void;
  }
}

const OPEN_EVENT = 'apex:cookie-settings';

function readChoice(): Choice {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === 'accepted' || value === 'declined' ? value : null;
  } catch {
    return null;
  }
}

/**
 * Cookie notice. Google AdSense loads only after Accept (see ADSENSE_BOOTSTRAP
 * in the root layout). Decline keeps it off. The choice stays in this browser.
 */
export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(readChoice() === null);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  function choose(choice: Exclude<Choice, null>) {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      // Storage blocked: the choice applies to this page view only.
    }
    setOpen(false);
    if (choice === 'accepted') {
      window.__apexLoadAds?.();
    } else if (document.querySelector('script[src*="pagead2.googlesyndication.com"]')) {
      // Ads were already loaded in this tab. Reload so Decline takes effect now.
      window.location.reload();
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      aria-live="polite"
      data-cookie-banner=""
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#111118]/95 backdrop-blur"
    >
      <div className="mx-auto max-w-6xl px-4 py-4 sm:flex sm:items-center sm:gap-6">
        <p className="text-sm text-gray-300">
          We use cookies for third-party advertising (Google AdSense). Ads load only if you accept. We also count
          page views with Vercel Web Analytics, which does not use cookies. See our{' '}
          <Link href="/cookies" className="text-[#a78bfa] underline">
            cookie policy
          </Link>
          .
        </p>
        <div className="mt-3 flex shrink-0 gap-3 sm:mt-0">
          <button
            type="button"
            onClick={() => choose('declined')}
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-white/20"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] px-4 py-2 text-sm font-semibold text-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

/** Footer control that reopens the notice so the visitor can change their choice. */
export function CookieSettingsButton({ className = '' }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookie settings
    </button>
  );
}
