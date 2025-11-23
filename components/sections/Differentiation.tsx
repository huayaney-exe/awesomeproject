'use client';

import React from 'react';
import SlideUp from '../animations/SlideUp';
import Card from '../ui/Card';
import { ArrowRight, AlertTriangle } from 'lucide-react';

const Differentiation: React.FC = () => {
  const comparisons = [
    {
      title: 'Agencia tradicional',
      problem: 'S/. 30K por proyecto, 3 meses de espera',
      solution: 'S/. 299/mes, briefs en minutos',
    },
    {
      title: 'Freelancer sin dirección',
      problem: 'Diseñador adivina tu intención',
      solution: 'Lineamientos precisos y accionables',
    },
    {
      title: 'Templates genéricos',
      problem: 'No estratégicos para tu industria B2B',
      solution: 'Contexto específico de tu sector',
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container-custom">
        <SlideUp>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[var(--color-slate-900)] mb-3 md:mb-4 leading-tight">
            ¿Por qué no solo contratar agencia o freelancer?
          </h2>
        </SlideUp>

        <SlideUp delay={0.1}>
          <p className="text-sm md:text-base lg:text-lg text-center text-[var(--color-slate-600)] mb-10 md:mb-14 lg:mb-16 leading-relaxed max-w-2xl mx-auto">
            Porque ellos ejecutan diseño. BriefIA traduce tu negocio en lineamientos que aseguran resultados.
          </p>
        </SlideUp>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {comparisons.map((comparison, index) => (
            <SlideUp key={index} delay={0.2 + index * 0.1}>
              <Card hover className="h-full">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-[var(--color-slate-900)] mb-4 md:mb-6">
                  {comparison.title}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[var(--color-amber-500)]/10">
                    <AlertTriangle className="w-5 h-5 text-[var(--color-amber-500)] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--color-slate-700)]">{comparison.problem}</p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-[var(--color-slate-400)]" />
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[var(--color-green-500)]/10">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-green-500)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-[var(--color-slate-900)]">
                      BriefIA: {comparison.solution}
                    </p>
                  </div>
                </div>
              </Card>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
