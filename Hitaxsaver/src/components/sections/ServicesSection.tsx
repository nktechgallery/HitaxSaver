import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Eyebrow } from '../ui/Eyebrow';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import { cn } from '../../utils/cn';
import { SERVICES } from '../../constants/services';
import { Button } from '../ui/Button';

export function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <SectionWrapper id="services">
      <Container>
        <AnimatedReveal>
          <div className="max-w-2xl mb-14">
            <Eyebrow className="mb-4">Our Services</Eyebrow>
            <h2 className="text-3xl md:text-[2.5rem] md:leading-[1.15] font-bold text-text-primary">
              From bookkeeping to TDS compliance — structured support for every responsibility.
            </h2>
          </div>
        </AnimatedReveal>

        <div className="divide-y divide-border border-t border-border">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedId === service.id;
            const Icon = service.icon;

            return (
              <AnimatedReveal key={service.id} delay={index * 0.08}>
                <div
                  className={cn(
                    'group transition-colors duration-200',
                    isExpanded && 'bg-purple-50/40'
                  )}
                >
                  {/* Service Row */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : service.id)}
                    className={cn(
                      'w-full flex items-start md:items-center gap-4 md:gap-8 py-7 px-2 md:px-4 text-left',
                      'transition-all duration-200',
                      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500',
                      'hover:bg-purple-50/30'
                    )}
                    aria-expanded={isExpanded}
                  >
                    {/* Number */}
                    <span className="number-display text-3xl md:text-[2.75rem] font-bold text-purple-200 group-hover:text-purple-300 transition-colors duration-200 flex-shrink-0 w-12 md:w-16 tabular-nums">
                      {service.number}
                    </span>

                    {/* Icon (desktop) */}
                    <div className="hidden md:flex w-10 h-10 rounded-lg bg-purple-100/80 items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-purple-700" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-text-primary group-hover:text-purple-800 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-sm text-text-secondary mt-1 max-w-xl line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    {/* Expand indicator */}
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200',
                        isExpanded && 'rotate-180 text-purple-600'
                      )}
                    />
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-2 md:px-4 pb-8 md:pl-28">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                            {/* Who needs this */}
                            <div>
                              <p className="text-xs font-semibold text-purple-700 uppercase tracking-wider mb-2">
                                Who needs this
                              </p>
                              <p className="text-sm text-text-secondary leading-relaxed">
                                {service.whoNeeds}
                              </p>
                            </div>

                            {/* Problems solved */}
                            <div>
                              <p className="text-xs font-semibold text-purple-700 uppercase tracking-wider mb-2">
                                Problems solved
                              </p>
                              <p className="text-sm text-text-secondary leading-relaxed">
                                {service.problemsSolved}
                              </p>
                            </div>

                            {/* Deliverables */}
                            <div>
                              <p className="text-xs font-semibold text-purple-700 uppercase tracking-wider mb-2">
                                Key deliverables
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {service.deliverables.map((d) => (
                                  <span
                                    key={d.label}
                                    className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-purple-700 bg-purple-100/70 rounded-md"
                                  >
                                    {d.label}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Button href={`/services/${service.slug}`} variant="secondary" size="sm">
                              View service details
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
