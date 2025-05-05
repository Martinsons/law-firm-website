import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import PracticeAreas from '@/components/home/PracticeAreas';
import Testimonials from '@/components/home/Testimonials';
import ContactSection from '@/components/home/ContactSection';

export default function LatvianHomePage() {
  return (
    <>
      <HeroSection locale="lv" />
      <PracticeAreas locale="lv" />
      <Testimonials locale="lv" />
      <ContactSection locale="lv" />
    </>
  );
}
