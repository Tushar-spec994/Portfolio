import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Network,
  Zap,
  Cpu,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Container } from "../../layout/Container";
import { SectionHeading } from "../../common/SectionHeading";
import { Card } from "../../common/Card";

export const About: React.FC = () => {
  const principles = [
    {
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      title: "Component Architecture",
      description:
        "Writing maintainable, modular React & TypeScript components with clean separation of state, hooks, and presentation logic.",
    },
    {
      icon: <Network className="w-5 h-5 text-cyan-400" />,
      title: "API-First Integration",
      description:
        "Designing and consuming RESTful endpoints with Swagger/OpenAPI contracts, ensuring reliable data exchange and low maintenance overhead.",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Performance & DX",
      description:
        "Optimizing DOM updates, in-place filtering, debounced query pipelines, and utilizing AI-assisted tooling like Copilot and Gemini Code Assist.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <Container>
        <SectionHeading
          number="01"
          tag="ABOUT ME"
          title="Code. Think. Ship."
          subtitle="A passionate Software Engineer dedicated to solving complex system challenges with clean, scalable, and type-safe solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            <Card className="p-6 sm:p-8 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-emerald-500" />
                Frontend Systems & API Integration
              </h3>
              <p>
                I am a{" "}
                <strong>
                  Software Engineer at BOSCH Global Software and Technologies
                </strong>{" "}
                in Hyderabad, where I build robust enterprise web applications
                using <strong>React.js</strong> and <strong>TypeScript</strong>.
                My day-to-day focus spans client-server synchronization, dynamic
                state management with custom hooks, in-place dataset query
                engines, and audit trail approvals.
              </p>
              <p>
                Prior to BOSCH, at <strong>HighRadius Corporation</strong>, I
                developed FinTech invoice applications automating Accounts
                Receivable across 1,000+ transaction records using React.js,
                Java Servlets, JDBC DAO architectures, and integrated AI
                predictive models.
              </p>
              <p>
                I graduated from <strong>KIIT University</strong> with a B.Tech
                in Computer Science and a <strong>9.02 CGPA</strong>. I believe
                that great software comes from thoughtful component
                architecture, strict type contracts, and continuous optimization
                for developer velocity and user experience.
              </p>

              {/* Key competencies pills */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block mb-3">
                  Core Engineering Capabilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>React Hooks & State Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>REST API & OpenAPI / Swagger</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Dynamic Filtering & Real-time Edits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>AI-Assisted Development (Copilot/Gemini)</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: 3 Principles */}
          <div className="lg:col-span-5 space-y-4">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card hoverEffect glow className="p-5 sm:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
                      {principle.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                        {principle.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Quick highlight box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/20 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>
                Available for Software Engineering roles across frontend &
                full-stack domains.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
