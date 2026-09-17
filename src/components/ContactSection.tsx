import React, { useState } from 'react';
import { 
  Mail, Send, Linkedin, Github, FileText, CheckCircle2, 
  Sparkles, Copy, Check, ArrowUpRight, MessageSquare 
} from 'lucide-react';
import { INITIAL_SOCIAL_LINKS } from '../data/portfolioData';
import { SocialLinks } from '../types';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const socialLinks: SocialLinks = INITIAL_SOCIAL_LINKS;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

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
      const mailtoUrl = `mailto:${socialLinks.email}?subject=Portfolio Contact from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>07 // LET'S CONNECT</span>
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

              {/* Social Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">CONNECT ON PLATFORMS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* LinkedIn Button */}
                  <a
                    id="contact-linkedin-btn"
                    href={socialLinks.linkedin || 'https://www.linkedin.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-950/60 hover:bg-[#0077b5]/15 border border-slate-800 hover:border-[#0077b5]/40 text-slate-200 hover:text-white transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-[#0077b5]" />
                      <span className="text-xs font-semibold">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#0077b5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* GitHub Button */}
                  <a
                    id="contact-github-btn"
                    href={socialLinks.github || 'https://github.com/dipeshydv908'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-950/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-slate-200" />
                      <span className="text-xs font-semibold">GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Resume Quick Access Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 to-slate-950/80 border border-purple-500/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Full Resume Available</p>
                    <p className="text-[11px] text-slate-400 font-mono">PDF Format • 2025 Updates</p>
                  </div>
                </div>

                <button
                  id="contact-open-resume-btn"
                  onClick={onOpenResume}
                  className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors cursor-pointer shadow-md shadow-purple-500/20"
                >
                  View
                </button>
              </div>
            </div>

            {/* Quick response commitment pill */}
            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <p className="text-xs text-cyan-200/90 leading-relaxed font-mono">
                Fast responses guaranteed for internship inquiries, project builds, and technical discussions.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl shadow-xl">
              
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <h3 className="font-display font-bold text-xl text-white">
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-white">
                    Opening Your Email Client...
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="text-emerald-400 font-semibold">{formData.name}</span>! Your email client has been prepared with your message to <span className="font-mono text-cyan-300">{socialLinks.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">
                        Your Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-input-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">
                      Message / Project Details <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-input-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Dipesh, I came across your portfolio and would like to discuss an opportunity or engineering project..."
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Message Directly</span>
                    <Send className="w-4 h-4 text-slate-950" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
