import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Eyebrow } from '../ui/Eyebrow';
import { AnimatedReveal } from '../ui/AnimatedReveal';

const differentiators = [
  {
    number: '01',
    title: 'Clear Communication',
    description:
      'Tax requirements should not feel impossible to understand. HiTaxSaver explains what\'s needed, what\'s due and what it means for your situation — without unnecessary jargon.',
  },
  {
    number: '02',
    title: 'Organized Compliance',
    description:
      'Keep important filings, deadlines and financial records structured. A well-organized approach helps reduce last-minute rushes and avoids the stress of missing deadlines.',
  },
  {
    number: '03',
    title: 'Professional Approach',
    description:
      'Every engagement is handled with attention to accuracy and confidentiality. Your financial information is treated with the seriousness and discretion it deserves.',
  },
  {
    number: '04',
    title: 'Business-Focused Guidance',
    description:
      'Compliance support that takes the client\'s business context into account. Recommendations and processes are tailored to your business type and scale.',
  },
  {
    number: '05',
    title: 'Long-Term Support',
    description:
      'Help clients stay organized throughout the financial year, not just during filing season. Ongoing support means fewer surprises and better financial awareness.',
  },
];

export function WhyHiTaxSaver() {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Heading */}
          <div className="lg:col-span-4">
            <AnimatedReveal>
              <Eyebrow className="mb-4">Why HiTaxSaver</Eyebrow>
              <h2 className="text-3xl md:text-[2.5rem] md:leading-[1.15] font-bold text-text-primary">
                What makes the experience different.
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Not just another accounting service. HiTaxSaver is built around making compliance
                feel manageable and professional.
              </p>
            </AnimatedReveal>
          </div>

          {/* Right: Differentiators */}
          <div className="lg:col-span-8">
            <div className="space-y-0 divide-y divide-border">
              {differentiators.map((item, i) => (
                <AnimatedReveal key={item.number} delay={i * 0.08}>
                  <div className="flex gap-5 md:gap-8 py-6 group">
                    <span className="text-2xl md:text-3xl font-bold text-purple-200 group-hover:text-purple-300 transition-colors duration-200 tabular-nums flex-shrink-0 pt-0.5">
                      {item.number}
                    </span>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-text-primary mb-1.5 group-hover:text-purple-800 transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
