import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, GitCommit, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 85%',
              scrub: 1,
            },
          }
        );
      }

      gsap.from('.exp-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden bg-tech-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5400]/10 border border-[#ff5400]/30 text-[#ff5400] text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Pengalaman profesional dan kontribusi di industri teknologi melalui peran Software Engineer dan Project Manager.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10">
          {/* Vertical Progress Line with High-Contrast Orange */}
          <div
            ref={lineRef}
            className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-[3px] bg-gradient-to-b from-[#ff5400] via-cyan-500 to-purple-500 origin-top rounded-full"
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="exp-item relative group">
                {/* Timeline node bullet */}
                <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-2 border-[#ff5400] group-hover:bg-[#ff5400] transition-colors duration-300 shadow-[0_0_12px_rgba(255,84,0,0.6)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff5400] group-hover:bg-white transition-colors" />
                </div>

                {/* Card Container */}
                <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700/80 group-hover:border-[#ff5400]/50 transition-all duration-300 shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-mono text-[#ff5400] font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.year}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#ff5400] transition-colors flex items-center gap-2">
                    <span>{exp.role}</span>
                  </h3>
                  <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-4 flex items-center gap-1.5">
                    <GitCommit className="w-4 h-4 text-[#ff5400]" />
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#ff5400] transition-colors inline-flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                  </div>

                  {/* Responsibilities list */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                        <CheckCircle className="w-4 h-4 text-[#ff5400] mt-1 shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
