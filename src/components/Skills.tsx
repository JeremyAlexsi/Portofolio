import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Boxes, Code2, Cpu, CheckCircle2, Terminal, Database, Smartphone, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const quickStack = [
    'PHP', 'CodeIgniter', 'Laravel', 'DBMS / MySQL', 'Data Warehouse',
    'Scrum', 'Quality Assurance', 'Systems Analysis', 'Unity (C#)',
    'GameMaker Studio', 'Blender (2D/3D)', 'Kotlin (Android)',
    'Python (ML)', 'Firebase', 'AI Vibe Coding'
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-[#ff5400]" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-cyan-500" />;
      case 'Database':
        return <Database className="w-4 h-4 text-purple-500" />;
      case 'Boxes':
        return <Boxes className="w-4 h-4 text-purple-500" />;
      case 'Smartphone':
        return <Smartphone className="w-4 h-4 text-cyan-500" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#ff5400]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#ff5400]" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-tech-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5400]/10 border border-[#ff5400]/25 text-[#ff5400] text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Skills & Tech Stack</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            Tech Stack & Keahlian
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Kumpulan teknologi dan keahlian teknis dalam web development, database management, software engineering, game dev, dan mobile apps.
          </p>
        </div>

        {/* Quick Tech Pills Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-12">
          {quickStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-semibold text-slate-700 dark:text-slate-200 hover:border-[#ff5400]/50 hover:text-[#ff5400] hover:scale-105 transition-all shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {SKILL_CATEGORIES.map((category, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-[#ff5400] text-white shadow-md shadow-[#ff5400]/25 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-[#ff5400]/40 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {getCategoryIcon(category.iconName)}
                <span>{category.title}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-md font-mono ${
                  isActive ? 'bg-white/25 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}>
                  {category.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid - Simple & Clean tanpa persentase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-slate-900/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[#ff5400]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start gap-2.5 mb-2">
                  <div className="p-1 rounded-md bg-orange-500/10 text-[#ff5400] mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#ff5400] transition-colors leading-snug">
                    {skill.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-7">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
