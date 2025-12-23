'use client';

import { X, LayoutDashboard, Bug, User, LogOut } from 'lucide-react';
import SidebarLink from './SideBarLink';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileSidebar({
  open,
  onClose,
}: MobileSidebarProps) {
  const router = useRouter();

  async function handleLogout() {
    try {
      await fetch('/api/logout', { method: 'POST' });
    } finally {
      onClose();            // close drawer
      router.replace('/');  // redirect to 3000
    }
  }

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 md:hidden transition-opacity duration-300',
        open ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={clsx(
          'absolute left-0 top-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-5">
          <span className="text-lg font-semibold text-zinc-900">
            Apni<span className="text-green-600">Sec</span>
          </span>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-1 hover:bg-zinc-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-4 space-y-1">
          <SidebarLink
            href="/dashboard"
            icon={LayoutDashboard}
            label="Home"
            onClick={onClose}
          />

          <SidebarLink
            href="/issues"
            icon={Bug}
            label="Issues"
            onClick={onClose}
          />

          <SidebarLink
            href="/profile"
            icon={User}
            label="Profile"
            onClick={onClose}
          />
        </nav>

        {/* Bottom actions */}
        <div className="absolute bottom-0 w-full border-t border-zinc-200 p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>
    </div>
  );
}
