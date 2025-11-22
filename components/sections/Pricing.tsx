'use client';

import React from 'react';
import SlideUp from '../animations/SlideUp';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Check } from 'lucide-react';
import { trackEvent } from '@/lib/utils';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Gratuito',
      price: 0,
      description: 'Para probar BriefIA',
      features: ['1 brief completo/mes', 'Análisis competitivo básico', 'Export PDF'],
      cta: 'Probar',
      variant: 'secondary' as const,
    },
    {
      name: 'Profesional',
      price: 299,
      description: 'Para equipos en crecimiento',
      features: [
        '5 briefs completos/mes',
        'Análisis competitivo completo',
        'Export PDF + Web link',
        'Biblioteca de templates',
        'Soporte por email',
      ],
      cta: 'Empezar',
      variant: 'primary' as const,
      highlighted: true,
      badge: 'Más popular',
    },
    {
      name: 'Empresarial',
      price: 799,
      description: 'Para empresas establecidas',
      features: [
        'Briefs ilimitados',
        'Todo lo anterior +',
        'Acceso Designer Marketplace',
        'Multi-usuario (5 seats)',
        'Soporte prioritario',
      ],
      cta: 'Contactar',
      variant: 'secondary' as const,
    },
  ];

  const handleCTAClick = (planName: string, price: number) => {
    trackEvent('pricing_cta_click', { plan: planName, price });
    // For now, just scroll to CTA section
    const ctaSection = document.getElementById('final-cta');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 md:py-24 px-6 bg-white">
      <div className="container-custom">
        <SlideUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-slate-900)] mb-4">
            Empieza gratis, crece con uso
          </h2>
        </SlideUp>

        <SlideUp delay={0.1}>
          <p className="text-lg text-center text-[var(--color-slate-600)] mb-16 max-w-2xl mx-auto">
            Sin tarjeta requerida. Actualiza cuando estés listo.
          </p>
        </SlideUp>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <SlideUp key={index} delay={0.2 + index * 0.1}>
              <Card hover highlighted={plan.highlighted} className="h-full flex flex-col relative">
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[var(--color-indigo-600)] to-[var(--color-purple-600)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[var(--color-slate-900)] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[var(--color-slate-600)] mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-bold text-[var(--color-slate-900)]">
                        S/. {plan.price}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-[var(--color-slate-600)]">/mes</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[var(--color-green-500)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--color-slate-700)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={plan.variant}
                  size="lg"
                  className="w-full"
                  onClick={() => handleCTAClick(plan.name, plan.price)}
                >
                  {plan.cta}
                </Button>
              </Card>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
