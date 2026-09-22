"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projectsData, Project } from "@/data/projects";

const ACCENT_STYLES = {
  amber: {
    dot: "bg-amber-400",
    badgeText: "text-amber-300",
    badgeBg: "bg-amber-400/[0.08]",
    badgeBorder: "border-amber-400/20",
    titleHover: "group-hover:text-amber-300",
    rim: "via-amber-400/20",
    btnHover: "group-hover:bg-amber-500",
  },
  blue: {
    dot: "bg-[#2997ff]",
    badgeText: "text-blue-300",
    badgeBg: "bg-blue-400/[0.08]",
    badgeBorder: "border-blue-400/20",
    titleHover: "group-hover:text-blue-300",
    rim: "via-blue-400/20",
    btnHover: "group-hover:bg-[#0071e3]",
  },
  emerald: {
    dot: "bg-emerald-400",
    badgeText: "text-emerald-300",
    badgeBg: "bg-emerald-400/[0.08]",
    badgeBorder: "border-emerald-400/20",
    titleHover: "group-hover:text-emerald-300",
    rim: "via-emerald-400/20",
    btnHover: "group-hover:bg-emerald-600",
  },
};

function FeaturedProjectCard({ project }: { project: Project }) {
  const style = ACCENT_STYLES[project.accent];

  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-3xl border border-white/[0.08] bg-[#161617] hover:border-white/[0.2] transition-all duration-300 overflow-hidden shadow-2xl relative"
    >
      <div
        className={`h-px w-full bg-gradient-to-r from-transparent ${style.rim} to-transparent`}
      />

      <div className="p-7 sm:p-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-medium ${style.badgeText} ${style.badgeBg} border ${style.badgeBorder} px-3 py-1 rounded-full`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                {project.badge}
              </span>
              <span className="text-xs text-[#86868b]">{project.year}</span>
            </div>

            <h3
              className={`text-2xl sm:text-3xl font-bold text-white ${style.titleHover} transition-colors tracking-tight`}
            >
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm text-[#86868b] font-medium">
              {project.subtitle}
            </p>

            <p className="mt-5 text-[#86868b] text-sm sm:text-base leading-relaxed max-w-2xl">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-[#86868b] bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 ${style.btnHover} group-hover:border-transparent transition-all mt-1`}
          >
            <ArrowUpRight className="w-4 h-4 text-[#86868b] group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </a>
  );
}

function GridProjectCard({ project }: { project: Project }) {
  const style = ACCENT_STYLES[project.accent];

  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-3xl border border-white/[0.08] bg-[#161617] hover:border-white/[0.2] transition-all duration-300 overflow-hidden shadow-xl relative"
    >
      <div
        className={`h-px w-full bg-gradient-to-r from-transparent ${style.rim} to-transparent`}
      />
      <div className="p-7 sm:p-8">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-medium ${style.badgeText} ${style.badgeBg} border ${style.badgeBorder} px-3 py-1 rounded-full`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                {project.badge}
              </span>
              <span className="text-xs text-[#86868b]">{project.year}</span>
            </div>

            <h3
              className={`text-xl font-bold text-white ${style.titleHover} transition-colors tracking-tight`}
            >
              {project.title}
            </h3>
            <p className="mt-1 text-xs text-[#86868b] font-medium">
              {project.subtitle}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-[#86868b] leading-relaxed">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-[#86868b] bg-white/[0.04] border border-white/[0.06] px-2.5 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 ${style.btnHover} group-hover:border-transparent transition-all mt-1`}
          >
            <ArrowUpRight className="w-3.5 h-3.5 text-[#86868b] group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </a>
  );
}

export function ProjectsSection() {
  const featured = projectsData.find((p) => p.featured) || projectsData[0];
  const gridProjects = projectsData.filter((p) => p.id !== featured.id);

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
        <FeaturedProjectCard project={featured} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridProjects.map((project) => (
            <GridProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
