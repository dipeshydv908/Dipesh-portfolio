import React, { useState, useRef } from 'react';
import { Award, ShieldCheck, Calendar, Building2, Eye, Upload, FileCheck, CheckCircle2 } from 'lucide-react';
import { INITIAL_CERTIFICATES } from '../data/portfolioData';
import { CertificateItem } from '../types';
import { CertificateLightbox } from './CertificateLightbox';

export const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [certImages, setCertImages] = useState<Record<string, string>>(() => {
    // Check version to avoid stale cached mock placeholders
    if (localStorage.getItem('dipesh_certs_synced_v') !== '20260916_v4_all5') {
      localStorage.removeItem('dipesh_cert_images');
      localStorage.setItem('dipesh_certs_synced_v', '20260916_v4_all5');
      return {};
    }
    const saved = localStorage.getItem('dipesh_cert_images');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return {};
  });

  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleUploadCertImage = (certId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        const updated = { ...certImages, [certId]: result };
        setCertImages(updated);
        localStorage.setItem('dipesh_cert_images', JSON.stringify(updated));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>04 // CREDENTIALS &amp; ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Official <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Verified academic milestones, hackathon achievements, and industry engineering credentials from Global Institute of Technology, CodeUp, LinuxWorld, IBM SkillsBuild, and TCS iON.
          </p>
        </div>

        {/* 5 Official Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INITIAL_CERTIFICATES.map((cert) => {
            const currentImg = certImages[cert.id] || cert.imageUrl;

            return (
              <div
                key={cert.id}
                className="rounded-3xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cyan-500/15 flex flex-col justify-between p-5 sm:p-6 group relative overflow-hidden"
              >
                {/* Subtle card glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* Top Header: Organization & Verification Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 truncate">
                      <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="font-semibold truncate">{cert.organization}</span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono shrink-0">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Certificate Preview Card Mini Frame */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative w-full aspect-[4/3] rounded-2xl bg-[#070b1e] border border-slate-800 flex items-center justify-center p-2 mb-4 cursor-pointer group-hover:border-cyan-500/40 transition-all overflow-hidden shadow-inner"
                  >
                    {currentImg ? (
                      <img
                        src={currentImg}
                        alt={cert.title}
                        className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-4">
                        <Award className="w-8 h-8 text-cyan-400 mb-2" />
                        <span className="text-xs font-mono text-slate-400">{cert.title}</span>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#050711]/75 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/30">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Full Certificate</span>
                      </span>
                    </div>
                  </div>

                  {/* Title and Details */}
                  <h3 className="text-base font-bold font-display text-white mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Topics covered tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.topics.slice(0, 4).map((tp) => (
                      <span
                        key={tp}
                        className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-400"
                      >
                        {tp}
                      </span>
                    ))}
                    {cert.topics.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-cyan-400">
                        +{cert.topics.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-3.5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 truncate">
                    <Calendar className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">{cert.date}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* Upload / replace certificate */}
                    <button
                      onClick={() => fileInputRefs.current[cert.id]?.click()}
                      className="p-2 rounded-xl bg-slate-950/70 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer text-xs"
                      title="Attach or replace scanned certificate file"
                    >
                      <Upload className="w-3.5 h-3.5" />
                    </button>
                    <input
                      ref={(el) => (fileInputRefs.current[cert.id] = el)}
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleUploadCertImage(cert.id, e)}
                      className="hidden"
                    />

                    <button
                      id={`view-cert-btn-${cert.id}`}
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Viewer */}
      <CertificateLightbox
        certificate={selectedCert}
        customImage={selectedCert ? (certImages[selectedCert.id] || selectedCert.imageUrl) : undefined}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
