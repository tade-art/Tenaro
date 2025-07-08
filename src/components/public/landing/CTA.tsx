import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <motion.section
      className="section-wrapper text-center bg-[var(--color-accent)] rounded-xl mt-10 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 text-[var(--color-text)]">
        Ready to get focused?
      </h2>
      <p className="text-gray-700 mb-6">
        Start managing your time and tasks with clarity and confidence.
      </p>
      <Link to="/auth" className="btn-secondary bg-white border-none">
        Create Your Account
      </Link>
    </motion.section>
  );
}
