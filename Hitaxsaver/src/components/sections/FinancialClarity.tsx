import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import { BadgeIndianRupee, ReceiptText, Landmark, Scale } from 'lucide-react';

const financialAreas = [
  { label: 'Revenue', icon: BadgeIndianRupee },
  { label: 'Expenses', icon: ReceiptText },
  { label: 'Assets', icon: Landmark },
  { label: 'Liabilities', icon: Scale },
];

export function FinancialClarity() {
  return (
    <SectionWrapper background="warm">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedReveal>
            <div className="relative">
              <div className="mx-auto mb-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {financialAreas.map((area) => (
                  <div
                    key={area.label}
                    className="flex min-h-20 items-center justify-center gap-2 rounded-md border border-border bg-white px-3 py-4 text-sm font-semibold text-text-primary shadow-[0_3px_12px_rgba(26,22,37,0.04)]"
                  >
                    <area.icon className="h-4 w-4 flex-none text-purple-600" aria-hidden="true" />
                    <span>{area.label}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl md:text-[3rem] md:leading-[1.1] font-bold text-text-primary">
                Better records.{' '}
                <span className="text-purple-700">Fewer surprises.</span>
                <br />
                More clarity.
              </h2>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.15}>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Well-maintained accounting and timely compliance help businesses understand their
              financial position at any point in time. When your books are accurate and your filings are current,
              there's less administrative confusion and more room for informed decisions.
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.25}>
            {/* Bottom decorative detail */}
            <div className="flex justify-center items-center gap-3 mt-10">
              <div className="h-px w-12 bg-purple-200" />
              <div className="w-2 h-2 rounded-full bg-purple-300" />
              <div className="h-px w-12 bg-purple-200" />
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </SectionWrapper>
  );
}
