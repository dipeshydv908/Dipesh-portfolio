import React, { useState } from 'react';
import { ArrowRight, Download, Sparkles, Code, Cpu, Layers } from 'lucide-react';

const PROFILE_PORTRAIT_SRC = '/dipesh_original.jpg';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-sm shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>B.Tech CSE (2025–2029) • Available for Internships &amp; Roles</span>
            </div>

            {/* Name Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-display text-white">
                <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                  DIPESH
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-200 tracking-tight">
                Computer Science Engineering Student{' '}
                <span className="text-cyan-400 font-semibold block sm:inline">
                  &amp; Aspiring Software Developer
                </span>
              </p>
            </div>

            {/* Short Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Passionate Computer Science Engineering student focused on software development,
              Artificial Intelligence, modern web technologies, and creative digital experiences.
            </p>

            {/* Quick Metadata highlights */}
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-cyan-400" /> Global Institute of Technology, Jaipur
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-purple-400" /> Python &amp; GenAI Certified
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-400" /> Hackathon Achiever
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                id="hero-view-projects-btn"
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-100 border border-slate-700/80 font-semibold text-sm hover:border-cyan-500/40 transition-all duration-200 shadow-md cursor-pointer active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Prominent Portrait Frame */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            
            {/* Ambient Multi-Layer Glow Effects */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-purple-600/25 rounded-3xl blur-2xl opacity-75 animate-pulse-slow pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-36 h-36 bg-purple-500/20 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-cyan-500/20 rounded-full blur-xl pointer-events-none" />

            {/* Main Portrait Card Container */}
            <div
              id="hero-portrait-card"
              onMouseEnter={() => setIsPhotoHovered(true)}
              onMouseLeave={() => setIsPhotoHovered(false)}
              className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl p-2 bg-gradient-to-b from-cyan-500/30 via-slate-800/60 to-purple-500/30 shadow-2xl backdrop-blur-xl border border-white/10 group transition-all duration-500 hover:shadow-cyan-500/20"
            >
              {/* Inner Frame */}
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#0a0f24] flex items-center justify-center border border-slate-800/80">
                <img
                  id="profile-portrait-image"
                  src={PROFILE_PORTRAIT_SRC}
                  alt="Dipesh"
                  className="w-full h-full object-cover object-[center_12%] transition-transform duration-300 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />

                {/* Delicate Bottom Shading for label contrast without obscuring photo */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050711]/75 to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <div className="backdrop-blur-md bg-slate-950/80 border border-cyan-500/25 px-3 py-1.5 rounded-xl shadow-lg">
                    <p className="text-xs font-bold text-white tracking-wide font-display">
                      Dipesh
                    </p>
                    <p className="text-[10px] font-mono text-cyan-300">
                      B.Tech CSE • GIT Jaipur
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges around the frame */}
              <div className="absolute -top-4 -left-4 px-3 py-1.5 rounded-xl bg-[#09112a]/90 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-1.5 shadow-xl shadow-black/60">
                <Code className="w-3.5 h-3.5 text-cyan-400" />
                <span>Python &amp; AI</span>
              </div>

              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-xl bg-[#0d0a27]/90 backdrop-blur-md border border-purple-500/30 text-purple-300 text-xs font-mono flex items-center gap-1.5 shadow-xl shadow-black/60">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Creative Editor</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
