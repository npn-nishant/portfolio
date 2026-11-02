import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  FileText, 
  Menu, 
  X, 
  Mail, 
  Download, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[2px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center font-mono font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                NN
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-1.5 animate-pulse"></span>
                  Data Analyst @ Lyft
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono hidden md:block">
                Data Analyst • Python & BI
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={handleCopyEmail}
              title="Copy email to clipboard"
              className="relative px-3 py-2 text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Email</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenResume}
              className="px-3 py-2 text-xs font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all flex items-center gap-1.5"
              title="Preview Resume on screen"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Preview</span>
            </button>

            <a
              href="/Nishant_Neupane_Resume.pdf"
              download="Nishant_Neupane_Resume.pdf"
              className="px-3.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg shadow-md shadow-indigo-950/50 hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090d16] border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="/Nishant_Neupane_Resume.pdf"
              download="Nishant_Neupane_Resume.pdf"
              className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-lg flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Official Resume (PDF)
            </a>
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 px-4 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              Preview Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
