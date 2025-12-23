'use client';

import { InputHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
  error?: string;
}

export function AuthInput({
  icon: Icon,
  error,
  className,
  ...props
}: AuthInputProps) {
  return (
    <div className="w-full">
      <div className="relative">
        {/* Icon */}
        <Icon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />

        <input
          {...props}
          className={clsx(
            'w-full rounded-xl border bg-white py-3 pl-12 pr-4 text-sm text-zinc-900',
            'placeholder:text-zinc-400',
            'focus:outline-none focus:ring-2 focus:ring-zinc-200',
            error ? 'border-red-400' : 'border-zinc-300',
            className
          )}
        />
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
