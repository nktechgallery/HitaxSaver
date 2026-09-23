import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import { CTA_BRAND } from '../../constants/navigation';
import { BRAND_ICON } from '../../constants/images';

export function PurpleBrandSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#211F26] py-20 md:py-24">
      <Container>
        <div className="grid items-center gap-10 border-l-4 border-purple-500 pl-6 md:grid-cols-[1fr_auto] md:gap-16 md:pl-10">
          <div className="flex items-start gap-5">
            <img
              src={BRAND_ICON}
              alt=""
              className="hidden h-16 w-16 flex-none object-contain sm:block"
              width="64"
              height="64"
              loading="lazy"
            />
            <div>
              <AnimatedReveal>
                <p className="mb-3 text-xs font-semibold uppercase text-purple-300">
                  Clear support. Practical next steps.
                </p>
                <h2 className="max-w-2xl text-3xl font-bold !text-white md:text-[2.5rem] md:leading-[1.12]">
                  Compliance doesn't have to be complicated.
                </h2>
              </AnimatedReveal>

              <AnimatedReveal delay={0.1}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed !text-white/70 md:text-lg">
                  HiTaxSaver helps simplify accounting and tax responsibilities so clients can spend
                  less time worrying about filings and more time focusing on their work and business.
                </p>
              </AnimatedReveal>
            </div>
          </div>

          <AnimatedReveal delay={0.2} direction="left">
            <Button href="/contact" variant="inverted" size="lg" showArrow className="w-full md:w-auto">
              {CTA_BRAND}
            </Button>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
