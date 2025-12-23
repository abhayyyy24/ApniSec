'use client';

import { useEffect, useState } from 'react';

import Sidebar from '@/components/dashboard/SideBar';
import MobileSidebar from '@/components/dashboard/MobileSideBar';
import DashboardHeader from '@/components/dashboard/DashBoardHeader';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import SummaryCards from '@/components/dashboard/SummaryCards';

type IssueStatus = 'OPEN' | 'CLOSED';

interface Issue {
  id: string;
  status: IssueStatus;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
}

interface IssuesResponse {
  success: boolean;
  data: Issue[];
}

interface SummaryData {
  total: number;
  open: number;
  closed: number;
}

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
}

export default function DashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  const [summary, setSummary] = useState<SummaryData | null>(null);
  const [loadingSummary, setLoadingSummary] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      try {
        const res = await fetch('/api/users/profile');
        if (!res.ok) return;

        const result = await res.json();
        if (active) setProfile(result.data);
      } finally {
        if (active) setLoadingProfile(false);
      }
    }

    loadProfile();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    async function loadIssues() {
      try {
        const res = await fetch('/api/issues');
        if (!res.ok) return;

        const result: IssuesResponse = await res.json();
        if (!result.success) return;

        const open = result.data.filter(i => i.status === 'OPEN').length;
        const closed = result.data.filter(i => i.status === 'CLOSED').length;

        if (active) {
          setSummary({
            total: result.data.length,
            open,
            closed,
          });
        }
      } finally {
        if (active) setLoadingSummary(false);
      }
    }

    loadIssues();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />

      <MobileSidebar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <main className="flex-1">
        <DashboardHeader onMenuClick={() => setMobileOpen(true)} />

        <div className="space-y-6 p-6">
          {loadingProfile ? (
            <div className="h-16 w-64 animate-pulse rounded-lg bg-zinc-200" />
          ) : (
            <WelcomeSection
              name={profile?.firstName ?? 'User'}
            />
          )}

          {loadingSummary ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className="h-28 animate-pulse rounded-xl bg-zinc-200"
                />
              ))}
            </div>
          ) : (
            summary && <SummaryCards data={summary} />
          )}
        </div>
      </main>
    </div>
  );
}
