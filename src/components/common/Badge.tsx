import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps {
  variant?: 'brand' | 'cyan' | 'neutral' | 'outline' | 'tech' | 'method';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'brand',
  size = 'md',
  children,
  icon,
  className
}) => {
  const variants = {
    brand: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
    cyan: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20",
    neutral: "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60",
    outline: "bg-transparent text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700",
    tech: "font-mono bg-slate-100 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-slate-300/80 dark:border-slate-800 hover:border-emerald-500/50 transition-colors",
    method: "font-mono font-semibold bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/30",
  };

  const sizes = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-xs sm:text-sm px-2.5 py-1 gap-1.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-md tracking-tight",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <span className="opacity-80">{icon}</span>}
      {children}
    </span>
  );
};
