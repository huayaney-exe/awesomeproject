'use client';

import React from 'react';
import GradientBackground from '../ui/GradientBackground';
import FadeIn from '../animations/FadeIn';
import InteractiveDemo from '../ui/InteractiveDemo';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('problem');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <GradientBackground parallax className="min-h-screen flex items-center justify-center py-16 md:py-20 px-4 md:px-6">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight px-4">
              Traduce tus intenciones de negocio en diseño{' '}
              <span className="inline-block">world-class</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-3 md:mb-4 max-w-2xl mx-auto px-4">
              Para empresas B2B en Perú
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-sm md:text-base lg:text-lg text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
              Deja de adivinar qué pedirle al diseñador. BriefIA traduce lo que sabes (tu negocio)
              en lo que necesitas (lineamientos de diseño accionables).
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mb-8">
              <InteractiveDemo />
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <p className="text-sm text-white/60">
              Prueba generando un brief en 15 segundos →
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="animate-bounce text-white/60 hover:text-white transition-colors duration-200"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </GradientBackground>
  );
};

export default Hero;
