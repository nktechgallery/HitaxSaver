import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-[1200px] px-6 md:px-8', className)}>
      {children}
    </Tag>
  );
}
