import { BarChart2, CheckCircle, Clock, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onSettingsClick: () => void;
}

export default function Navbar({ onSettingsClick }: NavbarProps) {
  const { pathname } = useLocation();

  const navItems = [
    { name: 'Analytics', to: '/analytics', icon: <BarChart2 size={18} /> },
    { name: 'Tasks', to: '/tasks', icon: <CheckCircle size={18} /> },
    { name: 'Timer', to: '/timer', icon: <Clock size={18} /> },
  ];

  return (
    <aside className="w-64 fixed inset-y-0 left-0 bg-[var(--color-card-bg)] border-r border-[var(--color-border)] p-4 flex flex-col justify-between">
      <div>
        <Link to="/start" className="group text-center text-2xl font-bold mb-6 block">
            <span className="inline-block relative text-[var(--color-text)] hover:text-[var(--color-accent-hover)]">
              Tenaro
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>

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
