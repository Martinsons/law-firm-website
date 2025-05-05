import React from 'react';
import PracticeHero from '@/components/practice/PracticeHero';
import PracticeAreasDetail from '@/components/practice/PracticeAreasNew';
import FaqAccordion from '@/components/shared/FaqAccordion';
import ContactSection from '@/components/home/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prakses jomas | Davis Juridiskais Birojs',
  description: 'Iepazīstiet mūsu juridiskos pakalpojumus dažādās tiesību jomās. Finanses, pilsonība, krimināllietas, īpašuma un ģimenes tiesības.',
};

export default function PracticeAreasPage() {
  return (
    <>
      <PracticeHero locale="lv" />
      <PracticeAreasDetail locale="lv" />
      <FaqAccordion locale="lv" />
      <ContactSection locale="lv" />
    </>
  );
}
