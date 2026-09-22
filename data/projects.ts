export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  accent: "amber" | "blue" | "emerald";
  year: string;
  techStack: string[];
  liveUrl: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "academia-inoqua",
    title: "Academia INOQUA",
    subtitle: "Plataforma SaaS de capacitación online · B2B y B2C",
    badge: "Next.js · SaaS",
    accent: "amber",
    year: "2026",
    description:
      "Plataforma completa de capacitación online en inocuidad alimentaria. Cuenta con cursos interactivos, auto-evaluaciones, generación automática de certificados, analíticas de avance para empresas y reportes exportables para auditorías oficiales. Arquitectura moderna basada en Next.js con Server Components.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sentry", "SSR"],
    liveUrl: "https://www.academiainoqua.com/",
    featured: true,
  },
  {
    id: "inocuidad-sin-fronteras",
    title: "Inocuidad Sin Fronteras",
    subtitle: "Landing para seminario internacional",
    badge: "Next.js · Evento",
    accent: "blue",
    year: "2026",
    description:
      "Sitio web oficial del evento de inocuidad en Santa Cruz, Bolivia. Carrusel interactivo de ponentes internacionales (FSSC Foundation), cronograma detallado, formulario de inscripción y diseño responsive de alto impacto.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "SEO", "Micro-animations"],
    liveUrl: "https://inocuidadsinfronteras.com/",
    featured: false,
  },
  {
    id: "clasificados-180",
    title: "Clasificados 180",
    subtitle: "App móvil de clasificados breves",
    badge: "Flutter · Android",
    accent: "emerald",
    year: "Google Play",
    description:
      "App publicada en Play Store. Formato de micro-anuncios de 180 caracteres para compraventa, alquileres y servicios. Construida con Flutter, renderizado nativo a 60 FPS y Material Design 3.",
    techStack: ["Flutter", "Dart", "REST APIs", "Material 3", "Play Store"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.clasificados180.anuncios&hl=es_VE&pli=1",
    featured: false,
  },
];
