import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import About from '../components/public/About';
import CTA from '../components/public/CTA';
import Features from '../components/public/Features';
import Hero from '../components/public/Hero';
import HowItWorks from '../components/public/HowItWorks';

export default function Landing() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <About />
      <Features />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <CTA />
      <Footer />
    </main>
  );
}
