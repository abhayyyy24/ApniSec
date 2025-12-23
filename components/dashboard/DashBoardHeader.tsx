'use client';

import { Menu } from 'lucide-react';

export default function DashboardHeader({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <header className="flex items-center gap-4 border-b border-zinc-200 bg-white px-4 py-3 md:hidden">
      <button onClick={onMenuClick}>
        <Menu />
      </button>

      <h1 className="text-lg font-medium">Dashboard</h1>
    </header>
  );
}
