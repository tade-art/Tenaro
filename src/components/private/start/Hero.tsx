import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="text-center max-w-3xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-4 text-[var(--color-text)]">
        Welcome to <span className="text-[var(--color-accent)]">Tenaro</span>
      </h1>
      <p className="text-lg text-[var(--color-subtle-text)] mb-8">
        Your all-in-one productivity suite. Tasks. Focus. Progress — all in one place.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link to="/tasks" className="btn-primary">Get Started</Link>
        <Link to="/analytics" className="btn-secondary">See Progress</Link>
      </div>
    </section>
  );
}
