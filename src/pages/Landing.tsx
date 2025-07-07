import About from '../components/About';
import CTA from '../components/CTA';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Navbar from '../components/Navbar';

export default function Landing() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
