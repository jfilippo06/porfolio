"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="trabajo"
      className="py-10 sm:py-14 max-w-5xl mx-auto px-5 sm:px-8 scroll-mt-16"
    >
      <div className="mb-8 sm:mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b] mb-2">
          Portafolio
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Proyectos en producción.
        </h2>
        <p className="mt-3 text-[#86868b] text-base sm:text-lg">
          Software real construido de punta a punta, desplegado y en manos de usuarios.
        </p>
      </div>

      <div className="space-y-6">
        {/* Featured project - Academia INOQUA */}
        {(() => {
          const p = projectsData[0];
          return (
            <a
              key={p.id}
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl border border-white/[0.08] bg-[#161617] hover:border-white/[0.2] transition-all duration-300 overflow-hidden shadow-2xl relative"
            >
              {/* Subtle top rim light */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="p-7 sm:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300 bg-amber-400/[0.08] border border-amber-400/20 px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        Next.js · SaaS
                      </span>
                      <span className="text-xs text-[#86868b]">2026</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-300 transition-colors tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-[#86868b] font-medium">
                      Plataforma SaaS de capacitación online · B2B y B2C
                    </p>

                    <p className="mt-5 text-[#86868b] text-sm sm:text-base leading-relaxed max-w-2xl">
                      Plataforma completa de capacitación online en inocuidad
                      alimentaria. Cuenta con cursos interactivos, auto-evaluaciones,
                      generación automática de certificados, analíticas de avance para
                      empresas y reportes exportables para auditorías oficiales.
                      Arquitectura moderna basada en Next.js con Server Components.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {["React", "TypeScript", "Tailwind CSS", "Sentry", "SSR"].map(
                        (t) => (
                          <span
                            key={t}
                            className="text-xs font-mono text-[#86868b] bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full"
                          >
                            {t}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-[#0071e3] group-hover:border-transparent transition-all mt-1">
                    <ArrowUpRight className="w-4 h-4 text-[#86868b] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </a>
          );
        })()}

        {/* Two-column bento grid for the other two */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inocuidad Sin Fronteras */}
          {(() => {
            const p = projectsData[1];
            return (
              <a
                key={p.id}
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl border border-white/[0.08] bg-[#161617] hover:border-white/[0.2] transition-all duration-300 overflow-hidden shadow-xl relative"
              >
                <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-300 bg-blue-400/[0.08] border border-blue-400/20 px-3 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
                          Next.js · Evento
                        </span>
                        <span className="text-xs text-[#86868b]">2026</span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#86868b] font-medium">
                        Landing para seminario internacional
                      </p>

                      <p className="mt-4 text-xs sm:text-sm text-[#86868b] leading-relaxed">
                        Sitio web oficial del evento de inocuidad en Santa Cruz,
                        Bolivia. Carrusel interactivo de ponentes internacionales
                        (FSSC Foundation), cronograma detallado, formulario de
                        inscripción y diseño responsive de alto impacto.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {["React", "TypeScript", "Tailwind CSS", "SEO"].map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono text-[#86868b] bg-white/[0.04] border border-white/[0.06] px-2.5 py-0.5 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-[#0071e3] group-hover:border-transparent transition-all mt-1">
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#86868b] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })()}

          {/* Clasificados 180 */}
          {(() => {
            const p = projectsData[2];
            return (
              <a
                key={p.id}
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl border border-white/[0.08] bg-[#161617] hover:border-white/[0.2] transition-all duration-300 overflow-hidden shadow-xl relative"
              >
                <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-300 bg-emerald-400/[0.08] border border-emerald-400/20 px-3 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Flutter · Android
                        </span>
                        <span className="text-xs text-[#86868b]">Google Play</span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#86868b] font-medium">
                        App móvil de clasificados breves
                      </p>

                      <p className="mt-4 text-xs sm:text-sm text-[#86868b] leading-relaxed">
                        App publicada en Play Store. Formato de micro-anuncios de
                        180 caracteres para compraventa, alquileres y servicios.
                        Construida con Flutter, renderizado nativo a 60 FPS y
                        Material Design 3.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {["Dart", "REST APIs", "Material 3", "Play Store"].map(
                          (t) => (
                            <span
                              key={t}
                              className="text-xs font-mono text-[#86868b] bg-white/[0.04] border border-white/[0.06] px-2.5 py-0.5 rounded-full"
                            >
                              {t}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-[#0071e3] group-hover:border-transparent transition-all mt-1">
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#86868b] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
