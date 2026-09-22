import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-8 bg-black">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868b]">
        <span>
          © {new Date().getFullYear()} — Desarrollado con Next.js
        </span>

        <div className="flex items-center gap-6">
          <a
            href="https://www.academiainoqua.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f5f5f7] transition-colors"
          >
            Academia INOQUA
          </a>
          <a
            href="https://inocuidadsinfronteras.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f5f5f7] transition-colors"
          >
            Inocuidad Sin Fronteras
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.clasificados180.anuncios&hl=es_VE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f5f5f7] transition-colors"
          >
            Clasificados 180
          </a>
        </div>
      </div>
    </footer>
  );
}
