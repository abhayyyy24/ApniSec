'use client';

import { AlertCircle } from 'lucide-react';
import clsx from 'clsx';

interface FormErrorProps {
  message?: string | null;
  className?: string;
}

export function FormError({ message, className }: FormErrorProps) {
  if (!message) return null;

  return (
    <div
      className={clsx(
        `
        flex items-start gap-3
        rounded-xl
        border border-red-200/60
        bg-red-50/60
        px-4 py-3
        text-sm text-red-700
        backdrop-blur-md
        shadow-sm
        `,
        className
      )}
      role="alert"
    >
      <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
      <p className="leading-relaxed">{message}</p>
    </div>
  );
}
