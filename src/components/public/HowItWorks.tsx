import { motion } from 'framer-motion';
import stepList from '../../data/steps';

export default function HowItWorks() {
  return (
    <section className="section-wrapper text-center">
      <p className="section-subheading">How It Works</p>
      <h2 className="text-3xl font-bold mt-2 text-[var(--color-text)]">Simple, yet powerful</h2>

      <div className="mt-10 grid gap-10 md:grid-cols-3 text-left max-w-6xl mx-auto">
        {stepList.map((step, i) => (
          <motion.div
            key={step.title}
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-2 text-[var(--color-text)]">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
