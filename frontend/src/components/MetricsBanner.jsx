import React from 'react';
import { heroStats } from '../data/portfolioData';
import { Award, Clock, Database, CheckCircle2 } from 'lucide-react';

export default function MetricsBanner() {
  const icons = [
    <Award className="w-5 h-5 text-cyan-400" />,
    <Database className="w-5 h-5 text-indigo-400" />,
    <Clock className="w-5 h-5 text-purple-400" />,
    <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 shadow-xl shadow-black/40 backdrop-blur-xl">
        {heroStats.map((stat, idx) => (
          <div
            key={stat.label}
            className="p-3 sm:p-4 rounded-xl bg-slate-950/50 border border-slate-800/60 hover:border-cyan-500/30 transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                {icons[idx]}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                Verified
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
                {stat.label}
              </div>
              <p className="text-[11px] text-slate-400 font-mono mt-1">
                {stat.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
