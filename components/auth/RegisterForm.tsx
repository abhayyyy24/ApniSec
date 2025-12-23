'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, User } from 'lucide-react';

import { AuthInput } from '@/components/auth/AuthInput';
import { PasswordInput } from '@/components/auth/PasswordInput';

type FieldErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
};

export function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const validate = () => {
    const errors: FieldErrors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (firstName.length < 2) {
      errors.firstName = 'First name must be at least 2 characters';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
    } else if (lastName.length < 2) {
      errors.lastName = 'Last name must be at least 2 characters';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!email.includes('@')) {
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
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');

      window.location.href = '/login';
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
          {/* Green slash */}
          <div className="mb-2 flex justify-center">
            <span
              className="
                text-4xl
                font-extrabold
                text-emerald-600
                leading-none
              "
            >
              \
            </span>
          </div>

          <h1 className="text-4xl font-bold">
            <span className="text-black">Apni</span>
            <span className="text-emerald-600">Sec</span>
          </h1>

          <p className="mt-3 text-lg font-medium text-zinc-900">
            Create Account
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            Secure your digital identity
          </p>
        </div>

        {/* Form-level error */}
        {formError && (
          <div className="mt-6 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600 text-center">
            {formError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* First Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              First name
            </label>
            <AuthInput
              placeholder="Enter your first name"
              icon={User}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {fieldErrors.firstName && (
              <p className="text-xs text-red-600">
                {fieldErrors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-700">
              Last name
            </label>
            <AuthInput
              placeholder="Enter your last name"
              icon={User}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {fieldErrors.lastName && (
              <p className="text-xs text-red-600">
                {fieldErrors.lastName}
              </p>
            )}
          </div>

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
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {fieldErrors.password && (
              <p className="text-xs text-red-600">
                {fieldErrors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full rounded-xl bg-emerald-600 py-3 text-sm font-medium text-white
              hover:bg-emerald-700 disabled:opacity-60 transition
            "
          >
            {loading ? 'Creating account...' : 'Sign up'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-medium text-emerald-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
