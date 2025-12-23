'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'services', href: '#services' },
  { label: 'features', href: '#Why' },
  { label: 'integrations', href: '#Why' },
  { label: 'Pricing', href: '#Why' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-4 pt-4">
      {/* Navbar container */}
      <div
        className={`
          mx-auto max-w-5xl
          rounded-full
          border border-gray-300
          px-6 py-3
          shadow-sm shadow-black/5
          transition-colors duration-300
          ${scrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-white/50'}
        `}
      >
        <div className="flex items-center justify-between">
          {/* LEFT: Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden rounded-lg p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <Link href="/" className="flex items-center gap-2">
              {/* Green backslash logo */}
              <span
                className="
                  text-3xl
                  font-extrabold
                  text-green-500
                  leading-none
                  tracking-tight
                "
              >
                \
              </span>

              <span className="text-xl font-bold tracking-tight text-gray-900">
                Apni Sec
              </span>
            </Link>
          </div>

          {/* CENTER: Desktop Links */}
          <ul className="hidden md:flex items-center gap-2 text-[15px] font-medium text-gray-600">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="
                    px-4 py-2
                    rounded-full
                    transition-colors
                    hover:bg-gray-100
                    hover:text-gray-900
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT: Action */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="
                rounded-full
                border border-gray-300
                bg-white
                px-5 py-2
                text-[14px]
                font-medium
                text-gray-800
                shadow-sm
                transition-colors
                hover:bg-zinc-200
              "
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-lg shadow-sm md:hidden">
          <ul className="flex flex-col p-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    block rounded-xl px-4 py-3
                    text-sm font-medium text-gray-700
                    transition-colors
                    hover:bg-gray-100
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
