'use client';

import { User, Bell, Lock, Palette, Globe, CreditCard, Mail, Camera } from 'lucide-react';

const settingsSections = [
  { icon: User, label: 'Profile', active: true },
  { icon: Bell, label: 'Notifications', active: false },
  { icon: Lock, label: 'Security', active: false },
  { icon: Palette, label: 'Appearance', active: false },
  { icon: Globe, label: 'Language', active: false },
  { icon: CreditCard, label: 'Billing', active: false },
];

export default function SettingsPage() {
  return (
    <div style={{ fontFamily: 'var(--t-font-body)' }}>
      <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--t-font-heading)' }}>Settings</h1>
      <p className="text-sm mb-6" style={{ color: 'var(--t-muted-fg)' }}>Manage your account preferences.</p>

      <div className="flex gap-6">
        {/* Sidebar nav */}
        <div className="w-48 flex-shrink-0">
          <div className="space-y-1">
            {settingsSections.map(({ icon: Icon, label, active }) => (
              <button
                key={label}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium transition-colors"
                style={{
                  backgroundColor: active ? 'var(--t-muted)' : 'transparent',
                  color: active ? 'var(--t-fg)' : 'var(--t-muted-fg)',
                  borderRadius: 'var(--t-radius)',
                }}
              >
                <Icon size={16} /> {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-2xl">
          {/* Profile card */}
          <div
            className="p-6 mb-6"
            style={{
              backgroundColor: 'var(--t-card)',
              border: `var(--t-border-width) solid var(--t-border)`,
              borderRadius: 'var(--t-radius)',
              boxShadow: 'var(--t-shadow)',
            }}
          >
            <h2 className="text-base font-semibold mb-4" style={{ fontFamily: 'var(--t-font-heading)' }}>Profile Information</h2>

            {/* Avatar */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face"
                  alt="John Doe"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <button
                  className="absolute -bottom-1 -right-1 p-1 rounded-full"
                  style={{
                    backgroundColor: 'var(--t-accent)',
                    color: 'var(--t-accent-fg)',
                    border: '2px solid var(--t-card)',
                  }}
                >
                  <Camera size={12} />
                </button>
              </div>
              <div>
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs" style={{ color: 'var(--t-muted-fg)' }}>john@example.com</p>
              </div>
            </div>

            {/* Form fields */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'First Name', value: 'John' },
                { label: 'Last Name', value: 'Doe' },
                { label: 'Email', value: 'john@example.com' },
                { label: 'Phone', value: '+1 (555) 123-4567' },
              ].map(field => (
                <div key={field.label}>
                  <label className="text-xs font-medium block mb-1.5" style={{ color: 'var(--t-muted-fg)' }}>
                    {field.label}
                  </label>
                  <div
                    className="px-3 py-2 text-sm"
                    style={{
                      backgroundColor: 'var(--t-muted)',
                      border: `var(--t-border-width) solid var(--t-border)`,
                      borderRadius: 'var(--t-radius)',
                      color: 'var(--t-fg)',
                    }}
                  >
                    {field.value}
                  </div>
                </div>
              ))}
              <div className="col-span-2">
                <label className="text-xs font-medium block mb-1.5" style={{ color: 'var(--t-muted-fg)' }}>Bio</label>
                <div
                  className="px-3 py-2 text-sm h-20"
                  style={{
                    backgroundColor: 'var(--t-muted)',
                    border: `var(--t-border-width) solid var(--t-border)`,
                    borderRadius: 'var(--t-radius)',
                    color: 'var(--t-muted-fg)',
                  }}
                >
                  Product designer passionate about creating beautiful and functional interfaces.
                </div>
              </div>
            </div>
          </div>

          {/* Notification settings */}
          <div
            className="p-6 mb-6"
            style={{
              backgroundColor: 'var(--t-card)',
              border: `var(--t-border-width) solid var(--t-border)`,
              borderRadius: 'var(--t-radius)',
              boxShadow: 'var(--t-shadow)',
            }}
          >
            <h2 className="text-base font-semibold mb-4" style={{ fontFamily: 'var(--t-font-heading)' }}>Notifications</h2>
            <div className="space-y-4">
              {[
                { label: 'Email notifications', desc: 'Receive email about account activity', on: true },
                { label: 'Push notifications', desc: 'Receive push notifications on your devices', on: true },
                { label: 'Marketing emails', desc: 'Receive emails about new features and updates', on: false },
                { label: 'Weekly digest', desc: 'Get a weekly summary of activity', on: true },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs" style={{ color: 'var(--t-muted-fg)' }}>{item.desc}</p>
                  </div>
                  <div
                    className="w-10 h-6 rounded-full relative cursor-pointer transition-colors"
                    style={{ backgroundColor: item.on ? 'var(--t-primary)' : 'var(--t-border)' }}
                  >
                    <div
                      className="absolute top-1 w-4 h-4 rounded-full transition-transform"
                      style={{
                        backgroundColor: '#fff',
                        left: item.on ? '22px' : '2px',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <button
              className="px-4 py-2 text-sm font-medium"
              style={{
                border: `var(--t-border-width) solid var(--t-border)`,
                borderRadius: 'var(--t-radius)',
                color: 'var(--t-fg)',
              }}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 text-sm font-medium transition-colors hover:opacity-90"
              style={{
                backgroundColor: 'var(--t-primary)',
                color: 'var(--t-primary-fg)',
                borderRadius: 'var(--t-radius)',
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
