import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/consent/CookieBanner';
import { ADSENSE_BOOTSTRAP, ADSENSE_CLIENT, SITE_URL } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Apex Influence',
    template: 'Apex Influence | %s',
  },
  description:
    'Apex Influence is a full-service influencer marketing agency that connects brands with authentic creators.',
  keywords: [
    'influencer marketing',
    'digital marketing agency',
    'brand partnerships',
    'social media marketing',
    'content creators',
  ],
  authors: [{ name: 'Apex Influence' }],
  creator: 'Apex Influence',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Apex Influence',
    title: 'Apex Influence — Influencer Marketing Agency',
    description: 'Connect with authentic creators and grow your brand.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Apex Influence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Influence — Influencer Marketing Agency',
    description: 'Connect with authentic creators and grow your brand.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: { 'google-adsense-account': ADSENSE_CLIENT },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Apex Influence',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description: 'A full-service influencer marketing agency.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script dangerouslySetInnerHTML={{ __html: ADSENSE_BOOTSTRAP }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
