import { motion } from 'framer-motion';
import featureList from './data/features';

export default function Features() {
  return (
    <section className="section-wrapper grid gap-12 md:grid-cols-3">
      {featureList.map((feature, idx) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
          viewport={{ once: true }}
          className="feature-card rounded-xl p-6 shadow-md border border-[var(--color-border)] bg-[var(--color-card-bg)]"
        >
          <h3 className="feature-title text-[var(--color-text)]">{feature.title}</h3>
          <p className="feature-desc text-[var(--color-subtle-text)]">{feature.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}