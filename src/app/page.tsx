import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import Customers from '@/components/Customers';
import About from '@/components/About';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Catalog />
      <Customers />
      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}