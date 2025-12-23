'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Issue } from './IssueCard';

interface EditIssueModalProps {
  issue: Issue | null;
  onClose: () => void;
  onUpdate: (issue: Issue) => void;
}

const ISSUE_TYPES: Issue['type'][] = [
  'Cloud Security',
  'Red Team Assessment',
  'VAPT',
];

export default function EditIssueModal({
  issue,
  onClose,
  onUpdate,
}: EditIssueModalProps) {
  const [type, setType] = useState<Issue['type'] | ''>('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Issue['priority'] | ''>('');
  const [status, setStatus] = useState<Issue['status'] | ''>('');

  // Prefill 
  useEffect(() => {
    if (issue) {
      setType(issue.type);
      setTitle(issue.title);
      setDescription(issue.description);
      setPriority(issue.priority || '');
      setStatus(issue.status || '');
    }
  }, [issue]);

  if (!issue) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-900">
            Edit Issue
          </h2>
          <button
            onClick={onClose}
            className="rounded-md p-1 hover:bg-zinc-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <div className="mt-4 space-y-4">
          {/* Issue Type */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Issue Type *
            </label>
            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value as Issue['type'])
              }
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            >
              {ISSUE_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Description *
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </div>

          {/* Optional */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-zinc-700">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) =>
                  setPriority(e.target.value as Issue['priority'])
                }
                className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
              >
                <option value="">None</option>
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700">
                Status
              </label>
              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value as Issue['status'])
                }
                className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
              >
                <option value="">None</option>
                <option value="OPEN">Open</option>
                <option value="IN_PROGRESS">
                  In Progress
                </option>
                <option value="CLOSED">Closed</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-4">
            <button
              onClick={onClose}
              className="rounded-md px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (!type || !title || !description) return;

                onUpdate({
                  ...issue,
                  type,
                  title,
                  description,
                  priority: priority || undefined,
                  status: status || undefined,
                });

                onClose();
              }}
              className="rounded-md bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-800"
            >
              Update Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
