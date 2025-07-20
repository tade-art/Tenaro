import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="section-wrapper text-center border-t-4 border-[var(--color-border)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="section-subheading text-[var(--color-subtle-text)]">About Tenaro</p>
      <h2 className="text-3xl font-bold mt-2 text-[var(--color-text)]">Built to help you work smarter</h2>
      <p className="mt-4 max-w-2xl mx-auto text-[var(--color-subtle-text)]">
        Tenaro combines Pomodoro time management, streamlined task tracking, and streak-based habit building — all in one focused workspace.
      </p>
    </motion.section>
  );
}