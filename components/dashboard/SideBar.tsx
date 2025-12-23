'use client';

import SidebarLink from './SideBarLink';
import { LayoutDashboard, Bug, User, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/logout', {
      method: 'POST',
    });

    router.replace('/'); 
  }

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:border-r md:border-zinc-200 md:bg-white">
      <div className="px-6 py-5 text-xl font-semibold">
        Apni<span className="text-green-600">Sec</span>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <SidebarLink href="/dashboard" icon={LayoutDashboard} label="Home" />
        <SidebarLink href="/issues" icon={Bug} label="Issues" />
        <SidebarLink href="/profile" icon={User} label="Profile" />
      </nav>

      <div className="border-t border-zinc-200 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
