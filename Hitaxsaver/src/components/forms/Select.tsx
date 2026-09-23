import type { SelectHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function Select({
  label,
  error,
  options,
  placeholder = 'Select an option',
  id,
  required,
  className,
  ...props
}: SelectProps) {
  const selectId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={selectId}
        className="text-sm font-medium text-text-primary"
      >
        {label}
        {required && <span className="text-purple-600 ml-0.5">*</span>}
      </label>
      <select
        id={selectId}
        required={required}
        className={cn(
          'w-full px-4 py-2.5 rounded-md border text-text-primary text-[0.9375rem]',
          'bg-white appearance-none',
          'transition-all duration-150 ease-out',
          'focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500',
          'bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238A8497%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")]',
          'bg-[length:16px] bg-[position:right_12px_center] bg-no-repeat pr-10',
          error
            ? 'border-error'
            : 'border-border hover:border-purple-300'
        )}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-xs text-error font-medium">{error}</span>
      )}
    </div>
  );
}
