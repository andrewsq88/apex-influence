import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { SocialProof } from '@/components/sections/SocialProof';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <SocialProof />
      <CTA />
    </>
  );
}
