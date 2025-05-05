"use client";

import React from 'react';
import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';
import { motion } from 'framer-motion';

interface FooterProps {
  locale: string;
}

const translations = {
  lv: {
    address: "Adrese",
    contact: "Kontakti",
    practiceAreas: "Prakses jomas",
    legal: "© 2025 Davis Juridiskais Birojs. Visas tiesības aizsargātas.",
    privacyPolicy: "Privātuma politika",
    termsOfService: "Lietošanas noteikumi",
    financialCapital: "Finanses un bizness",
    citizenship: "Pilsonība un imigrācija",
    criminalCases: "Krimināllietas",
    propertyLaw: "Īpašuma tiesības",
    familyLaw: "Ģimenes tiesības",
    schedule: "Pieteikt konsultāciju"
  },
  en: {
    address: "Address",
    contact: "Contact",
    practiceAreas: "Practice Areas",
    legal: "© 2025 Davis Law Firm. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    financialCapital: "Financial Capital & Business",
    citizenship: "Citizenship & Immigration",
    criminalCases: "Criminal Cases",
    propertyLaw: "Property Law",
    familyLaw: "Family Law",
    schedule: "Schedule Consultation"
  }
};

export default function Footer({ locale }: FooterProps) {
  const t = translations[locale as keyof typeof translations];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  // Social media links
  const socialLinks = [
    { id: 'facebook', url: 'https://facebook.com', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
    { id: 'twitter', url: 'https://twitter.com', path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
    { id: 'linkedin', url: 'https://linkedin.com', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' }
  ];
  
  // Practice areas links
  const practiceAreas = [
    { id: 'financial-capital', name: t.financialCapital, href: `/${locale}/practice-areas/financial-capital` },
    { id: 'citizenship', name: t.citizenship, href: `/${locale}/practice-areas/citizenship` },
    { id: 'criminal-cases', name: t.criminalCases, href: `/${locale}/practice-areas/criminal-cases` },
    { id: 'property-law', name: t.propertyLaw, href: `/${locale}/practice-areas/property-law` },
    { id: 'family-law', name: t.familyLaw, href: `/${locale}/practice-areas/family-law` }
  ];
  
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-gray-950 text-white">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_25%,transparent_25%,transparent_50%,#ffffff05_50%,#ffffff05_75%,transparent_75%,transparent)] bg-[length:32px_32px]"></div>
      
      <div className="relative">
        {/* Top wave separator */}
        <div className="absolute -top-10 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[90px] w-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#06234e] opacity-20"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 py-16 pt-24">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16"
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <div className="mr-3 p-2 bg-blue-600 text-white rounded-sm transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">Davis</span>
              </div>
              
              <div className="mb-6 border-l-2 border-blue-600 pl-4">
                <p className="text-blue-100 mb-4 font-medium">
                  Brīvības iela 39, Rīga, LV-1010, Latvija
                </p>
                <p className="text-blue-100/80">
                  <a href="tel:+37167240090" className="hover:text-white transition-colors duration-300">+371 67 240 090</a><br />
                  <a href="mailto:info@davis.lv" className="hover:text-white transition-colors duration-300">info@davis.lv</a>
                </p>
              </div>
              
              {/* Office hours */}
              <div className="text-blue-100/70 text-sm">
                <div className="mb-1">{locale === 'en' ? 'Office Hours:' : 'Darba laiks:'}</div>
                <div className="mb-1">{locale === 'en' ? 'Mon-Fri: 9:00 - 18:00' : 'Pr-Pk: 9:00 - 18:00'}</div>
                <div>{locale === 'en' ? 'Weekends: Closed' : 'Brīvdienas: Slēgts'}</div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
                {t.practiceAreas}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-[2px] bg-blue-600" 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                ></motion.div>
              </h3>
              
              <ul className="space-y-3">
                {practiceAreas.map((area, index) => (
                  <motion.li 
                    key={area.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  >
                    <Link 
                      href={area.href} 
                      className="text-blue-100/80 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="text-blue-500 mr-2">›</span>
                      {area.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
                {t.contact}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-[2px] bg-blue-600" 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                ></motion.div>
              </h3>
              
              <div className="flex flex-col space-y-5">
                <motion.div
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href={`/${locale}/contact`} 
                    className="px-5 py-3 bg-blue-600 text-white font-medium border-b-2 border-blue-700 hover:bg-blue-700 transition-all duration-300 inline-flex items-center"
                  >
                    <span>{t.schedule}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
                
                <div className="pt-2">
                  <div className="text-blue-100/80 mb-3">{locale === 'en' ? 'Connect with us:' : 'Seko mums:'}</div>
                  <div className="flex space-x-3">
                    {socialLinks.map((social) => (
                      <motion.a 
                        key={social.id}
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={social.id}
                        className="h-10 w-10 bg-blue-900/50 hover:bg-blue-700 text-blue-100 hover:text-white flex items-center justify-center transition-all duration-300 border border-blue-800/50"
                        whileHover={{ y: -2, scale: 1.05 }}
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.path} />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
                {t.address}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-[2px] bg-blue-600" 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                ></motion.div>
              </h3>
              
              <motion.div 
                className="rounded-sm overflow-hidden shadow-lg border border-blue-900/30"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.4123735139997!2d24.12088337677117!3d56.95082647193768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd7a81eea03%3A0xe584ee5c618f5a5e!2zQnLEq3bEq2JhcyBpZWxhIDM5LCBDZSyEhXMgcmFqb25zLCBSxKtnYSwgTFYtMTAxMA!5e0!3m2!1sen!2slv!4v1714678107284!5m2!1sen!2slv" 
                  className="w-full h-56"
                  style={{ border: 0 }} 
                  loading="lazy"
                  title="Office location"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-blue-900/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-sm text-blue-100/70 mb-6 md:mb-0">{t.legal}</p>
            <div className="flex space-x-8">
              <Link href={`/${locale}/privacy-policy`} className="text-sm text-blue-100/70 hover:text-white transition-colors duration-300">
                {t.privacyPolicy}
              </Link>
              <Link href={`/${locale}/terms-of-service`} className="text-sm text-blue-100/70 hover:text-white transition-colors duration-300">
                {t.termsOfService}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
