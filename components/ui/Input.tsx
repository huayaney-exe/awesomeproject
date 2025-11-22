import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--color-slate-700)] mb-2">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            // Base styles
            'flex h-12 w-full rounded-lg border border-[var(--color-slate-300)]',
            'bg-white px-4 py-3 text-base',
            'placeholder:text-[var(--color-slate-400)]',
            'transition-all duration-200',
            // Focus styles
            'focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-600)] focus:border-[var(--color-indigo-600)]',
            // Disabled styles
            'disabled:cursor-not-allowed disabled:opacity-50',
            // Error styles
            error && 'border-[var(--color-red-500)] focus:ring-[var(--color-red-500)]',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-[var(--color-red-500)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
