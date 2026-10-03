import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface SectionHeadingProps {
  number?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tag,
  title,
  subtitle,
  align = 'left',
  className
}) => {
  return (
    <div className={cn("mb-12", align === 'center' ? 'text-center' : 'text-left', className)}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={cn(
          "inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-mono tracking-wider uppercase",
          align === 'center' ? 'justify-center' : 'justify-start'
        )}
      >
        {number && (
          <span className="text-emerald-500 dark:text-emerald-400 font-bold">
            {number}
          </span>
        )}
        {number && tag && <span className="text-slate-400 dark:text-slate-600">//</span>}
        {tag && (
          <span className="text-slate-600 dark:text-slate-400 font-medium">
            {tag}
          </span>
        )}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={cn(
            "mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed",
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
