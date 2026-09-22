"use client";

import React from "react";
import { Project } from "@/data/projects";
import {
  ExternalLink,
  Smartphone,
  Globe,
  Award,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Layers,
  FileCheck2,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      id={project.id}
      className={`group relative rounded-3xl p-6 sm:p-8 transition-all duration-300 border flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0e1424] to-[#0a0d18] border-slate-800/90 hover:border-slate-700 hover:shadow-2xl hover:shadow-cyan-950/30 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Background radial gradient based on project */}
      <div
        className={`absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-40 bg-gradient-to-br ${project.accentColor}`}
      />

      {/* Top Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          {/* Platform & Category Badge */}
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                project.category === "app"
                  ? "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                  : "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
              }`}
            >
              {project.category === "app" ? (
                <Smartphone className="w-3.5 h-3.5" />
              ) : (
                <Globe className="w-3.5 h-3.5" />
              )}
              {project.primaryTech}
            </span>

            <span className="text-xs font-medium text-slate-400">
              {project.year}
            </span>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {project.status}
          </div>
        </div>

        {/* Project Title & Tagline */}
        <div className="mb-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-800/60 hover:bg-cyan-500 hover:text-black text-slate-400 transition-all duration-200 shrink-0 group-hover:scale-105"
              aria-label={`Abrir ${project.title}`}
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm font-medium text-cyan-400/90 mt-1">
            {project.platform}
          </p>
        </div>

        {/* Visual Preview / Concept Mockup */}
        <div className="my-5 rounded-2xl bg-[#080B13] p-4 sm:p-5 border border-slate-800/80 shadow-inner overflow-hidden relative">
          {project.id === "academia-inoqua" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-mono text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  LMS · Inocuidad Alimentaria
                </span>
                <span className="text-[11px] bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded-md font-semibold">
                  Certificado Oficial
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800/80">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    Cursos Online
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">HACCP & FSSC</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3" /> Auto-evaluación
                  </div>
                </div>
                <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800/80">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    Auditoría
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">Reportes B2B</div>
                  <div className="text-[10px] text-orange-400 flex items-center gap-1 mt-1">
                    <FileCheck2 className="w-3 h-3" /> Exportables
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.id === "inocuidad-sin-fronteras" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-mono text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Seminario Internacional 2026
                </span>
                <span className="text-[11px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-md font-semibold">
                  Santa Cruz, Bolivia
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800/80">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    Ponentes
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">FSSC Foundation</div>
                  <div className="text-[10px] text-cyan-400 flex items-center gap-1 mt-1">
                    <Sparkles className="w-3 h-3" /> Internacionales
                  </div>
                </div>
                <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800/80">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    Temáticas
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">Cultura & Gestión</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3" /> Inscripción Online
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.id === "clasificados-180" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-mono text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Google Play Store App
                </span>
                <span className="text-[11px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-md font-semibold font-mono">
                  com.clasificados180
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800/80">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    Formato
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">180 Caracteres</div>
                  <div className="text-[10px] text-blue-400 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> Publicación Ágil
                  </div>
                </div>
                <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800/80">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    Rendimiento
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">Flutter 60 FPS</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3" /> Android Nativo
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed font-normal mb-5">
          {project.description}
        </p>

        {/* Highlights / Features */}
        <div className="mb-6 space-y-2">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Aspectos Destacados
          </div>
          <ul className="space-y-1.5">
            {project.highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="text-xs text-slate-300 flex items-start gap-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section: Tech Stack & CTA */}
      <div>
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-slate-900 to-slate-800 hover:from-cyan-500 hover:to-blue-600 text-white border border-slate-700/80 hover:border-transparent transition-all duration-200 shadow-md group-hover:shadow-cyan-500/20"
        >
          <span>{project.ctaText}</span>
          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}
