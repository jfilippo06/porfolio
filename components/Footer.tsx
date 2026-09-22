import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-8 bg-black">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868b]">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span>
            © {new Date().getFullYear()} Jose Angel Alvarez Filippo
          </span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span className="text-[#86868b]">Next.js & Flutter</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://www.linkedin.com/in/jose-angel-alvarez-filippo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2997ff] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jfilippo06/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span className="text-white/20">|</span>
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
