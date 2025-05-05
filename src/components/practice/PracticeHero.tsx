"use client";

import React from 'react';
import SafeImage from '@/components/ui/SafeImage';
import { motion } from 'framer-motion';

interface PracticeHeroProps {
  locale: string;
}

const translations = {
  lv: {
    title: "Prakses jomas",
    subtitle: "Mūsu specializācijas jomas",
    description: "Davis juridiskais birojs piedāvā plašu juridisko pakalpojumu klāstu, specializējoties vairākās tiesību jomās. Mūsu komanda sastāv no pieredzējušiem advokātiem, kuri ir gatavi sniegt jums profesionālu juridisko atbalstu jebkurā situācijā."
  },
  en: {
    title: "Practice Areas",
    subtitle: "Our areas of specialization",
    description: "Davis Law Firm offers a wide range of legal services, specializing in several areas of law. Our team consists of experienced attorneys who are ready to provide you with professional legal support in any situation."
  }
};

export default function PracticeHero({ locale }: PracticeHeroProps) {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const tagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.8 + (i * 0.1) }
    })
  };
  
  const practiceAreas = [
    "Corporate Law",
    "Immigration",
    "Criminal Cases",
    "Property Law",
    "Family Law"
  ];
  
  return (
    <section className="relative py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block mb-3 py-1 px-3 border border-gray-200 bg-white text-blue-900 text-sm font-medium tracking-wider uppercase">
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
            
            <p className="text-lg text-blue-700 font-medium mb-4">{t.subtitle}</p>
            <p className="text-gray-700 mb-6">{t.description}</p>
            
            <div className="flex flex-wrap gap-3 mb-2">
              {practiceAreas.map((area, index) => (
                <motion.span 
                  key={index}
                  className="inline-block px-4 py-2 bg-blue-50 text-blue-800 rounded-full font-medium border border-blue-100 shadow-sm"
                  custom={index}
                  variants={tagVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
                  transition={{ duration: 0.2 }}
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="relative z-10 rounded-lg overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <SafeImage 
                src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80" 
                alt="Davis Law Firm Practice Areas" 
                width={700} 
                height={500}
                className="rounded-lg shadow-xl object-cover h-full w-full"
                fallbackSrc="/images/placeholder-image.svg"
                priority
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-60"></div>
            </motion.div>
            
            {/* Background decorations */}
            <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 bg-blue-600 rounded-lg -z-10 opacity-80"></div>
            <motion.div 
              className="absolute -top-6 -right-6 w-1/3 h-1/3 bg-blue-300 rounded-full -z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.7 }}
              transition={{ duration: 0.8, delay: 1 }}
            ></motion.div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute top-5 left-5 bg-white px-4 py-2 rounded-lg shadow-lg z-20 flex items-center gap-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-800">Expert Legal Services</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
