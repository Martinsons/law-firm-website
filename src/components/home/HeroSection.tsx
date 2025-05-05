"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  locale: string;
}

const translations = {
  lv: {
    title: "Uzticami juridiski risinājumi reālajai pasaulei",
    subtitle: "Organizējiet savas juridiskās lietas un dokumentus vienuviet - mēs palīdzēsim jums sasniegt mērķus.",
    cta: "Pieteikt konsultāciju",
    phone: "Zvaniet mums",
    experience: "gadi pieredzes",
    field: "juridiskajā nozarē"
  },
  en: {
    title: "Trusted legal solutions for the real world",
    subtitle: "Organize your legal tasks, files and services in one spot. It will help you to get it.",
    cta: "Schedule consultation",
    phone: "Call us now",
    experience: "years of experience",
    field: "in the field"
  }
};

export default function HeroSection({ locale }: HeroSectionProps) {
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Professional background with subtle patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-100 to-transparent opacity-70"></div>
        
        {/* Professional grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Subtle decorative elements */}
        <div className="absolute right-[5%] top-[10%] w-64 h-1 bg-gradient-to-r from-blue-900/5 to-transparent"></div>
        <div className="absolute left-[5%] top-[25%] w-32 h-1 bg-gradient-to-r from-transparent to-blue-900/5"></div>
        
        <motion.div 
          className="absolute left-[8%] top-[20%] w-4 h-16 bg-blue-900/5"
          initial={{ height: 0 }}
          animate={{ height: 80 }}
          transition={{ duration: 2, ease: "easeOut" }}
        ></motion.div>
        <motion.div 
          className="absolute right-[15%] bottom-[30%] w-12 h-1 bg-blue-900/10"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="order-2 md:order-1 text-center md:text-left"
            variants={itemVariants}
          >
            <motion.div 
              className="max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              <motion.div 
                className="inline-block mb-4 py-1 px-3 border border-gray-200 bg-white text-blue-900 text-sm font-medium tracking-wider uppercase"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="mr-1">•</span> Davis Law Firm <span className="ml-1">•</span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-6"
                variants={itemVariants}
              >
                {/* First part of the title with underline */}
                <div className="mb-2">
                  <span className="relative inline-block">
                    <span className="relative z-10">{t.title.split(" ").slice(0, 2).join(" ")}</span>
                    <motion.span 
                      className="absolute bottom-2 left-0 w-full h-1 bg-blue-900 opacity-20 -z-0"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 1 }}
                    ></motion.span>
                  </span>
                </div>
                
                {/* Second part of the title with accent color */}
                <div>
                  <span className="text-blue-900">
                    {t.title.split(" ").slice(2).join(" ")}
                  </span>
                </div>
              </motion.h1>
              
              <motion.div className="w-16 h-1 bg-blue-900 mb-6 opacity-80"></motion.div>
              
              <motion.p 
                className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                {t.subtitle}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    href={`/${locale}/contact`} 
                    className="px-8 py-4 bg-blue-900 text-white border-b-2 border-blue-800 shadow-md hover:bg-blue-800 transition-all duration-300 text-center font-medium flex items-center justify-center group tracking-wide"
                  >
                    <span>{t.cta}</span>
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a 
                    href="tel:+37167240090" 
                    className="px-8 py-4 border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 transition-all duration-300 flex items-center justify-center font-medium group tracking-wide shadow-sm"
                  >
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 mr-2 text-blue-900 group-hover:rotate-12 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </motion.svg>
                    {t.phone}
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 relative"
            variants={itemVariants}
          >
            <motion.div 
              className="relative z-10"
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
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative shadow-xl border border-gray-200 bg-white overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                {/* Professional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-blue-900/10 to-transparent z-10 opacity-40 group-hover:opacity-30 transition-opacity duration-700"></div>
                
                {/* Professional law pattern */}
                <div className="absolute inset-0 bg-[url('/images/pattern-law.png')] bg-repeat opacity-5 mix-blend-overlay"></div>
                
                <div className="h-[400px] md:h-[500px] overflow-hidden">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Davis Law Firm Professional Team"
                    width={800}
                    height={600}
                    className="object-cover object-center w-full h-full transform transition-transform duration-700 scale-100 group-hover:scale-105"
                    priority
                  />
                </div>
              </motion.div>
              
              {/* Experience badge */}
              <motion.div 
                className="absolute -bottom-6 right-6 md:right-10 bg-white px-6 py-4 shadow-md flex flex-col items-center justify-center border-l-2 border-blue-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex items-center">
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-blue-900 mr-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 }}
                  >
                    10+
                  </motion.div>
                  <motion.div 
                    className="text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.6 }}
                  >
                    <div className="text-xs font-medium text-gray-900 uppercase tracking-wider">{t.experience}</div>
                    <div className="text-xs text-gray-600">{t.field}</div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Ratings badge */}
              <motion.div 
                className="absolute top-6 left-6 md:left-10 bg-white py-2 px-4 shadow-md border-r-2 border-blue-900 flex items-center"  
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center mr-3">
                  <svg className="w-4 h-4 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <svg className="w-4 h-4 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <svg className="w-4 h-4 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <svg className="w-4 h-4 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <svg className="w-4 h-4 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                </div>
                <div className="text-xs font-medium text-gray-900">
                  {locale === 'en' ? "Top-rated firm in Latvia" : "Augstāk novērtētais birojs Latvijā"}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="relative mt-24 md:mt-32">
          {/* Decorative line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gray-300"></div>
          
          <motion.div 
            className="py-12 px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {/* Stats items */}
            {[
              { value: "100+", label: locale === 'en' ? "Satisfied Clients" : "Apmierināti klienti" },
              { value: "20+", label: locale === 'en' ? "Legal Experts" : "Juridiskie eksperti" },
              { value: "95%", label: locale === 'en' ? "Success Rate" : "Veiksmes rādītājs" },
              { value: "24/7", label: locale === 'en' ? "Support" : "Atbalsts" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center relative"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + (index * 0.1) }}
              >
                {/* Vertical separator between stats (except for the last one) */}
                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-10 w-px bg-gray-200"></div>
                )}
                
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
