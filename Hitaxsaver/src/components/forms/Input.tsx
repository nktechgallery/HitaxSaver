import type { InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, id, required, className, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-text-primary"
      >
        {label}
        {required && <span className="text-purple-600 ml-0.5">*</span>}
      </label>
      <input
        id={inputId}
        required={required}
        className={cn(
          'w-full px-4 py-2.5 rounded-md border text-text-primary text-[0.9375rem]',
          'bg-white placeholder:text-text-muted',
          'transition-all duration-150 ease-out',
          'focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500',
          error
            ? 'border-error'
            : 'border-border hover:border-purple-300'
        )}
        {...props}
      />
      {error && (
        <span className="text-xs text-error font-medium">{error}</span>
      )}
    </div>
  );
}
