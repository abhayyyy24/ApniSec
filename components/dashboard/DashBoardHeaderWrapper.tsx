'use client';

import { useState } from 'react';
import DashboardHeader from './DashBoardHeader';
import MobileSidebar from './MobileSideBar';

export default function DashboardHeaderWrapper() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <DashboardHeader onMenuClick={() => setMobileOpen(true)} />

      {/* Mobile Sidebar */}
      <MobileSidebar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
