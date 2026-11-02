import React, { useState, useEffect } from 'react';
import { personalInfo, experience, skillsByCategory, education, certifications } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Check,
  Copy
} from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

export default function ResumeModal({ onClose }) {
  const [copied, setCopied] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyContacts = () => {
    const text = `${personalInfo.name} | Data Analyst\nEmail: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nLinkedIn: ${personalInfo.linkedin}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn cursor-pointer"
      onClick={onClose}
    >
      {/* Modal Wrapper */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0d131f] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/40 text-slate-200 overflow-hidden cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090d16]/90">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm font-bold text-white tracking-wide">
              Nishant_Neupane_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Nishant_Neupane_Resume.pdf"
              download="Nishant_Neupane_Resume.pdf"
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="p-2 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-slate-700/80 hover:border-rose-500/40 transition-colors cursor-pointer"
              aria-label="Close resume preview"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6 text-slate-300 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-base font-semibold text-cyan-400 mt-1">
              Data Analyst
            </p>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-slate-400 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {personalInfo.phone}
              </span>
              <span>•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:underline"
              >
                <LinkedinIcon className="w-3 h-3" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2">
              Technical & Domain Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div>
                <strong className="text-white font-mono">BI & Visualization:</strong> Power BI, Tableau, Advanced Excel, VBA, Macros, DAX, Power Query, Data Storytelling
              </div>
              <div>
                <strong className="text-white font-mono">SQL & Data Management:</strong> SQL (PostgreSQL, MySQL), Data Modeling, ETL/ELT, Data Validation, dbt, Elasticsearch
              </div>
              <div>
                <strong className="text-white font-mono">Programming & Statistics:</strong> Python (Pandas, NumPy, Scikit-learn), Statistical Analysis, Regression, Predictive Analytics
              </div>
              <div>
                <strong className="text-white font-mono">Financial & Business:</strong> Variance Analysis, Financial Modeling, KPI Tracking, SAP, Bloomberg Terminal, Hyperion
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
              Work Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.company}>
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <span className="text-sm font-bold text-white">
                      {exp.company} — <span className="text-cyan-300">{exp.role}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {exp.period} | {exp.location}
                    </span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 leading-relaxed mt-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h.text}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.institution} className="flex flex-wrap items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white">{edu.institution}</span> ({edu.country}) — {edu.degree}
                  </div>
                  <span className="font-mono text-slate-400">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="pt-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((c) => (
                <div key={c.name} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>{c.name} ({c.issuer})</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#090d16] flex items-center justify-between">
          <a
            href="/Nishant_Neupane_Resume.pdf"
            download="Nishant_Neupane_Resume.pdf"
            className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Original PDF File (153 KB)</span>
          </a>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
