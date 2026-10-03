import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../../data/experience';
import { Container } from '../../layout/Container';
import { SectionHeading } from '../../common/SectionHeading';
import { ExperienceCard } from './ExperienceCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <Container>
        <SectionHeading
          number="03"
          tag="WORK HISTORY"
          title="Professional Experience"
          subtitle="Engineering impact across enterprise organizations, driving performance optimizations and building reliable systems."
        />

        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
            >
              <ExperienceCard experience={exp} defaultExpanded={idx === 0} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
