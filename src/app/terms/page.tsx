import { ContactEmail, LegalLink, LegalPage, LegalSection, OPERATOR } from '@/components/legal/LegalPage';

export const metadata = {
  title: 'Terms of Use',
  description: 'Terms for using the Apex Influence website.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <LegalSection heading="About these terms">
        <p>
          These terms cover your use of the Apex Influence website. The site is operated by {OPERATOR}. By using
          the site you agree to these terms. Questions: <ContactEmail />.
        </p>
      </LegalSection>
      <LegalSection heading="Information on the site">
        <p>
          The site describes influencer marketing services and publishes articles for general information. It is
          not professional, legal or financial advice. Examples and results described on the site do not promise
          any particular outcome for your brand.
        </p>
      </LegalSection>
      <LegalSection heading="Enquiries">
        <p>
          Sending the contact form does not create a contract. Any paid work is agreed separately in writing.
        </p>
      </LegalSection>
      <LegalSection heading="Acceptable use">
        <p>
          Do not misuse the site, for example by trying to disrupt it, gain unauthorised access, or send unlawful
          or abusive content through its forms.
        </p>
      </LegalSection>
      <LegalSection heading="Advertising and other sites">
        <p>
          Some pages may show third-party advertising served by Google AdSense, and the site may link to other
          websites. We do not control third-party ads or sites and are not responsible for their content.
        </p>
      </LegalSection>
      <LegalSection heading="Content and liability">
        <p>
          The site&apos;s text and design belong to the operator unless stated otherwise. The site is provided as
          is. To the extent the law allows, we are not liable for losses arising from use of the site. Nothing in
          these terms limits rights that cannot be limited by law.
        </p>
      </LegalSection>
      <LegalSection heading="Privacy and changes">
        <p>
          See the <LegalLink href="/privacy">privacy policy</LegalLink> and{' '}
          <LegalLink href="/cookies">cookie policy</LegalLink>. We may update these terms by posting a new version
          on this page.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
