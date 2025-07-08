import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../PublicNavbar';

export default function NavAndFooter({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const hide = ['/auth']
    const showNav = !hide.includes(location.pathname)

  return (
    <>
      {showNav && <Navbar />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
