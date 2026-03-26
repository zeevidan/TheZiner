'use client';

import { useState } from 'react';
import { Settings, Shuffle, Download, ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { presets, generateRandomPalette, defaultTheme } from '@/lib/theme';
import ColorPicker from './ColorPicker';
import FontSelector from './FontSelector';
import ExportModal from './ExportModal';

export default function ConfigDrawer() {
  const { theme, setTheme, updateTheme, updateColors, updateFonts } = useTheme();
  const [open, setOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [section, setSection] = useState<'presets' | 'colors' | 'typography' | 'shape'>('presets');

  const colorFields: { key: keyof typeof theme.colors; label: string }[] = [
    { key: 'primary', label: 'Primary' },
    { key: 'primaryForeground', label: 'Primary Text' },
    { key: 'secondary', label: 'Secondary' },
    { key: 'secondaryForeground', label: 'Secondary Text' },
    { key: 'accent', label: 'Accent' },
    { key: 'accentForeground', label: 'Accent Text' },
    { key: 'background', label: 'Background' },
    { key: 'foreground', label: 'Foreground' },
    { key: 'muted', label: 'Muted' },
    { key: 'mutedForeground', label: 'Muted Text' },
    { key: 'card', label: 'Card' },
    { key: 'cardForeground', label: 'Card Text' },
    { key: 'border', label: 'Border' },
    { key: 'destructive', label: 'Destructive' },
    { key: 'success', label: 'Success' },
  ];

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 p-3 transition-all hover:scale-105"
        style={{
          backgroundColor: 'var(--t-primary)',
          color: 'var(--t-primary-fg)',
          borderRadius: 'var(--t-radius) 0 0 var(--t-radius)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
        title="Design Settings"
      >
        <Settings size={20} className={open ? 'animate-spin' : ''} style={{ animationDuration: '3s' }} />
      </button>

      {/* Drawer overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/20" onClick={() => setOpen(false)} />
      )}

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full z-50 transition-transform duration-300 flex flex-col"
        style={{
          width: '340px',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          backgroundColor: 'var(--t-card-alpha)',
          backdropFilter: 'var(--t-backdrop)',
          WebkitBackdropFilter: 'var(--t-backdrop)',
          color: 'var(--t-card-fg)',
          borderLeft: `var(--t-border-width) solid var(--t-border)`,
          boxShadow: open ? '-10px 0 40px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--t-border)' }}>
          <div className="flex items-center gap-2">
            <button onClick={() => setOpen(false)}>
              <ChevronRight size={18} />
            </button>
            <h2 className="text-base font-bold" style={{ fontFamily: 'var(--t-font-heading)' }}>
              Theziner
            </h2>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => setTheme(defaultTheme)}
              className="p-1.5 hover:opacity-70 transition-opacity"
              title="Reset"
            >
              <RotateCcw size={15} />
            </button>
            <button
              onClick={() => setExportOpen(true)}
              className="p-1.5 hover:opacity-70 transition-opacity"
              title="Export"
              style={{ color: 'var(--t-primary)' }}
            >
              <Download size={15} />
            </button>
          </div>
        </div>

        {/* Section tabs */}
        <div className="flex border-b" style={{ borderColor: 'var(--t-border)' }}>
          {(['presets', 'colors', 'typography', 'shape'] as const).map(s => (
            <button
              key={s}
              onClick={() => setSection(s)}
              className="flex-1 py-2.5 text-[11px] font-semibold uppercase tracking-wider transition-colors"
              style={{
                borderBottom: section === s ? `2px solid var(--t-primary)` : '2px solid transparent',
                color: section === s ? 'var(--t-primary)' : 'var(--t-muted-fg)',
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Presets */}
          {section === 'presets' && (
            <div className="space-y-2">
              <p className="text-xs mb-3" style={{ color: 'var(--t-muted-fg)' }}>
                Pick a starting point, then customize.
              </p>
              {presets.map((preset, i) => (
                <button
                  key={i}
                  onClick={() => setTheme(preset)}
                  className="w-full flex items-center gap-3 p-3 text-left transition-all hover:scale-[1.01]"
                  style={{
                    backgroundColor: theme.name === preset.name ? 'var(--t-muted)' : 'transparent',
                    border: `1px solid ${theme.name === preset.name ? 'var(--t-primary)' : 'var(--t-border)'}`,
                    borderRadius: 'var(--t-radius)',
                  }}
                >
                  {/* Color preview dots */}
                  <div className="flex gap-1">
                    {[preset.colors.primary, preset.colors.accent, preset.colors.background, preset.colors.foreground].map((c, j) => (
                      <div
                        key={j}
                        className="w-5 h-5 rounded-full border"
                        style={{ backgroundColor: c, borderColor: 'var(--t-border)' }}
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{preset.name}</div>
                    <div className="text-[10px]" style={{ color: 'var(--t-muted-fg)' }}>{preset.style}</div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Colors */}
          {section === 'colors' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs" style={{ color: 'var(--t-muted-fg)' }}>Click swatches to edit.</p>
                <button
                  onClick={() => updateColors(generateRandomPalette())}
                  className="flex items-center gap-1 px-2 py-1 text-xs font-medium transition-colors hover:opacity-80"
                  style={{
                    backgroundColor: 'var(--t-primary)',
                    color: 'var(--t-primary-fg)',
                    borderRadius: 'var(--t-radius)',
                  }}
                >
                  <Shuffle size={12} /> Random
                </button>
              </div>
              {colorFields.map(({ key, label }) => (
                <ColorPicker
                  key={key}
                  value={theme.colors[key]}
                  onChange={v => updateColors({ [key]: v })}
                  label={label}
                />
              ))}
            </div>
          )}

          {/* Typography */}
          {section === 'typography' && (
            <div className="space-y-4">
              <FontSelector
                value={theme.fonts.heading}
                onChange={f => updateFonts({ heading: f })}
                label="Heading Font"
              />
              <FontSelector
                value={theme.fonts.body}
                onChange={f => updateFonts({ body: f })}
                label="Body Font"
              />
              <div className="mt-6 p-4" style={{ backgroundColor: 'var(--t-muted)', borderRadius: 'var(--t-radius)' }}>
                <p className="text-xs mb-2" style={{ color: 'var(--t-muted-fg)' }}>Preview</p>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--t-font-heading)' }}>
                  The Quick Brown Fox
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--t-font-body)' }}>
                  Jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          )}

          {/* Shape */}
          {section === 'shape' && (
            <div className="space-y-5">
              {/* Border Radius */}
              <div>
                <label className="text-xs font-medium mb-2 block" style={{ color: 'var(--t-muted-fg)' }}>
                  Border Radius: {theme.borderRadius}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="24"
                  value={theme.borderRadius}
                  onChange={e => updateTheme({ borderRadius: Number(e.target.value) })}
                  className="w-full accent-[var(--t-primary)]"
                />
                <div className="flex justify-between text-[10px] mt-1" style={{ color: 'var(--t-muted-fg)' }}>
                  <span>Sharp</span><span>Round</span>
                </div>
              </div>

              {/* Shadow */}
              <div>
                <label className="text-xs font-medium mb-2 block" style={{ color: 'var(--t-muted-fg)' }}>
                  Shadow
                </label>
                <div className="flex gap-1.5 flex-wrap">
                  {(['none', 'sm', 'md', 'lg', 'xl'] as const).map(s => (
                    <button
                      key={s}
                      onClick={() => updateTheme({ shadow: s })}
                      className="px-3 py-1.5 text-xs font-medium transition-colors"
                      style={{
                        backgroundColor: theme.shadow === s ? 'var(--t-primary)' : 'var(--t-muted)',
                        color: theme.shadow === s ? 'var(--t-primary-fg)' : 'var(--t-fg)',
                        borderRadius: 'var(--t-radius)',
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Border Width */}
              <div>
                <label className="text-xs font-medium mb-2 block" style={{ color: 'var(--t-muted-fg)' }}>
                  Border Width: {theme.borderWidth}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="4"
                  value={theme.borderWidth}
                  onChange={e => updateTheme({ borderWidth: Number(e.target.value) })}
                  className="w-full accent-[var(--t-primary)]"
                />
              </div>

              {/* Opacity */}
              <div>
                <label className="text-xs font-medium mb-2 block" style={{ color: 'var(--t-muted-fg)' }}>
                  Opacity: {theme.opacity}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={theme.opacity}
                  onChange={e => updateTheme({ opacity: Number(e.target.value) })}
                  className="w-full accent-[var(--t-primary)]"
                />
                <div className="flex justify-between text-[10px] mt-1" style={{ color: 'var(--t-muted-fg)' }}>
                  <span>Translucent</span><span>Solid</span>
                </div>
              </div>

              {/* Spacing */}
              <div>
                <label className="text-xs font-medium mb-2 block" style={{ color: 'var(--t-muted-fg)' }}>
                  Spacing
                </label>
                <div className="flex gap-1.5">
                  {(['compact', 'comfortable', 'spacious'] as const).map(s => (
                    <button
                      key={s}
                      onClick={() => updateTheme({ spacing: s })}
                      className="flex-1 px-3 py-1.5 text-xs font-medium capitalize transition-colors"
                      style={{
                        backgroundColor: theme.spacing === s ? 'var(--t-primary)' : 'var(--t-muted)',
                        color: theme.spacing === s ? 'var(--t-primary-fg)' : 'var(--t-fg)',
                        borderRadius: 'var(--t-radius)',
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview card */}
              <div>
                <label className="text-xs font-medium mb-2 block" style={{ color: 'var(--t-muted-fg)' }}>
                  Shape Preview
                </label>
                <div
                  className="p-4"
                  style={{
                    backgroundColor: 'var(--t-card)',
                    border: `var(--t-border-width) solid var(--t-border)`,
                    borderRadius: 'var(--t-radius)',
                    boxShadow: 'var(--t-shadow)',
                  }}
                >
                  <div className="text-sm font-medium mb-2">Sample Card</div>
                  <div className="text-xs mb-3" style={{ color: 'var(--t-muted-fg)', opacity: 'var(--t-opacity)' }}>
                    This preview shows your shape and opacity settings.
                  </div>
                  <button
                    className="px-3 py-1.5 text-xs font-medium"
                    style={{
                      backgroundColor: 'var(--t-primary)',
                      color: 'var(--t-primary-fg)',
                      borderRadius: 'var(--t-radius)',
                    }}
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Export button at bottom */}
        <div className="p-4 border-t" style={{ borderColor: 'var(--t-border)' }}>
          <button
            onClick={() => setExportOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold transition-colors hover:opacity-90"
            style={{
              backgroundColor: 'var(--t-primary)',
              color: 'var(--t-primary-fg)',
              borderRadius: 'var(--t-radius)',
            }}
          >
            <Download size={16} /> Export as Prompt
          </button>
        </div>
      </div>

      <ExportModal open={exportOpen} onClose={() => setExportOpen(false)} />
    </>
  );
}
