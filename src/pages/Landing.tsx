import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Landing() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Hero />
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <Features />
      <Footer />
    </main>
  );
}
