import { BarChart2, CheckCircle, Clock, Home, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onSettingsClick: () => void;
}

export default function Navbar({ onSettingsClick }: NavbarProps) {
  const { pathname } = useLocation();

  const navItems = [
    { name: 'Home', to: '/home', icon: <Home size={18} /> },
    { name: 'Analytics', to: '/home/analytics', icon: <BarChart2 size={18} /> },
    { name: 'Tasks', to: '/home/tasks', icon: <CheckCircle size={18} /> },
    { name: 'Timer', to: '/home/timer', icon: <Clock size={18} /> },
  ];

  return (
    <aside className="w-64 bg-[var(--color-card-bg)] border-r border-[var(--color-border)] p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold mb-6 text-[var(--color-text)]">Tenaro</h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition 
                text-[var(--color-text)] hover:bg-[var(--color-accent-bg)]
                ${pathname === item.to ? 'bg-[var(--color-accent-bg)]' : ''}`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <button
        onClick={onSettingsClick}
        className="mt-4 flex items-center gap-2 text-sm text-[var(--color-subtle-text)] hover:text-[var(--color-text)] transition"
      >
        <Settings size={18} />
        Settings
      </button>
    </aside>
  );
}
