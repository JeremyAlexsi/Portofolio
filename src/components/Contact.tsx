import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Github, Linkedin, MessageSquare, Phone, MapPin, Send, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-tech-grid">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#ff5400]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5400]/10 border border-[#ff5400]/30 text-[#ff5400] text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Mari Terhubung
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Terbuka untuk peluang kerja Software Engineer, Systems Analyst, Web Developer, maupun kolaborasi proyek.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1: Direct Work Email */}
          <div className="bg-white dark:bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg hover:border-[#ff5400]/50 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-orange-500/10 text-[#ff5400]">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                Email
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Hubungi saya untuk diskusi teknis, peluang kerja, atau kolaborasi profesional.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold truncate mb-4">
                {PERSONAL_INFO.email}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ff5400] hover:bg-[#e04a00] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Kirim Email</span>
                <Send className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#ff5400] text-slate-700 dark:text-slate-300 hover:text-[#ff5400] transition-colors bg-slate-50 dark:bg-slate-800/80"
                title="Salin Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 2: Mobile / WhatsApp */}
          <div className="bg-white dark:bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg hover:border-cyan-500/50 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">WhatsApp</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                WhatsApp / Telepon
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Tersedia untuk respon cepat dan komunikasi langsung melalui WhatsApp.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold mb-4">
                {PERSONAL_INFO.phone}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/6281270849110`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Chat di WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Panel: Location, Status & Professional Profiles */}
        <div className="bg-white dark:bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-500 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Lokasi & Domisili</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {PERSONAL_INFO.location}
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#ff5400] text-slate-800 dark:text-slate-200 hover:text-[#ff5400] text-xs font-semibold transition-colors bg-slate-50 dark:bg-slate-800/80 shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#ff5400] text-slate-800 dark:text-slate-200 hover:text-[#ff5400] text-xs font-semibold transition-colors bg-slate-50 dark:bg-slate-800/80 shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
