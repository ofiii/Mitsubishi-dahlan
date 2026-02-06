import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://dahlan-mitsubishi.com'),
  title: {
    default: 'Dahlan Mitsubishi - Dealer & Sales Resmi Mitsubishi | Promo Terbaik 2026',
    template: '%s | Dahlan Mitsubishi'
  },
  description: 'Sales resmi Mitsubishi Motors Indonesia. Dapatkan promo terbaik Xpander, Pajero Sport, Triton, L300. DP ringan, cicilan murah. Hubungi Dahlan sekarang!',
  keywords: [
    'mitsubishi', 'dealer mitsubishi', 'sales mitsubishi', 'dahlan mitsubishi',
    'xpander', 'pajero sport', 'triton', 'l300', 'promo mitsubishi', 
    'kredit mitsubishi', 'harga xpander 2026', 'harga pajero sport 2026'
  ],
  authors: [{ name: 'Dahlan - Sales Mitsubishi' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://dahlan-mitsubishi.com',
    siteName: 'Dahlan Mitsubishi',
    title: 'Dahlan Mitsubishi - Dealer & Sales Resmi Mitsubishi',
    description: 'Promo terbaik Mitsubishi 2026. DP ringan, cicilan murah.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#ED0000" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}