import type { Metadata } from 'next';
import { Anton, Inter, Poppins } from 'next/font/google';
import './globals.css';
import React from 'react';

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-anton',
});

const popin = Poppins({
  variable: '--font-poppins',
  weight: '400',
});
// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${popin.variable}`}>{children}</body>
    </html>
  );
}
