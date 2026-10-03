import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface CardProps extends HTMLMotionProps<'div'> {
  hoverEffect?: boolean;
  glow?: boolean;
  chrome?: boolean;
  chromeTitle?: string;
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverEffect = true,
  glow = false,
  chrome = false,
  chromeTitle,
  className,
  children,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "relative rounded-xl border transition-all duration-200",
        "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm",
        "border-slate-200/80 dark:border-slate-800/80",
        "shadow-sm dark:shadow-none",
        hoverEffect && "hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md dark:hover:shadow-slate-950/50",
        glow && "hover:border-emerald-500/40 dark:hover:border-emerald-500/30",
        className
      )}
      {...props}
    >
      {chrome && (
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-950/60 rounded-t-xl">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          {chromeTitle && (
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-medium truncate max-w-[200px]">
              {chromeTitle}
            </span>
          )}
          <div className="w-8" />
        </div>
      )}
      <div className={chrome ? "p-5 sm:p-6" : ""}>{children}</div>
    </motion.div>
  );
};
