'use client';

import React from 'react';
import SlideUp from '../animations/SlideUp';
import { Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  const clientLogos = [
    { name: 'TechCorp', abbr: 'TC' },
    { name: 'IndustrialPro', abbr: 'IP' },
    { name: 'ConsultingPlus', abbr: 'CP' },
    { name: 'DataSystems', abbr: 'DS' },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-6 bg-gradient-to-b from-[var(--color-slate-50)] to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <SlideUp>
            <div className="bg-white rounded-2xl p-6 md:p-10 lg:p-12 shadow-[var(--shadow-lg)] border border-[var(--color-slate-200)]">
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-indigo-600)] to-[var(--color-purple-600)] flex items-center justify-center">
                  <Quote className="w-7 h-7 text-white" />
                </div>
              </div>

              <blockquote className="text-lg md:text-xl lg:text-2xl text-[var(--color-slate-800)] text-center font-medium italic mb-6 leading-relaxed">
                "El brief fue 10x más claro que lo que yo habría escrito. El diseñador entendió exactamente lo que necesitaba para presentar a clientes mineros."
              </blockquote>

              <div className="text-center">
                <p className="text-[var(--color-slate-600)] font-semibold">
                  — Carlos M.
                </p>
                <p className="text-sm text-[var(--color-slate-500)]">
                  Gerente General, Software MinTech
                </p>
              </div>
            </div>
          </SlideUp>

          <SlideUp delay={0.2}>
            <div className="mt-16">
              <p className="text-center text-sm text-[var(--color-slate-600)] mb-8">
                Empresas B2B que confían en BriefIA
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                {clientLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center justify-center"
                  >
                    <div className="group cursor-pointer">
                      <div className="w-24 h-24 rounded-xl bg-[var(--color-slate-100)] flex flex-col items-center justify-center border border-[var(--color-slate-200)] group-hover:border-[var(--color-indigo-600)] transition-all duration-200 group-hover:scale-105">
                        <div className="text-2xl font-bold text-[var(--color-slate-400)] group-hover:text-[var(--color-indigo-600)] transition-colors duration-200">
                          {logo.abbr}
                        </div>
                        <div className="text-[10px] text-[var(--color-slate-400)] mt-1">
                          {logo.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
