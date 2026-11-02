import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import InteractiveDashboard from './InteractiveDashboard';
import { 
  ArrowRight, 
  Download, 
  FileText, 
  Briefcase, 
  BarChart3, 
  Code2, 
  Globe2,
  Sparkles,
  MapPin,
  ShieldCheck
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const stats = [
    { icon: <Briefcase className="w-4 h-4 text-cyan-400" />, value: "4+", label: "Years Experience" },
    { icon: <BarChart3 className="w-4 h-4 text-indigo-400" />, value: "25+", label: "Business KPIs" },
    { icon: <Code2 className="w-4 h-4 text-purple-400" />, value: "10+", label: "Projects Completed" },
    { icon: <Globe2 className="w-4 h-4 text-emerald-400" />, value: "2", label: "Countries Worked" },
  ];

  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Column 1: Left Text & CTAs & Stats (6 cols on desktop) */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Top Pill / Status Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-cyan-400">Data Analyst</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">Python Developer</span>
              <span className="text-slate-600">·</span>
              <span className="text-purple-300">AI/ML Enthusiast</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-2xl font-bold text-slate-200 tracking-tight">
                Turning Data into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                  Impactful Solutions
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Data Analyst with 4+ years of experience in SQL, Python, Power BI, Tableau, and data engineering tools. I enjoy working with complex datasets, building interactive dashboards, and developing data-driven solutions to solve real business problems.
            </p>

            {/* Location badge */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Lindsay, Ontario · Work Permit</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/25 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Nishant_Neupane_Resume.pdf"
                download="Nishant_Neupane_Resume.pdf"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/50 rounded-xl transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="px-3.5 py-2.5 text-xs font-mono text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 rounded-xl transition-colors cursor-pointer"
              >
                Preview CV
              </button>
            </div>

            {/* 4 Stats Grid directly below buttons */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    {s.icon}
                    <span className="text-base font-extrabold font-mono text-white">
                      {s.value}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono block leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Column 2: Right Side Interactive Dashboard (6 cols on desktop) */}
          <div className="lg:col-span-6 w-full">
            <InteractiveDashboard />
          </div>

        </div>
      </div>
    </section>
  );
}
