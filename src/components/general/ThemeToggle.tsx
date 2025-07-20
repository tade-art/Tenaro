import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded hover:bg-orange-100 dark:hover:bg-gray-700 transition"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6 text-gray-800" />
      ) : (
        <SunIcon className="h-6 w-6 text-yellow-400" />
      )}
    </button>
  );
}
