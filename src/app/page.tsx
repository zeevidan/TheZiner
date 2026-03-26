'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import AppShell from '@/components/AppShell';
import ConfigDrawer from '@/components/ConfigDrawer';

export default function Home() {
  return (
    <ThemeProvider>
      <AppShell />
      <ConfigDrawer />
    </ThemeProvider>
  );
}
