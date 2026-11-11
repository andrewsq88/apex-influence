import { ContactEmail, LegalLink, LegalPage, LegalSection, OPERATOR } from '@/components/legal/LegalPage';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How the Apex Influence website handles contact details, advertising cookies, and analytics.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <LegalSection heading="Who we are">
        <p>
          This website, apex-influence.vercel.app (&quot;Apex Influence&quot;), is operated by {OPERATOR}. For
          privacy questions or requests, contact <ContactEmail />.
        </p>
      </LegalSection>
      <LegalSection heading="Information you send us">
        <p>
          If you use the contact form, we receive the name, email address, company, budget and message you
          enter. We use them to reply to your enquiry. The form is processed on our hosting provider&apos;s
          servers, and submissions are kept in its server logs.
        </p>
        <p>
          The newsletter field in the footer does not currently send or store your email address.
        </p>
      </LegalSection>
      <LegalSection heading="Advertising">
        <p>
          Some pages may show third-party advertising served by Google AdSense. The AdSense script loads only
          after you accept cookies in our cookie notice. Once loaded, Google and its partners may use cookies or
          similar identifiers to show, limit and measure ads, which can include personalised ads. Google explains
          this in{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            className="text-[#a78bfa] underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            How Google uses information from sites that use its services
          </a>
          . You can manage personalised ads in your Google account settings.
        </p>
      </LegalSection>
      <LegalSection heading="Analytics">
        <p>
          We use Vercel Web Analytics to count page views and see which pages are read. It does not use cookies
          and does not identify individual visitors. We see aggregated figures only.
        </p>
      </LegalSection>
      <LegalSection heading="Hosting">
        <p>
          The site is hosted by Vercel. Like any web host, it processes technical data such as your IP address and
          browser details to deliver pages and protect the service.
        </p>
      </LegalSection>
      <LegalSection heading="Your choices and rights">
        <p>
          You can change your cookie choice at any time with Cookie settings in the footer. Depending on where you
          live, you may have the right to ask for access to, correction of, or deletion of information we hold
          about you. Email <ContactEmail /> and we will respond.
        </p>
        <p>
          More detail is in our <LegalLink href="/cookies">cookie policy</LegalLink>. Use of the site is also
          covered by our <LegalLink href="/terms">terms</LegalLink>.
        </p>
      </LegalSection>
      <LegalSection heading="Changes">
        <p>If this policy changes, we will post the new version on this page with a new date.</p>
      </LegalSection>
    </LegalPage>
  );
}
