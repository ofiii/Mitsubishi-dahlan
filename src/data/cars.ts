export interface Car {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
  specs: string[];
  features: string[];
  category: 'suv' | 'mpv' | 'commercial' | 'pickup' | 'ev';  // ✅ Tambah 'ev'
  variants: Variant[];
}

export interface Variant {
  name: string;
  cashPrice: number;
}

export const cars: Car[] = [
  // ⭐ NEW - XFORCE
  {
    id: 'xforce',
    name: 'Mitsubishi XForce',
    type: 'Compact SUV',
    image: '/images/cars/xforce.png',
    description: 'Compact SUV tangguh dengan desain futuristik dan fitur keselamatan canggih untuk petualangan urban.',
    specs: ['1.5L MIVEC Engine', '4 Silinder', '105 PS', 'CVT'],
    features: [
      'Active Yaw Control',
      'Multi Around Monitor 360°',
      'Mitsubishi Connect',
      'Head Up Display',
      '6 SRS Airbags',
      'Forward Collision Mitigation',
      'Adaptive Cruise Control',
      'Lane Departure Warning'
    ],
    category: 'suv',
    variants: [
      { name: 'Ultimate', cashPrice: 399000000 },
      { name: 'Exceed', cashPrice: 359000000 },
      { name: 'GLS', cashPrice: 329000000 },
      { name: 'Active', cashPrice: 309000000 }
    ]
  },
  
  // ⭐ NEW - L100 EV
  {
    id: 'l100-ev',
    name: 'Mitsubishi L100 EV',
    type: 'Electric Kei Car',
    image: '/images/cars/l100-ev.png',
    description: 'Mobil listrik kompak pertama dari Mitsubishi. Zero emission, hemat energi, cocok untuk mobilitas perkotaan.',
    specs: ['Motor Listrik', '64 PS', '180 Nm Torque', 'Single Speed'],
    features: [
      'Zero Emission',
      '100% Electric',
      'Battery 20 kWh',
      'Range 180 km',
      'Fast Charging',
      'Regenerative Braking',
      'Compact Design',
      'Low Running Cost'
    ],
    category: 'ev',
    variants: [
      { name: 'Standard', cashPrice: 279000000 }
    ]
  },

  // XPANDER
  {
    id: 'xpander',
    name: 'Mitsubishi Xpander',
    type: 'MPV',
    image: '/images/cars/xpander.png',
    description: 'MPV terlaris dengan desain sporty dan kabin luas untuk keluarga Indonesia.',
    specs: ['1.5L MIVEC Engine', '4 Silinder', '104 HP', 'CVT/MT'],
    features: ['7 Seater', 'Apple CarPlay', 'Android Auto', 'Cruise Control', 'Hill Start Assist'],
    category: 'mpv',
    variants: [
      { name: 'Ultimate CVT', cashPrice: 342800000 },
      { name: 'Ultimate MT', cashPrice: 327500000 },
      { name: 'Exceed Tourer CVT', cashPrice: 297900000 },
      { name: 'Exceed Tourer MT', cashPrice: 288700000 },
      { name: 'GLS CVT', cashPrice: 279100000 },
      { name: 'GLS MT', cashPrice: 270100000 }
    ]
  },

  // XPANDER CROSS
  {
    id: 'xpander-cross',
    name: 'Xpander Cross',
    type: 'Crossover MPV',
    image: '/images/cars/xpander-cross.png',
    description: 'Perpaduan sempurna MPV dan SUV dengan ground clearance tinggi.',
    specs: ['1.5L MIVEC Engine', '4 Silinder', '104 HP', 'CVT'],
    features: ['7 Seater', 'Roof Rail', '225mm Ground Clearance', 'Paddle Shift'],
    category: 'mpv',
    variants: [
      { name: 'Premium CVT', cashPrice: 369200000 },
      { name: 'MT', cashPrice: 343000000 }
    ]
  },

  // PAJERO SPORT
  {
    id: 'pajero-sport',
    name: 'Pajero Sport',
    type: 'SUV',
    image: '/images/cars/pajero-sport.png',
    description: 'SUV premium dengan performa tangguh dan fitur keselamatan lengkap.',
    specs: ['2.4L MIVEC Diesel', '4 Silinder Turbo', '181 HP', '8-Speed AT'],
    features: ['4WD Available', 'Adaptive Cruise Control', '8 Airbags', 'Forward Collision Mitigation'],
    category: 'suv',
    variants: [
      { name: 'Dakar Ultimate 4x4 AT', cashPrice: 784650000 },
      { name: 'Dakar Ultimate 4x2 AT', cashPrice: 723450000 },
      { name: 'Dakar 4x2 AT', cashPrice: 670300000 },
      { name: 'GLX 4x2 AT', cashPrice: 612150000 },
      { name: 'Exceed 4x2 AT', cashPrice: 598000000 },
      { name: 'Exceed 4x2 MT', cashPrice: 582700000 }
    ]
  },

  // DESTINATOR (Fixed category to 'suv')
  {
    id: 'destinator',
    name: 'Destinator',
    type: 'Premium Family SUV',
    image: '/images/cars/destinator.png',
    description: 'Premium Family SUV dengan teknologi canggih dan kenyamanan berkendara terbaik.',
    specs: ['1.5L Turbo Engine', 'High Ground Clearance', '136 HP', 'CVT'],
    features: ['5 Drive Mode', '6 SRS Airbags', 'Diamond Sense Technology', 'Mitsubishi Connect'],
    category: 'suv',  // ✅ Fixed: sebelumnya 'commercial'
    variants: [
      { name: '55th Anniversary Edition', cashPrice: 520500000 },
      { name: 'Ultimate', cashPrice: 480000000 },
      { name: 'Exceed', cashPrice: 420000000 },
      { name: 'GLS', cashPrice: 395000000 }
    ]
  },

  // TRITON
  {
    id: 'triton',
    name: 'Triton',
    type: 'Double Cabin',
    image: '/images/cars/triton.png',
    description: 'Pickup tangguh untuk kerja dan petualangan dengan kabin nyaman.',
    specs: ['2.4L MIVEC Diesel', '4 Silinder Turbo', '181 HP', '6-Speed AT/MT'],
    features: ['4WD', 'Spray-in Bedliner', 'Rear Diff Lock', 'Hill Descent Control'],
    category: 'pickup',
    variants: [
      { name: 'Ultimate AT Double', cashPrice: 553750000 },
      { name: 'Exceed MT Double', cashPrice: 519350000 },
      { name: 'GLS MT Double', cashPrice: 474750000 },
      { name: 'HDX MT Double', cashPrice: 451850000 },
      { name: 'HDX MT Single', cashPrice: 398950000 },
      { name: 'GLX MT Single', cashPrice: 323200000 }
    ]
  },

  // L300
  {
    id: 'l300',
    name: 'L300',
    type: 'Commercial',
    image: '/images/cars/l300.png',
    description: 'Kendaraan niaga legendaris yang andal untuk bisnis Anda.',
    specs: ['2.5L Diesel', '4 Silinder', '79 HP', '5-Speed MT'],
    features: ['High Payload', 'Durable Engine', 'Easy Maintenance', 'Wide Cargo Space'],
    category: 'commercial',
    variants: [
      { name: 'Pick Up Flat Deck', cashPrice: 241600000 },
      { name: 'Cab Chassis', cashPrice: 239100000 }
    ]
  }
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};