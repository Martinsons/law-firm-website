"use client";

import React from 'react';
import SafeImage from '@/components/ui/SafeImage';
import { motion } from 'framer-motion';

interface CalendlyIntegrationProps {
  locale: string;
}

const translations = {
  lv: {
    title: "Pieteikt konsultāciju",
    subtitle: "Izvēlieties jums ērtāko laiku konsultācijai ar mūsu advokātiem",
    bookNow: "Rezervēt konsultāciju",
  },
  en: {
    title: "Schedule a Consultation",
    subtitle: "Choose a convenient time for a consultation with our attorneys",
    bookNow: "Book Consultation",
  }
};

export default function CalendlyIntegration({ locale }: CalendlyIntegrationProps) {
  const t = translations[locale as keyof typeof translations];

  const openCalendly = () => {
    // This is a direct popup approach, which is more reliable than embedding
    if (typeof window !== 'undefined') {
      window.open(
        'https://calendly.com/d/dnc-nz9-nrj/davis-law-consultation',
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-8 overflow-hidden"
    >
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <motion.h2 
          className="text-3xl font-semibold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t.title}
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {t.subtitle}
        </motion.p>

        <motion.div 
          className="relative rounded-xl overflow-hidden w-full max-w-2xl mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <SafeImage
            src="/images/consultation.jpg"
            alt="Legal consultation"
            width={800}
            height={400}
            className="w-full h-[300px] object-cover"
            fallbackSrc="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end">
            <div className="p-6 text-white w-full">
              <p className="text-xl font-medium mb-2">Davis Law Firm</p>
              <p className="text-sm opacity-90">Professional Legal Services</p>
            </div>
          </div>
        </motion.div>

        <motion.button
          onClick={openCalendly}
          className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{t.bookNow}</span>
        </motion.button>

        <motion.div 
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {[1, 2, 3].map((index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 p-5 rounded-lg border border-gray-200"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (index * 0.1), duration: 0.4 }}
            >
              <div className="font-medium text-gray-800 mb-2">
                {locale === 'lv' ? 'Priekšrocība ' : 'Benefit '} {index}
              </div>
              <p className="text-gray-600 text-sm">
                {locale === 'lv' 
                  ? 'Ērti rezervējiet konsultāciju tiešsaistē jebkurā laikā.'
                  : 'Easily book your consultation online at any time.'}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
