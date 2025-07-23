import { Link } from 'react-router-dom';
import { CheckCircle, Clock, BarChart2 } from 'lucide-react';
import { mock } from './MockUI';

const FeatureData = [
  {
    icon: <CheckCircle size={28} />,
    title: 'Task Manager',
    description:
      'Plan, prioritize, and track your tasks with an intuitive list interface. Stay on top of everything effortlessly.',
    mock: mock.tasks,
    link: '/tasks',
    reverse: false,
  },
  {
    icon: <Clock size={28} />,
    title: 'Pomodoro Timer',
    description:
      'Use focused work intervals and breaks to maintain momentum and avoid burnout.',
    mock: mock.timer,
    link: '/timer',
    reverse: true,
  },
  {
    icon: <BarChart2 size={28} />,
    title: 'Analytics Dashboard',
    description:
      'Visualize your productivity trends with elegant, easy-to-read charts and metrics.',
    mock: mock.analytics,
    link: '/analytics',
    reverse: false,
  },
];

export default function FeatureShowcase() {
  return (
    <section className="space-y-0">
    {FeatureData.map((feature, i) => (
        <div
        key={i}
        className={`py-20 border-t border-[var(--color-border)] ${
            i % 2 === 1 ? 'bg-[var(--color-card-bg)]' : ''
        }`}
        >
        <div
            className={`flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto px-6 ${
            feature.reverse ? 'md:flex-row-reverse' : ''
            }`}
        >
            {/* Text */}
            <div className="flex-1">
            <div className="mb-4 text-[var(--color-accent)]">{feature.icon}</div>
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-text)]">{feature.title}</h2>
            <p className="text-[var(--color-subtle-text)] mb-6 leading-relaxed">{feature.description}</p>
            <Link
                to={feature.link}
                className="inline-block text-[var(--color-accent)] font-medium hover:underline text-sm"
            >
                Explore {feature.title} →
            </Link>
            </div>

            {/* Mock UI */}
            <div className="flex-1">{feature.mock}</div>
        </div>
        </div>
    ))}
    </section>
  );
}
