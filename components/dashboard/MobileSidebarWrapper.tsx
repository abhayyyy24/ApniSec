'use client';

import { useState } from 'react';
import MobileSidebar from '@/components/dashboard/MobileSideBar';

export default function MobileSidebarWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <MobileSidebar
      open={open}
      onClose={() => setOpen(false)}
    />
  );
}
