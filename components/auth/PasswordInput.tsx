'use client';

import { InputHTMLAttributes, useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import clsx from 'clsx';

interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export function PasswordInput({
  error,
  className,
  ...props
}: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full">
      <div className="relative">
        {/* Lock Icon */}
        <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />

        <input
          {...props}
          type={show ? 'text' : 'password'}
          className={clsx(
            'w-full rounded-xl border bg-white py-3 pl-12 pr-12 text-sm text-zinc-900',
            'placeholder:text-zinc-400',
            'focus:outline-none focus:ring-2 focus:ring-zinc-200',
            error ? 'border-red-400' : 'border-zinc-300',
            className
          )}
        />

        {/* Eye toggle */}
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
