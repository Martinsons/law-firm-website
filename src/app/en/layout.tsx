import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LiveChat from '@/components/shared/LiveChat';

export const metadata: Metadata = {
  title: 'Davis | Law Firm',
  description: 'Professional legal services in Latvia',
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar locale="en" />
      <main>
        {children}
      </main>
      <Footer locale="en" />
      <LiveChat locale="en" />
    </>
  );
}
