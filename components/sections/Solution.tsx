'use client';

import React, { useState } from 'react';
import SlideUp from '../animations/SlideUp';
import Card from '../ui/Card';
import { MessageSquare, FileText, CheckCircle, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Solution: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const steps = [
    {
      icon: MessageSquare,
      title: 'Conversas sobre negocio',
      description: 'Habla de tus objetivos comerciales, audiencia y propuesta de valor.',
    },
    {
      icon: FileText,
      title: 'IA traduce a lineamientos',
      description: 'Nuestra IA convierte tu contexto en especificaciones de diseño accionables.',
    },
    {
      icon: CheckCircle,
      title: 'Diseñador ejecuta',
      description: 'Cualquier diseñador puede ejecutar con excelencia usando tu brief.',
    },
  ];

  return (
    <section className="py-20 md:py-24 px-6 bg-[var(--color-slate-50)]">
      <div className="container-custom">
        <SlideUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-slate-900)] mb-4">
            Cómo funciona
          </h2>
        </SlideUp>

        <SlideUp delay={0.1}>
          <p className="text-lg text-center text-[var(--color-slate-600)] mb-16 max-w-2xl mx-auto">
            De intención de negocio a brief accionable en 3 pasos
          </p>
        </SlideUp>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <SlideUp key={index} delay={0.2 + index * 0.1}>
              <Card hover className="h-full text-center">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-indigo-600)] to-[var(--color-purple-600)] flex items-center justify-center mb-6">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="mb-4 text-2xl font-bold text-[var(--color-slate-900)]">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-slate-900)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-slate-600)]">{step.description}</p>
                </div>
              </Card>
            </SlideUp>
          ))}
        </div>

        <SlideUp delay={0.5}>
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-video bg-gradient-to-br from-[var(--color-indigo-600)] to-[var(--color-purple-600)] rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] group cursor-pointer"
                 onClick={() => setShowVideoModal(true)}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Demo Completo</h4>
                <p className="text-white/80">60 segundos • Mira cómo funciona BriefIA</p>
              </div>
            </div>
          </div>
        </SlideUp>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full aspect-video bg-[var(--color-slate-900)] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-xl font-semibold mb-2">Video Próximamente</p>
                  <p className="text-white/60">El video demo estará disponible pronto</p>
                </div>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                aria-label="Close video"
              >
                <span className="text-2xl text-white">×</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Solution;
