// components/WhatsAppButton.tsx
'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Halo Pak Dahlan, saya tertarik dengan mobil Mitsubishi. Bisa info lebih lanjut?'
    );
    window.open(`https://wa.me/6281292835369?text=${message}`, '_blank');
    setShowTooltip(false);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-4 animate-slide-up">
          <div className="relative bg-white text-gray-800 rounded-2xl shadow-2xl p-4 max-w-xs">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="font-medium mb-1">Butuh bantuan? 💬</p>
            <p className="text-sm text-gray-600">Chat dengan Pak Dahlan sekarang untuk info terbaru!</p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45" />
          </div>
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleWhatsApp}
        className="relative group w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-110 transition-all duration-300"
        aria-label="Chat via WhatsApp"
      >
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-50" />
        
        {/* Icon */}
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
      </button>

      {/* Label */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
        Chat Sekarang!
      </div>
    </div>
  );
};

export default WhatsAppButton;