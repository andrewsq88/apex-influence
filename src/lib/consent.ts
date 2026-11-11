'use client';

import { useSyncExternalStore } from 'react';
import { CONSENT_STORAGE_KEY } from '@/lib/site';

export type Consent = 'accepted' | 'declined' | 'unset';

const CHANGE_EVENT = 'apex:consent-change';

export function readConsent(): Consent {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === 'accepted' || value === 'declined' ? value : 'unset';
  } catch {
    return 'unset';
  }
}

/** Saves the visitor's choice and tells listeners (analytics) in this tab. */
export function saveConsent(choice: Exclude<Consent, 'unset'>) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Storage blocked: the choice applies to this page view only.
  }
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: choice }));
}

let lastChoice: Consent | null = null;

function subscribe(onChange: () => void) {
  const handler = (e: Event) => {
    lastChoice = ((e as CustomEvent).detail as Consent) ?? null;
    onChange();
  };
  window.addEventListener(CHANGE_EVENT, handler);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, handler);
    window.removeEventListener('storage', onChange);
  };
}

/** Current consent, "unset" during server render and before the visitor chooses. */
export function useConsent(): Consent {
  return useSyncExternalStore(
    subscribe,
    () => lastChoice ?? readConsent(),
    () => 'unset' as Consent,
  );
}
