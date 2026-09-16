import React from 'react';
import { ArrowUp, Terminal, Heart, Code, Linkedin, Github, Mail } from 'lucide-react';
import { INITIAL_SOCIAL_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#040612]/90 backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-[#070b19] rounded-[9px] flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>
            <div>
              <p className="font-display font-bold text-white tracking-wider text-sm">
                DIPESH
              </p>
              <p className="text-[11px] font-mono text-slate-400">
                CSE Student • Global Institute of Technology, Jaipur
              </p>
            </div>
          </div>

          {/* Copyright & Stack */}
          <div className="text-center md:text-right">
            <p className="text-xs text-slate-400 font-mono">
              Designed &amp; Built with <span className="text-cyan-400">React</span>,{' '}
              <span className="text-purple-400">Three.js</span> &amp;{' '}
              <span className="text-blue-400">Tailwind CSS</span>
            </p>
            <p className="text-[11px] text-slate-500 font-mono mt-1">
              &copy; {new Date().getFullYear()} Dipesh. All rights reserved.
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer shadow-md"
            title="Scroll to top"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
