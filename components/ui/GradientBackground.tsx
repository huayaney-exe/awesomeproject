'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface GradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  parallax?: boolean;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  className,
  children,
  parallax = false,
  ...props
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!parallax) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallax]);

  const parallaxStyle = parallax
    ? {
        transform: `translateY(${scrollY * 0.1}px)`,
      }
    : {};

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 gradient-primary transition-transform duration-300"
        style={parallaxStyle}
      />

      {/* Noise Texture Overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;
