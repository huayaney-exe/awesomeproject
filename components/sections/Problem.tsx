'use client';

import React from 'react';
import SlideUp from '../animations/SlideUp';
import { X, ArrowDown } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    'El diseñador "no entendió"',
    '8 versiones, aún no es eso',
    'S/. 15K gastados, dudas',
  ];

  return (
    <section id="problem" className="py-16 md:py-20 lg:py-24 px-4 md:px-6 bg-white">
      <div className="container-custom">
        <div className="content-max">
          <SlideUp>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[var(--color-slate-900)] mb-8 md:mb-12 px-4">
              ¿Te suena familiar?
            </h2>
          </SlideUp>

          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            {problems.map((problem, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-[var(--color-slate-50)] transition-colors duration-200">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[var(--color-red-500)]/10 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-red-500)]" />
                  </div>
                  <p className="text-base md:text-lg lg:text-xl text-[var(--color-slate-700)] font-medium leading-relaxed">
                    {problem}
                  </p>
                </div>
              </SlideUp>
            ))}
          </div>

          <SlideUp delay={0.4}>
            <div className="flex justify-center mb-8">
              <ArrowDown className="w-8 h-8 text-[var(--color-slate-400)] animate-pulse" />
            </div>
          </SlideUp>

          <SlideUp delay={0.5}>
            <div className="bg-[var(--color-slate-50)] rounded-xl p-6 md:p-8 border-l-4 border-[var(--color-indigo-600)]">
              <p className="text-sm md:text-base lg:text-lg text-[var(--color-slate-700)] leading-relaxed">
                <span className="font-bold text-[var(--color-slate-900)] block mb-2">
                  El problema real:
                </span>
                El gap entre lo que sabes (objetivos de negocio, audiencia, propuesta de valor) y lo que no sabes articular (cómo debe verse tu marca para lograr esos objetivos).
              </p>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};

export default Problem;
