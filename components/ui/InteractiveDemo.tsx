'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Input from './Input';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowPreview(false);
  };

  const handleGenerate = () => {
    if (inputValue.trim()) {
      setIsAnalyzing(true);
      trackEvent('demo_interaction', { input_length: inputValue.length });

      // Simulate AI processing
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowPreview(true);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleGenerate();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Input Section */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Ej: Presentación para clientes mineros..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="h-14 text-lg pr-32 bg-white/95 backdrop-blur-sm"
        />
        <button
          onClick={handleGenerate}
          disabled={!inputValue.trim() || isAnalyzing}
          className={cn(
            'absolute right-2 top-1/2 -translate-y-1/2',
            'px-4 py-2 rounded-lg font-semibold text-sm',
            'bg-[var(--color-green-500)] text-white',
            'hover:bg-[#0ea574] transition-all duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'flex items-center gap-2'
          )}
        >
          {isAnalyzing ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              Generando...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Generar
            </>
          )}
        </button>
      </div>

      {/* AI Analyzing Animation */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 overflow-hidden"
          >
            <div className="glass rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-[var(--color-indigo-600)] rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
                <span className="text-sm text-white/90">
                  IA analizando tu proyecto...
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brief Preview */}
      <AnimatePresence>
        {showPreview && !isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="mt-6"
          >
            <div className="glass rounded-xl p-6 border border-white/20">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-green-500)] to-[var(--color-indigo-600)] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    Brief Generado
                  </h4>
                  <p className="text-white/70 text-sm">
                    Vista previa del brief de diseño
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-white/90 text-sm">
                <div>
                  <h5 className="font-semibold text-white mb-2">
                    📋 Contexto de Negocio
                  </h5>
                  <p className="text-white/70">
                    Proyecto: {inputValue}
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2">
                    🎨 Lineamientos Visuales
                  </h5>
                  <ul className="space-y-1 text-white/70">
                    <li>• Paleta de colores estratégica para tu industria</li>
                    <li>• Tipografía profesional adaptada a tu audiencia</li>
                    <li>• Estructura de contenido optimizada</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2">
                    ✓ Criterios de Éxito
                  </h5>
                  <p className="text-white/70">
                    Brief accionable que cualquier diseñador puede ejecutar con excelencia
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/60 text-xs text-center">
                  Este es un ejemplo. Crea tu cuenta para generar briefs completos personalizados.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveDemo;
