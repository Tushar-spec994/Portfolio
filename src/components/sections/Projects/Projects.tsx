import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../../../data/projects';
import { Container } from '../../layout/Container';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';
import { Button } from '../../common/Button';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative bg-slate-100/40 dark:bg-slate-900/30">
      <Container>
        <SectionHeading
          number="04"
          tag="FEATURED WORK"
          title="Engineering Projects"
          subtitle="Real-world web applications showcasing API integration, modern UI architecture, and search engines."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
            >
              <Card
                chrome
                chromeTitle={project.title}
                hoverEffect
                className="h-full flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      {project.metrics && (
                        <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                          {project.metrics}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block">
                      Core Implementation Details
                    </span>
                    <ul className="space-y-1.5">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block">
                      Key Features
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200 dark:border-slate-800"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Tech Stack & Links */}
                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <Badge key={tIdx} variant="tech" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2">
                    {project.links.github && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asAnchor
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={<Github className="w-3.5 h-3.5" />}
                      >
                        Code
                      </Button>
                    )}
                    {project.links.live && (
                      <Button
                        variant="primary"
                        size="sm"
                        asAnchor
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={<ExternalLink className="w-3.5 h-3.5" />}
                      >
                        Preview
                      </Button>
                    )}
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
