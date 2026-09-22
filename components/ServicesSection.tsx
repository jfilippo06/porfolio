import React from "react";
import { Zap, LayoutGrid, Smartphone, CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    id: "landings",
    badge: "Ventas & Captación",
    accent: "blue",
    icon: Zap,
    title: "Landings de Alta Conversión",
    description:
      "Páginas web persuasivas diseñadas para convertir visitas en clientes. Velocidad de carga en menos de 1 segundo, diseño mobile-first y conexión directa a tu canal de ventas.",
    features: [
      "Botones directos a WhatsApp y formularios a tu CRM",
      "Optimización SEO técnico y Core Web Vitals en verde",
      "Estructura orientada a conversión y llamada a la acción clara",
      "Entrega ágil lista para pauta publicitaria o tráfico orgánico",
    ],
    target: "Clínicas, eventos, academias, consultores y negocios locales",
  },
  {
    id: "sistemas",
    badge: "Gestión & Automatización",
    accent: "amber",
    icon: LayoutGrid,
    title: "Sistemas Web & Paneles (SaaS / CRUD)",
    description:
      "Reemplaza el caos de hojas de Excel y procesos manuales con un sistema web centralizado, seguro y accesible desde cualquier navegador con roles de usuario.",
    features: [
      "Control de inventario, stock y movimientos en tiempo real",
      "Módulos de facturación, pedidos y cotizaciones automáticas",
      "Plataformas educativas (LMS) con cursos y certificados",
      "Paneles de administración con reportes exportables para auditorías",
    ],
    target: "Pymes, distribuidoras, academias e instituciones",
  },
  {
    id: "apps",
    badge: "Mobile Multiplataforma",
    accent: "emerald",
    icon: Smartphone,
    title: "Apps Móviles (iOS & Android)",
    description:
      "Aplicaciones nativas construidas con Flutter con rendimiento fluido a 60 FPS. Un solo desarrollo para llegar a Google Play Store y Apple App Store.",
    features: [
      "Catálogos de productos y toma de pedidos para vendedores en calle",
      "Sistemas de reservas de citas y turnos para clientes",
      "Consumo de APIs REST y persistencia de datos offline",
      "Publicación y configuración en tiendas oficiales",
    ],
    target: "Equipos en terreno, servicios con reservas y startups con MVP",
  },
];

const ACCENT_STYLES = {
  blue: {
    borderRim: "via-blue-500/20",
    badgeText: "text-blue-300",
    badgeBg: "bg-blue-400/[0.08]",
    badgeBorder: "border-blue-400/20",
    iconBg: "bg-[#0071e3]/10 text-[#2997ff] border-[#0071e3]/20",
    checkColor: "text-[#2997ff]",
  },
  amber: {
    borderRim: "via-amber-500/20",
    badgeText: "text-amber-300",
    badgeBg: "bg-amber-400/[0.08]",
    badgeBorder: "border-amber-400/20",
    iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    checkColor: "text-amber-400",
  },
  emerald: {
    borderRim: "via-emerald-500/20",
    badgeText: "text-emerald-300",
    badgeBg: "bg-emerald-400/[0.08]",
    badgeBorder: "border-emerald-400/20",
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    checkColor: "text-emerald-400",
  },
};

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="py-10 sm:py-14 scroll-mt-16 border-t border-white/[0.08]"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b] mb-2">
            Servicios
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Qué puedo construir para ti.
          </h2>
          <p className="mt-3 text-[#86868b] text-base sm:text-lg max-w-2xl">
            Soluciones de software diseñadas para resolver dolores operativos reales:
            captar más clientes, ahorrar horas manuales y tener control total de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const style = ACCENT_STYLES[s.accent as keyof typeof ACCENT_STYLES];
            const Icon = s.icon;

            return (
              <div
                key={s.id}
                className="rounded-3xl border border-white/[0.08] bg-[#161617] p-7 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-white/[0.18] transition-all"
              >
                <div
                  className={`h-px w-full bg-gradient-to-r from-transparent ${style.borderRim} to-transparent absolute top-0 left-0`}
                />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div
                      className={`w-10 h-10 rounded-2xl border flex items-center justify-center ${style.iconBg}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[11px] font-medium border px-2.5 py-0.5 rounded-full ${style.badgeText} ${style.badgeBg} ${style.badgeBorder}`}
                    >
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed mb-6">
                    {s.description}
                  </p>

                  <ul className="space-y-2.5 text-xs text-[#86868b] mb-6">
                    {s.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 ${style.checkColor} shrink-0 mt-0.5`}
                        />
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.06] text-[11px] text-[#6e6e73]">
                  <span className="text-[#86868b] font-medium">Ideal para:</span>{" "}
                  {s.target}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
