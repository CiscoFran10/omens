import './globals.css';
import { cn } from '../lib/utils';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { ViewTransitions } from 'next-view-transitions';

import type { Metadata } from 'next';
import { ReactQueryClientProvider } from '@/lib/react-query';
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
    <html lang="pt-BR">
      <body className={cn(inter.className, 'dark')}>
        <ReactQueryClientProvider>
          <ViewTransitions>
            <Header />
            {children}
          </ViewTransitions>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
