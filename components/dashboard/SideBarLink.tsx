import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  danger?: boolean;
}

export default function SidebarLink({
  href,
  icon: Icon,
  label,
  onClick,
  danger,
}: SidebarLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
        danger
          ? 'text-red-600 hover:bg-red-50'
          : 'text-zinc-700 hover:bg-zinc-100'
      )}
    >
      {/* Icon wrapper */}
      <span className="flex h-5 w-5 items-center justify-center">
        <Icon size={18} />
      </span>

      {/* Text wrapper */}
      <span className="leading-none">{label}</span>
    </Link>
  );
}
