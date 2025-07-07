import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 dark:bg-gray-950/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold tracking-tight">
          Tenaro
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            to="/auth"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          >
            Log In
          </Link>
          <Link
            to="/auth"
            className="btn-primary text-sm py-2 px-4"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
