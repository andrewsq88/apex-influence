import { ContactEmail, LegalLink, LegalPage, LegalSection, OPERATOR } from '@/components/legal/LegalPage';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Which cookies the Apex Influence website uses and how to change your choice.',
  alternates: { canonical: '/cookies' },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy">
      <LegalSection heading="Summary">
        <p>
          This site is operated by {OPERATOR}. We ask before any advertising cookies are used. If you decline, the
          advertising script is not loaded.
        </p>
      </LegalSection>
      <LegalSection heading="What we use">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Your cookie choice.</strong> Stored in your browser&apos;s local storage so the notice does not
            appear on every page. It is not sent to us.
          </li>
          <li>
            <strong>Advertising (only if you accept).</strong> Third-party advertising served by Google AdSense.
            Google and its partners may set cookies or similar identifiers to show, limit and measure ads.
          </li>
          <li>
            <strong>Analytics (only if you accept, no cookies).</strong> Vercel Web Analytics counts page views
            without cookies and without identifying you.
          </li>
        </ul>
      </LegalSection>
      <LegalSection heading="Changing your choice">
        <p>
          Use Cookie settings in the footer of any page to accept or decline again. You can also clear this
          site&apos;s data in your browser, or block cookies in your browser settings. If you withdraw consent,
          reload the page so the advertising and analytics scripts are no longer used.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          Questions about cookies: <ContactEmail />. See also our{' '}
          <LegalLink href="/privacy">privacy policy</LegalLink>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
