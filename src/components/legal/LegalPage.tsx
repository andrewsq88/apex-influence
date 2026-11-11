import Link from 'next/link';
import type { ReactNode } from 'react';

export const OPERATOR = 'SQ Consulting';
export const LEGAL_CONTACT_EMAIL = 'andrewsq88@gmail.com';
export const LEGAL_UPDATED = '11 November 2026';

export function ContactEmail() {
  return (
    <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="text-[#a78bfa] underline">
      {LEGAL_CONTACT_EMAIL}
    </a>
  );
}

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-[#a78bfa] underline">
      {children}
    </Link>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-white">{heading}</h2>
      <div className="mt-3 space-y-3 text-gray-300 leading-relaxed">{children}</div>
    </section>
  );
}

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#0a0a0f] px-6 py-24 text-white">
      <article className="mx-auto max-w-3xl">
        <h1 className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-4xl font-bold text-transparent">
          {title}
        </h1>
        <p className="mt-3 text-sm text-gray-500">Last updated {LEGAL_UPDATED}</p>
        {children}
      </article>
    </main>
  );
}
