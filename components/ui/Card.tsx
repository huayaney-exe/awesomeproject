import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  highlighted?: boolean;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, highlighted = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'bg-white rounded-xl p-6 md:p-8 border border-[var(--color-slate-200)]',
          'shadow-[var(--shadow-sm)] transition-all duration-200',
          // Hover effect
          hover && 'hover:shadow-[var(--shadow-md)] hover:border-[var(--color-indigo-600)] hover:-translate-y-1',
          // Highlighted variant
          highlighted && 'border-2 border-[var(--color-indigo-600)] shadow-[var(--shadow-md)] ring-2 ring-[var(--color-indigo-600)]/10',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
