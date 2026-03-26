'use client';

import { useState } from 'react';
import { Store, Package, LayoutDashboard, MessageCircle, Settings, BookOpen, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import ShopCatalog from './pages/ShopCatalog';
import ProductPage from './pages/ProductPage';
import Dashboard from './pages/Dashboard';
import ChatPage from './pages/ChatPage';
import SettingsPage from './pages/SettingsPage';
import BlogPage from './pages/BlogPage';

const pages = [
  { id: 'shop', label: 'Shop', icon: Store, component: ShopCatalog },
  { id: 'product', label: 'Product', icon: Package, component: ProductPage },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, component: Dashboard },
  { id: 'chat', label: 'Chat', icon: MessageCircle, component: ChatPage },
  { id: 'blog', label: 'Blog', icon: BookOpen, component: BlogPage },
  { id: 'settings', label: 'Settings', icon: Settings, component: SettingsPage },
];

export default function AppShell() {
  const [activePage, setActivePage] = useState('shop');
  const [mobileNav, setMobileNav] = useState(false);
  const { theme } = useTheme();

  const ActiveComponent = pages.find(p => p.id === activePage)?.component ?? ShopCatalog;

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: 'var(--t-bg)', color: 'var(--t-fg)' }}>
      {/* Sidebar */}
      <aside
        className="hidden md:flex w-56 flex-col flex-shrink-0 border-r"
        style={{
          backgroundColor: 'var(--t-card-alpha)',
          backdropFilter: 'var(--t-backdrop)',
          WebkitBackdropFilter: 'var(--t-backdrop)',
          borderColor: 'var(--t-border)',
          fontFamily: 'var(--t-font-body)',
        }}
      >
        {/* Logo */}
        <div className="p-4 border-b" style={{ borderColor: 'var(--t-border)' }}>
          <h1 className="text-lg font-bold tracking-tight" style={{ fontFamily: 'var(--t-font-heading)' }}>
            <span style={{ color: 'var(--t-primary)' }}>The</span>ziner
          </h1>
          <p className="text-[10px] mt-0.5" style={{ color: 'var(--t-muted-fg)' }}>Design System Playground</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1">
          {pages.map(page => {
            const Icon = page.icon;
            const active = activePage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => setActivePage(page.id)}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium transition-all"
                style={{
                  backgroundColor: active ? 'var(--t-primary)' : 'transparent',
                  color: active ? 'var(--t-primary-fg)' : 'var(--t-muted-fg)',
                  borderRadius: 'var(--t-radius)',
                }}
              >
                <Icon size={18} />
                {page.label}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t" style={{ borderColor: 'var(--t-border)' }}>
          <div className="flex items-center gap-2 mb-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
              alt="John Doe"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-medium">John Doe</p>
              <p className="text-[10px]" style={{ color: 'var(--t-muted-fg)' }}>Premium Plan</p>
            </div>
          </div>
          <p className="text-[9px] text-center" style={{ color: 'var(--t-muted-fg)' }}>
            Created by Zeev Avidan Herman
          </p>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30">
        <div
          className="flex items-center justify-between p-3 border-b"
          style={{ backgroundColor: 'var(--t-card)', borderColor: 'var(--t-border)' }}
        >
          <h1 className="text-base font-bold" style={{ fontFamily: 'var(--t-font-heading)' }}>
            <span style={{ color: 'var(--t-primary)' }}>The</span>ziner
          </h1>
          <button onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileNav && (
          <div
            className="p-3 space-y-1 border-b"
            style={{ backgroundColor: 'var(--t-card)', borderColor: 'var(--t-border)' }}
          >
            {pages.map(page => {
              const Icon = page.icon;
              return (
                <button
                  key={page.id}
                  onClick={() => { setActivePage(page.id); setMobileNav(false); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium"
                  style={{
                    backgroundColor: activePage === page.id ? 'var(--t-primary)' : 'transparent',
                    color: activePage === page.id ? 'var(--t-primary-fg)' : 'var(--t-fg)',
                    borderRadius: 'var(--t-radius)',
                  }}
                >
                  <Icon size={16} /> {page.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Main content */}
      <main
        className="flex-1 overflow-y-auto md:pt-0 pt-14"
        style={{ fontFamily: 'var(--t-font-body)' }}
      >
        <div className="p-6 max-w-6xl mx-auto" style={{ padding: `calc(var(--t-spacing) * 1.5)` }}>
          {/* Page header breadcrumb */}
          <div className="flex items-center gap-2 mb-4 text-xs" style={{ color: 'var(--t-muted-fg)' }}>
            <span>Theziner</span>
            <span>/</span>
            <span style={{ color: 'var(--t-fg)' }}>{pages.find(p => p.id === activePage)?.label}</span>
          </div>
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
}
