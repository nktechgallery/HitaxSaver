import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Eyebrow } from '../ui/Eyebrow';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import {
  User,
  Briefcase,
  Laptop,
  Rocket,
  Store,
  Factory,
  Users,
  Building2,
} from 'lucide-react';

const customerTypes = [
  {
    icon: User,
    label: 'Individuals',
    description: 'File your income tax and manage personal financial compliance with ease.',
  },
  {
    icon: Briefcase,
    label: 'Salaried Professionals',
    description: 'Handle ITR filing, HRA claims and investment declarations without the stress.',
  },
  {
    icon: Laptop,
    label: 'Freelancers',
    description: 'Keep your income, expenses and GST responsibilities organized throughout the year.',
  },
  {
    icon: Rocket,
    label: 'Startups',
    description: 'Build your financial and compliance foundation properly from the beginning.',
  },
  {
    icon: Store,
    label: 'Small Businesses',
    description: 'Maintain books, file returns and stay compliant as your business operates.',
  },
  {
    icon: Factory,
    label: 'MSMEs',
    description: 'Manage the growing complexity of accounting, GST and statutory filings.',
  },
  {
    icon: Users,
    label: 'Partnership Firms',
    description: 'Handle partner accounts, allocations and firm-level compliance requirements.',
  },
  {
    icon: Building2,
    label: 'Companies',
    description: 'Comprehensive accounting, tax filing and regulatory compliance for corporate entities.',
  },
];

export function WhoWeHelp() {
  return (
    <SectionWrapper background="warm">
      <Container>
        <AnimatedReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow className="mb-4 justify-center">Who We Help</Eyebrow>
            <h2 className="text-3xl md:text-[2.5rem] md:leading-[1.15] font-bold text-text-primary">
              Compliance support for every stage and scale.
            </h2>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {customerTypes.map((type, i) => (
            <AnimatedReveal key={type.label} delay={i * 0.05}>
              <div className="bg-white p-6 h-full group hover:bg-purple-50/40 transition-colors duration-200">
                <type.icon className="w-5 h-5 text-purple-600 mb-3 group-hover:text-purple-700 transition-colors duration-200" />
                <h4 className="font-semibold text-text-primary text-[0.9375rem] mb-1.5">
                  {type.label}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {type.description}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
