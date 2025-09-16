import type { Metadata } from 'next';
import './globals.css';
import { InitUtmClient } from '@/components/ui/InitUtmClient';
import { GA4 } from '@/components/ui/GA4';

export const metadata: Metadata = {
  title: 'Kashmir: Heaven on Earth',
  description: 'Tour details page built with Next.js + TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-white text-gray-800 font-sans antialiased'>
        <GA4 />
        <InitUtmClient />
        {children}
      </body>
    </html>
  );
}
