import { HeroSection } from '../components/sections/HeroSection';
import { TrustStrip } from '../components/sections/TrustStrip';
import { ValueProposition } from '../components/sections/ValueProposition';
import { ServicesSection } from '../components/sections/ServicesSection';
import { WhoWeHelp } from '../components/sections/WhoWeHelp';
import { WhyHiTaxSaver } from '../components/sections/WhyHiTaxSaver';
import { ComplianceCalendar } from '../components/sections/ComplianceCalendar';
import { ProcessSection } from '../components/sections/ProcessSection';
import { FinancialClarity } from '../components/sections/FinancialClarity';
import { PurpleBrandSection } from '../components/sections/PurpleBrandSection';
import { FAQSection } from '../components/sections/FAQSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Seo } from '../components/Seo';

export function Home() {
  return (
    <main>
      <Seo path="/" />
      <HeroSection />
      <TrustStrip />
      <ValueProposition />
      <ServicesSection />
      <WhoWeHelp />
      <WhyHiTaxSaver />
      <ComplianceCalendar />
      <ProcessSection />
      <FinancialClarity />
      <PurpleBrandSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
