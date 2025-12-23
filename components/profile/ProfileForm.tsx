'use client';

import { useState } from 'react';

interface ProfileFormProps {
  initialData?: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export default function ProfileForm({ initialData }: ProfileFormProps) {
  const [firstName, setFirstName] = useState(
    initialData?.firstName ?? ''
  );
  const [lastName, setLastName] = useState(
    initialData?.lastName ?? ''
  );
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSave() {
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/users/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to update profile');
      }

      setMessage('Profile updated successfully');
    } catch (err) {
      setMessage('Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl rounded-xl border border-zinc-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-zinc-900">
        Profile Information
      </h2>

      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            type="email"
            value={initialData?.email ?? ''}
            disabled
            className="mt-1 w-full cursor-not-allowed rounded-md border border-zinc-200 bg-zinc-100 px-3 py-2 text-sm text-zinc-600"
          />
        </div>

        {message && (
          <p className="text-sm text-zinc-600">{message}</p>
        )}

        <div className="pt-2">
          <button
            onClick={handleSave}
            disabled={loading}
            className="rounded-md bg-green-500 px-5 py-2 text-sm font-medium text-white hover:bg-green-800 disabled:opacity-60"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}
