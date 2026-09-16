import React from 'react';
import { X, Download, Printer, Mail, MapPin, Globe, CheckCircle2, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { INITIAL_EDUCATION, INITIAL_PROJECTS, INITIAL_CERTIFICATES, INITIAL_EXPERIENCES, TECHNICAL_SKILLS, CREATIVE_SKILLS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#090d22] border border-cyan-500/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <h3 className="font-display font-bold text-white text-base">
              Dipesh — Professional Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#070b1a] text-slate-200 print:bg-white print:text-black space-y-8">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shrink-0 shadow-lg bg-slate-900">
                <img
                  src="/dipesh_original.jpg"
                  alt="Dipesh"
                  className="w-full h-full object-cover object-[center_15%]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                  DIPESH
                </h1>
                <p className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                  Computer Science Engineering Student &amp; Aspiring Software Developer
                </p>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  B.Tech CSE (2025 – 2029)
                </p>
              </div>
            </div>
            <div className="text-xs font-mono text-slate-400 space-y-1">
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>dipeshydv908@gmail.com</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Jaipur, Rajasthan, India</span>
              </p>
              <p className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                <span>Global Institute of Technology, Jaipur</span>
              </p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Passionate Computer Science Engineering student focused on software development, Artificial Intelligence,
              modern web technologies, and creative digital experiences. Proven ability to build under high pressure
              in 24-hour hackathons, coupled with certified competencies in Python programming, Generative AI (IBM SkillsBuild),
              and cloud deployment (LinuxWorld).
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Education
            </h3>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5 text-xs">
              <div className="flex flex-wrap justify-between items-center font-bold text-white text-sm">
                <span>{INITIAL_EDUCATION.institution}</span>
                <span className="font-mono text-cyan-400 text-xs">{INITIAL_EDUCATION.duration}</span>
              </div>
              <p className="text-cyan-300 font-medium">
                {INITIAL_EDUCATION.degree} — {INITIAL_EDUCATION.field}
              </p>
              <p className="text-slate-400">{INITIAL_EDUCATION.location} • {INITIAL_EDUCATION.status}</p>
            </div>
          </div>

          {/* Technical & Creative Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
              <Code className="w-4 h-4" /> Skills &amp; Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <h4 className="font-semibold text-white mb-2 font-mono text-xs text-cyan-300">
                  TECHNICAL SKILLS
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {TECHNICAL_SKILLS.map((s) => s.name).join(' • ')}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <h4 className="font-semibold text-white mb-2 font-mono text-xs text-purple-300">
                  CREATIVE EDITING SKILLS
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {CREATIVE_SKILLS.map((s) => s.name).join(' • ')}
                </p>
              </div>
            </div>
          </div>

          {/* Experience & Achievements */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" /> Experience &amp; Achievements
            </h3>
            <div className="space-y-3">
              {INITIAL_EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                  <div className="flex justify-between items-center font-bold text-white mb-1">
                    <span>{exp.role} — {exp.organization}</span>
                    <span className="font-mono text-slate-400 text-[11px]">{exp.duration}</span>
                  </div>
                  <p className="text-slate-300 mb-2 leading-relaxed">{exp.description}</p>
                  <div className="space-y-1">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Selected Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {INITIAL_PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="font-bold text-white mb-1">{proj.title}</h4>
                  <p className="text-slate-300 mb-2">{proj.description}</p>
                  <p className="font-mono text-[11px] text-cyan-400">{proj.technologies.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Certificates */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Verified Certificates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {INITIAL_CERTIFICATES.map((cert) => (
                <div key={cert.id} className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                  <p className="text-white font-semibold">{cert.title}</p>
                  <p className="text-slate-400 text-[11px]">{cert.organization} • {cert.date}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
