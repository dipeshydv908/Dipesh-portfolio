import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, Sparkles, Code, Cpu, Layers, Camera, Upload, Check, RotateCcw } from 'lucide-react';

const CURRENT_PORTRAIT_KEY = 'dipesh_profile_photo_v3';
const DEFAULT_PORTRAIT = '/dipesh_original.jpg';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [profilePhoto, setProfilePhoto] = useState<string>(() => {
    // Clear any previous cached photo so genuine uploaded photo is displayed directly
    if (localStorage.getItem('dipesh_portrait_synced') !== '20260916_v3_original') {
      localStorage.removeItem('dipesh_profile_photo');
      localStorage.removeItem('dipesh_profile_photo_v2');
      localStorage.removeItem(CURRENT_PORTRAIT_KEY);
      localStorage.setItem('dipesh_portrait_synced', '20260916_v3_original');
      return DEFAULT_PORTRAIT;
    }
    return localStorage.getItem(CURRENT_PORTRAIT_KEY) || DEFAULT_PORTRAIT;
  });
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setProfilePhoto(result);
        localStorage.setItem(CURRENT_PORTRAIT_KEY, result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setProfilePhoto(DEFAULT_PORTRAIT);
    localStorage.removeItem(CURRENT_PORTRAIT_KEY);
    localStorage.removeItem('dipesh_profile_photo');
    localStorage.removeItem('dipesh_profile_photo_v2');
  };

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
                {profilePhoto ? (
                  <img
                    id="profile-portrait-image"
                    src={profilePhoto}
                    alt="Dipesh"
                    className="w-full h-full object-cover object-[center_12%] transition-transform duration-300 group-hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  /* Elegant Futuristic Developer Silhouette & Portrait Placeholder with Quick Upload */
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900/90 via-[#070d22] to-[#040817]">
                    
                    {/* Radial Tech Grids */}
                    <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                    {/* Developer Avatar Silhouette */}
                    <div className="relative w-32 h-32 mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 via-slate-800 to-purple-600/30 p-1 flex items-center justify-center border border-cyan-500/30 shadow-xl shadow-cyan-500/10">
                      <div className="w-full h-full rounded-full bg-[#070b1a] flex items-center justify-center">
                        <span className="font-display font-extrabold text-4xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          D
                        </span>
                      </div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-slate-950 shadow-md">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white mb-1">
                      Dipesh
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono mb-4">
                      Computer Science Engineering
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 max-w-xs">
                      Global Institute of Technology, Jaipur
                    </p>

                    {/* Quick Photo Upload Trigger */}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-semibold cursor-pointer transition-all hover:scale-105"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Profile Photo</span>
                    </button>
                  </div>
                )}

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

                  {/* Photo Change Action Icons */}
                  <div className="flex items-center gap-1.5 pointer-events-auto">
                    {profilePhoto !== DEFAULT_PORTRAIT && (
                      <button
                        onClick={handleResetPhoto}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-700/80 text-[10px] font-mono cursor-pointer shadow-lg transition-colors"
                        title="Reset to official portrait photo"
                      >
                        <RotateCcw className="w-3 h-3 text-cyan-400" />
                        <span>Reset</span>
                      </button>
                    )}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2 rounded-xl bg-slate-900/80 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 border border-slate-700/80 transition-all duration-200 cursor-pointer shadow-lg active:scale-90"
                      title="Upload / Change Profile Photo"
                      aria-label="Upload profile photo"
                    >
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hidden File Input for uploading portrait */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
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
