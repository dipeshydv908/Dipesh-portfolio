import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 200;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const item = NAV_LINKS[i];
        const el = document.querySelector(item.href);
        if (el && (el as HTMLElement).offsetTop <= scrollPos) {
          setActiveSection(item.href.replace('#', ''));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050711]/85 backdrop-blur-md border-b border-cyan-500/15 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-slate-100 font-semibold text-lg tracking-tight"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-0.5 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all duration-300">
            <div className="w-full h-full bg-[#070b19] rounded-[10px] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-display tracking-wider text-base font-bold bg-gradient-to-r from-slate-100 via-cyan-100 to-slate-300 bg-clip-text text-transparent">
            DIPESH
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            CSE '29
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-full px-4 py-1.5 shadow-inner">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30" />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-md shadow-cyan-500/25 cursor-pointer active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-slate-950" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#070c1d]/95 backdrop-blur-xl border-b border-cyan-500/20 px-6 py-6 shadow-2xl transition-all duration-300 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-cyan-400" />}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
