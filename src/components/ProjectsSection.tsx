import React from 'react';
import { 
  FolderGit2, ExternalLink, Github, Layers, Cpu, Globe, Palette 
} from 'lucide-react';
import { INITIAL_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const ProjectsSection: React.FC = () => {
  const projects: ProjectItem[] = INITIAL_PROJECTS;

  const getProjectIcon = (title: string) => {
    if (title.includes('AI')) return <Cpu className="w-5 h-5 text-cyan-400" />;
    if (title.includes('Parking')) return <Layers className="w-5 h-5 text-purple-400" />;
    if (title.includes('Portfolio')) return <Globe className="w-5 h-5 text-emerald-400" />;
    return <Palette className="w-5 h-5 text-pink-400" />;
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // FEATURED ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Selected software development, hardware automation, web architectures, and creative visual showcases.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="p-7 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cyan-500/10 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Card Top Row: Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getProjectIcon(proj.title)}
                    </div>
                    {proj.badge && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 border border-cyan-500/25 text-cyan-300">
                        {proj.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {proj.title}
                </h3>
                {proj.subtitle && (
                  <p className="text-xs font-mono text-purple-300/90 mb-3">
                    {proj.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {proj.description}
                </p>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-slate-950/70 border border-slate-800/80 text-[11px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions: Links & Project Index */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-all hover:scale-105"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Code</span>
                    </a>
                  )}

                  {proj.liveDemoUrl && (
                    <a
                      href={proj.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-bold transition-all hover:scale-105 shadow-md shadow-cyan-500/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                <span className="text-[11px] font-mono text-slate-500">
                  #{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
