import Footer from '../../components/general/Footer';
import About from '../../components/public/landing/About';
import CTA from '../../components/public/landing/CTA';
import Features from '../../components/public/landing/Features';
import Hero from '../../components/public/landing/Hero';
import HowItWorks from '../../components/public/landing/HowItWorks';
import Navbar from '../../components/public/PublicNavbar';

export default function Landing() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="section-divider" />
        <About />
        <Features />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <CTA />
        <div className="mb-12" />
      </main>
      <Footer />
    </div>
  );
}
