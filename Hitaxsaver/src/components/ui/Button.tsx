import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverted';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  loading?: boolean;
  children: ReactNode;
  href?: string;
}

const variantStyles = {
  primary:
    'bg-purple-700 !text-white hover:bg-purple-600 shadow-sm hover:shadow-md active:bg-purple-800',
  secondary:
    'bg-transparent !text-purple-700 border border-purple-200 hover:bg-purple-50 hover:border-purple-300 active:bg-purple-100',
  ghost:
    'bg-transparent !text-purple-700 hover:bg-purple-50 active:bg-purple-100',
  inverted:
    'bg-white !text-purple-800 hover:bg-purple-50 shadow-sm hover:shadow-md active:bg-purple-100',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-2.5 text-[0.9375rem] gap-2',
  lg: 'px-8 py-3.5 text-base gap-2',
};

export function Button({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  loading = false,
  children,
  className,
  disabled,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-md',
    'relative z-10 whitespace-nowrap min-h-10',
    'transition-all duration-150 ease-out',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none',
    'hover:-translate-y-[1px] active:translate-y-0',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
        )}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : null}
      {children}
      {showArrow && !loading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
      )}
    </button>
  );
}
