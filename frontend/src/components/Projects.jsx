import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  FolderGit2, 
  ArrowUpRight, 
  BarChart3, 
  Layers, 
  Code2, 
  BrainCircuit, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    'All',
    'Business Intelligence',
    'Machine Learning & AI',
    'GenAI & NLP',
    'Data Engineering & APIs',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real-World{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Analytical Projects
              </span>
            </h2>
            <p className="text-base text-slate-300 mt-2 max-w-2xl">
              A curated collection of end-to-end data analytics, machine learning pipelines, and executive dashboards demonstrating measurable commercial outcomes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:translate-y-[-4px] group flex flex-col justify-between cursor-pointer shadow-lg shadow-black/30"
            >
              <div>
                {/* Header row: category badge + arrow icon */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-cyan-500/20 text-slate-400 group-hover:text-cyan-300 border border-slate-700/60 group-hover:border-cyan-500/30 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-2">
                  {project.title}
                </h3>

                {/* Tagline / Summary */}
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {project.tagline}
                </p>

                {/* Primary Metric Pill */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/60 mb-4">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Key Impact Metric
                  </div>
                  <div className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{project.impact}</span>
                  </div>
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-800/80">
                  {project.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 4 && (
                    <span className="text-[10px] font-mono text-slate-500">
                      +{project.tools.length - 4} more
                    </span>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <span>View Case Study & Code</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
