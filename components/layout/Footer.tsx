'use client';

import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-slate-900)] text-white py-16 px-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold">BriefIA</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              El intérprete AI entre tus objetivos de negocio y los lineamientos de diseño que
              necesitas para lograrlos.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Libro de Reclamaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:hola@briefia.pe"
                  className="hover:text-white transition-colors duration-200"
                >
                  hola@briefia.pe
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <MessageCircle className="w-4 h-4" />
                <a
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  WhatsApp: +51 999 999 999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>
              © {currentYear} BriefIA. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-2">
              Hecho en Perú 🇵🇪
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
