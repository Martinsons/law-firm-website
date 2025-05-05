import React from 'react';
import PracticeHero from '@/components/practice/PracticeHero';
import PracticeAreasDetail from '@/components/practice/PracticeAreasNew';
import FaqAccordion from '@/components/shared/FaqAccordion';
import ContactSection from '@/components/home/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practice Areas | Davis Law Firm',
  description: 'Explore our legal services in various areas of law. Finance, citizenship, criminal cases, property and family law.',
};

export default function PracticeAreasPage() {
  return (
    <>
      <PracticeHero locale="en" />
      <PracticeAreasDetail locale="en" />
      <FaqAccordion locale="en" />
      <ContactSection locale="en" />
    </>
  );
}
