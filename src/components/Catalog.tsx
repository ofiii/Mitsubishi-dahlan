'use client';

import { useState } from 'react';
import { cars, formatPrice, Car, Variant } from '@/data/cars';
import { MessageCircle, ChevronDown, ChevronUp, Fuel, Gauge, Settings, Check, Sparkles } from 'lucide-react';

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedCar, setExpandedCar] = useState<string | null>(null);
  const [selectedVariants, setSelectedVariants] = useState<{ [key: string]: number }>({});

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'mpv', name: 'MPV' },
    { id: 'suv', name: 'SUV' },
    { id: 'pickup', name: 'Pickup' },
    { id: 'commercial', name: 'Commercial' },
  ];

  const filteredCars = activeCategory === 'all' ? cars : cars.filter(car => car.category === activeCategory);

  const handleWhatsApp = (car: Car, variant: Variant) => {
    const message = encodeURIComponent(
      `Halo Pak Dahlan, saya tertarik dengan:\n\n` +
      `🚗 *${car.name}*\n` +
      `📋 Tipe: *${variant.name}*\n` +
      `💰 Harga Cash: *${formatPrice(variant.cashPrice)}*\n` +
      `Mohon info lebih lanjut untuk promo dan ketersediaan unit. Terima kasih! 🙏`
    );
    window.open(`https://wa.me/6281292835369?text=${message}`, '_blank');
  };

  const getSelectedVariant = (car: Car) => car.variants[selectedVariants[car.id] || 0];

  return (
    <section id="katalog" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-mitsubishi-darkBlack via-mitsubishi-black to-mitsubishi-darkBlack" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-mitsubishi-red/10 border border-mitsubishi-red/30 rounded-full text-mitsubishi-red font-medium text-sm mb-4">
            Katalog Lengkap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 section-title">
            Pilihan <span className="gradient-text">Mobil Mitsubishi</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Temukan mobil impian Anda dengan harga terbaik dan promo menarik.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-mitsubishi-red to-mitsubishi-darkRed text-white shadow-lg shadow-mitsubishi-red/30'
                  : 'bg-mitsubishi-gray/50 text-gray-300 hover:bg-mitsubishi-gray hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => {
            const selectedVariant = getSelectedVariant(car);
            const isExpanded = expandedCar === car.id;
            const currentVariantIndex = selectedVariants[car.id] || 0;

            return (
              <article key={car.id} className="group glass rounded-3xl overflow-hidden card-hover">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.name} - Harga dan Spesifikasi`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mitsubishi-darkBlack via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-mitsubishi-red text-white text-xs font-bold rounded-full">{car.type}</span>
                  </div>

                  {car.id === 'xpander' && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      <Sparkles className="w-3 h-3" />
                      BEST SELLER
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-mitsubishi-red transition-colors">{car.name}</h3>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">{car.description}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Fuel className="w-4 h-4 text-mitsubishi-red" />
                      <span>{car.specs[0]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Gauge className="w-4 h-4 text-mitsubishi-red" />
                      <span>{car.specs[2]}</span>
                    </div>
                  </div>

                  {/* Variant Selector */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Settings className="w-4 h-4 text-mitsubishi-red" />
                      Pilih Tipe:
                    </label>
                    <div className="relative">
                      <select
                        value={currentVariantIndex}
                        onChange={(e) => setSelectedVariants({ ...selectedVariants, [car.id]: parseInt(e.target.value) })}
                        className="w-full bg-mitsubishi-gray/50 border border-mitsubishi-red/20 rounded-xl px-4 py-3 text-white appearance-none cursor-pointer focus:border-mitsubishi-red focus:outline-none transition-colors"
                      >
                        {car.variants.map((variant, index) => (
                          <option key={index} value={index} className="bg-mitsubishi-gray">{variant.name}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="bg-mitsubishi-gray/30 rounded-2xl p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Harga Cash</span>
                      <span className="text-xl font-bold text-white">{formatPrice(selectedVariant.cashPrice)}</span>
                    </div>
                  </div>

                  {/* Features Toggle */}
                  <button
                    onClick={() => setExpandedCar(isExpanded ? null : car.id)}
                    className="flex items-center justify-between w-full text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <span>Lihat Fitur</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && (
                    <div className="space-y-2 animate-slide-up">
                      {car.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-mitsubishi-red flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <button
                    onClick={() => handleWhatsApp(car, selectedVariant)}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-mitsubishi-red to-mitsubishi-darkRed text-white py-4 rounded-xl font-bold btn-shine hover:shadow-lg hover:shadow-mitsubishi-red/30 transition-all duration-300 group"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Tanya Harga Terbaik</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Tidak menemukan yang Anda cari?</h3>
            <p className="text-gray-400 mb-6">Hubungi saya untuk konsultasi gratis</p>
            <button
              onClick={() => {
                const message = encodeURIComponent('Halo Pak Dahlan, saya ingin konsultasi tentang mobil Mitsubishi yang cocok untuk kebutuhan saya.');
                window.open(`https://wa.me/6281292835369?text=${message}`, '_blank');
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold btn-shine hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi Gratis via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;