import Layout from '../components/layouts/NavAndFooter';
import About from '../components/public/landing/About';
import CTA from '../components/public/landing/CTA';
import Features from '../components/public/landing/Features';
import Hero from '../components/public/landing/Hero';
import HowItWorks from '../components/public/landing/HowItWorks';

export default function Landing() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <Layout>
        <Hero />
        <div className="section-divider" />
        <About />
        <Features />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <CTA />
      </Layout>
    </main>
  );
}
