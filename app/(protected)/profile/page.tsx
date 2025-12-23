export const dynamic = 'force-dynamic';

import { headers, cookies } from 'next/headers';

import Sidebar from '@/components/dashboard/SideBar';
import DashboardHeaderWrapper from '@/components/dashboard/DashBoardHeaderWrapper';
import ProfileForm from '@/components/profile/ProfileForm';
import MobileSidebarWrapper from '@/components/dashboard/MobileSidebarWrapper';

export default async function ProfilePage() {
  const headersList = await headers();
  const cookieStore = await cookies();

  const host = headersList.get('host');
  if (!host) {
    throw new Error('Unable to determine host');
  }

  const protocol =
    process.env.NODE_ENV === 'development'
      ? 'http'
      : 'https';

  const res = await fetch(
    `${protocol}://${host}/api/users/profile`,
    {
      cache: 'no-store',
      headers: {
        Cookie: cookieStore.toString(),
      },
    }
  );

  if (!res.ok) {
    console.error('Profile API failed:', res.status);
    throw new Error('Failed to load profile');
  }

  const result = await res.json();

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />

      <MobileSidebarWrapper />

      <main className="flex-1">
        <DashboardHeaderWrapper />

        <div className="space-y-6 p-6">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900">
              Profile
            </h1>
            <p className="mt-1 text-sm text-zinc-600">
              Manage your personal information.
            </p>
          </div>

          <ProfileForm initialData={result.data} />
        </div>
      </main>
    </div>
  );
}
