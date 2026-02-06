import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Katalog', href: '#katalog' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Halo Pak Dahlan, saya tertarik dengan mobil Mitsubishi. Bisa info lebih lanjut?');
    window.open(`https://wa.me/6281292835369?text=${message}`, '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-mitsubishi-darkBlack/95 backdrop-blur-lg shadow-lg shadow-mitsubishi-red/10' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          
          <a href="#beranda" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12">
                <img 
                  src="/images/logo/mitsubishi.svg"
                  alt="Mitsubishi Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                <span className="text-mitsubishi-red">DAHLAN</span> MITSUBISHI
              </h1>
              <p className="text-xs text-gray-400">Sales Consultant</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-white font-medium transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-mitsubishi-red to-mitsubishi-darkRed group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <button
            onClick={handleWhatsApp}
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-mitsubishi-red to-mitsubishi-darkRed text-white px-6 py-3 rounded-full font-semibold btn-shine hover:shadow-lg hover:shadow-mitsubishi-red/30 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Hubungi Dahlan</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-mitsubishi-darkBlack/98 backdrop-blur-xl transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold text-white hover:text-mitsubishi-red transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { setIsOpen(false); handleWhatsApp(); }}
            className="flex items-center gap-2 bg-gradient-to-r from-mitsubishi-red to-mitsubishi-darkRed text-white px-8 py-4 rounded-full font-semibold mt-4"
          >
            <Phone className="w-5 h-5" />
            <span>Hubungi Dahlan</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;