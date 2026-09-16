import React, { useState } from 'react';
import { 
  Code, Sparkles, Cpu, Layers, Palette, Sliders, Scissors, 
  Eye, Check, Terminal, Zap, Film, Camera, Wand2
} from 'lucide-react';
import { TECHNICAL_SKILLS, CREATIVE_SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTechFilter, setActiveTechFilter] = useState('All');

  const techCategories = ['All', 'Core', 'AI & ML', 'DevOps & Tools', 'Web'];

  const filteredTechSkills = activeTechFilter === 'All'
    ? TECHNICAL_SKILLS
    : TECHNICAL_SKILLS.filter(s => s.category.includes(activeTechFilter));

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>02 // CAPABILITIES & PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Technical &amp; Creative <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A dual-spectrum engineering toolkit combining algorithmic software architecture with high-impact visual design.
          </p>
        </div>

        {/* CATEGORY 1: TECHNICAL SKILLS */}
        <div className="mb-20">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Technical Skills
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  Programming Languages, Frameworks &amp; Modern Dev Tools
                </p>
              </div>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800">
              {techCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTechFilter(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeTechFilter === cat
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTechSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress track */}
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700 group-hover:brightness-125"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORY 2: CREATIVE SKILLS (Dedicated visually attractive section) */}
        <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0e0c24]/90 via-[#0a0f26]/80 to-[#070b1e]/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Decorative Cyber Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Creative Section Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-purple-500/20">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-0.5 flex items-center justify-center shadow-lg shadow-purple-500/25">
                <div className="w-full h-full bg-[#0d0a24] rounded-[14px] flex items-center justify-center">
                  <Palette className="w-6 h-6 text-purple-400" />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[10px] font-mono mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>CREATIVE SUITE SPECIALIZATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Creative &amp; Visual Editing Skills
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md font-normal">
              Specialized in photo editing, video editing, and high-impact social media design using industry-standard tools.
            </p>
          </div>

          {/* Creative Skills Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CREATIVE_SKILLS.map((skill, idx) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-slate-950/70 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-purple-400 font-semibold px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                      {skill.tools}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.highlight}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-purple-300/80">
                  <span className="flex items-center gap-1 font-mono">
                    <Wand2 className="w-3 h-3 text-purple-400" /> Professional Standard
                  </span>
                  <span className="text-slate-500 font-mono">Precision</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
