'use client';

interface WelcomeSectionProps {
  name?: string;
}

export default function WelcomeSection({ name }: WelcomeSectionProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6">
      <h1 className="text-2xl font-semibold text-zinc-900">
        Welcome{name ? `, ${name}` : ''}
      </h1>

      <p className="mt-1 text-sm text-zinc-600">
        Here’s a quick overview of your security issues.
      </p>
    </div>
  );
}
