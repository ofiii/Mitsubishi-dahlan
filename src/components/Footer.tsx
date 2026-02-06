// components/Footer.tsx
'use client';

import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Car,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Katalog Mobil', href: '#katalog' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Hubungi Kami', href: '#kontak' },
  ];

  const carLinks = [
    { name: 'Xpander', href: '#katalog' },
    { name: 'Pajero Sport', href: '#katalog' },
    { name: 'Triton', href: '#katalog' },
    { name: 'L300', href: '#katalog' },
    { name: 'Colt Diesel', href: '#katalog' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/dahlan.mitsubishi', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/dahlan.mitsubishi', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com/@dahlan.mitsubishi', label: 'YouTube' },
  ];

  return (
    <footer id="kontak" className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mitsubishi-black to-mitsubishi-darkBlack" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mitsubishi-red/50 to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* CTA Section */}
        <div className="glass rounded-3xl p-8 lg:p-12 mb-16 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Siap Memiliki <span className="gradient-text">Mobil Impian</span>?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Hubungi saya sekarang untuk mendapatkan penawaran terbaik dan promo eksklusif bulan ini!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  'Halo Pak Dahlan, saya ingin tanya promo mobil Mitsubishi terbaru.'
                );
                window.open(`https://wa.me/6281292835369?text=${message}`, '_blank');
              }}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold btn-shine hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Sekarang
            </button>
            <a
              href="tel:+6281292835369"
              className="flex items-center justify-center gap-2 bg-mitsubishi-gray/50 border border-mitsubishi-red/30 text-white px-8 py-4 rounded-full font-bold hover:bg-mitsubishi-gray transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              6281292835369
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#beranda" className="flex items-center gap-3 group">
            <div className="relative">
                <div className="w-12 h-12">
                <Image 
                    src="/images/logo/mitsubishi.svg"
                    alt="Mitsubishi Logo"
                    width={40}
                    height={40}
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
            <p className="text-gray-400 text-sm mb-6">
              Sales resmi Mitsubishi Motors Indonesia. Melayani penjualan seluruh tipe Mitsubishi dengan harga terbaik dan pelayanan profesional.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-mitsubishi-gray/50 rounded-full flex items-center justify-center text-gray-400 hover:bg-mitsubishi-red hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-bold text-white mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-mitsubishi-red transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h5 className="text-lg font-bold text-white mb-6">Produk Kami</h5>
            <ul className="space-y-3">
              {carLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-mitsubishi-red transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-lg font-bold text-white mb-6">Hubungi Kami</h5>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+6281292835369"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-mitsubishi-red flex-shrink-0 mt-0.5" />
                  <span>0812 9283 5369</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:dahlan.mitsubishi@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-mitsubishi-red flex-shrink-0 mt-0.5" />
                  <span>muhamaddahlan1404@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-mitsubishi-red flex-shrink-0 mt-0.5" />
                  <span>Sun Star Prima Motor<br />Jl.Raya Tajur No.62 001/004 Pakuan Bogor Selatan - Kota Bogor</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-mitsubishi-gray/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Dahlan Mitsubishi. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;