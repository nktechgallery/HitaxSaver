import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'warm' | 'surface' | 'purple';
}

const bgMap = {
  white: 'bg-bg-primary',
  warm: 'bg-bg-warm',
  surface: 'bg-surface',
  purple: 'bg-purple-800 text-white',
};

export function SectionWrapper({
  children,
  id,
  className,
  background = 'white',
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 md:py-24',
        bgMap[background],
        className
      )}
    >
      {children}
    </section>
  );
}
