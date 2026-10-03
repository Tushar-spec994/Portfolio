import React, { useState } from 'react';
import { Copy, Check, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { useClipboard } from '../../../hooks/useClipboard';

export const TerminalPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'config' | 'status'>('config');
  const { copied, copy } = useClipboard();

  const codeString = `// engineer.config.ts
import { SoftwareEngineer } from '@bosch/engineering';

export const engineer: SoftwareEngineer = {
  name: "Tushar Kumar Das",
  role: "Software Engineer",
  company: "BOSCH Global Software & Tech",
  location: "Hyderabad, India",
  education: {
    degree: "B.Tech in Computer Science",
    institution: "KIIT University",
    cgpa: "9.02 / 10.0"
  },
  coreStack: [
    "React.js",
    "TypeScript",
    "REST APIs",
    "Swagger / OpenAPI",
    "Tailwind CSS"
  ],
  engineeringImpact: {
    kafkaToRestMigration: "Reduced support effort by ~40%",
    apiDesign: "10+ Swagger/OpenAPI endpoints authored",
    aiAssistedVelocity: "+30% delivery acceleration"
  },
  status: "Available for new opportunities"
};`;

  const statusOutput = `$ curl -X GET https://api.tushardas.dev/v1/health
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ready",
  "engineer": "Tushar Kumar Das",
  "currentEmployer": "BOSCH Global Software and Technologies",
  "specialization": ["React", "TypeScript", "REST APIs", "State Architecture"],
  "openToOpportunities": true,
  "systemIntegrity": "100%",
  "latency": "14ms"
}`;

  const currentContent = activeTab === 'config' ? codeString : statusOutput;

  return (
    <div className="relative group rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/95 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-slate-700">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block hover:opacity-100 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block hover:opacity-100 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex items-center space-x-1 ml-3 bg-slate-950/70 rounded-md p-0.5 border border-slate-800/80">
            <button
              onClick={() => setActiveTab('config')}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                activeTab === 'config'
                  ? 'bg-slate-800 text-emerald-400 font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              engineer.ts
            </button>
            <button
              onClick={() => setActiveTab('status')}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                activeTab === 'status'
                  ? 'bg-slate-800 text-cyan-400 font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              api.response.json
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-slate-500">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>TypeScript 5.0</span>
          </span>
          <button
            onClick={() => copy(currentContent)}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title={copied ? "Copied!" : "Copy code"}
            aria-label="Copy snippet"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono text-slate-300 leading-relaxed max-h-[380px] scrollbar-thin">
        {activeTab === 'config' ? (
          <pre className="text-slate-300">
            <code>
              <span className="text-slate-500">// engineer.config.ts</span>
              {"\n"}
              <span className="text-purple-400">import</span> &#123; <span className="text-amber-300">SoftwareEngineer</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@bosch/engineering'</span>;
              {"\n\n"}
              <span className="text-purple-400">export const</span> <span className="text-blue-400">engineer</span>: <span className="text-amber-300">SoftwareEngineer</span> = &#123;
              {"\n"}  <span className="text-slate-400">name</span>: <span className="text-emerald-300">"Tushar Kumar Das"</span>,
              {"\n"}  <span className="text-slate-400">role</span>: <span className="text-emerald-300">"Software Engineer"</span>,
              {"\n"}  <span className="text-slate-400">company</span>: <span className="text-emerald-300">"BOSCH Global Software & Tech"</span>,
              {"\n"}  <span className="text-slate-400">education</span>: &#123;
              {"\n"}    <span className="text-slate-400">degree</span>: <span className="text-emerald-300">"B.Tech in Computer Science"</span>,
              {"\n"}    <span className="text-slate-400">institution</span>: <span className="text-emerald-300">"KIIT University"</span>,
              {"\n"}    <span className="text-slate-400">cgpa</span>: <span className="text-cyan-300">"9.02 / 10.0"</span>
              {"\n"}  &#125;,
              {"\n"}  <span className="text-slate-400">coreStack</span>: [
              {"\n"}    <span className="text-emerald-300">"React.js"</span>, <span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"REST APIs"</span>,
              {"\n"}    <span className="text-emerald-300">"Swagger/OpenAPI"</span>, <span className="text-emerald-300">"Tailwind CSS"</span>
              {"\n"}  ],
              {"\n"}  <span className="text-slate-400">status</span>: <span className="text-emerald-300">"Open for Opportunities"</span>
              {"\n"}&#125;;
            </code>
          </pre>
        ) : (
          <pre className="text-slate-300">
            <code>
              <span className="text-emerald-400">$</span> <span className="text-cyan-300">curl -X GET https://api.tushardas.dev/v1/health</span>
              {"\n"}
              <span className="text-slate-500">HTTP/1.1 200 OK</span>
              {"\n"}
              <span className="text-slate-500">Content-Type: application/json</span>
              {"\n\n"}
              &#123;
              {"\n"}  <span className="text-purple-400">"status"</span>: <span className="text-emerald-300">"ready"</span>,
              {"\n"}  <span className="text-purple-400">"engineer"</span>: <span className="text-emerald-300">"Tushar Kumar Das"</span>,
              {"\n"}  <span className="text-purple-400">"currentEmployer"</span>: <span className="text-emerald-300">"BOSCH"</span>,
              {"\n"}  <span className="text-purple-400">"specialization"</span>: [
              {"\n"}    <span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"REST APIs"</span>
              {"\n"}  ],
              {"\n"}  <span className="text-purple-400">"openToOpportunities"</span>: <span className="text-amber-300">true</span>,
              {"\n"}  <span className="text-purple-400">"latency"</span>: <span className="text-emerald-300">"14ms"</span>
              {"\n"}&#125;
            </code>
          </pre>
        )}
      </div>

      {/* Terminal status bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/60 border-t border-slate-800 text-[11px] font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3 h-3 text-emerald-400" />
          <span>BOSCH • Software Engineering</span>
        </div>
        <div className="flex items-center gap-1 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Online</span>
        </div>
      </div>
    </div>
  );
};
