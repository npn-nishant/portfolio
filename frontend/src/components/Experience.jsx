import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER HISTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Work Experience
              </span>
            </h2>
            <p className="text-base text-slate-300 mt-2 max-w-2xl">
              Proven track record in data analysis, operational reporting automation, and backend pipeline optimization across tech enterprises.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>4+ Years Cumulative Experience</span>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-slate-800">
          {experience.map((exp, idx) => (
            <div
              key={exp.company}
              className="relative pl-12 md:pl-20 group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute left-3 md:left-6 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-[#0b0f19] border-2 border-cyan-400 shadow-md shadow-cyan-950/60 flex items-center justify-center group-hover:scale-125 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-cyan-500/30 transition-all shadow-xl shadow-black/20">
                
                {/* Header Row: Company, Role, Dates, Location */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {exp.company}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${exp.badgeColor}`}>
                        {exp.role}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {exp.type}
                  </span>
                </div>

                {/* Role Summary */}
                <p className="text-sm text-slate-300 mb-6 italic bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/60">
                  "{exp.summary}"
                </p>

                {/* Highlights List with Metrics Callouts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {exp.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-slate-700 transition-colors flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          {item.metric}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 mr-2">
                    Core Toolkit:
                  </span>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/70 text-slate-200 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
