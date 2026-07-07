import { HeroSection } from '@/components/sections/hero-section';
import { OemSection } from '@/components/sections/oem-section';
import { ServiceSection } from '@/components/sections/service-section';
import { MetricsSection } from '@/components/sections/metrics-section';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaSection } from '@/components/sections/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { WhyEvSection } from '@/components/sections/why-ev-section';
import { RangeSection } from '@/components/sections/range-section';

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <RangeSection />
      <WhyEvSection />
      {/* <ServiceSection /> */}
      {/* <MetricsSection /> */}
      <FaqSection />
      <OemSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
