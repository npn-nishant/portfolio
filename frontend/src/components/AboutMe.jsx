import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  BarChart3, 
  Cpu, 
  Lightbulb, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Workflow,
  GraduationCap
} from 'lucide-react';

export default function AboutMe({ onOpenResume }) {
  const pillars = [
    {
      icon: <BarChart3 className="w-5 h-5 text-cyan-400" />,
      title: "Data Analysis & Executive BI",
      description:
        "Transforming complex, disparate datasets into clear, interactive Power BI & Tableau dashboards with DAX measures and automated refreshes.",
      accent: "border-cyan-500/30 bg-cyan-500/5",
      badge: "Power BI & Tableau",
    },
    {
      icon: <Workflow className="w-5 h-5 text-indigo-400" />,
      title: "Data Engineering & Automation",
      description:
        "Building automated data pipelines, ETL workflows, and scheduled reporting scripts using Python, SQL, and Power Query that slash manual overhead.",
      accent: "border-indigo-500/30 bg-indigo-500/5",
      badge: "Python & SQL ETL",
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-purple-400" />,
      title: "Analytical Problem Solving & ML",
      description:
        "Applying exploratory data analysis, statistical modeling, churn prediction, and anomaly detection to uncover root causes and drive commercial growth.",
      accent: "border-purple-500/30 bg-purple-500/5",
      badge: "Scikit-Learn & Modeling",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data Analyst with a Passion for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Impactful Solutions
            </span>
          </h2>
        </div>

        {/* 2-Column Split: Photo Card & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left: Professional Framed Photo Card (4 cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
              
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
                <img
                  src="/nishant-portrait-torso.jpg"
                  alt={personalInfo.name}
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80"></div>
                
                {/* Photo Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs font-mono">
                  <div className="font-bold text-white text-sm mb-0.5">
                    Nishant Neupane
                  </div>
                  <div className="text-cyan-400 flex items-center justify-between">
                    <span>Data Analyst • Canada</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Work Permit
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative Story & Key Badges (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I'm a Data Analyst with <span className="text-white font-semibold">4+ years of hands-on experience</span> turning operational, financial, and business data into high-value commercial decisions. With a <span className="text-cyan-300 font-medium">Postgraduate Diploma in AI & ML</span> from Lambton College and a Bachelor's in Information Science, I bridge database engineering, automated pipelines, and executive reporting.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              At Lyft, I designed and deployed automated reporting workflows tracking 25+ key enterprise KPIs, cutting manual preparation from 6 hours to under 90 minutes. At Twilio, I engineered scalable backend queries and data pipelines that boosted query performance by 20%.
            </p>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">Based in</span>
                  <span className="text-xs font-semibold text-slate-200">Lindsay, Ontario</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">Open to</span>
                  <span className="text-xs font-semibold text-slate-200">Open to Relocation</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">Work Auth</span>
                  <span className="text-xs font-semibold text-slate-200">Canada Work Permit</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`p-6 rounded-2xl border ${pillar.accent} bg-slate-900/40 backdrop-blur-sm hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/20`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-medium text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>View analytical methods</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
