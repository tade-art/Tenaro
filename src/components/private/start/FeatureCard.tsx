import { Link } from 'react-router-dom';
import { CheckCircle, Clock, BarChart2 } from 'lucide-react';

const icons = {
  tasks: <CheckCircle size={28} />,
  timer: <Clock size={28} />,
  analytics: <BarChart2 size={28} />,
};

export default function FeatureCard({
  title,
  description,
  link,
  icon,
}: {
  title: string;
  description: string;
  link: string;
  icon: 'tasks' | 'timer' | 'analytics';
}) {
  return (
    <div className="feature-card">
      <div className="mb-3 text-[var(--color-accent)]">{icons[icon]}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc mb-4">{description}</p>
      <Link to={link} className="inline-block mt-auto btn-secondary text-sm">
        Go to {title.split(' ')[0]}
      </Link>
    </div>
  );
}
