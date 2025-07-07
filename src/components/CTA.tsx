import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="section-wrapper text-center bg-orange-50 rounded-xl mt-10">
      <h2 className="text-3xl font-bold mb-4 text-[var(--color-text)]">
        Ready to get focused?
      </h2>
      <p className="text-gray-700 mb-6">
        Start managing your time and tasks with clarity and confidence.
      </p>
      <Link to="/auth" className="btn-primary">
        Create Your Account
      </Link>
    </section>
  );
}
