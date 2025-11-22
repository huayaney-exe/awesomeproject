'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 50,
  className,
  onComplete,
  showCursor = true,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={cn('inline-block', className)}>
      {displayedText}
      {showCursor && currentIndex < text.length && (
        <span className="inline-block w-0.5 h-5 bg-current ml-1 animate-pulse" />
      )}
    </span>
  );
};

export default TypingAnimation;
