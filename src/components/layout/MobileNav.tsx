import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Send, Moon, Sun } from 'lucide-react';
import { NavItem } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../common/Button';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection: string;
  onOpenResume: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navItems,
  activeSection,
  onOpenResume,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono font-bold text-sm text-white">TKD.dev</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs font-mono text-slate-500">#{item.href.replace('#', '')}</span>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between px-2 text-sm text-slate-400">
                <span>Theme Mode</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white flex items-center gap-2 text-xs font-mono"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
                  <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                </button>
              </div>

              <Button
                variant="outline"
                className="w-full justify-center"
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                icon={<FileText className="w-4 h-4" />}
              >
                View Resume
              </Button>

              <Button
                variant="primary"
                className="w-full justify-center"
                asAnchor
                href="#contact"
                onClick={onClose}
                icon={<Send className="w-4 h-4" />}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
