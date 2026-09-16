import React, { useState } from 'react';
import { 
  Mail, Send, Linkedin, Github, FileText, CheckCircle2, 
  Sparkles, Copy, Check, Edit3, X, ArrowUpRight, MessageSquare 
} from 'lucide-react';
import { INITIAL_SOCIAL_LINKS } from '../data/portfolioData';
import { SocialLinks } from '../types';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [socialLinks, setSocialLinks] = useState<SocialLinks>(() => {
    const saved = localStorage.getItem('dipesh_social_links');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_SOCIAL_LINKS;
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isEditingLinks, setIsEditingLinks] = useState(false);
  const [tempLinks, setTempLinks] = useState<SocialLinks>(socialLinks);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email || 'dipeshydv908@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate reliable sending & prepare mailto fallback
    setSubmitted(true);
    setTimeout(() => {
      // open mailto
      const mailtoUrl = `mailto:${socialLinks.email}?subject=Portfolio Contact from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  const handleSaveSocialLinks = (e: React.FormEvent) => {
    e.preventDefault();
    setSocialLinks(tempLinks);
    localStorage.setItem('dipesh_social_links', JSON.stringify(tempLinks));
    setIsEditingLinks(false);
  };

  const handleSocialClick = (url: string | undefined, platformName: string) => {
    if (url && url.trim().length > 0) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setTempLinks(socialLinks);
      setIsEditingLinks(true);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>06 // LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Have an internship opportunity, project collaboration, or tech inquiry? Feel free to reach out directly.
          </p>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct info & Action Links (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl shadow-xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-display text-white mb-2">
                  Dipesh
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-4">
                  Computer Science Engineering • Global Institute of Technology, Jaipur
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I am actively seeking software engineering internships, AI-assisted development projects, and creative editing collaborations.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-mono text-slate-400">Direct Email</p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate font-mono">
                      {socialLinks.email || 'dipeshydv908@gmail.com'}
                    </p>
                  </div>
                </div>

                <button
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Buttons Requested in Prompt */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">CONNECT ON PLATFORMS</span>
                  <button
                    onClick={() => {
                      setTempLinks(socialLinks);
                      setIsEditingLinks(true);
                    }}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 cursor-pointer"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Edit Links</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* LinkedIn Button */}
                  <button
                    id="contact-linkedin-btn"
                    onClick={() => handleSocialClick(socialLinks.linkedin, 'LinkedIn')}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-950/60 hover:bg-[#0077b5]/15 border border-slate-800 hover:border-[#0077b5]/40 text-slate-200 hover:text-white transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-[#0077b5]" />
                      <span className="text-xs font-semibold">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                  </button>

                  {/* GitHub Button */}
                  <button
                    id="contact-github-btn"
                    onClick={() => handleSocialClick(socialLinks.github, 'GitHub')}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-950/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-200 hover:text-white transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-slate-300" />
                      <span className="text-xs font-semibold">GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                  </button>
                </div>

                {/* Download Resume Button */}
                <button
                  id="contact-resume-btn"
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700/90 text-slate-100 border border-slate-700 font-semibold text-xs tracking-wide transition-all cursor-pointer shadow-md hover:border-cyan-500/30"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Download Complete Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <h3 className="font-display font-bold text-xl text-white">
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">
                    Message Ready!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                    Thank you, {formData.name}. Your email client is launching with your message to Dipesh.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-form-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe / Hiring Manager"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="contact-form-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-form-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your internship opening, project, or message..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Edit Social Links Drawer/Modal */}
      {isEditingLinks && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-md rounded-3xl bg-[#090d24] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-cyan-400" />
                <h3 className="font-display font-bold text-lg text-white">
                  Configure Social &amp; Contact Links
                </h3>
              </div>
              <button
                onClick={() => setIsEditingLinks(false)}
                className="p-1.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveSocialLinks} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  value={tempLinks.email}
                  onChange={(e) => setTempLinks({ ...tempLinks, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">LinkedIn Profile URL</label>
                <input
                  type="url"
                  value={tempLinks.linkedin || ''}
                  onChange={(e) => setTempLinks({ ...tempLinks, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/dipesh"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">GitHub Profile URL</label>
                <input
                  type="url"
                  value={tempLinks.github || ''}
                  onChange={(e) => setTempLinks({ ...tempLinks, github: e.target.value })}
                  placeholder="https://github.com/dipesh"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsEditingLinks(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-xs text-slate-300 hover:bg-slate-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs cursor-pointer shadow-md shadow-cyan-500/20"
                >
                  Save Links
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
