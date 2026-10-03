import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Network, Database, Wrench } from 'lucide-react';
import { skillsData } from '../../../data/skills';
import { Container } from '../../layout/Container';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    languages: <Code2 className="w-4 h-4" />,
    frontend: <Layout className="w-4 h-4" />,
    api_backend: <Network className="w-4 h-4" />,
    database: <Database className="w-4 h-4" />,
    tools_practices: <Wrench className="w-4 h-4" />,
  };

  const displayedCategories = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-slate-100/40 dark:bg-slate-900/30">
      <Container>
        <SectionHeading
          number="02"
          tag="TECHNICAL PROFICIENCIES"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit of languages, frontend frameworks, API design paradigms, and developer tooling."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 justify-start sm:justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-emerald-500 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            All Skills
          </button>
          {skillsData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {categoryIcons[cat.id]}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: catIdx * 0.05 }}
              >
                <Card chrome chromeTitle={category.title} hoverEffect className="h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="group relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all duration-200 bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400"
                        >
                          {skill.featured && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Core competency" />
                          )}
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-sans uppercase">
                              {skill.level === 'Core' ? '★' : ''}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Legend / Key */}
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Core Enterprise Focus</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">★</span>
            <span>Daily Production Use</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
