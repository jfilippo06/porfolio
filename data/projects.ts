export interface Project {
  id: string;
  title: string;
  category: "web" | "app";
  platform: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  status: "Producción" | "En Línea" | "Google Play";
  techStack: string[];
  primaryTech: "Next.js" | "Flutter";
  features: string[];
  metrics?: { label: string; value: string }[];
  liveUrl: string;
  ctaText: string;
  ctaIcon: "external" | "playstore";
  accentColor: string;
  gradient: string;
  borderGlow: string;
  highlights: string[];
}

export const projectsData: Project[] = [
  {
    id: "academia-inoqua",
    title: "Academia INOQUA",
    category: "web",
    platform: "Plataforma Web SaaS · E-learning B2B/B2C",
    primaryTech: "Next.js",
    year: "2026",
    status: "En Línea",
    role: "Desarrollador Fullstack / Frontend",
    tagline: "Capacitación online en calidad e inocuidad alimentaria para profesionales y empresas",
    description:
      "Plataforma educativa moderna e interactiva orientada a la capacitación y certificación en inocuidad alimentaria. Integra catálogo interactivo de cursos especializados, panel de planes corporativos, emisión automática de certificados descargables, seguimiento del progreso en tiempo real y generación de reportes detallados para auditorías regulatorias.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Turbopack",
      "Sentry",
      "Responsive UI",
    ],
    highlights: [
      "Emisión y validación instantánea de certificados digitales",
      "Seguimiento de avance y métricas de colaboradores en vivo",
      "Módulos preparados para reportes de auditoría oficial",
      "Diseño adaptable y optimizado para máxima velocidad de carga",
    ],
    metrics: [
      { label: "Formato", value: "100% Online" },
      { label: "Certificación", value: "Automática" },
      { label: "Enfoque", value: "B2B & B2C" },
    ],
    features: [
      "Arquitectura escalable en Next.js con Server Components y optimización de assets",
      "Diseño UI moderno con Tailwind CSS centrado en conversión y accesibilidad",
      "Sección corporativa con cotizaciones personalizadas y dashboards para empresas",
    ],
    liveUrl: "https://www.academiainoqua.com/",
    ctaText: "Visitar Sitio Web",
    ctaIcon: "external",
    accentColor: "from-amber-500 to-orange-600",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    borderGlow: "group-hover:border-orange-500/50",
  },
  {
    id: "inocuidad-sin-fronteras",
    title: "Inocuidad Sin Fronteras",
    category: "web",
    platform: "Web Oficial · Landing Internacional de Evento",
    primaryTech: "Next.js",
    year: "2026",
    status: "En Línea",
    role: "Desarrollador Frontend",
    tagline: "Seminario Internacional de Inocuidad Alimentaria · Santa Cruz de la Sierra",
    description:
      "Plataforma y landing page oficial para el evento internacional de referencia en la industria de alimentos. Cuenta con carrusel dinámico de expositores internacionales de talla mundial (FSSC Foundation), cronograma detallado de ponencias, desglose de temáticas estratégicas (HACCP, FSSC 22000, Cultura de Inocuidad, Digitalización), sección de auspiciadores y módulo de inscripción en línea.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Micro-animations",
      "SEO Avanzado",
      "Mobile-First",
    ],
    highlights: [
      "Carrusel interactivo y showcase de ponentes internacionales",
      "Estructura modular con navegación fluida y micro-interacciones",
      "Optimización SEO y rendimiento Lighthouse sobresaliente",
      "Flujo de registro para profesionales y delegaciones corporativas",
    ],
    metrics: [
      { label: "Edición", value: "1ra Internacional" },
      { label: "Sede", value: "Santa Cruz" },
      { label: "Expositores", value: "Líderes FSSC" },
    ],
    features: [
      "Animaciones sutiles y transiciones de scroll que guían al usuario al registro",
      "Optimización estricta de imágenes Next/Image para carga instantánea",
      "Diseño corporativo premium con paleta navy/naranja de alto contraste",
    ],
    liveUrl: "https://inocuidadsinfronteras.com/",
    ctaText: "Explorar Sitio Web",
    ctaIcon: "external",
    accentColor: "from-blue-600 to-orange-500",
    gradient: "from-blue-500/20 via-orange-500/10 to-transparent",
    borderGlow: "group-hover:border-amber-500/50",
  },
  {
    id: "clasificados-180",
    title: "Clasificados 180",
    category: "app",
    platform: "Aplicación Móvil · Android (Google Play Store)",
    primaryTech: "Flutter",
    year: "2025 - 2026",
    status: "Google Play",
    role: "Desarrollador Móvil (Flutter)",
    tagline: "App rápida de anuncios clasificados y compraventa en 180 caracteres",
    description:
      "Aplicación móvil publicada en Google Play desarrollada con Flutter. Diseñada para ofrecer una experiencia ultra veloz en la publicación y exploración de anuncios breves y concisos. Organizada en categorías clave como compraventa de productos, vehículos, bienes raíces, empleos y servicios con filtros ágiles, persistencia eficiente y rendimiento fluido a 60 FPS.",
    techStack: [
      "Flutter",
      "Dart",
      "Android SDK",
      "Material Design 3",
      "REST APIs",
      "State Management",
      "Play Console",
    ],
    highlights: [
      "Publicada oficialmente y disponible en Google Play Store",
      "Arquitectura en Flutter con renderizado nativo fluido a 60 FPS",
      "Mecanismo de anuncios rápidos y eficientes de 180 caracteres",
      "Búsqueda por categorías, filtros por ubicación y carga optimizada",
    ],
    metrics: [
      { label: "Tienda", value: "Google Play" },
      { label: "Framework", value: "Flutter / Dart" },
      { label: "Categorías", value: "Multi-rubro" },
    ],
    features: [
      "Desarrollo multiplataforma optimizado con un único codebase en Flutter",
      "Gestión de estado reactiva, consumo de APIs y almacenamiento local",
      "Interfaz intuitiva de alto rendimiento con animaciones Material Design",
    ],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.clasificados180.anuncios&hl=es_VE&pli=1",
    ctaText: "Ver en Google Play",
    ctaIcon: "playstore",
    accentColor: "from-cyan-500 to-blue-600",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderGlow: "group-hover:border-cyan-500/50",
  },
];
