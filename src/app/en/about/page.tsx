import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import TeamSection from '@/components/about/TeamSection';
import ContactSection from '@/components/home/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Davis Law Firm',
  description: 'Learn more about Davis Law Firm, our team and values. We offer professional legal services with over 10 years of experience.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero locale="en" />
      <TeamSection locale="en" />
      <ContactSection locale="en" />
    </>
  );
}
