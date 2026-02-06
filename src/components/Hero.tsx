
import React from 'react';
import { ChevronDown, Star, Shield, Award, MessageCircle } from 'lucide-react';

const Hero = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Halo Pak Dahlan, saya tertarik dengan promo mobil Mitsubishi. Bisa info lebih lanjut?');
    window.open(`https://wa.me/6281292835369?text=${message}`, '_blank');
  };

  const stats = [
    { icon: Star, value: '100+', label: 'Unit Terjual' },
    { icon: Shield, value: '100%', label: 'Trusted' },
    { icon: Award, value: '9+', label: 'Tahun Pengalaman' },
  ];

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-mitsubishi-darkBlack via-mitsubishi-black to-mitsubishi-darkBlack" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-mitsubishi-red/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-mitsubishi-darkBlack to-transparent" />
        
        {/* Animated Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mitsubishi-red/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mitsubishi-red/5 rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(237,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(237,0,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-mitsubishi-red/10 border border-mitsubishi-red/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-mitsubishi-red rounded-full animate-pulse" />
              <span className="text-sm text-mitsubishi-red font-medium">Promo Spesial Bulan Ini</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="text-white">Wujudkan</span><br />
                <span className="gradient-text">Impian Mobil</span><br />
                <span className="text-white">Mitsubishi Anda</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0">
                Dapatkan penawaran terbaik untuk semua tipe Mitsubishi.
                <span className="text-mitsubishi-red font-semibold"> DP ringan</span>,
                <span className="text-mitsubishi-red font-semibold"> cicilan murah</span>, dan
                <span className="text-mitsubishi-red font-semibold"> proses cepat</span>!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleWhatsApp}
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-mitsubishi-red to-mitsubishi-darkRed text-white px-8 py-4 rounded-full font-bold text-lg btn-shine hover:shadow-xl hover:shadow-mitsubishi-red/30 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                Chat WhatsApp
              </button>
              <a
                href="#katalog"
                className="flex items-center justify-center gap-3 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-mitsubishi-red/50 transition-all duration-300"
              >
                Lihat Katalog
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <stat.icon className="w-5 h-5 text-mitsubishi-red" />
                    <span className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Car Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-mitsubishi-gray to-mitsubishi-darkBlack" />
                <img
                  src="/images/cars/xpander.png"
                  alt="Mitsubishi Xpander"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mitsubishi-darkBlack via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-mitsubishi-red/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-mitsubishi-red text-white px-4 py-2 rounded-full font-bold text-sm animate-float">
                  BEST SELLER
                </div>
              </div>

              {/* Price Tag */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 glass rounded-2xl p-6 shadow-2xl">
                <p className="text-sm text-gray-400 text-center mb-1">Mulai dari</p>
                <p className="text-2xl sm:text-3xl font-bold text-white text-center">
                  Rp <span className="text-mitsubishi-red">270</span> Juta
                </p>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-mitsubishi-red/20 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-mitsubishi-red/10 rounded-full" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll ke bawah</span>
          <ChevronDown className="w-6 h-6 text-mitsubishi-red animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;