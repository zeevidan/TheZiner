'use client';

import { useState } from 'react';
import { X, Copy, Check, FileJson, FileText } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { themeToPrompt } from '@/lib/theme';

interface ExportModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ExportModal({ open, onClose }: ExportModalProps) {
  const { theme } = useTheme();
  const [format, setFormat] = useState<'markdown' | 'json'>('markdown');
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const output = themeToPrompt(theme, format);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-2xl max-h-[80vh] flex flex-col"
        style={{
          backgroundColor: 'var(--t-card)',
          color: 'var(--t-card-fg)',
          borderRadius: 'var(--t-radius)',
          border: `var(--t-border-width) solid var(--t-border)`,
          boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--t-border)' }}>
          <h2 className="text-lg font-semibold" style={{ fontFamily: 'var(--t-font-heading)' }}>Export Design System</h2>
          <button onClick={onClose} className="p-1 hover:opacity-70"><X size={20} /></button>
        </div>

        {/* Format toggle */}
        <div className="flex gap-2 p-4 pb-0">
          <button
            onClick={() => setFormat('markdown')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors"
            style={{
              backgroundColor: format === 'markdown' ? 'var(--t-primary)' : 'var(--t-muted)',
              color: format === 'markdown' ? 'var(--t-primary-fg)' : 'var(--t-fg)',
              borderRadius: 'var(--t-radius)',
            }}
          >
            <FileText size={14} /> Markdown
          </button>
          <button
            onClick={() => setFormat('json')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors"
            style={{
              backgroundColor: format === 'json' ? 'var(--t-primary)' : 'var(--t-muted)',
              color: format === 'json' ? 'var(--t-primary-fg)' : 'var(--t-fg)',
              borderRadius: 'var(--t-radius)',
            }}
          >
            <FileJson size={14} /> JSON
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          <pre
            className="text-xs leading-relaxed whitespace-pre-wrap p-4 overflow-auto"
            style={{
              backgroundColor: 'var(--t-muted)',
              color: 'var(--t-fg)',
              borderRadius: 'var(--t-radius)',
              border: `1px solid var(--t-border)`,
              fontFamily: 'ui-monospace, monospace',
              maxHeight: '400px',
            }}
          >
            {output}
          </pre>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 p-4 border-t" style={{ borderColor: 'var(--t-border)' }}>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors"
            style={{
              backgroundColor: 'var(--t-primary)',
              color: 'var(--t-primary-fg)',
              borderRadius: 'var(--t-radius)',
            }}
          >
            {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy to Clipboard</>}
          </button>
        </div>
      </div>
    </div>
  );
}
