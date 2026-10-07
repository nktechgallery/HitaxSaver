import type { TextareaHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({
  label,
  error,
  id,
  required,
  className,
  ...props
}: TextareaProps) {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={textareaId}
        className="text-sm font-medium text-text-primary"
      >
        {label}
        {required && <span className="text-purple-600 ml-0.5">*</span>}
      </label>
      <textarea
        id={textareaId}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        rows={4}
        className={cn(
          'w-full px-4 py-2.5 rounded-md border text-text-primary text-[0.9375rem]',
          'bg-white placeholder:text-text-muted resize-y min-h-[100px]',
          'transition-all duration-150 ease-out',
          'focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500',
          error
            ? 'border-error'
            : 'border-border hover:border-purple-300'
        )}
        {...props}
      />
      {error && (
        <span id={`${textareaId}-error`} className="text-xs text-error font-medium">
          {error}
        </span>
      )}
    </div>
  );
}
