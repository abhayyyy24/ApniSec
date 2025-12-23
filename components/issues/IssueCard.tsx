'use client';

import { Pencil, Trash2 } from 'lucide-react';

export interface Issue {
  id: string;
  type: 'Cloud Security' | 'Red Team Assessment' | 'VAPT';
  title: string;
  description: string;
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';
  status?: 'OPEN' | 'IN_PROGRESS' | 'CLOSED';
}

interface IssueCardProps {
  issue: Issue;
  onEdit?: (issue: Issue) => void;
  onDelete?: (id: string) => void;
}

export default function IssueCard({
  issue,
  onEdit,
  onDelete,
}: IssueCardProps) {
  return (
    <div className="w-full max-w-3xl rounded-xl border border-zinc-200 bg-white p-5">
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {/* Type badge */}
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            {issue.type}
          </span>

          {/* Status badge */}
          {issue.status && (
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
              {issue.status}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onEdit?.(issue)}
            className="rounded-md p-1 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
            aria-label="Edit issue"
          >
            <Pencil size={16} />
          </button>

          <button
            onClick={() => onDelete?.(issue.id)}
            className="rounded-md p-1 text-zinc-600 hover:bg-red-50 hover:text-red-600"
            aria-label="Delete issue"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-base font-semibold text-zinc-900">
        {issue.title}
      </h3>

      {/* Description */}
      <p className="mt-1 text-sm text-zinc-600">
        {issue.description}
      </p>

      {/* Footer */}
      {issue.priority && (
        <div className="mt-4 text-sm text-zinc-700">
          <span className="font-medium">Priority:</span>{' '}
          {issue.priority}
        </div>
      )}
    </div>
  );
}
