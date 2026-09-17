import React, { useState, useEffect } from 'react';
import { X, Download, ShieldCheck, Calendar, Building2, ExternalLink, Award } from 'lucide-react';
import { CertificateItem } from '../types';

interface CertificateLightboxProps {
  certificate: CertificateItem | null;
  customImage?: string;
  onClose: () => void;
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({
  certificate,
  customImage,
  onClose,
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(customImage);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgSrc(customImage);
    setImgError(false);
  }, [certificate, customImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  return (
    <div
      id="certificate-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#090d22] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] font-mono">
                <ShieldCheck className="w-3 h-3 text-cyan-400" />
                <span>OFFICIAL VERIFIED CREDENTIAL</span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                {certificate.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Certificate Viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Area */}
        <div className="rounded-2xl border-2 border-cyan-500/30 bg-[#050713] p-4 sm:p-6 shadow-2xl relative overflow-hidden mb-6 flex items-center justify-center min-h-[400px]">
          {/* Subtle Decorative Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
          
          {imgSrc && !imgError ? (
            <div className="relative z-10 w-full flex justify-center items-center">
              <img
                src={imgSrc}
                alt={certificate.title}
                onError={() => {
                  if (imgSrc.startsWith('/certificates/')) {
                    setImgSrc(imgSrc.replace('/certificates/', '/'));
                  } else {
                    setImgError(true);
                  }
                }}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-slate-700/60"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            /* Fallback High-Fidelity Official Digital Certificate Document */
            <div className="relative z-10 w-full border border-cyan-500/40 rounded-xl p-6 sm:p-10 bg-[#090f2b]/95 text-center shadow-inner">
              
              {/* Corner Emblems */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
                <div className="text-left">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block">
                    ISSUING ORGANIZATION
                  </span>
                  <span className="text-base sm:text-lg font-bold font-display text-white">
                    {certificate.organization}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-cyan-400/60 bg-cyan-500/10 flex items-center justify-center text-cyan-300">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Central Award Announcement */}
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                THIS IS TO OFFICIALLY CERTIFY THAT
              </p>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-wide mb-3 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                DIPESH
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
                has successfully participated in and satisfied all criteria for:
              </p>

              <div className="inline-block p-4 sm:p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 mb-6 max-w-xl">
                <h4 className="text-lg sm:text-xl font-bold font-display text-cyan-200 mb-1">
                  {certificate.title}
                </h4>
                <p className="text-xs font-mono text-cyan-400">
                  {certificate.type}
                </p>
              </div>

              <p className="text-xs text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
                {certificate.description}
              </p>

              {/* Topics / Competencies Covered */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {certificate.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Footer: Date & Verification ID */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-xs font-mono text-left">
                <div>
                  <span className="text-slate-500 block text-[10px]">EVENT / PERIOD:</span>
                  <span className="text-slate-200 font-semibold">{certificate.date}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">CREDENTIAL ID:</span>
                  <span className="text-cyan-400 font-mono">{certificate.credentialId}</span>
                </div>
                <div className="sm:text-right">
                  <span className="text-slate-500 block text-[10px]">STATUS:</span>
                  <span className="text-emerald-400 font-semibold flex sm:justify-end items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Authentic Credential
                  </span>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Details & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-300 font-semibold">{certificate.organization}</span>
              <span className="text-slate-600">•</span>
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              <span>{certificate.date}</span>
            </p>
            {certificate.credentialId && (
              <p className="text-[11px] font-mono text-slate-500">
                Credential ID: <span className="text-cyan-400">{certificate.credentialId}</span>
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            {customImage && (
              <a
                href={customImage}
                download={`${certificate.id}${customImage.includes('.') ? customImage.substring(customImage.lastIndexOf('.')) : ''}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download File</span>
              </a>
            )}
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
            >
              <span>Print Credential</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs cursor-pointer shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
