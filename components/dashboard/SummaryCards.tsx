'use client';

import { Bug, AlertCircle, CheckCircle } from 'lucide-react';

interface SummaryCardsProps {
  data: {
    total: number;
    open: number;
    closed: number;
  };
}

export default function SummaryCards({ data }: SummaryCardsProps) {
  const CARDS = [
    {
      label: 'Total Issues',
      value: data.total,
      icon: Bug,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      label: 'Open Issues',
      value: data.open,
      icon: AlertCircle,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      label: 'Closed Issues',
      value: data.closed,
      icon: CheckCircle,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {CARDS.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.label}
            className="rounded-xl border border-zinc-200 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-600">{card.label}</p>
                <p className="mt-1 text-2xl font-semibold text-zinc-900">
                  {card.value}
                </p>
              </div>

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${card.bg}`}
              >
                <Icon className={card.color} size={20} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
