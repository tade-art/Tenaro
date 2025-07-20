import { ArrowRightIcon, UserIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import ThemeToggle from '../general/ThemeToggle';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-[var(--color-accent)] backdrop-blur border-b border-[var(--color-border)]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold tracking-tight text-[var(--color-text)]">Tenaro</Link>
        <div className="flex items-center gap-3">
          <div className="inline-flex overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-card-bg)] shadow-sm">
            <Link to="/auth" className="btn-nav border-r border-[var(--color-border)]">
              <ArrowRightIcon className="h-4 w-4" /> Log In
            </Link>
            <Link to="/auth" className="btn-nav">
              <UserIcon className="h-4 w-4" /> Sign Up
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
