

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, Car, Camera } from 'lucide-react';

interface Testimonial {
  id: number;
  rating: number;
  carImage: string; 
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    carImage: '/images/customers/cs1.jpeg',
    review: 'Pak Dahlan sangat membantu! Prosesnya cepat dan transparan. Xpander saya sampai tepat waktu dengan kondisi sempurna.',

  },
  {
    id: 2,
    rating: 5,
    carImage: '/images/customers/cs2.jpeg',
    review: 'Pelayanan luar biasa! Pak Dahlan sabar menjelaskan semua fitur dan membantu proses kredit hingga selesai.',
  },
  {
    id: 3,
    rating: 5,
    carImage: '/images/customers/cs3.jpeg',
    review: 'Sudah 2x beli mobil dari Pak Dahlan. Selalu puas dengan pelayanannya. Harga kompetitif!',
  },
  {
    id: 4,
    rating: 5,
    carImage: '/images/customers/cs4.jpeg',
    review: 'Xpander Cross saya sangat nyaman untuk keluarga. Proses pembelian lancar berkat bantuan Pak Dahlan!',
  },
  {
    id: 5,
    rating: 5,
    carImage: '/images/customers/cs5.jpeg',
    review: 'Untuk keperluan usaha, L300 adalah pilihan terbaik. Pak Dahlan memberikan harga terbaik!',
  
  },
  {
    id: 6,
    rating: 5,
    carImage: '/images/customers/cs6.jpeg',
    review: 'Sangat profesional! Pak Dahlan follow up terus sampai mobil dikirim. After sales memuaskan.',
   
  }
];

const Customers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= testimonials.length - itemsPerView ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [itemsPerView]);

  return (
    <section id="testimoni" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-mitsubishi-black via-mitsubishi-darkBlack to-mitsubishi-black" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-mitsubishi-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-mitsubishi-red/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-mitsubishi-red/10 border border-mitsubishi-red/30 rounded-full text-mitsubishi-red font-medium text-sm mb-4">
            Testimoni Pelanggan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 section-title">
            Apa Kata <span className="gradient-text">Pelanggan Kami</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Kepuasan pelanggan adalah prioritas utama kami. Lihat foto dan testimoni mereka!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '100+', label: 'Happy Customers' },
            { value: '4.9', label: 'Rating', icon: Star },
            { value: '9+', label: 'Tahun Pengalaman' },
            { value: '100%', label: 'Kepuasan' },
          ].map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center hover:border-mitsubishi-red/50 transition-colors">
              <div className="flex items-center justify-center gap-2 mb-2">
                {stat.icon && <stat.icon className="w-6 h-6 text-yellow-400 fill-yellow-400" />}
                <span className="text-3xl font-black text-white">{stat.value}</span>
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => setActiveIndex((prev) => (prev <= 0 ? testimonials.length - itemsPerView : prev - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-mitsubishi-red/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-mitsubishi-red transition-colors hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev >= testimonials.length - itemsPerView ? 0 : prev + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-mitsubishi-red/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-mitsubishi-red transition-colors hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 px-3" style={{ width: `${100 / itemsPerView}%` }}>
                  <div className="glass rounded-3xl overflow-hidden h-full flex flex-col hover:border-mitsubishi-red/30 transition-all duration-300 card-hover">
                    
                    {/* ⭐ FOTO MOBIL/PELANGGAN DENGAN MOBIL */}
                    <div className="relative aspect-[16/10] overflow-hidden group">
                      <img 
                        src={testimonial.carImage} 
                        alt={`cs`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-mitsubishi-darkBlack via-transparent to-transparent" />
                      
                      {/* Badge Verified */}
                      <div className="absolute top-3 left-3 flex items-center gap-1 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                        <Camera className="w-3 h-3" />
                        Verified Buyer
                      </div>
                      
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <Quote className="w-8 h-8 text-mitsubishi-red/30 mb-3" />
                      <p className="text-gray-300 flex-grow mb-4 leading-relaxed text-sm">"{testimonial.review}"</p>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(Math.max(1, testimonials.length - itemsPerView + 1))].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-mitsubishi-red w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Bergabung dengan ratusan pelanggan puas lainnya!
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent('Halo Pak Dahlan, saya tertarik membeli mobil Mitsubishi. Bisa info promo terbaru?');
              window.open(`https://wa.me/6281292835369?text=${message}`, '_blank');
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-mitsubishi-red to-mitsubishi-darkRed text-white px-8 py-4 rounded-full font-bold btn-shine hover:shadow-lg hover:shadow-mitsubishi-red/30 transition-all duration-300"
          >
            Jadi Pelanggan Berikutnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Customers;