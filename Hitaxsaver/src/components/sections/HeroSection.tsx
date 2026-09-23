import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import { CTA_PRIMARY, CTA_SECONDARY } from '../../constants/navigation';
import { ShieldCheck, CalendarDays, Lock } from 'lucide-react';
import { BRAND_ICON, HERO_IMAGE } from '../../constants/images';

const trustBadges = [
  { icon: ShieldCheck, label: 'Professional Support' },
  { icon: CalendarDays, label: 'Timely Compliance' },
  { icon: Lock, label: 'Confidential Handling' },
];

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
          {/* Left: Content */}
          <div className="relative z-10">
            <AnimatedReveal delay={0.1}>
              <div className="mb-5 flex items-center gap-3">
                <img src={BRAND_ICON} alt="HiTaxSaver shield icon" className="h-14 w-14 object-contain" width="56" height="56" />
                <Eyebrow>Accounting &amp; Tax Compliance</Eyebrow>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <h1 className="mb-6">
                Accounting and tax compliance,{' '}
                <span className="text-purple-700">handled with clarity.</span>
              </h1>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <p className="text-lg text-text-secondary mb-8 max-w-lg leading-relaxed">
                HiTaxSaver helps individuals and businesses manage accounting, GST, income tax, TDS
                and statutory compliance with professional guidance and reliable support.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.4}>
              <div className="flex flex-wrap gap-3 mb-10">
                <Button href="/contact" size="lg" showArrow>
                  {CTA_PRIMARY}
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  {CTA_SECONDARY}
                </Button>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.5}>
              <div className="flex flex-wrap gap-6">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 text-sm text-text-muted">
                    <badge.icon className="w-4 h-4 text-purple-500" />
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>

          <AnimatedReveal delay={0.3} direction="right">
            <figure className="group relative min-h-[290px] sm:min-h-[500px] lg:-mr-20 lg:min-h-[620px]">
              <img
                src={HERO_IMAGE}
                alt="Indian business owner discussing organized accounting and tax records with an advisor"
                className="absolute inset-0 h-full w-full scale-[1.08] object-contain object-center drop-shadow-[0_24px_28px_rgba(26,22,37,0.16)] transition-transform duration-700 group-hover:scale-[1.11] lg:origin-center lg:scale-[1.16] lg:group-hover:scale-[1.19]"
                width="1776"
                height="887"
                fetchPriority="high"
              />
            </figure>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
