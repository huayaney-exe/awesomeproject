'use client';

import React, { useState } from 'react';
import GradientBackground from '../ui/GradientBackground';
import Input from '../ui/Input';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';
import { Check, Sparkles } from 'lucide-react';
import { isValidEmail, trackEvent } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const FinalCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Por favor ingresa tu email');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Por favor ingresa un email válido');
      return;
    }

    setIsSubmitting(true);
    trackEvent('final_cta_submit', { email });

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Store in localStorage for demo
      localStorage.setItem('briefia_signup_email', email);
    }, 1000);
  };

  return (
    <section id="final-cta" className="relative">
      <GradientBackground className="py-20 md:py-24 px-6">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <FadeIn>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                      Genera tu primer brief ahora
                    </h2>
                  </FadeIn>

                  <FadeIn delay={0.1}>
                    <p className="text-lg md:text-xl text-white/80 mb-10">
                      Sin complicaciones. Sin tarjeta. Solo resultados.
                    </p>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <form onSubmit={handleSubmit} className="mb-8">
                      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <div className="flex-grow">
                          <Input
                            type="email"
                            placeholder="tu@empresa.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={error}
                            className="h-14 text-base"
                          />
                        </div>
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          isLoading={isSubmitting}
                          className="sm:w-auto whitespace-nowrap"
                        >
                          Empezar gratis
                        </Button>
                      </div>
                    </form>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        <span>Sin tarjeta</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        <span>1 brief completo gratis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        <span>10 minutos para completar</span>
                      </div>
                    </div>
                  </FadeIn>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    ¡Gracias por tu interés!
                  </h3>
                  <p className="text-lg text-white/80 mb-6">
                    Te contactaremos pronto para darte acceso a BriefIA
                  </p>
                  <p className="text-sm text-white/60">
                    Email registrado: {email}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </GradientBackground>
    </section>
  );
};

export default FinalCTA;
