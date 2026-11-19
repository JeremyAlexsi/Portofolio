import React, { useState, useEffect } from 'react';
import { useLenis } from './SmoothScroll';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Terminal, Flame } from 'lucide-react';

export const Footer: React.FC = () => {
  const { scrollTo } = useLenis();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('id-ID', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' WIB'
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#0c111e] pt-16 pb-12 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff5400] via-orange-500 to-cyan-500 flex items-center justify-center border border-white/20 shadow-md">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white text-lg">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs max-w-sm leading-relaxed">
  {PERSONAL_INFO.role}.
  <br />
  Lulusan Sarjana Terapan (D4) Teknik Informatika Politeknik Caltex Riau.
</p>
          </div>

          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono font-medium">
  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
  Open to Work • On-site / Remote
</span>
<span>{time}</span>
          {/* Back to top button */}
          <button
            onClick={() => scrollTo('#hero', { offset: 0, duration: 1.8 })}
            className="group flex items-center gap-2 px-5 py-3 rounded-2xl glass-panel border border-slate-200 dark:border-slate-700 hover:border-[#ff5400] text-slate-700 dark:text-slate-200 hover:text-[#ff5400] transition-all hover:scale-105 shadow-sm"
            aria-label="Kembali ke atas"
          >
            <span className="text-xs font-mono tracking-wider uppercase font-bold">Back to Top</span>
            <div className="w-7 h-7 rounded-lg bg-orange-500/10 group-hover:bg-[#ff5400] text-[#ff5400] group-hover:text-white flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>

        {/* Tech Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-[#ff5400]" />
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Open Source Architecture & MIT Licensed.</span>
          </div>
          <div className="flex items-center gap-2 text-center flex-wrap justify-center font-mono text-[11px]">
            <span className="text-slate-500 dark:text-slate-400">Engineered with</span>
            <span className="text-[#ff5400] font-bold">React 18</span> •
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">TypeScript</span> •
            <span className="text-purple-600 dark:text-purple-400 font-bold">Three.js</span> •
            <span className="text-[#ff5400] font-bold">GSAP</span> •
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">Lenis</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
