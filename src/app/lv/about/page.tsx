import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import TeamSection from '@/components/about/TeamSection';
import ContactSection from '@/components/home/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Par mums | Davis Juridiskais Birojs',
  description: 'Uzziniet vairāk par Davis juridisko biroju, mūsu komandu un vērtībām. Mēs piedāvājam profesionālus juridiskos pakalpojumus ar vairāk nekā 10 gadu pieredzi.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero locale="lv" />
      <TeamSection locale="lv" />
      <ContactSection locale="lv" />
    </>
  );
}
