'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { AuthInput } from '@/components/auth/AuthInput';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { FormError } from '@/components/ui/FormError';

type FieldErrors = {
  email?: string;
  password?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const validate = () => {
    const errors: FieldErrors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = 'Enter a valid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');

      window.location.href = '/dashboard';
    } catch (err: any) {
      setFormError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-zinc-200">

        {/* Brand */}
        <div className="text-center">
          <div className="mb-2 flex justify-center">
            <span className="text-4xl font-extrabold text-emerald-600 leading-none">
              \
            </span>
          </div>

          <h1 className="text-4xl font-bold">
            <span className="text-black">Apni</span>
            <span className="text-emerald-600">Sec</span>
          </h1>

          <p className="mt-3 text-lg font-medium text-zinc-900">
            Hi, Welcome
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            Please login to your account
          </p>
        </div>

        {/* Form-level error */}
        <FormError message={formError} className="mt-6" />

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Email
            </label>
            <AuthInput
              type="email"
              placeholder="Enter your email"
              icon={Mail}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setFieldErrors((prev) => ({ ...prev, email: undefined }));
              }}
            />
            {fieldErrors.email && (
              <p className="text-xs text-red-600">
                {fieldErrors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Password
            </label>
            <PasswordInput
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setFieldErrors((prev) => ({ ...prev, password: undefined }));
              }}
            />
            {fieldErrors.password && (
              <p className="text-xs text-red-600">
                {fieldErrors.password}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <span className="cursor-pointer text-sm text-zinc-500 hover:underline">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full rounded-xl bg-emerald-600 py-3 text-sm font-medium text-white
              transition hover:bg-emerald-500 disabled:opacity-60
            "
          >
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Don&apos;t have an account?{' '}
          <Link
            href="/register"
            className="font-medium text-emerald-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
