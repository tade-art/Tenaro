import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../PublicNavbar';

export default function NavAndFooter({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith('/auth');
  const showNav = !isAuthPage;

  return (
    <div className={`min-h-screen flex flex-col ${isAuthPage ? 'bg-[var(--color-accent-bg)]' : ''}`}>
      {showNav && <Navbar />}
      <main className={`${isAuthPage ? 'flex-grow flex items-center justify-center px-4 py-12' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
