import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
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
    url: 'https://apexinfluence.com',
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
  alternates: { canonical: 'https://apexinfluence.com' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Apex Influence',
  url: 'https://apexinfluence.com',
  logo: 'https://apexinfluence.com/logo.png',
  description: 'A full-service influencer marketing agency.',
  sameAs: [
    'https://twitter.com/apexinfluence',
    'https://instagram.com/apexinfluence',
    'https://linkedin.com/company/apexinfluence',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'hello@apexinfluence.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
