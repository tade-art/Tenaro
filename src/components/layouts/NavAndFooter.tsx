import Footer from '../../components/Footer';
import Navbar from '../PublicNavbar';

export default function NavAndFooter({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
