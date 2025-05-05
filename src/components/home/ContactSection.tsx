"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ContactSectionProps {
  locale: string;
}

const translations = {
  lv: {
    sectionTitle: "Pieteikt bezmaksas lietas izvērtēšanu",
    description: "Mēs palīdzam risināt sarežģītas juridiskas problēmas un aizsargāt jūsu tiesības. Mūsu komanda ir gatava jums palīdzēt.",
    cta: "Pieteikt konsultāciju",
    madeWith: "Izstrādāts ar",
    inLatvia: "Latvijā"
  },
  en: {
    sectionTitle: "Schedule a free case evaluation",
    description: "We help navigate complex legal issues and protect your rights every step of the way. Our team is ready to assist you.",
    cta: "Book Consultation",
    madeWith: "Made with",
    inLatvia: "in Latvia"
  }
};

export default function ContactSection({ locale }: ContactSectionProps) {
  const t = translations[locale as keyof typeof translations];
  
  // Benefits data with translations
  const benefits = [
    {
      id: 'free-consult',
      text: locale === 'en' ? 'Free initial consultation' : 'Bezmaksas sākotnējā konsultācija',
    },
    {
      id: 'experienced',
      text: locale === 'en' ? 'Specialized experienced attorneys' : 'Pieredzējuši juristi ar specializāciju',
    },
    {
      id: 'flexible',
      text: locale === 'en' ? 'Flexible payment schedule' : 'Elastīgs maksājumu grafiks',
    }
  ];

  // Pricing data with translations
  const pricingOptions = [
    {
      name: locale === 'en' ? 'Basic' : 'Pamata',
      description: locale === 'en' ? 'Consultation' : 'Konsultācija',
      price: '€50'
    },
    {
      name: locale === 'en' ? 'Standard' : 'Standarta',
      description: locale === 'en' ? 'Document preparation' : 'Dokumentu sagatavošana',
      price: '€150'
    },
    {
      name: locale === 'en' ? 'Premium' : 'Premium',
      description: locale === 'en' ? 'Case representation' : 'Lietu pārstāvība',
      price: '€300'
    },
    {
      name: locale === 'en' ? 'VIP' : 'VIP',
      description: locale === 'en' ? 'Full service' : 'Pilna apkalpošana',
      price: '€500+'
    }
  ];
  
  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-900 to-blue-950 text-white overflow-hidden">
      {/* Professional pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_25%,transparent_25%,transparent_50%,#ffffff05_50%,#ffffff05_75%,transparent_75%,transparent)] bg-[length:32px_32px]"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-64 bg-gradient-to-l from-blue-800/10 to-transparent"></div>
      <div className="absolute left-0 top-0 w-1/3 h-24 bg-gradient-to-r from-blue-800/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:pr-8"
          >
            <div className="inline-block mb-4 py-1 px-3 border border-blue-700 bg-blue-800/50 text-white text-sm font-medium tracking-wider uppercase">
              <span className="mr-1">•</span> {locale === 'en' ? 'Legal Consultation' : 'Juridiskā konsultācija'} <span className="ml-1">•</span>
            </div>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t.sectionTitle}
            </motion.h2>
            
            <motion.div 
              className="w-16 h-1 bg-blue-400 mb-6"  
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            
            <motion.p 
              className="text-blue-100 mb-10 max-w-lg text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {t.description}
            </motion.p>
            
            <div className="space-y-5 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit.id}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-700 shadow-lg rounded-sm border border-blue-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-50 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href={`/${locale}/contact`} 
                className="px-8 py-4 bg-white text-blue-900 border-b-2 border-blue-100 hover:bg-blue-50 transition-all duration-300 inline-flex items-center font-medium shadow-xl group"
              >
                <span className="mr-2">{t.cta}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-blue-200/5 -m-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            ></motion.div>
            
            <motion.div 
              className="relative bg-white text-gray-900 border-t-2 border-blue-900 shadow-2xl p-8 md:p-10"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-blue-900 flex items-center">
                <span className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center mr-3 text-sm">
                  €
                </span>
                {locale === 'en' ? 'Service Rates' : 'Cenrādis'}
              </h3>
              
              <div className="space-y-6">
                {pricingOptions.map((option, index) => (
                  <motion.div 
                    key={index} 
                    className="flex justify-between pb-4 border-b border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  >
                    <div>
                      <div className="font-bold text-gray-900">{option.name}</div>
                      <div className="text-sm text-gray-500">{option.description}</div>
                    </div>
                    <div className="text-xl font-bold text-blue-900">{option.price}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center">
                  <span>{t.madeWith}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span>{t.inLatvia}</span>
                </div>
                
                <div className="font-medium text-blue-900">
                  Davis Law Firm
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
