import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn cursor-pointer"
      onClick={onClose}
    >
      {/* Modal Wrapper */}
      <div
        className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-[#0d131f] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/40 text-slate-200 overflow-hidden cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090d16]/95">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-sm">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-bold text-white text-xs sm:text-sm tracking-wide">
                Nishant Neupane — Curriculum Vitae
              </span>
              <span className="text-[10px] text-cyan-400 font-mono block">
                Official PDF Document • Data Analyst
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              download="Nishant_Neupane_Resume.pdf"
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
              title="Download PDF directly"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors items-center gap-1.5 cursor-pointer"
              title="Open full PDF in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-slate-700/80 hover:border-rose-500/40 transition-colors cursor-pointer"
              aria-label="Close resume preview"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clean PDF Document Embed — Authentic PDF, No Broken Pages */}
        <div className="flex-1 w-full h-full bg-[#080c14] relative overflow-hidden flex flex-col">
          <object
            data={`${resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
            type="application/pdf"
            className="w-full h-full flex-1"
          >
            {/* Fallback iframe */}
            <iframe
              src={`${resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
              title="Nishant Neupane Resume Preview"
              className="w-full h-full flex-1 border-0"
            >
              <div className="p-8 text-center text-slate-300 space-y-3 flex flex-col items-center justify-center h-full">
                <FileText className="w-10 h-10 text-cyan-400 mb-2" />
                <p className="text-sm">Nishant Neupane — Data Analyst Resume</p>
                <a
                  href={resumeUrl}
                  download="Nishant_Neupane_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-lg transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF Directly</span>
                </a>
              </div>
            </iframe>
          </object>
        </div>

        {/* Bottom Status Strip */}
        <div className="px-6 py-2.5 border-t border-slate-800 bg-[#090d16] flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5 text-cyan-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Verified Official Resume PDF</span>
          </span>
          <span className="text-slate-500 font-mono text-[10px]">
            Data Analytics &amp; Machine Learning Specialist
          </span>
        </div>

      </div>
    </div>
  );
}
