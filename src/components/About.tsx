// components/About.tsx
import React from 'react';

import { Award, Shield, Clock, Users, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Dealer Resmi',
      description: 'Produk 100% original dengan garansi resmi Mitsubishi Motors Indonesia'
    },
    {
      icon: Clock,
      title: 'Proses Cepat',
      description: 'Pengajuan kredit diproses dalam 1x24 jam dengan approval tinggi'
    },
    {
      icon: Award,
      title: 'Harga Terbaik',
      description: 'Dapatkan harga kompetitif dan promo eksklusif setiap bulan'
    },
    {
      icon: Users,
      title: 'After Sales',
      description: 'Layanan purna jual terbaik untuk kepuasan pelanggan'
    }
  ];

  return (
    <section id="tentang" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mitsubishi-darkBlack via-mitsubishi-black to-mitsubishi-darkBlack" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Info */}
          <div className="relative">
            <div className="relative z-10">
              {/* Profile Card */}
              <div className="glass rounded-3xl p-8 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-mitsubishi-red/30">
                    <img
                      src="/images/logo/pr.jpeg"
                      alt="Dahlan - Sales Consultant Mitsubishi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-mitsubishi-red to-mitsubishi-darkRed rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Dahlan</h3>
                <p className="text-mitsubishi-red font-medium mb-4">Sales Consultant</p>
                <p className="text-gray-400 mb-6">
                  Berpengalaman lebih dari 9 tahun di industri otomotif Mitsubishi.
                  Siap membantu Anda menemukan mobil impian dengan pelayanan terbaik.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href="tel:+6281292835369"
                    className="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 text-mitsubishi-red" />
                    <span>+62812-9283-5369</span>
                  </a>
                  <a
                    href="mailto:dahlan.mitsubishi@gmail.com"
                    className="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 text-mitsubishi-red" />
                    <span>muhamaddahlan1404@gmail.com</span>
                  </a>
                  <div className="flex items-center justify-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-mitsubishi-red" />
                    <span>Sun Star Prima Motor</span>
                    
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    const message = encodeURIComponent(
                      'Halo Pak Dahlan, saya ingin konsultasi tentang pembelian mobil Mitsubishi.'
                    );
                    window.open(`https://wa.me/6281292835369?text=${message}`, '_blank');
                  }}
                  className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold btn-shine hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat via WhatsApp
                </button>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-mitsubishi-red/20 rounded-3xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-mitsubishi-red/20 rounded-3xl" />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-mitsubishi-red/10 border border-mitsubishi-red/30 rounded-full text-mitsubishi-red font-medium text-sm mb-4">
                Tentang Saya
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Kenapa Harus Beli di <span className="gradient-text">Dahlan Mitsubishi?</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Dengan pengalaman lebih dari satu dekade, saya berkomitmen memberikan pelayanan terbaik
                untuk setiap pelanggan. Kepuasan Anda adalah prioritas utama saya.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 hover:border-mitsubishi-red/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-mitsubishi-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-mitsubishi-red/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-mitsubishi-red" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="glass rounded-full px-4 py-2 text-sm text-gray-300">
                ✅ Dealer Resmi
              </div>
              <div className="glass rounded-full px-4 py-2 text-sm text-gray-300">
                ✅ Garansi Resmi
              </div>
              <div className="glass rounded-full px-4 py-2 text-sm text-gray-300">
                ✅ Free Service
              </div>
              <div className="glass rounded-full px-4 py-2 text-sm text-gray-300">
                ✅ Free Asuransi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;