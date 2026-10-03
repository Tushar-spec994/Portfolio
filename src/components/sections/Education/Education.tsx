import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../../../data/education';
import { Container } from '../../layout/Container';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-100/40 dark:bg-slate-900/30">
      <Container>
        <SectionHeading
          number="06"
          tag="ACADEMIC BACKGROUND"
          title="Education & Credentials"
          subtitle="Strong academic foundation in Computer Science with distinction in core computing principles."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="p-6 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {edu.institution}
                        </h3>
                        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                          {edu.degree}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {edu.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  {/* CGPA Badge */}
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center shrink-0 self-start">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-500 dark:text-emerald-400">
                      {edu.grade.value}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                      Academic Distinction
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-6 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block">
                    Academic Highlights
                  </span>
                  <ul className="space-y-2">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coursework */}
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block mb-2.5">
                    Relevant Coursework
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200 dark:border-slate-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
