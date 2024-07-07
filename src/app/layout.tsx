import './globals.css';
import { cn } from '../lib/utils';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { ViewTransitions } from 'next-view-transitions';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Omens',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="pt-BR">
        <body className={cn(inter.className, 'dark')}>
          <Header />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
