'use client';

import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    trackEvent('nav_click', { section: id });
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className={`text-xl font-bold gradient-text ${!isScrolled && 'text-white'}`}>
              BriefIA
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('problem')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-[var(--color-slate-700)] hover:text-[var(--color-indigo-600)]'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Producto
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-[var(--color-slate-700)] hover:text-[var(--color-indigo-600)]'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Precio
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-[var(--color-slate-700)] hover:text-[var(--color-indigo-600)]'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Login
            </button>
            <Button
              variant="primary"
              size="md"
              onClick={() => scrollToSection('final-cta')}
            >
              Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled
                ? 'text-[var(--color-slate-700)] hover:bg-[var(--color-slate-100)]'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-2xl md:hidden overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-xl">B</span>
                  </div>
                  <span className="text-xl font-bold gradient-text">BriefIA</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-[var(--color-slate-100)] transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-[var(--color-slate-700)]" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('problem')}
                  className="text-left py-3 px-4 rounded-lg font-medium text-[var(--color-slate-700)] hover:bg-[var(--color-slate-100)] transition-colors duration-200"
                >
                  Producto
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-left py-3 px-4 rounded-lg font-medium text-[var(--color-slate-700)] hover:bg-[var(--color-slate-100)] transition-colors duration-200"
                >
                  Precio
                </button>
                <button className="text-left py-3 px-4 rounded-lg font-medium text-[var(--color-slate-700)] hover:bg-[var(--color-slate-100)] transition-colors duration-200">
                  Login
                </button>
              </nav>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => scrollToSection('final-cta')}
              >
                Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden -z-10"
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
