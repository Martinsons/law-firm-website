"use client";

import React from 'react';
import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';
import { motion } from 'framer-motion';

interface PracticeAreasDetailProps {
  locale: string;
}

const translations = {
  lv: {
    areas: [
      {
        id: 'financial-capital',
        title: 'Finanses un uzņēmējdarbība',
        icon: 'money',
        description: 'Mūsu finanšu un uzņēmējdarbības prakses grupa sniedz visaptverošus juridiskos pakalpojumus uzņēmumiem visos to attīstības posmos.',
        services: [
          'Uzņēmumu dibināšana un reģistrācija',
          'Uzņēmumu pārstrukturēšana',
          'Investīciju piesaiste un finansējums',
          'Līgumu izstrāde un pārskatīšana',
          'Nodokļu plānošana un konsultācijas',
          'Intelektuālā īpašuma aizsardzība',
          'Darba tiesības un darba attiecības'
        ]
      },
      {
        id: 'citizenship',
        title: 'Pilsonība un imigrācija',
        icon: 'passport',
        description: 'Mūsu imigrācijas tiesību speciālisti palīdz klientiem visos ar pilsonību un imigrāciju saistītos jautājumos Latvijā un Eiropas Savienībā.',
        services: [
          'Uzturēšanās atļauju iegūšana',
          'Latvijas pilsonības iegūšana',
          'Eiropas Savienības pilsoņu reģistrācija',
          'Ģimenes apvienošana',
          'Darba atļaujas',
          'Investoru vīzas',
          'Pārsūdzības imigrācijas lietās'
        ]
      },
      {
        id: 'criminal-cases',
        title: 'Krimināllietas un aizstāvība',
        icon: 'justice',
        description: 'Mūsu krimināltiesību speciālisti nodrošina profesionālu juridisko aizstāvību visās kriminālprocesa stadijās.',
        services: [
          'Aizstāvība pirmstiesas izmeklēšanā',
          'Pārstāvība tiesā krimināllietās',
          'Juridiskās konsultācijas krimināltiesībās',
          'Cietušo pārstāvība',
          'Liecinieku konsultēšana',
          'Sodu izpildes tiesības',
          'Rehabilitācija un sodāmības dzēšana'
        ]
      },
      {
        id: 'property-law',
        title: 'Īpašuma tiesības',
        icon: 'property',
        description: 'Mūsu īpašuma tiesību speciālisti palīdz klientiem visos ar nekustamo un kustamo īpašumu saistītos jautājumos.',
        services: [
          'Nekustamā īpašuma darījumi',
          'Īpašuma reģistrācija',
          'Būvniecības un plānošanas tiesības',
          'Apsaimniekošanas līgumi',
          'Īres un nomas attiecības',
          'Nekustamā īpašuma strīdi',
          'Zemes ierīcība un robežu strīdi'
        ]
      },
      {
        id: 'family-law',
        title: 'Ģimenes tiesības',
        icon: 'family',
        description: 'Mūsu ģimenes tiesību speciālisti sniedz juridisku atbalstu ģimenes tiesību jautājumos, ievērojot katra klienta individuālās vajadzības.',
        services: [
          'Laulības līgumi',
          'Laulības šķiršana',
          'Bērnu aizgādības jautājumi',
          'Uzturlīdzekļu piedziņa',
          'Adopcija un aizbildnība',
          'Mantošanas jautājumi',
          'Vecāku tiesību noteikšana'
        ]
      }
    ],
    readMore: 'Uzzināt vairāk',
    contactUs: 'Sazināties ar mums'
  },
  en: {
    areas: [
      {
        id: 'financial-capital',
        title: 'Financial Capital & Business',
        icon: 'money',
        description: 'Our Financial Capital and Business practice group provides comprehensive legal services to businesses at all stages of development.',
        services: [
          'Company formation and registration',
          'Corporate restructuring',
          'Investment attraction and financing',
          'Contract drafting and review',
          'Tax planning and consulting',
          'Intellectual property protection',
          'Employment law and labor relations'
        ]
      },
      {
        id: 'citizenship',
        title: 'Citizenship & Immigration',
        icon: 'passport',
        description: 'Our immigration law specialists help clients with all citizenship and immigration-related matters in Latvia and the European Union.',
        services: [
          'Obtaining residence permits',
          'Latvian citizenship acquisition',
          'European Union citizen registration',
          'Family reunification',
          'Work permits',
          'Investor visas',
          'Appeals in immigration cases'
        ]
      },
      {
        id: 'criminal-cases',
        title: 'Criminal Cases & Defense',
        icon: 'justice',
        description: 'Our criminal law specialists provide professional legal defense at all stages of criminal proceedings.',
        services: [
          'Defense in pre-trial investigation',
          'Court representation in criminal cases',
          'Legal consultations in criminal law',
          'Victim representation',
          'Witness counseling',
          'Penalty execution law',
          'Rehabilitation and criminal record expungement'
        ]
      },
      {
        id: 'property-law',
        title: 'Property Law',
        icon: 'property',
        description: 'Our property law specialists help clients with all matters related to real estate and movable property.',
        services: [
          'Real estate transactions',
          'Property registration',
          'Construction and planning law',
          'Management agreements',
          'Rental and lease relations',
          'Real estate disputes',
          'Land management and boundary disputes'
        ]
      },
      {
        id: 'family-law',
        title: 'Family Law',
        icon: 'family',
        description: 'Our family law specialists provide legal support in family law matters, considering the individual needs of each client.',
        services: [
          'Marriage contracts',
          'Divorce proceedings',
          'Child custody matters',
          'Alimony recovery',
          'Adoption and guardianship',
          'Inheritance matters',
          'Determination of parental rights'
        ]
      }
    ],
    readMore: 'Read more',
    contactUs: 'Contact us'
  }
};

export default function PracticeAreasDetail({ locale }: PracticeAreasDetailProps) {
  const t = translations[locale as keyof typeof translations];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.1 * i
      }
    }),
    hover: { 
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  
  const serviceVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: 0.2 + (i * 0.05) }
    })
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          className="grid gap-16"
        >
          {t.areas.map((area, index) => (
            <motion.div 
              key={area.id} 
              variants={cardVariants} 
              custom={index} 
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{area.title}</h2>
                <p className="text-gray-600 mb-6">{area.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Mūsu pakalpojumi:</h3>
                  <ul className="space-y-2">
                    {area.services.map((service, sIndex) => (
                      <motion.li 
                        key={sIndex} 
                        className="flex items-start"
                        variants={serviceVariants}
                        custom={sIndex}
                      >
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-gray-700">{service}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Icon badge */}
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center z-20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {area.icon === 'money' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {area.icon === 'passport' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                  {area.icon === 'justice' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  )}
                  {area.icon === 'property' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                  {area.icon === 'family' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="w-8 h-1 bg-blue-600 mr-2"></span>
                    Services
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {area.services.map((service, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        variants={serviceVariants}
                        custom={idx}
                      >
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-gray-700">{service}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center mt-auto pt-2">
                  <Link 
                    href="/en/contact" 
                    className="inline-block px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition shadow-sm hover:shadow"
                  >
                    {t.contactUs}
                  </Link>
                  
                  <button className="text-blue-600 hover:text-blue-700 hover:underline transition flex items-center font-medium">
                    {t.readMore}
                    <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
