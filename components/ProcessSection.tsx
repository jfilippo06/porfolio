import React from "react";
import { MessageSquareCode, Eye, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: MessageSquareCode,
    title: "Alcance y cotización fija",
    duration: "24 a 48 horas",
    description:
      "Conversamos sobre tu necesidad, definimos las funciones exactas y acordamos un precio cerrado con fecha de entrega estricta. Cero sorpresas ni costos ocultos.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Desarrollo con avances en vivo",
    duration: "Semanal",
    description:
      "Acceso a un entorno privado de prueba donde puedes probar cada avance en tiempo real. Comunicación directa y continua sin intermediarios.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Lanzamiento y soporte",
    duration: "Producción",
    description:
      "Despliegue oficial en tu dominio o subida a Google Play Store. Entrega completa del código fuente, capacitación breve y garantía de soporte post-lanzamiento.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="proceso"
      className="py-10 sm:py-14 scroll-mt-16 border-t border-white/[0.08]"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b] mb-2">
            Metodología
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Un proceso claro. Cero sorpresas.
          </h2>
          <p className="mt-3 text-[#86868b] text-base sm:text-lg max-w-xl">
            Así convertimos tu idea o requerimiento en software real funcionando en producción:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="rounded-3xl border border-white/[0.08] bg-[#161617] p-7 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-white/[0.18] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#2997ff]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-[#86868b] bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <div className="text-3xl font-extrabold text-white/10 font-mono mb-2">
                    {step.number}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
