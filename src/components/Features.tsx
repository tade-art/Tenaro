import { motion } from 'framer-motion';

const features = [
  {
    title: 'Pomodoro Timer',
    desc: 'Stay focused with structured work sessions and refreshing breaks.',
  },
  {
    title: 'Task Manager',
    desc: 'Stay on top of your day with clear, manageable to-dos and deadlines.',
  },
  {
    title: 'Streak Tracking',
    desc: 'Build habits with daily session streaks and visual motivation.',
  },
];

export default function Features() {
  return (
    <section className="section-wrapper grid gap-12 md:grid-cols-3">
      {features.map((feature, idx) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
          viewport={{ once: true }}
          className="feature-card"
        >
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-desc">{feature.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
