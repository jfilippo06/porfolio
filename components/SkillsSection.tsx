import React from "react";

export function SkillsSection() {
  return (
    <section
      id="sobre-mi"
      className="py-10 sm:py-14 scroll-mt-16 border-t border-white/[0.08]"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b] mb-2">
            Especialización
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Con qué trabajo.
          </h2>
          <p className="mt-3 text-[#86868b] text-base sm:text-lg max-w-xl">
            Dos stacks enfocados que cubren el ciclo completo: web moderna de alto
            rendimiento y aplicaciones móviles nativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Web Bento Card */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#161617] p-8 sm:p-10 shadow-xl relative overflow-hidden group hover:border-white/[0.18] transition-all">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent absolute top-0 left-0" />
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-medium text-[#2997ff] bg-[#0071e3]/10 border border-[#0071e3]/20 px-3 py-1 rounded-full">
                01 — Plataforma Web
              </span>
              <span className="text-2xl font-bold text-white/10 font-mono">01</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
              Next.js + React + TypeScript
            </h3>
            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed mb-8">
              Arquitecturas web escalables con React Server Components, renderizado
              híbrido y optimización extrema de SEO y Core Web Vitals.
            </p>

            <ul className="space-y-3 text-sm text-[#86868b]">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
                <span>Server Components, streaming y SSR</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
                <span>Interfaces fluidas y responsive con Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
                <span>API Routes, autenticación y bases de datos</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
                <span>SEO técnico con puntajes Lighthouse óptimos</span>
              </li>
            </ul>
          </div>

          {/* Mobile Bento Card */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#161617] p-8 sm:p-10 shadow-xl relative overflow-hidden group hover:border-white/[0.18] transition-all">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent absolute top-0 left-0" />
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                02 — Apps Móviles
              </span>
              <span className="text-2xl font-bold text-white/10 font-mono">02</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
              Flutter + Dart
            </h3>
            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed mb-8">
              Aplicaciones nativas de alto rendimiento para Android e iOS con un
              código base único y experiencia fluida a 60 FPS.
            </p>

            <ul className="space-y-3 text-sm text-[#86868b]">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Un solo codebase para Android e iOS</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Diseño Material 3 y widgets nativos</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Manejo de estado robusto y consumo de APIs REST</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Publicación y despliegue en Google Play Store</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
