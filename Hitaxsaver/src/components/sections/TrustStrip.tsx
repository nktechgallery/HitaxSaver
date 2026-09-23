import { Container } from '../layout/Container';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import {
  CalendarDays,
  FileCheck,
  Lock,
  Handshake,
  ArrowRight,
} from 'lucide-react';

const trustItems = [
  { icon: CalendarDays, label: 'Timely Filing' },
  { icon: FileCheck, label: 'Accurate Records' },
  { icon: Lock, label: 'Confidential Handling' },
  { icon: Handshake, label: 'Business-Friendly Guidance' },
  { icon: ArrowRight, label: 'End-to-End Compliance Support' },
];

export function TrustStrip() {
  return (
    <div className="border-y border-border bg-bg-warm/60 py-6">
      <Container>
        <AnimatedReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between">
            {trustItems.map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 text-text-muted"
              >
                {i > 0 && (
                  <span className="hidden md:block w-1 h-1 rounded-full bg-purple-300 -ml-5 mr-2.5" />
                )}
                <item.icon className="w-4 h-4 text-purple-500 flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </Container>
    </div>
  );
}
