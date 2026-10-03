import React from 'react';
import { Copy, Check } from 'lucide-react';
import { useClipboard } from '../../hooks/useClipboard';
import { cn } from '../../utils/cn';

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  filename,
  className
}) => {
  const { copied, copy } = useClipboard();

  return (
    <div className={cn("relative font-mono text-xs sm:text-sm rounded-xl overflow-hidden border border-slate-800 bg-slate-950/90 shadow-2xl", className)}>
      {/* Chrome header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-slate-800/80">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          {filename && (
            <span className="ml-2 text-xs text-slate-400 font-medium select-none">
              {filename}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          {language && (
            <span className="text-[11px] text-slate-500 uppercase font-semibold select-none">
              {language}
            </span>
          )}
          <button
            onClick={() => copy(code)}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title={copied ? "Copied!" : "Copy code"}
            aria-label="Copy code to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Code content */}
      <div className="p-4 overflow-x-auto text-slate-300 leading-relaxed scrollbar-thin">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
