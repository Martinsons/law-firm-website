"use client";

import React from 'react';
import SafeImage from '@/components/ui/SafeImage';
import { motion } from 'framer-motion';

interface TeamSectionProps {
  locale: string;
}

const translations = {
  lv: {
    sectionTitle: "Satieciet mūsu talantīgākos advokātus",
    attorneys: [
      {
        name: "Dāvis Ezers",
        role: "Vecākais partneris",
        specialization: "Korporatīvās tiesības",
        description: "Dāvis ir firmas vadošais partneris ar vairāk nekā 15 gadu pieredzi korporatīvo tiesību jomā. Viņš ir pārstāvējis klientus daudzās sarežģītās lietās un ir pazīstams ar savu stratēģisko pieeju juridiskajām problēmām.",
        email: "davis@davis.lv",
        phone: "+371 67 240 001"
      },
      {
        name: "Jānis Vilsons",
        role: "Partneris",
        specialization: "Imigrācijas tiesības",
        description: "Jānis specializējas imigrācijas tiesībās un ir palīdzējis daudziem klientiem veiksmīgi risināt pilsonības un imigrācijas jautājumus. Viņa zināšanas šajā jomā ir nenovērtējamas mūsu starptautiskajiem klientiem.",
        email: "janis@davis.lv",
        phone: "+371 67 240 002"
      },
      {
        name: "Dārta Hāra",
        role: "Vecākā advokāte",
        specialization: "Krimināllietas",
        description: "Dārta ir pieredzējusi advokāte krimināltiesību jomā ar iespaidīgu vēsturi tiesas prāvās. Viņa ir pazīstama ar savu rūpīgo sagatavošanos un spēcīgo aizstāvību tiesā, kas ir palīdzējusi daudziem klientiem iegūt pozitīvus rezultātus.",
        email: "darta@davis.lv",
        phone: "+371 67 240 003"
      }
    ]
  },
  en: {
    sectionTitle: "Meet Our Most Talented Attorneys",
    attorneys: [
      {
        name: "David Hart",
        role: "Senior Partner",
        specialization: "Corporate Law",
        description: "David is the firm's leading partner with over 15 years of experience in corporate law. He has represented clients in many complex cases and is known for his strategic approach to legal problems.",
        email: "david@davis.lv",
        phone: "+371 67 240 001"
      },
      {
        name: "John Wilson",
        role: "Partner",
        specialization: "Immigration Law",
        description: "John specializes in immigration law and has helped many clients successfully navigate citizenship and immigration issues. His knowledge in this area is invaluable to our international clients.",
        email: "john@davis.lv",
        phone: "+371 67 240 002"
      },
      {
        name: "Diana Harry",
        role: "Senior Attorney",
        specialization: "Criminal Cases",
        description: "Diana is an experienced attorney in criminal law with an impressive history in litigation. She is known for her thorough preparation and strong defense in court, which has helped many clients achieve positive outcomes.",
        email: "diana@davis.lv",
        phone: "+371 67 240 003"
      }
    ]
  }
};

export default function TeamSection({ locale }: TeamSectionProps) {
  const t = translations[locale as keyof typeof translations];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2 + (index * 0.1),
        ease: [0.25, 0.1, 0.25, 1]
      }
    }),
    hover: { y: -10, transition: { duration: 0.3, ease: "easeOut" } }
  };
  
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-900/0 via-blue-900/10 to-blue-900/0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-block mb-6 py-1 px-3 border border-gray-200 bg-white text-blue-900 text-sm font-medium tracking-wider uppercase">
            <span className="mr-1">•</span> {locale === 'en' ? 'Our Attorneys' : 'Mūsu Advokāti'} <span className="ml-1">•</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">{t.sectionTitle}</h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto mb-6"  
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-gray-600 md:text-lg">
            {locale === 'en' ? 
              'Meet our diverse team of legal professionals ready to help you navigate complex legal challenges.' : 
              'Iepazīstieties ar mūsu daudzveidīgo juridisko profesionāļu komandu, kas gatava palīdzēt jums orientēties sarežģītos juridiskos izaicinājumos.'}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {t.attorneys.map((attorney, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-none border-t-2 border-blue-900 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              variants={cardVariants}
              custom={index}
              whileHover="hover"
            >
              <div className="relative h-[350px] overflow-hidden group">
                {/* Professional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-900/20 to-transparent z-10 opacity-40 group-hover:opacity-30 transition-opacity duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <SafeImage 
                    src={[
                      "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", 
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                    ][index]}
                    alt={attorney.name} 
                    width={600} 
                    height={600}
                    className="h-full w-auto min-w-full object-cover object-center transform transition-transform duration-700 scale-100 group-hover:scale-105"
                    fallbackSrc="/placeholder.svg"
                  />
                </div>
                
                {/* Position badge */}
                <div className="absolute bottom-0 left-0 bg-blue-900 py-1 px-4 text-white text-sm font-medium">
                  {attorney.role}
                </div>
                
                {/* Specialty badge */}
                <div className="absolute top-3 right-3 bg-white py-1 px-3 rounded shadow-md text-sm text-blue-900 font-medium z-10 ring-1 ring-blue-100">
                  {attorney.specialization}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-6 h-6 inline-block bg-blue-900 mr-3"></span>
                  {attorney.name}
                </h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {attorney.description}
                </p>
                
                <div className="pt-6 border-t border-gray-100">
                  <motion.div 
                    className="flex items-center mb-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 flex items-center justify-center rounded-sm mr-4 group-hover:bg-blue-100 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href={`mailto:${attorney.email}`} className="text-blue-700 font-medium hover:text-blue-900 transition-colors duration-300">
                      {attorney.email}
                    </a>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 flex items-center justify-center rounded-sm mr-4 group-hover:bg-blue-100 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <a href={`tel:${attorney.phone}`} className="text-gray-700 font-medium hover:text-blue-900 transition-colors duration-300">
                      {attorney.phone}
                    </a>
                  </motion.div>
                  
                  <motion.div 
                    className="mt-6 pt-6 border-t border-gray-100 flex justify-center"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-900 font-medium group"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="mr-2">{locale === 'en' ? 'Schedule a meeting' : 'Pieteikt tikšanos'}</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            {locale === 'en' ? 
              'Our team is ready to assist with your legal matters. Get in touch today.' : 
              'Mūsu komanda ir gatava palīdzēt jums risināt juridiskus jautājumus. Sazinieties ar mums jau šodien.'}
          </p>
          <motion.div 
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a 
              href={`/${locale}/contact`} 
              className="px-8 py-4 bg-blue-900 text-white border-b-2 border-blue-800 hover:bg-blue-800 transition-all duration-300 inline-flex items-center font-medium shadow-xl group"
            >
              <span className="mr-2">{locale === 'en' ? 'Contact Our Team' : 'Sazināties ar mūsu komandu'}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
