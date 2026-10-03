import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Container } from './Container';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/60 transition-colors">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
                &lt;T/&gt;
              </span>
              <span className="font-bold text-slate-900 dark:text-white">
                {profileData.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Software Engineer at BOSCH specializing in React, TypeScript, state architectures, and robust REST APIs. Always engineering for performance, clarity, and reliability.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 pt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to Software Engineering opportunities</span>
            </div>
          </div>

          {/* Col 2: Navigation shortcuts */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#about" className="hover:text-emerald-500 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-emerald-500 transition-colors">Technical Skills</a></li>
              <li><a href="#experience" className="hover:text-emerald-500 transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a></li>
              <li><a href="#coding-profiles" className="hover:text-emerald-500 transition-colors">Coding Profiles</a></li>
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-3">
              Connect
            </h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.socials.email}
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-emerald-500" />
            <span>Built with React 18 • TypeScript • Tailwind CSS • Framer Motion</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Tushar Kumar Das</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
