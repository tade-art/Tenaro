import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import imgDark from '../../../images/note-dark.svg';
import imgLight from '../../../images/note.svg';

export default function Hero() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
      setTheme(currentTheme || 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const initialTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
    setTheme(initialTheme || 'light');

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-wrapper bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card-bg)] text-[var(--color-text)]">
      <motion.div className="blur-circle-left bg-[var(--color-accent-bg)]" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 0.4, scale: 1 }} transition={{ duration: 1.5 }} />
      <motion.div className="blur-circle-right bg-[var(--color-accent-bg)]" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 0.3, scale: 1 }} transition={{ duration: 1.8 }} />

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10">
        <motion.div className="hero-content" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <p className="hero-subheading">Your new productivity sidekick</p>
          <h1 className="hero-heading">Tenaro</h1>
          <p className="hero-description">Focus deeply. Track your time. Master your tasks.</p>
          <Link to="/auth" className="btn-primary">Get Started</Link>
        </motion.div>

        <motion.div className="hero-image" initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}>
          <div className="w-80 h-80 rounded-xl shadow-md border border-[var(--color-border)] bg-[var(--color-card-bg)] p-4 flex items-center justify-center">
            <img
              src={theme === 'dark' ? imgDark : imgLight}
              alt="Note Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
