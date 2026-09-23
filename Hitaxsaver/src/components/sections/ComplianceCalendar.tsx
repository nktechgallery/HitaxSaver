import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Eyebrow } from '../ui/Eyebrow';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import { cn } from '../../utils/cn';

const complianceItems = [
  {
    label: 'GST Returns',
    frequency: 'Monthly / Quarterly',
    color: 'bg-purple-300',
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    label: 'TDS Returns',
    frequency: 'Quarterly',
    color: 'bg-purple-200',
    months: [4, 7, 10, 1],
  },
  {
    label: 'Income Tax Filing',
    frequency: 'Annual',
    color: 'bg-white',
    months: [7],
  },
  {
    label: 'Advance Tax',
    frequency: 'Quarterly',
    color: 'bg-[#B6B2BE]',
    months: [6, 9, 12, 3],
  },
  {
    label: 'Audit Preparation',
    frequency: 'Annual',
    color: 'bg-[#DDD9E3]',
    months: [9, 10],
  },
];

const monthLabels = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
const monthNumbers = [4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3];

export function ComplianceCalendar() {
  return (
    <SectionWrapper background="warm">
      <Container>
        <AnimatedReveal>
          <div className="max-w-2xl mb-12">
            <Eyebrow className="mb-4">Compliance Calendar</Eyebrow>
            <h2 className="text-3xl md:text-[2.5rem] md:leading-[1.15] font-bold text-text-primary">
              Never let important compliance dates catch you off guard.
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Compliance obligations are spread throughout the financial year. HiTaxSaver helps you
              track, prepare and file on time — every time.
            </p>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <div className="overflow-hidden rounded-lg border border-[#3D3B44] bg-[#25242A] shadow-[0_16px_40px_rgba(26,22,37,0.16)]">
            {/* Month header */}
            <div className="grid grid-cols-12 border-b border-white/10 bg-[#2D2C32]">
              {monthLabels.map((month) => (
                <div
                  key={month}
                  className="border-r border-white/10 py-3 text-center text-xs font-semibold uppercase tracking-wider !text-white/65 last:border-r-0"
                >
                  <span className="hidden sm:inline">{month}</span>
                  <span className="sm:hidden">{month.charAt(0)}</span>
                </div>
              ))}
            </div>

            {/* Compliance rows */}
            {complianceItems.map((item) => (
              <div key={item.label} className="group border-b border-white/10 last:border-b-0">
                <div className="grid grid-cols-12">
                  {monthNumbers.map((month, i) => {
                    const isActive = item.months.includes(month);
                    return (
                      <div
                        key={`${item.label}-${i}`}
                        className={cn(
                          'flex h-10 items-center justify-center border-r border-white/10 last:border-r-0 md:h-12',
                          'transition-colors duration-150 group-hover:bg-white/[0.025]'
                        )}
                      >
                        {isActive && (
                          <div
                            className={cn(
                              'w-3 h-3 md:w-3.5 md:h-3.5 rounded-full',
                              item.color,
                              'opacity-80 group-hover:opacity-100 transition-opacity duration-200'
                            )}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* Row label */}
                <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.035] px-4 py-2.5">
                  <span className="text-xs font-medium !text-white">{item.label}</span>
                  <span className="text-[11px] !text-white/55">{item.frequency}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.3}>
          <p className="mt-6 text-xs text-text-muted text-center">
            Filing frequencies may vary based on business type and applicable regulations. HiTaxSaver helps track deadlines relevant to your specific compliance requirements.
          </p>
        </AnimatedReveal>
      </Container>
    </SectionWrapper>
  );
}
