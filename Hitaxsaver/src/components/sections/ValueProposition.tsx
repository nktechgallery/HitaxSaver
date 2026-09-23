import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Eyebrow } from '../ui/Eyebrow';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import { CircleCheck } from 'lucide-react';

const benefits = [
  {
    title: 'Organized Financial Records',
    description: 'Keep books, ledgers and accounts structured and up to date.',
  },
  {
    title: 'Timely Tax Filing',
    description: 'Stay ahead of deadlines for GST, income tax and TDS returns.',
  },
  {
    title: 'Reduced Compliance Risk',
    description: 'Minimize errors and gaps that can lead to penalties or notices.',
  },
  {
    title: 'Professional Guidance',
    description: 'Work with a team that understands the nuances of Indian taxation.',
  },
];

export function ValueProposition() {
  return (
    <SectionWrapper background="warm">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Large statement */}
          <AnimatedReveal>
            <div>
              <Eyebrow className="mb-4">Why It Matters</Eyebrow>
              <h2 className="text-3xl md:text-[2.5rem] md:leading-[1.15] font-bold text-text-primary">
                Tax compliance shouldn't slow your business down.
              </h2>
              <p className="mt-5 text-text-secondary text-lg leading-relaxed max-w-md">
                Managing books, tax filings, GST returns, TDS obligations and audit requirements can
                quickly become complicated. HiTaxSaver brings these responsibilities together through
                structured professional support — so clients stay organized, compliant and informed.
              </p>
            </div>
          </AnimatedReveal>

          {/* Right: Benefit list */}
          <div className="space-y-6 lg:pt-4">
            {benefits.map((benefit, i) => (
              <AnimatedReveal key={benefit.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                      <CircleCheck className="w-3.5 h-3.5 text-purple-700" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">{benefit.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
