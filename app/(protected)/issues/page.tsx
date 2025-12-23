'use client';

import { useEffect, useState } from 'react';

import Sidebar from '@/components/dashboard/SideBar';
import MobileSidebar from '@/components/dashboard/MobileSideBar';
import DashboardHeader from '@/components/dashboard/DashBoardHeader';

import CreateIssueForm, {
  CreateIssuePayload,
} from '@/components/issues/IssueForm';
import IssueList from '@/components/issues/IssueList';
import EditIssueModal from '@/components/issues/EditIssue';

import { Issue } from '@/components/issues/IssueCard';

export default function IssuesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [editingIssue, setEditingIssue] = useState<Issue | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const res = await fetch('/api/issues', {
          credentials: 'include',
        });

        if (!res.ok) return;

        const result = await res.json();
        setIssues(result.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  const handleCreateIssue = async (
    payload: CreateIssuePayload
  ) => {
    try {
      const res = await fetch('/api/issues', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) return;

      setIssues((prev) => [result.data, ...prev]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateIssue = async (updatedIssue: Issue) => {
    try {
      const payload = {
        title: updatedIssue.title,
        description: updatedIssue.description,
        priority: updatedIssue.priority,
        status: updatedIssue.status,
      };

      const res = await fetch(`/api/issues/${updatedIssue.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) return;

      setIssues((prev) =>
        prev.map((issue) =>
          issue.id === result.data.id ? result.data : issue
        )
      );

      setEditingIssue(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteIssue = async (id: string) => {
    try {
      const res = await fetch(`/api/issues/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!res.ok) return;

      setIssues((prev) =>
        prev.filter((issue) => issue.id !== id)
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />

      <MobileSidebar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <main className="flex-1">
        <DashboardHeader
          onMenuClick={() => setMobileOpen(true)}
        />

        <div className="space-y-6 p-6">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900">
              Issues
            </h1>
            <p className="mt-1 text-sm text-zinc-600">
              Create and manage your security issues.
            </p>
          </div>

          <CreateIssueForm onCreate={handleCreateIssue} />

          {loading ? (
            <div className="text-sm text-zinc-500">
              Loading issues...
            </div>
          ) : (
            <IssueList
              issues={issues}
              onDelete={handleDeleteIssue}
              onEdit={setEditingIssue}
            />
          )}
        </div>
      </main>

      {editingIssue && (
        <EditIssueModal
          issue={editingIssue}
          onClose={() => setEditingIssue(null)}
          onUpdate={handleUpdateIssue}
        />
      )}
    </div>
  );
}
