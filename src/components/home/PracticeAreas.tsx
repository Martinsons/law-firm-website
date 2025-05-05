"use client";

import React from 'react';
import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';
import { motion } from 'framer-motion';

interface PracticeAreasProps {
  locale: string;
}

const translations = {
  lv: {
    sectionTitle: "Darbības virzieni",
    sectionSubtitle: "Jomas, kurās mēs praktizējam tiesību aktus",
    financialCapital: {
      title: "Finanses un uzņēmējdarbība",
      description: "Mūsu prakses aptver tehnoloģijas no vērtspapīru piedāvājumiem līdz stratēģiskiem darījumiem, atbalstot uzņēmumu izaugsmi un investoru aizsardzību."
    },
    citizenship: {
      title: "Pilsonība un imigrācija",
      description: "Mūsu prakses aptver tehnoloģijas no pilsonības iegūšanas līdz imigrācijas jautājumiem, nodrošinot vienmērīgu pāreju un juridisku aizsardzību."
    },
    criminalCases: {
      title: "Krimināllietas un aizstāvība",
      description: "Mūsu prakses aptver tehnoloģijas no krimināltiesībām līdz aizstāvības stratēģijām, nodrošinot taisnīgu tiesvedību un klientu tiesību aizsardzību."
    }
  },
  en: {
    sectionTitle: "The Area Where We Practice Our Law",
    sectionSubtitle: "We build and activate brands through cultural insight, strategic vision, and the power of emotion across every element of its expression.",
    financialCapital: {
      title: "Financial capital And Business",
      description: "Our process applies technology from securities offerings to strategic transactions, supporting corporate growth and investor protection."
    },
    citizenship: {
      title: "Citizenship And Immigration",
      description: "Our process applies technology from citizenship acquisition to immigration matters, ensuring smooth transitions and legal protection."
    },
    criminalCases: {
      title: "Criminal Cases And Defense",
      description: "Our process applies technology from criminal law to defense strategies, ensuring fair trials and protection of client rights."
    }
  }
};

export default function PracticeAreas({ locale }: PracticeAreasProps) {
  const t = translations[locale as keyof typeof translations];

  // Animation variants with smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
    hover: { y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)", transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
  };

  // Practice area data with corresponding images and icons
  const practiceAreas = [
    {
      id: "financial-capital",
      title: t.financialCapital.title,
      description: t.financialCapital.description,
      iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      iconBg: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      id: "citizenship",
      title: t.citizenship.title,
      description: t.citizenship.description,
      iconPath: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9",
      imageUrl: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      iconBg: "bg-gradient-to-br from-indigo-600 to-indigo-800"
    },
    {
      id: "criminal-cases",
      title: t.criminalCases.title,
      description: t.criminalCases.description,
      iconPath: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      iconBg: "bg-gradient-to-br from-gray-700 to-gray-900"
    }
  ];
  
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-100 to-transparent opacity-70"></div>
        <svg 
          className="absolute -bottom-48 -right-48 text-blue-900 w-96 h-96 opacity-5" 
          fill="currentColor" 
          viewBox="0 0 200 200"
        >
          <path d="M44.5,-76.3C59.3,-69.6,74.1,-60.2,83.4,-46.1C92.6,-32,96.4,-13.3,94.5,4.4C92.6,22.1,85,38.8,73.8,51.7C62.6,64.7,47.8,73.8,32.3,79.7C16.7,85.6,0.4,88.3,-15.8,86C-32,83.7,-48,76.4,-60.9,65.4C-73.7,54.3,-83.3,39.4,-88.2,22.9C-93.1,6.4,-93.4,-11.8,-89.5,-30C-85.6,-48.3,-77.6,-66.6,-63.9,-74.8C-50.3,-83,-31.2,-81,-14.9,-76.4C1.4,-71.8,29.7,-83,44.5,-76.3Z" transform="translate(100 100)" />
        </svg>
        
        {/* Professional pattern overlay */}
        <div className="absolute inset-0 bg-grid-gray-800/[0.01] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-block mb-4 py-1 px-3 border border-gray-200 bg-white text-blue-900 text-sm font-medium tracking-wider uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mr-1">•</span> {locale === 'en' ? 'Legal Services' : 'Juridiskie pakalpojumi'} <span className="ml-1">•</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t.sectionTitle}
          </motion.h2>
          <motion.div className="w-16 h-1 bg-blue-900 mx-auto mb-6">
          </motion.div>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {t.sectionSubtitle}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-10 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {practiceAreas.map((area, index) => (
            <motion.div 
              key={area.id} 
              className="relative group"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div 
                className="relative bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl h-full flex flex-col"
                variants={cardVariants}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  {/* Professional overlay with legal imagery */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-blue-900/70 z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
                  <SafeImage
                    src={area.imageUrl}
                    alt={area.title}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full transform transition-transform duration-700 scale-100 group-hover:scale-105 filter brightness-90"
                  />
                  {/* Law firm pattern overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,#1a365d10_25%,transparent_25%,transparent_50%,#1a365d10_50%,#1a365d10_75%,transparent_75%,transparent)] bg-[length:24px_24px] opacity-10 mix-blend-multiply"></div>
                  
                  <div className="absolute top-4 left-4 z-20">
                    <motion.div 
                      className={`${area.iconBg} w-12 h-12 rounded-sm flex items-center justify-center text-white shadow-lg border border-white/10`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={area.iconPath} />
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Practice area label on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">{area.title}</h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow bg-white">
                  <div className="flex-grow">
                    <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                    <ul className="space-y-2 mb-6">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="flex items-start">
                          <div className="mr-2 mt-1 text-blue-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">
                            {locale === 'en' ? 
                              (item === 1 ? 'Expert legal consultation' : 
                               item === 2 ? 'Professional representation' : 
                               'Customized legal solutions') : 
                              (item === 1 ? 'Profesionāla juridiskā konsultācija' : 
                               item === 2 ? 'Profesionāla pārstāvība' : 
                               'Individuāli juridiskās aizsardzības risinājumi')}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto border-t border-gray-100 pt-4">
                    <Link 
                      href={`/${locale}/practice-areas/${area.id}`} 
                      className="inline-flex items-center text-blue-900 font-medium transition-all duration-300 hover:text-blue-700 text-sm"
                    >
                      <span className="mr-2">{locale === 'en' ? 'Learn more about this service' : 'Uzzināt vairāk par šo pakalpojumu'}</span>
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </Link>
                  </div>
                </div>

                {/* Badge for new practice areas */}
                {index === 0 && (
                  <motion.div 
                    className="absolute top-5 right-5 bg-blue-900 text-white text-xs font-bold px-3 py-1 shadow-md z-20 border-l-2 border-yellow-500"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.3 }}
                  >
                    {locale === 'en' ? 'Featured Practice' : 'Izcelta prakse'}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div className="inline-block" whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link 
              href={`/${locale}/practice-areas`}
              className="inline-flex items-center px-8 py-3 bg-blue-900 text-white border-b-2 border-blue-800 hover:bg-blue-800 transition-all duration-300 font-medium group shadow-md"
            >
              <span className="mr-3 tracking-wide">{locale === 'en' ? 'View All Legal Services' : 'Skatīt visus darbības virzienus'}</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </Link>
          </motion.div>
          
          <motion.p 
            className="text-sm text-gray-500 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {locale === 'en' ? 'Our legal team is ready to assist you with all your legal matters' : 'Mūsu juridiskā komanda ir gatava palīdzēt visās juridiskajās lietās'}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
