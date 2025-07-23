import { Link } from 'react-router-dom';
import { CheckCircle, Clock, BarChart2 } from 'lucide-react';

const icons = {
  tasks: <CheckCircle size={28} />,
  timer: <Clock size={28} />,
  analytics: <BarChart2 size={28} />,
};

export default function FeatureCard({ icon, title, description, link }) {
  return (
    <div className="rounded-2xl p-6 bg-[var(--color-card-bg)] border border-[var(--color-border)] shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="mb-4 text-[var(--color-accent)]">{icons[icon]}</div>
        <h3 className="text-2xl font-semibold mb-2 text-[var(--color-text)]">{title}</h3>
        <p className="text-[var(--color-subtle-text)] text-sm leading-relaxed">{description}</p>
      </div>
      <Link
        to={link}
        className="mt-6 inline-block text-sm text-[var(--color-accent)] hover:underline"
      >
        Learn more →
      </Link>
    </div>
  );
}
