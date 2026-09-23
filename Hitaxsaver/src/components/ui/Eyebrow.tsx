import { cn } from '../../utils/cn';

interface EyebrowProps {
  children: string;
  className?: string;
  accent?: boolean;
}

export function Eyebrow({ children, className, accent = true }: EyebrowProps) {
  return (
    <span className={cn('eyebrow inline-flex items-center gap-2', className)}>
      {accent && (
        <span className="inline-block w-5 h-[2px] bg-purple-500 rounded-full" />
      )}
      {children}
    </span>
  );
}
