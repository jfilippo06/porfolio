import React from "react";

export function Hero() {
  return (
    <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 max-w-4xl mx-auto px-5 sm:px-8">
      <h1 className="text-[2.6rem] sm:text-6xl md:text-[4.5rem] font-bold tracking-tight leading-[1.08] text-white">
        <span className="bg-gradient-to-b from-white via-white/90 to-[#86868b] bg-clip-text text-transparent">
          Landings que convierten,
        </span>
        <br />
        <span className="text-[#86868b]">sistemas web y apps móviles.</span>
      </h1>

      <p className="mt-7 text-[#86868b] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
        Software real construido con Next.js y Flutter. Ayudo a negocios y fundadores
        a digitalizar procesos, lanzar productos rápidos y automatizar su operación
        directo a producción.
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
