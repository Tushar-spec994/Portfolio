import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { codingProfilesData } from '../../../data/codingProfiles';
import { Container } from '../../layout/Container';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';

export const CodingProfiles: React.FC = () => {
  return (
    <section id="coding-profiles" className="py-20 relative">
      <Container>
        <SectionHeading
          number="05"
          tag="ALGORITHMIC PROBLEM SOLVING"
          title="Coding Profiles & Competitive Programming"
          subtitle="Continuous practice in data structures, algorithms, and complexity optimization across leading competitive platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {codingProfilesData.map((profile, idx) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card
                hoverEffect
                glow
                className="h-full p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-500">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {profile.platform}
                        </h3>
                        <span className="text-xs font-mono text-slate-500">
                          @{profile.username}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {profile.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block">
                      Key Competencies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {profile.focus.map((item, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200 dark:border-slate-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-center"
                    asAnchor
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                    iconPosition="right"
                  >
                    View {profile.platform} Profile
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
