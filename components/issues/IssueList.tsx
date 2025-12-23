'use client';

import IssueCard, { Issue } from './IssueCard';

interface IssueListProps {
  issues: Issue[];
  onEdit?: (issue: Issue) => void;
  onDelete?: (id: string) => void;
}

export default function IssueList({
  issues,
  onEdit,
  onDelete,
}: IssueListProps) {
  return (
    <div className="space-y-4">
      {/* Section Heading */}
      <div className="w-full max-w-3xl">
        <h2 className="text-lg font-semibold text-zinc-900">
          Issues
        </h2>
        <p className="mt-1 text-sm text-zinc-600">
          All issues created by you appear here.
        </p>
      </div>

      {/* Empty state */}
      {issues.length === 0 && (
        <div className="mx-auto w-full max-w-3xl rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center">
          <p className="text-sm text-zinc-600">
            No issues created yet.
          </p>
        </div>
      )}

      {/* Issues list */}
      {issues.length > 0 && (
        <div className="space-y-4">
          {issues.map((issue) => (
            <IssueCard
              key={issue.id}
              issue={issue}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
