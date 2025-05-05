import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import PracticeAreas from '@/components/home/PracticeAreas';
import Testimonials from '@/components/home/Testimonials';
import ContactSection from '@/components/home/ContactSection';

export default function EnglishHomePage() {
  return (
    <>
      <HeroSection locale="en" />
      <PracticeAreas locale="en" />
      <Testimonials locale="en" />
      <ContactSection locale="en" />
    </>
  );
}
