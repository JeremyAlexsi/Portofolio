import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Check, Copy, Compass, ShieldCheck, Zap,
  MapPin, Wifi, GraduationCap, Briefcase,
  Layers, Gamepad2, Sparkles, Mail
} from 'lucide-react';

export const About: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSideTab, setActiveSideTab] = useState<'highlights' | 'code'>('highlights');
  const [imgError, setImgError] = useState(false);

  const codeSnippet = `// Jeremy Alexander — Software Engineering Profile
export const softwareEngineer = {
  name: "${PERSONAL_INFO.name}",
  role: "${PERSONAL_INFO.role}",
  education: "D4 Teknik Informatika — Politeknik Caltex Riau",
  location: "Pekanbaru, Riau, Indonesia",
  disciplines: [
    "Systems Analysis & SDLC Lifecycle",
    "Relational DBMS Design & Query Optimization",
    "Web Development (PHP, CodeIgniter, Laravel)",
    "Quality Assurance & Comprehensive Testing",
    "Agile Project Coordination (Scrum)",
    "AI-Assisted Vibe Coding Workflows",
    "Interactive Game Dev (Unity & GameMaker)"
  ],
  status: "Open to Software Engineering Roles"
};`;

  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#ff5400]" />,
      title: "Sarjana Terapan (D4) Teknik Informatika",
      institution: "Politeknik Caltex Riau (PCR)",
      desc: "Fokus mendalam pada Software Engineering, perancangan basis data efisien, dan analisis sistem end-to-end."
    },
    {
      icon: <Briefcase className="w-5 h-5 text-cyan-500" />,
      title: "Pengalaman Industri Nyata",
      institution: "PT. Bigs Integrasi Teknologi",
      desc: "Berperan sebagai Software Engineer Intern & Project Manager Intern dalam pengembangan sistem informasi sekolah (Awara)."
    },
    {
      icon: <Layers className="w-5 h-5 text-purple-500" />,
      title: "Web Development & Structured DBMS",
      institution: "PHP, CodeIgniter, Laravel, MySQL",
      desc: "Menguasai perancangan database terstruktur, implementasi logika bisnis, payment gateway, dan integrasi API pihak ketiga."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#ff5400]" />,
      title: "Quality Assurance & AI Vibe Coding",
      institution: "Software Testing & Modern Development",
      desc: "Melakukan pengujian fungsional untuk memastikan aplikasi berjalan stabil, didukung pemanfaatan AI untuk mempercepat analisis dan penulisan kode."
    },
    {
      icon: <Gamepad2 className="w-5 h-5 text-purple-500" />,
      title: "Interactive Game & Media Development",
      institution: "Unity (C#) & GameMaker Studio (GML)",
      desc: "Minat kuat pada media interaktif, mekanik game 2D/3D, fisika collision, dan animasi menggunakan Blender."
    }
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="py-20 relative bg-tech-grid overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff5400]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5400]/10 border border-[#ff5400]/25 text-[#ff5400] text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile & Overview</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            Tentang Saya & Background
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Kombinasi keahlian teknis, pemikiran analitis, dan pengalaman praktis dalam membangun solusi software yang andal.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Profile Card & Bio */}
          <div className="lg:col-span-7 space-y-5">
            {/* ── PROFILE CARD ── */}
            <div className="bg-white dark:bg-slate-900/90 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                {/* Photo Frame */}
                <div className="relative shrink-0">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl p-[3px] bg-gradient-to-br from-[#ff5400] via-purple-500 to-cyan-400 shadow-xl shadow-[#ff5400]/20">
                    <div className="w-full h-full rounded-[13px] overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      {!imgError ? (
                        <img
                          src={PERSONAL_INFO.avatar}
                          alt={PERSONAL_INFO.name}
                          onError={() => setImgError(true)}
                          className="w-full h-full object-cover object-center"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#ff5400]/20 to-purple-500/20 text-slate-700 dark:text-white font-black text-3xl select-none">
                          {PERSONAL_INFO.name.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-emerald-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Open to Hire
                  </span>
                </div>

                {/* Identity Info */}
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#ff5400] font-bold font-mono mt-1">
                    {PERSONAL_INFO.role}
                  </p>

                  <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-2.5 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>

                  {/* Actions & Badges */}
                  <div className="mt-3.5 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#ff5400] hover:text-white text-slate-700 dark:text-slate-300 text-xs font-mono transition-colors border border-slate-200 dark:border-slate-700"
                      title="Salin Email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5" />}
                      <span>{copiedEmail ? 'Email Tersalin!' : PERSONAL_INFO.email}</span>
                    </button>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-orange-500/10 text-[#ff5400] text-xs font-mono font-semibold border border-orange-500/25">
                      <Wifi className="w-3 h-3" />
                      {PERSONAL_INFO.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── BIO CARD ── */}
            <div className="bg-white dark:bg-slate-900/90 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ff5400] font-bold uppercase tracking-wider mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>Pendidikan & Fokus Keahlian</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                D4 Teknik Informatika — Politeknik Caltex Riau
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-5">
                {PERSONAL_INFO.bio}
              </p>

              {/* 2 Key Value Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-2.5">
                  <div className="p-2 rounded-xl bg-orange-500/10 text-[#ff5400] shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Systems Analysis & DBMS</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Perancangan skema database relasional yang terstruktur, efisien, dan siap mendukung kebutuhan sistem.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-2.5">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Web Dev, QA & AI Workflow</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Pengembangan web modern, pengujian QA yang teliti, serta workflow efisien berbasis tools AI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900/90 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-center shadow-sm"
                >
                  <span className="block text-base sm:text-lg font-black text-[#ff5400] font-mono">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Highlights & Persona Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
              {/* Tab Switcher */}
              <div className="p-2 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveSideTab('highlights')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeSideTab === 'highlights'
                        ? 'bg-[#ff5400] text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Key Highlights
                  </button>
                  <button
                    onClick={() => setActiveSideTab('code')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeSideTab === 'code'
                        ? 'bg-[#ff5400] text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    engineer.ts
                  </button>
                </div>

                {activeSideTab === 'code' && (
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-[#ff5400] transition-colors"
                    title="Copy Code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>

              {/* Tab Content: Highlights List */}
              {activeSideTab === 'highlights' ? (
                <div className="p-5 space-y-3.5">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 hover:border-[#ff5400]/40 transition-all flex items-start gap-3"
                    >
                      <div className="p-2 rounded-xl bg-white dark:bg-slate-900 shadow-sm shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                            {item.title}
                          </h4>
                        </div>
                        <div className="text-[11px] font-mono text-[#ff5400] font-semibold">
                          {item.institution}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Tab Content: Code Editor Snippet */
                <div className="p-4 bg-slate-950 font-mono text-xs leading-relaxed text-slate-200 overflow-x-auto min-h-[360px]">
                  <pre>
                    <code>{codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Quick Contact CTA Card */}
            <div className="p-5 rounded-3xl bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-cyan-500/10 border border-[#ff5400]/30 flex items-center justify-between gap-4 shadow-md">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Siap untuk Berkolaborasi
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                  Terbuka untuk peluang kerja Software Engineer, Systems Analyst, maupun Web Developer.
                </p>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-xl bg-[#ff5400] hover:bg-[#e04a00] text-white text-xs font-bold whitespace-nowrap transition-colors shadow-sm"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
