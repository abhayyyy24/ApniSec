'use client';

import { useState } from 'react';
import { Issue } from './IssueCard';

export type CreateIssuePayload = {
  type: Issue['type'];
  title: string;
  description: string;
  priority?: Issue['priority'];
};

const ISSUE_TYPES = [
  { label: 'Cloud Security', value: 'CLOUD_SECURITY' },
  { label: 'Red Team Assessment', value: 'REDTEAM_ASSESSMENT' },
  { label: 'VAPT', value: 'VAPT' },
] as const;

const PRIORITIES = [
  { label: 'High', value: 'HIGH' },
  { label: 'Medium', value: 'MEDIUM' },
  { label: 'Low', value: 'LOW' },
] as const;

interface CreateIssueFormProps {
  onCreate: (payload: CreateIssuePayload) => void;
}

export default function CreateIssueForm({
  onCreate,
}: CreateIssueFormProps) {
  const [type, setType] = useState<Issue['type'] | ''>('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Issue['priority'] | ''>('');

  const handleSubmit = () => {
    if (!type || !title || !description) return;

    onCreate({
      type,
      title,
      description,
      priority: priority || undefined,
    });

    setType('');
    setTitle('');
    setDescription('');
    setPriority('');
  };

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-zinc-900">
        Create Issue
      </h2>

      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Issue Type *
          </label>
          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value as Issue['type'])
            }
            className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
          >
            <option value="">Select issue type</option>
            {ISSUE_TYPES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Short issue title"
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Description *
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Describe the issue in detail"
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as Issue['priority'])
            }
            className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm"
          >
            <option value="">Select priority</option>
            {PRIORITIES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-md bg-green-600 px-5 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            Create Issue
          </button>
        </div>
      </div>
    </div>
  );
}
