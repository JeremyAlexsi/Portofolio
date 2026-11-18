import React, { useState, useEffect } from 'react';
import { useLenis } from './SmoothScroll';
import { useTheme } from '../context/ThemeContext';
import { Terminal, Menu, X, Sparkles, GitBranch, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const { scrollTo } = useLenis();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 240) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', target: '#hero', id: 'hero' },
    { label: 'About', target: '#about', id: 'about' },
    { label: 'Skills', target: '#skills', id: 'skills' },
    { label: 'Projects', target: '#projects', id: 'projects' },
    { label: 'Experience', target: '#experience', id: 'experience' },
    { label: 'Contact', target: '#contact', id: 'contact' },
  ];

  const handleNavClick = (target: string) => {
    scrollTo(target, { offset: -70 });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-white/85 dark:bg-[#0f172a]/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-md shadow-slate-900/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Engineer Identity */}
        <button
          onClick={() => handleNavClick('#hero')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff5400] via-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-[#ff5400]/25 group-hover:scale-105 transition-all duration-300 border border-white/20">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 text-base sm:text-lg">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-orange-500/10 text-[10px] font-mono text-[#ff5400] font-bold border border-orange-500/20">
                <GitBranch className="w-2.5 h-2.5" />
                {PERSONAL_INFO.gitBranch}
              </span>
            </div>
            <span className="block text-[11px] text-[#ff5400] font-mono tracking-wider uppercase font-bold">
              Software Engineer | Web & Game Development | Systems Analysis & QA
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/80 shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.target)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-[#ff5400] bg-orange-500/10 dark:bg-orange-500/20 shadow-sm border border-orange-500/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#ff5400] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions, Theme Toggle & Status Badge */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl glass-panel border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#ff5400] hover:border-[#ff5400]/40 transition-colors shadow-sm"
            title={`Ganti ke mode ${theme === 'light' ? 'Gelap' : 'Terang'}`}
            aria-label="Toggle Theme Mode"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-slate-700 hover:text-[#ff5400]" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-600 dark:text-emerald-300 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
            <span>Open for Hire</span>
          </div>

          <button
            onClick={() => handleNavClick('#contact')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff5400] via-orange-500 to-amber-500 hover:from-[#ff6b00] hover:to-orange-400 text-white font-bold text-xs tracking-wide uppercase transition-all duration-300 shadow-md shadow-[#ff5400]/25 hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect</span>
          </button>
        </div>

        {/* Mobile Menu & Theme Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel mt-3 mx-4 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 space-y-4 bg-white/95 dark:bg-[#0f172a]/95 shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Work</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.target)}
                className="text-left px-4 py-2.5 rounded-xl text-slate-800 dark:text-slate-200 hover:text-[#ff5400] dark:hover:text-[#ff5400] hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ff5400] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#ff5400]/30"
            >
              <span>Hubungi Saya</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
