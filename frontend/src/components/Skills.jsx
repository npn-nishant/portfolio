import React, { useState } from 'react';
import { skillsByCategory } from '../data/portfolioData';
import { 
  Sparkles, 
  Search, 
  Database, 
  BarChart3, 
  Cpu, 
  Cloud, 
  CheckCircle2,
  Terminal,
  Layers,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Core 10 quick grid skills matching Design 2
  const top10Skills = [
    { name: 'Python', role: 'Data Analysis, Automation & ML', badge: 'Expert', color: 'from-amber-500/20 to-blue-500/20' },
    { name: 'SQL', role: 'PostgreSQL, Window Functions & CTEs', badge: 'Expert', color: 'from-sky-500/20 to-blue-600/20' },
    { name: 'Power BI', role: 'DAX, Star Schema, Gateways', badge: 'Expert', color: 'from-amber-400/20 to-yellow-600/20' },
    { name: 'Tableau', role: 'LOD Calculations & Storytelling', badge: 'Advanced', color: 'from-indigo-500/20 to-sky-500/20' },
    { name: 'Excel (VBA)', role: 'Macros, Financial Modeling & Pivot', badge: 'Expert', color: 'from-emerald-500/20 to-green-600/20' },
    { name: 'Azure', role: 'Azure Blob, Synapse & Data Factory', badge: 'Intermediate', color: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'Databricks', role: 'Lakehouse Architecture & Spark', badge: 'Intermediate', color: 'from-red-500/20 to-orange-500/20' },
    { name: 'dbt', role: 'Data Build Tool & Jinja SQL Models', badge: 'Intermediate', color: 'from-orange-500/20 to-amber-500/20' },
    { name: 'Google Cloud', role: 'BigQuery & Cloud Storage', badge: 'Intermediate', color: 'from-blue-400/20 to-red-400/20' },
    { name: 'Git / GitHub', role: 'Version Control & Team Workflows', badge: 'Advanced', color: 'from-slate-700/30 to-purple-500/20' },
  ];

  const categories = ['All', ...skillsByCategory.map((c) => c.category)];

  const filteredCategories = skillsByCategory
    .filter((cat) => activeCategory === 'All' || cat.category === activeCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.highlight.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Core Skills &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Data Stack
              </span>
            </h2>
            <p className="text-base text-slate-300 mt-2 max-w-2xl">
              From exploratory data analysis and database query optimization to enterprise business intelligence and machine learning pipelines.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter by skill or tool..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:outline-none text-xs font-mono text-slate-200 placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Top 10 High-Impact Skills Grid (Matches Design 2) */}
        {!searchTerm && activeCategory === 'All' && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Key Competencies at a Glance
              </span>
              <span className="text-xs font-mono text-cyan-400">
                10 Core Tools
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {top10Skills.map((tool) => (
                <div
                  key={tool.name}
                  className="p-4 rounded-xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 hover:scale-[1.02] flex flex-col justify-between group shadow-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {tool.name}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {tool.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono leading-tight">
                    {tool.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/80 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Detailed Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-lg"
            >
              <div className="mb-4 pb-3 border-b border-slate-800/80">
                <h3 className="text-base font-bold text-white">
                  {group.category}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 font-mono">
                  {group.description}
                </p>
              </div>

              <div className="space-y-3">
                {group.skills.map((s) => (
                  <div
                    key={s.name}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-slate-700 transition-colors flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-200">
                          {s.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                          {s.level}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
                        {s.highlight}
                      </span>
                    </div>

                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
