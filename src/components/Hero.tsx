import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HeroCanvas } from './canvas/HeroCanvas';
import { useLenis } from './SmoothScroll';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Layers, ArrowRight, Compass, Activity, Flame, Mail, GitCommit, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollTo } = useLenis();
  const heroRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        gsap.from(leftColRef.current.children, {
          opacity: 0,
          y: 20,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.1,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-tech-grid"
    >
      {/* Three.js Interactive Ambient Live2D Canvas (Bebas bergerak tanpa tertutup) */}
      <HeroCanvas />

      {/* Radial soft lighting glow halos */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-[#ff5400]/12 dark:bg-[#ff5400]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container: 50:50 Balanced Layout (Teks di Kiri, Animasi di Kanan) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-160px)]">

          {/* ── SISI KIRI (6 Kolom - 50%): Teks Elegan, Mudah Dibaca & Tidak Menutupi ── */}
          <div ref={leftColRef} className="lg:col-span-6 text-left flex flex-col items-start z-20">
            {/* Status Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-xs font-mono mb-5 shadow-sm">
              <span className="flex items-center gap-1.5 text-[#ff5400] font-bold">
                <Flame className="w-3.5 h-3.5 fill-[#ff5400]" />
                <span>Software Engineer</span>
              </span>
              <span className="text-slate-400">•</span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-medium">
                <GitCommit className="w-3.5 h-3.5 text-cyan-500" />
                <span>D4 Teknik Informatika — PCR</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-3">
              Halo, saya <br />
              <span className="text-[#ff5400] drop-shadow-sm">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Subtitle Role */}
            <div className="text-base sm:text-xl font-bold text-slate-700 dark:text-slate-200 mb-4 font-mono">
              Software Engineer <span className="text-cyan-500">|</span> Web Dev &amp; Systems Analyst <span className="text-[#ff5400]">|</span> AI/ML
            </div>

            {/* Bio Description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={() => scrollTo('#projects', { offset: -60 })}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff5400] to-orange-500 hover:from-[#ff6b00] hover:to-orange-400 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-[#ff5400]/25 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Layers className="w-4 h-4" />
                <span>Lihat Proyek</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={() => scrollTo('#about', { offset: -60 })}
                className="px-5 py-3 rounded-xl bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-sm"
              >
                <Compass className="w-4 h-4 text-purple-500" />
                <span>Tentang Saya</span>
              </button>

              <button
                onClick={() => scrollTo('#contact', { offset: -60 })}
                className="px-5 py-3 rounded-xl bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-[#ff5400] font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#ff5400]" />
                <span>Kontak</span>
              </button>
            </div>

            {/* Quick Metrics Pills */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-sm text-center"
                >
                  <div className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-mono flex items-center justify-center gap-1">
                    {idx === 0 && <Activity className="w-3 h-3 text-[#ff5400]" />}
                    {idx === 1 && <CheckCircle2 className="w-3 h-3 text-cyan-500" />}
                    {idx === 2 && <Flame className="w-3 h-3 text-purple-500" />}
                    {idx === 3 && <Layers className="w-3 h-3 text-[#ff5400]" />}
                    <span>{stat.value}</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 truncate">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SISI KANAN (6 Kolom - 50%): Panggung Visual Animasi Live2D Terbuka Utuh ── */}
          <div className="lg:col-span-6 h-[360px] sm:h-[460px] lg:h-[520px] pointer-events-none relative z-10 flex items-center justify-center">
            {/* Animasi Live2D Web di HeroCanvas tampil utuh di sini, sejajar dan seimbang dengan teks di kiri! */}
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => scrollTo('#about', { offset: -60 })}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-500 hover:text-[#ff5400] transition-colors z-20 group"
        aria-label="Scroll to next section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase opacity-80 group-hover:opacity-100 font-semibold">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-slate-700 group-hover:border-[#ff5400] flex items-start justify-center p-1 transition-colors">
          <div className="w-1 h-2 bg-[#ff5400] rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
};
