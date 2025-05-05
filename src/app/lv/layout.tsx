import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LiveChat from '@/components/shared/LiveChat';

export const metadata: Metadata = {
  title: 'Davis | Juridiskais Birojs',
  description: 'Profesionāli juridiski pakalpojumi Latvijā',
};

export default function LatvianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar locale="lv" />
      <main>
        {children}
      </main>
      <Footer locale="lv" />
      <LiveChat locale="lv" />
    </>
  );
}
