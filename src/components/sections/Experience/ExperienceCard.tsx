import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { ExperienceItem } from '../../../types';
import { Badge } from '../../common/Badge';
import { Card } from '../../common/Card';

export interface ExperienceCardProps {
  experience: ExperienceItem;
  defaultExpanded?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  defaultExpanded = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Card className="p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {experience.role}
            </h3>
            {experience.current && (
              <Badge variant="brand" size="sm">
                Present Role
              </Badge>
            )}
            <Badge variant="neutral" size="sm">
              {experience.type}
            </Badge>
          </div>

          <div className="text-base font-semibold text-emerald-600 dark:text-emerald-400">
            {experience.company}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {experience.period}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Metrics Grid Pill */}
        {experience.metrics && experience.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 shrink-0">
            {experience.metrics.map((metric, mIdx) => (
              <div
                key={mIdx}
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center"
              >
                <div className="text-base sm:text-lg font-bold font-mono text-emerald-500 dark:text-emerald-400">
                  {metric.value}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary Narrative */}
      <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
        {experience.summary}
      </p>

      {/* Highlights List */}
      <div className="mt-6 space-y-3">
        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold flex items-center justify-between">
          <span>Key Engineering Accomplishments</span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-emerald-500 hover:underline flex items-center gap-1 font-sans"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp className="w-3.5 h-3.5" /></>
            ) : (
              <>Show All ({experience.highlights.length}) <ChevronDown className="w-3.5 h-3.5" /></>
            )}
          </button>
        </div>

        <ul className="space-y-2.5">
          {(isExpanded ? experience.highlights : experience.highlights.slice(0, 4)).map((highlight, hIdx) => (
            <motion.li
              key={hIdx}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Badges */}
      <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block mb-2.5">
          Technologies & Tools Utilized
        </span>
        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200 dark:border-slate-800/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};
