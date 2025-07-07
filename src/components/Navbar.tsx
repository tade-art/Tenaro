import { ArrowRightIcon, UserIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-[var(--color-accent)] backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold tracking-tight text-white">
          Tenaro
        </Link>

        <div className="inline-flex overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm">
          <Link to="/auth/login" className="btn-nav border-r border-gray-300">
            <ArrowRightIcon className="h-4 w-4" />
            Log In
          </Link>
          <Link to="/auth/signup" className="btn-nav">
            <UserIcon className="h-4 w-4" />
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
