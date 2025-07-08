import Layout from './NavAndFooter';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-[var(--color-accent-bg)]">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border border-gray-200">
          {children}
        </div>
      </section>
    </Layout>
  );
}
