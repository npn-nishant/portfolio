import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Check, 
  Copy, 
  Code2, 
  Lightbulb, 
  TrendingUp, 
  ShieldCheck,
  Cpu
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [copiedCode, setCopiedCode] = useState(false);

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

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet?.code) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn cursor-pointer"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0f172a] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/40 text-slate-200 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent High-Z Close Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-5 right-5 z-50 p-2.5 rounded-xl bg-slate-800/90 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 border border-slate-700/80 hover:border-rose-500/40 transition-all cursor-pointer shadow-lg shadow-black/40 group"
          aria-label="Close modal"
          title="Close (Esc)"
        >
          <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        {/* Category & Status */}
        <div className="flex flex-wrap items-center gap-2 mb-3 pr-12">
          <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
            {project.category}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {project.period}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 pr-12">
          {project.title}
        </h3>
        <p className="text-sm text-cyan-300 font-medium mb-6">
          {project.tagline}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
          {project.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                {m.val}
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-cyan-400" />
            Executive Overview & Business Problem
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
            {project.overview}
          </p>
        </div>

        {/* Key Features & Methodology */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-400" />
            Methodology & Technical Execution
          </h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.keyFeatures.map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Code Snippet / Calculation */}
        {project.codeSnippet && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400" />
                {project.codeSnippet.title} ({project.codeSnippet.lang})
              </h4>
              <button
                type="button"
                onClick={handleCopyCode}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 p-1 px-2.5 rounded bg-slate-900 border border-slate-800 cursor-pointer"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>{project.codeSnippet.code}</code>
            </pre>
          </div>
        )}

        {/* Tech Stack Tags & Bottom Buttons */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-slate-400 mr-2">Tech:</span>
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors ml-auto cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
