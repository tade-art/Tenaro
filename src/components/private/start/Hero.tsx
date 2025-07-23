import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="text-center max-w-3xl mx-auto">
      <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-6">
        Achieve more with <span className="text-[var(--color-accent)]">Tenaro</span>
      </h1>
      <p className="text-xl text-[var(--color-subtle-text)] mb-10">
        A seamless experience to manage your tasks, track your time, and improve productivity — all in one.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link to="/tasks" className="btn-primary text-base px-6 py-2.5">
          Get Started
        </Link>
        <Link to="/analytics" className="btn-secondary text-base px-6 py-2.5">
          View Analytics
        </Link>
      </div>
    </section>
  );
}
