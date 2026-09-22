"use client";

import React, { useState } from "react";
import { Copy, Check, Mail, MessageCircle } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contacto"
      className="py-10 sm:py-14 scroll-mt-16 border-t border-white/[0.08]"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="rounded-3xl border border-white/[0.08] bg-[#161617] p-8 sm:p-10 text-center shadow-2xl relative overflow-hidden">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-0 left-0" />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b] mb-3">
            Contacto Directo
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-4 text-[#86868b] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Conversemos sobre alcance, tiempos y presupuesto. Trabajo con precios
            cerrados, entregas semanales y sin intermediarios.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/584123015399?text=Hola%20Jose%2C%20vi%20tu%20portafolio%20y%20quiero%20conversar%20sobre%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] px-6 py-3 rounded-full transition-all shadow-[0_0_24px_rgba(0,113,227,0.35)] hover:shadow-[0_0_32px_rgba(0,113,227,0.5)] flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp (+58 412 3015399)</span>
            </a>

            <a
              href="mailto:jfilippo04@gmail.com?subject=Consulta%20sobre%20proyecto%20con%20Jose%20Filippo"
              className="text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] px-6 py-3 rounded-full transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#2997ff]" />
              <span>jfilippo04@gmail.com</span>
            </a>

            <button
              onClick={handleCopy}
              type="button"
              className="text-sm font-medium text-[#86868b] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] px-5 py-3 rounded-full transition-all flex items-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#2997ff]" />
                  <span className="text-[#2997ff]">Enlace copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Compartir portafolio</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs text-[#86868b]">
            <a
              href="https://www.linkedin.com/in/jose-angel-alvarez-filippo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <span className="text-[#2997ff]">↗</span>
            </a>
            <span className="text-white/10">•</span>
            <a
              href="https://github.com/jfilippo06/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>GitHub (@jfilippo06)</span>
              <span className="text-[#2997ff]">↗</span>
            </a>
            <span className="text-white/10">•</span>
            <span>Carabobo, Venezuela (Disponible Remoto)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
