import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText, CheckCircle2, Database, TrendingUp, BarChart3 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function ResumeModal({ onClose }) {
  const resumeUrl = "/Nishant_Neupane_Resume.pdf";

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn cursor-pointer"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0d131f] border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-950/50 overflow-hidden flex flex-col cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090d16]/95">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-sm">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-bold text-white text-sm">
                Nishant Neupane — Curriculum Vitae
              </span>
              <span className="text-[10px] text-cyan-400 font-mono">
                Official Document • Data Analyst &amp; Analytics Engineer
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-slate-700/80 hover:border-rose-500/40 transition-colors cursor-pointer"
            title="Close (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body: Document Card Overview */}
        <div className="p-6 sm:p-8 space-y-6 text-xs text-slate-300">
          
          {/* Document Summary Card */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-4">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-base font-extrabold text-white">{personalInfo.name}</h3>
                <div className="text-cyan-400 font-semibold text-xs mt-0.5">
                  {personalInfo.role} • 4+ Years Experience
                </div>
                <div className="text-slate-400 text-[11px] mt-1">
                  {personalInfo.location} • {personalInfo.email}
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-bold text-cyan-300 font-mono">
                Official PDF Document
              </span>
            </div>

            {/* Quick Stats Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-800 text-[11px]">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>SQL &amp; Python ETL</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-indigo-300">
                <TrendingUp className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>25+ Business KPIs</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Power BI &amp; Tableau</span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-slate-300 text-xs leading-relaxed pt-1">
              {personalInfo.summary}
            </p>
          </div>

          {/* Direct Actions: Download & Open in New Tab */}
          <div className="space-y-3 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={resumeUrl}
                download="Nishant_Neupane_Resume.pdf"
                className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-950/50 transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>Open &amp; View PDF in New Tab</span>
              </a>
            </div>

            <p className="text-[10px] text-slate-500 text-center font-mono">
              Direct vector PDF • Open in any tab without iframe or browser connection errors
            </p>
          </div>

        </div>

        {/* Bottom Status Strip */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#090d16] flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verified Document Authenticity</span>
          </span>
          <span className="text-slate-500 text-[10px]">
            Size: 153 KB • PDF
          </span>
        </div>

      </div>
    </div>
  );
}
