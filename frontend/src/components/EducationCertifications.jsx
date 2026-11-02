import React from 'react';
import { education, certifications } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>BACKGROUND & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Certifications
            </span>
          </h2>
          <p className="text-base text-slate-300 mt-2 max-w-2xl">
            Formal training in Artificial Intelligence & Machine Learning combined with an Information Science engineering degree.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Formal Degrees (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              Academic Degrees
            </h3>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all shadow-md group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.institution}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                      {edu.country}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-slate-200 mb-2">
                    {edu.degree}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {edu.details}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-3 border-t border-slate-800/60">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-400" />
              Professional Certifications
            </h3>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/30 transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-purple-300 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                    {cert.badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Summary Card */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-slate-300 leading-relaxed font-mono">
              <span className="text-cyan-300 font-bold block mb-1">
                Continuous Upskilling Focus:
              </span>
              Actively mastering advanced data modeling, modern lakehouse architectures (Databricks, dbt), and generative AI evaluation workflows.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
