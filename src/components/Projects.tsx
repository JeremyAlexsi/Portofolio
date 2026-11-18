import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Fullstack Web', 'Mobile App', 'Game Dev'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-tech-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Sederhana & Jelas */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5400]/10 border border-[#ff5400]/25 text-[#ff5400] text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            Projects & Portfolio
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Koleksi proyek pilihan dalam pengembangan Web, Mobile Android, dan Game Development.
          </p>
        </div>

        {/* Filter Kategori Simpel */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#ff5400] text-white shadow-md shadow-[#ff5400]/20'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-[#ff5400]/40 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid Simpel & Bersih */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-[#ff5400]/50 hover:shadow-lg transition-all duration-200 group"
            >
              {/* Top Meta info */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    {project.metrics}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#ff5400] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Subtitle / Focus */}
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  {project.subtitle}
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              {/* Bottom: Tags & Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-800 text-[10px] sm:text-[11px] font-mono text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link Buttons */}
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#ff5400] hover:bg-[#e04a00] text-white font-semibold text-xs transition-colors shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`${
                        project.liveUrl ? 'p-2' : 'flex-1 py-2 px-3'
                      } inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#ff5400] text-slate-700 dark:text-slate-200 hover:text-[#ff5400] text-xs font-semibold transition-colors bg-slate-50 dark:bg-slate-800/60`}
                      title="Lihat Source Code di GitHub"
                    >
                      <Github className="w-4 h-4" />
                      {!project.liveUrl && <span>Source Code</span>}
                    </a>
                  )}

                  {!project.liveUrl && !project.githubUrl && (
                    <div className="flex-1 py-1.5 text-center text-[11px] font-mono text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      Academic / Internal Project
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
