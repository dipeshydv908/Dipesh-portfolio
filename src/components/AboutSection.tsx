import React, { useState, useEffect } from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Sparkles, CheckCircle2, Edit3, Award, Terminal, Heart } from 'lucide-react';
import { INITIAL_EDUCATION } from '../data/portfolioData';
import { EducationItem } from '../types';

export const AboutSection: React.FC = () => {
  const [education, setEducation] = useState<EducationItem>(() => {
    const saved = localStorage.getItem('dipesh_education');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.duration && (parsed.duration.includes('2023') || parsed.duration.includes('2027'))) {
          parsed.duration = '2025 – 2029';
          localStorage.setItem('dipesh_education', JSON.stringify(parsed));
        }
        return parsed;
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_EDUCATION;
  });

  const [isEditingEdu, setIsEditingEdu] = useState(false);
  const [eduFormData, setEduFormData] = useState<EducationItem>(education);

  const handleSaveEdu = (e: React.FormEvent) => {
    e.preventDefault();
    setEducation(eduFormData);
    localStorage.setItem('dipesh_education', JSON.stringify(eduFormData));
    setIsEditingEdu(false);
  };

  const INTERESTS = [
    { title: 'Software Development', icon: 'Code', desc: 'Building scalable logic, robust architectures & clean code' },
    { title: 'Artificial Intelligence', icon: 'Cpu', desc: 'LLMs, generative models, neural reasoning & practical AI apps' },
    { title: 'Web Development', icon: 'Globe', desc: 'Responsive interfaces, modern frameworks & reactive UI systems' },
    { title: 'Python', icon: 'Terminal', desc: 'Algorithmic computing, automation scripting & data pipelines' },
    { title: 'Problem Solving', icon: 'Puzzle', desc: 'Data structures, computational thinking & algorithmic optimization' },
    { title: 'Creative Editing', icon: 'Palette', desc: 'Photo editing, video editing & social media design' },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // IDENTITY &amp; ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Passionate technologist synthesizing technical software engineering with visionary visual creativity.
          </p>
        </div>

        {/* Top Grid: Bio Overview + Key Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Professional Narrative (8 cols) */}
          <div className="lg:col-span-8 p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shrink-0 shadow-lg shadow-cyan-500/15 bg-slate-950">
                  <img
                    src="/dipesh_original.jpg"
                    alt="Dipesh"
                    className="w-full h-full object-cover object-[center_15%]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <h3 className="text-xl font-bold font-display text-white">
                      Professional Introduction
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-cyan-300">
                    B.Tech CSE Student • 2025 – 2029
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed font-normal">
                Hello! I am <strong className="text-white font-semibold">Dipesh</strong>, a dedicated{' '}
                <span className="text-cyan-300 font-medium">Computer Science Engineering student (2025–2029)</span> at{' '}
                <span className="text-purple-300 font-medium">Global Institute of Technology, Jaipur</span>. 
                Driven by curiosity for how software shapes our world, I immerse myself in core software development,
                practical Artificial Intelligence, modern web ecosystems, and Python-driven automation.
              </p>

              <p className="text-slate-300 text-base leading-relaxed font-normal">
                My engineering approach blends technical rigor with an artistic eye. Whether developing algorithmic
                solutions, programming IoT micro-controllers, creating responsive web applications, or executing 
                pixel-perfect photo and video grading, I strive for clean architecture, aesthetic elegance, and 
                real-world impact. I am actively seeking software development and AI engineering internships 
                where I can contribute meaningfully while expanding my technical horizons.
              </p>

              <div className="pt-3 flex flex-wrap gap-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Analytical Problem Solver</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Rapid Tech Prototyper</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Creative Visual Designer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats & College Spotlight (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900/80 to-[#0c1228] border border-cyan-500/20 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Institution</span>
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold text-white font-display mb-1">
                  Global Institute of Technology
                </h4>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" /> Jaipur, Rajasthan, India
                </p>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs font-mono text-slate-300 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Degree:</span>
                    <span className="text-cyan-300 font-medium">B.Tech</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Major:</span>
                    <span className="text-slate-200">Computer Science</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Duration:</span>
                    <span className="text-cyan-400 font-medium">2025 – 2029</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status:</span>
                    <span className="text-emerald-400 font-medium">Active Undergraduate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl flex items-center justify-between">
              <div>
                <p className="text-xs font-mono text-slate-400 mb-1">Primary Discipline</p>
                <p className="text-base font-bold text-white font-display">
                  Software Engineering &amp; AI
                </p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-6 h-6" />
              </div>
            </div>
          </div>

        </div>

        {/* Interests Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold font-display text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Core Areas of Interest</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">Multi-Disciplinary Focus</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INTERESTS.map((item, index) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5 group"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <h4 className="font-bold text-sm text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-500">
                    0{index + 1}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl relative">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>ACADEMIC BACKGROUND</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                Education Timeline
              </h3>
            </div>

            <button
              onClick={() => {
                setEduFormData(education);
                setIsEditingEdu(!isEditingEdu);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isEditingEdu ? 'Cancel Edit' : 'Edit Education Details'}</span>
            </button>
          </div>

          {/* Inline Edit Form if enabled */}
          {isEditingEdu ? (
            <form onSubmit={handleSaveEdu} className="p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/30 mb-8 space-y-4">
              <h4 className="text-sm font-semibold text-cyan-300 font-mono">
                Update Academic Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Institution</label>
                  <input
                    type="text"
                    value={eduFormData.institution}
                    onChange={(e) => setEduFormData({ ...eduFormData, institution: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Degree &amp; Major</label>
                  <input
                    type="text"
                    value={`${eduFormData.degree} / ${eduFormData.field}`}
                    onChange={(e) => setEduFormData({ ...eduFormData, field: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Duration / Years</label>
                  <input
                    type="text"
                    value={eduFormData.duration}
                    onChange={(e) => setEduFormData({ ...eduFormData, duration: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Location</label>
                  <input
                    type="text"
                    value={eduFormData.location}
                    onChange={(e) => setEduFormData({ ...eduFormData, location: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditingEdu(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-xs text-slate-300 hover:bg-slate-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs cursor-pointer shadow-md shadow-cyan-500/20"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : null}

          {/* Education Card Item */}
          <div className="relative pl-8 sm:pl-10 border-l-2 border-cyan-500/30 space-y-6">
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-lg font-bold text-white font-display">
                    {education.institution}
                  </h4>
                  <p className="text-sm font-semibold text-cyan-300">
                    {education.degree} — {education.field}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{education.duration}</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 flex items-center gap-1.5 mb-4">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{education.location}</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-mono">{education.status}</span>
              </p>

              <div className="space-y-2 pt-3 border-t border-slate-800/70">
                {education.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
