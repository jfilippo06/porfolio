"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function Navbar() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-black/80 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold text-[#f5f5f7] tracking-tight flex items-center gap-1.5">
          <span>portafolio</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
        </a>

        <nav className="hidden sm:flex items-center gap-7 text-[13px] text-[#86868b] font-normal">
          <a href="#trabajo" className="hover:text-[#f5f5f7] transition-colors">
            Trabajo
          </a>
          <a href="#sobre-mi" className="hover:text-[#f5f5f7] transition-colors">
            Stack
          </a>
          <a href="#contacto" className="hover:text-[#f5f5f7] transition-colors">
            Contacto
          </a>
        </nav>

        <button
          onClick={handleCopy}
          type="button"
          className="text-xs font-medium text-[#f5f5f7] bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#2997ff]" />
              <span className="text-[#2997ff]">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#86868b]" />
              <span>Copiar enlace</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
