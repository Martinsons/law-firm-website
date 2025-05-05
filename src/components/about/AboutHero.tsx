"use client";

import React, { useEffect, useState } from 'react';
import SafeImage from '@/components/ui/SafeImage';
import { motion } from 'framer-motion';

interface AboutHeroProps {
  locale: string;
}

const translations = {
  lv: {
    title: "Par mums",
    subtitle: "Uzticams juridisks partneris ar vairāk nekā 10 gadu pieredzi",
    description: "Davis juridiskais birojs ir dibināts 2014. gadā ar mērķi nodrošināt augstākās kvalitātes juridiskos pakalpojumus gan indivīdiem, gan uzņēmumiem. Mūsu advokāti ir specializējušies dažādās tiesību jomās, lai sniegtu jums visaptverošu atbalstu jebkurā situācijā.",
    values: "Mūsu vērtības",
    valuesList: [
      "Godīgums un caurspīdīgums visās mūsu darbībās",
      "Uzticamība un konfidencialitāte klientu informācijas aizsardzībā",
      "Izcilība un profesionalitāte juridisko pakalpojumu sniegšanā",
      "Inovācijas un nepārtraukta profesionālā attīstība"
    ],
    stats: {
      clients: "Apmierināti klienti",
      cases: "Veiksmīgi atrisinātas lietas",
      experience: "Gadi juridiskajā nozarē",
      attorneys: "Profesionāli advokāti"
    }
  },
  en: {
    title: "About Us",
    subtitle: "A trusted legal partner with over 10 years of experience",
    description: "Davis Law Firm was founded in 2014 with the goal of providing the highest quality legal services to both individuals and businesses. Our attorneys specialize in various areas of law to provide you with comprehensive support in any situation.",
    values: "Our Values",
    valuesList: [
      "Honesty and transparency in all our activities",
      "Reliability and confidentiality in protecting client information",
      "Excellence and professionalism in providing legal services",
      "Innovation and continuous professional development"
    ],
    stats: {
      clients: "Satisfied clients",
      cases: "Successfully resolved cases",
      experience: "Years in the legal field",
      attorneys: "Professional attorneys"
    }
  }
};

export default function AboutHero({ locale }: AboutHeroProps) {
  const t = translations[locale as keyof typeof translations];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const statsVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5 + (index * 0.1),
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };
  
  return (
    <section className="relative py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Professional background with subtle patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Professional grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Subtle decorative elements */}
        <div className="absolute left-[30%] top-[15%] w-80 h-1 bg-gradient-to-r from-blue-900/5 to-transparent"></div>
        <div className="absolute right-[20%] bottom-[25%] w-60 h-1 bg-gradient-to-r from-transparent to-blue-900/5"></div>
        
        <motion.div 
          className="absolute left-[10%] top-[30%] w-4 h-16 bg-blue-900/5"
          initial={{ height: 0 }}
          animate={{ height: 64 }}
          transition={{ duration: 2, ease: "easeOut" }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <motion.div className="mb-6" variants={itemVariants}>
              <div className="inline-block mb-2 py-1 px-3 border border-gray-200 bg-white text-blue-900 text-sm font-medium tracking-wider uppercase">
                <span className="mr-1">•</span> Davis Law Firm <span className="ml-1">•</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                <span className="relative">
                  {t.title}
                  <motion.span 
                    className="absolute bottom-2 left-0 w-full h-3 bg-blue-200 opacity-40 rounded-sm -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  ></motion.span>
                </span>
              </h1>
              <motion.div 
                className="w-20 h-1 bg-blue-600 mb-4"  
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
              <p className="text-lg text-blue-700 font-medium mb-6">{t.subtitle}</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 border-t-2 border-blue-900 shadow-xl mb-8 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Abstract decorative element */}
              <div className="absolute -right-5 -top-5 w-20 h-20 bg-blue-50 rounded-full opacity-20"></div>
              
              <p className="text-gray-700 mb-5 relative z-10">{t.description}</p>
              
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-3">{t.values}</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {t.valuesList.map((value, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start bg-gray-50 p-3 rounded-sm border-l border-blue-200"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                    >
                      <div className="flex-shrink-0 mr-2 mt-1">
                        <div className="w-5 h-5 rounded-sm bg-blue-700 flex items-center justify-center text-white shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
              variants={itemVariants}
            >
              {[
                { number: "750+", label: t.stats.clients },
                { number: "500+", label: t.stats.cases },
                { number: "10+", label: t.stats.experience },
                { number: "15", label: t.stats.attorneys }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-4 md:p-6 shadow-lg border-t-2 border-blue-900 transform transition-all duration-500 hover:translate-y-[-5px]"
                  custom={index}
                  variants={statsVariants}
                >
                  <div className="text-3xl font-bold text-blue-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 relative"
            variants={itemVariants}
          >
            <motion.div
              className="relative z-10 mb-3"
              style={{ perspective: "1000px" }}
              animate={{ 
                y: scrollY * -0.1,
                rotateY: scrollY * 0.02
              }}
              transition={{ 
                type: "spring",
                stiffness: 100, 
              }}
            >
              <motion.div 
                className="relative shadow-2xl bg-white overflow-hidden rounded-sm border-t-2 border-blue-900 transform-gpu"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                {/* Professional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-900/20 to-transparent z-10 opacity-40 transition-opacity duration-700"></div>
                
                <div className="h-[450px] md:h-[600px] overflow-hidden">
                  <SafeImage 
                    src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" 
                    alt="Davis Law Firm Office" 
                    width={800} 
                    height={1000}
                    className="object-cover w-full h-full transform transition-transform duration-700 scale-100 hover:scale-105"
                    fallbackSrc="/public/placeholder.svg"
                    priority
                  />
                </div>
                
                {/* Experience badge */}
                <motion.div 
                  className="absolute top-6 left-6 md:left-10 bg-white py-3 px-5 shadow-md flex items-center border-r-2 border-blue-900"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="text-xs font-medium text-gray-900">
                    {locale === 'en' ? "Established in 2014" : "Dibināts 2014. gadā"}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-full bg-blue-900/5 -z-10 rounded-sm border-r-2 border-blue-900/20"></div>
            <div className="absolute -bottom-12 -right-12 w-1/2 h-1/2 bg-gray-100 -z-20 rounded-sm"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
