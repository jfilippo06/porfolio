import React from "react";

export function Hero() {
  return (
    <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 max-w-4xl mx-auto px-5 sm:px-8">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-[#86868b] text-xs font-medium mb-6 tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
        Desarrollo Web & Mobile
      </div>

      <h1 className="text-[2.6rem] sm:text-6xl md:text-[4.5rem] font-bold tracking-tight leading-[1.08] text-white">
        <span className="bg-gradient-to-b from-white via-white/90 to-[#86868b] bg-clip-text text-transparent">
          Construyo webs con Next.js
        </span>
        <br />
        <span className="text-[#86868b]">y apps con Flutter.</span>
      </h1>

      <p className="mt-7 text-[#86868b] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
        Proyectos reales en producción — plataformas educativas SaaS, landings
        para eventos internacionales y apps publicadas en Google Play.
        Directo a producción, sin rodeos.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#trabajo"
          className="text-sm font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] px-6 py-3 rounded-full transition-all shadow-[0_0_24px_rgba(0,113,227,0.35)] hover:shadow-[0_0_32px_rgba(0,113,227,0.5)]"
        >
          Ver proyectos en producción
        </a>
        <a
          href="#contacto"
          className="text-sm font-medium text-[#2997ff] hover:underline flex items-center gap-1.5 px-3 py-2 transition-colors"
        >
          <span>Hablemos</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
