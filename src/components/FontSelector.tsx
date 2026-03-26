'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, Check, X } from 'lucide-react';
import { popularFonts, extendedFonts } from '@/lib/theme';

interface FontSelectorProps {
  value: string;
  onChange: (font: string) => void;
  label: string;
}

export default function FontSelector({ value, onChange, label }: FontSelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [loadedFonts, setLoadedFonts] = useState<Set<string>>(new Set(popularFonts));
  const ref = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const allFonts = showAll ? [...new Set([...popularFonts, ...extendedFonts])].sort() : popularFonts;
  const filtered = search
    ? allFonts.filter(f => f.toLowerCase().includes(search.toLowerCase()))
    : allFonts;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    if (open && searchRef.current) searchRef.current.focus();
  }, [open]);

  // Preload font for preview on hover
  const preloadFont = (font: string) => {
    if (loadedFonts.has(font)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, '+')}:wght@400;700&display=swap`;
    document.head.appendChild(link);
    setLoadedFonts(prev => new Set(prev).add(font));
  };

  return (
    <div ref={ref} className="relative">
      <label className="text-xs font-medium mb-1 block" style={{ color: 'var(--t-muted-fg)' }}>{label}</label>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 text-sm transition-colors"
        style={{
          backgroundColor: 'var(--t-muted)',
          color: 'var(--t-fg)',
          border: '1px solid var(--t-border)',
          borderRadius: 'var(--t-radius)',
          fontFamily: `'${value}', sans-serif`,
        }}
      >
        <span>{value}</span>
        <ChevronDown size={14} />
      </button>

      {open && (
        <div
          className="absolute z-50 mt-1 w-full max-h-[360px] overflow-hidden flex flex-col"
          style={{
            backgroundColor: 'var(--t-card)',
            border: '1px solid var(--t-border)',
            borderRadius: 'var(--t-radius)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
          }}
        >
          {/* Search */}
          <div className="p-2 border-b" style={{ borderColor: 'var(--t-border)' }}>
            <div className="relative">
              <Search size={14} className="absolute left-2 top-1/2 -translate-y-1/2" style={{ color: 'var(--t-muted-fg)' }} />
              <input
                ref={searchRef}
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search fonts..."
                className="w-full pl-7 pr-7 py-1.5 text-sm outline-none"
                style={{
                  backgroundColor: 'var(--t-muted)',
                  color: 'var(--t-fg)',
                  borderRadius: 'var(--t-radius)',
                  border: '1px solid var(--t-border)',
                }}
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2">
                  <X size={14} style={{ color: 'var(--t-muted-fg)' }} />
                </button>
              )}
            </div>
          </div>

          {/* Font list */}
          <div className="overflow-y-auto flex-1" style={{ maxHeight: '260px' }}>
            {!showAll && !search && (
              <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold" style={{ color: 'var(--t-muted-fg)' }}>
                Popular
              </div>
            )}
            {filtered.map(font => (
              <button
                key={font}
                onMouseEnter={() => preloadFont(font)}
                onClick={() => {
                  onChange(font);
                  setOpen(false);
                  setSearch('');
                }}
                className="w-full flex items-center justify-between px-3 py-2 text-sm hover:opacity-80 transition-all"
                style={{
                  fontFamily: `'${font}', sans-serif`,
                  color: font === value ? 'var(--t-primary)' : 'var(--t-fg)',
                  backgroundColor: font === value ? 'var(--t-muted)' : 'transparent',
                }}
              >
                <span>{font}</span>
                {font === value && <Check size={14} />}
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="px-3 py-4 text-center text-sm" style={{ color: 'var(--t-muted-fg)' }}>
                No fonts found
              </div>
            )}
          </div>

          {/* Show more toggle */}
          {!search && (
            <div className="p-2 border-t" style={{ borderColor: 'var(--t-border)' }}>
              <button
                onClick={() => setShowAll(!showAll)}
                className="w-full text-center text-xs py-1 font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--t-primary)' }}
              >
                {showAll ? 'Show popular only' : `Show all fonts (${extendedFonts.length}+)`}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
