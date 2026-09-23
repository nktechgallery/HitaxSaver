import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Eyebrow } from '../ui/Eyebrow';
import { Accordion } from '../ui/Accordion';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import { FAQ_ITEMS } from '../../constants/faq';

export function FAQSection() {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Heading */}
          <div className="lg:col-span-4">
            <AnimatedReveal>
              <Eyebrow className="mb-4">FAQ</Eyebrow>
              <h2 className="text-3xl md:text-[2.5rem] md:leading-[1.15] font-bold text-text-primary">
                Common questions, clear answers.
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Find answers to frequently asked questions about our services, processes and how to
                get started.
              </p>
            </AnimatedReveal>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8">
            <AnimatedReveal delay={0.1}>
              <Accordion items={FAQ_ITEMS} />
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
