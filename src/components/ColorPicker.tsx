'use client';

import { useState, useRef, useEffect } from 'react';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  label: string;
}

export default function ColorPicker({ value, onChange, label }: ColorPickerProps) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setText(value); }, [value]);

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <input
          type="color"
          value={value.startsWith('#') ? value : '#888888'}
          onChange={e => onChange(e.target.value)}
          className="w-7 h-7 cursor-pointer border-0 p-0 rounded"
          style={{ borderRadius: 'calc(var(--t-radius) * 0.5)' }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <label className="text-[10px] block mb-0.5" style={{ color: 'var(--t-muted-fg)' }}>{label}</label>
        {editing ? (
          <input
            ref={inputRef}
            value={text}
            onChange={e => setText(e.target.value)}
            onBlur={() => {
              if (/^#[0-9a-fA-F]{6}$/.test(text)) onChange(text);
              else setText(value);
              setEditing(false);
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
            }}
            className="text-xs w-full px-1 py-0.5 outline-none"
            style={{
              backgroundColor: 'var(--t-muted)',
              color: 'var(--t-fg)',
              border: '1px solid var(--t-border)',
              borderRadius: 'calc(var(--t-radius) * 0.5)',
            }}
          />
        ) : (
          <button
            onClick={() => { setEditing(true); setTimeout(() => inputRef.current?.focus(), 0); }}
            className="text-xs font-mono hover:opacity-70"
            style={{ color: 'var(--t-fg)' }}
          >
            {value}
          </button>
        )}
      </div>
    </div>
  );
}
