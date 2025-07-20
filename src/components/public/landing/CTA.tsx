import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <motion.section
      className="section-wrapper text-center bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] rounded-xl mt-10 shadow-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 text-white">Ready to get focused?</h2>
      <p className="text-white/80 mb-6">Start managing your time and tasks with clarity and confidence.</p>
      <Link
        to="/auth"
        className="inline-block px-8 py-3 font-semibold text-lg rounded-xl shadow-md transition border border-transparent text-[var(--color-text)] bg-[var(--color-card-bg)] hover:bg-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-orange-300"
      >
        Create Your Account
      </Link>
    </motion.section>
  );
}