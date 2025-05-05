"use client";

import React from 'react';
import SafeImage from '@/components/ui/SafeImage';
import { motion } from 'framer-motion';

interface TestimonialsProps {
  locale: string;
}

const translations = {
  lv: {
    sectionTitle: "Ko mūsu klienti saka par mums",
    testimonials: [
      {
        name: "Jānis Bērziņš",
        role: "Uzņēmējs",
        quote: "Davis juridiskais birojs ir bijis neaizstājams partneris mana uzņēmuma izaugsmē. Viņu juridiskās zināšanas un stratēģiskais padoms ir palīdzējis mums pārvarēt sarežģītus izaicinājumus un sasniegt mūsu biznesa mērķus.",
      },
      {
        name: "Laura Ozola",
        role: "Finansu direktore",
        quote: "Mēs esam sadarbojušies ar Davis juridisko biroju vairāk nekā 5 gadus, un viņu profesionalitāte un uzticamība ir bijusi izcila. Viņi vienmēr ir bijuši pieejami, kad mums ir bijusi nepieciešama juridiskā palīdzība.",
      },
      {
        name: "Andris Kalniņš",
        role: "Privātpersona",
        quote: "Davis juridiskā biroja komanda man palīdzēja sarežģītā īpašuma tiesību lietā. Viņu rūpīgā pieeja un uzmanība detaļām nodrošināja pozitīvu rezultātu. Es noteikti iesaku viņu pakalpojumus ikvienam, kam nepieciešama juridiskā palīdzība.",
      }
    ]
  },
  en: {
    sectionTitle: "What Our Clients Say About Us",
    testimonials: [
      {
        name: "John Smith",
        role: "Entrepreneur",
        quote: "Davis Law Firm has been an invaluable partner in my company's growth. Their legal expertise and strategic advice have helped us navigate complex challenges and achieve our business goals.",
      },
      {
        name: "Laura Johnson",
        role: "Financial Director",
        quote: "We've been working with Davis Law Firm for over 5 years, and their professionalism and reliability have been outstanding. They've always been available when we needed legal assistance.",
      },
      {
        name: "Andrew Williams",
        role: "Private Individual",
        quote: "The team at Davis Law Firm helped me with a complex property rights case. Their meticulous approach and attention to detail ensured a positive outcome. I definitely recommend their services to anyone in need of legal assistance.",
      }
    ]
  }
};

export default function Testimonials({ locale }: TestimonialsProps) {
  const t = translations[locale as keyof typeof translations];
  
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
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Professional pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-32 w-32 bg-blue-900/5 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      <div className="absolute right-0 bottom-0 h-40 w-40 bg-blue-900/5 translate-x-1/3 translate-y-1/3 rounded-full"></div>
      
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
            <span className="mr-1">•</span> {locale === 'en' ? 'Client Testimonials' : 'Klientu atsauksmes'} <span className="ml-1">•</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t.sectionTitle}
          </motion.h2>
          <motion.div className="w-16 h-1 bg-blue-900 mx-auto mb-6 opacity-80"></motion.div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {t.testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white rounded-none border-t-2 border-blue-900 shadow-md p-8 relative flex flex-col h-full transform transition-transform hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              <div className="absolute top-6 right-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-900/10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="flex-grow">
                <p className="text-gray-700 mb-8 relative z-10 text-lg leading-relaxed italic">{testimonial.quote}</p>
              </div>
              
              <div className="pt-4 border-t border-gray-100 flex items-center">
                <div className="w-12 h-12 rounded-sm overflow-hidden mr-4 border border-gray-200">
                  <SafeImage 
                    src={[
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    ][index]}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    fallbackSrc="/placeholder.svg"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.p 
            className="text-sm text-gray-500 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {locale === 'en' ? 'Join hundreds of satisfied clients who trust Davis Law Firm with their legal matters' : 'Pievienojieties simtiem apmierinātu klientu, kuri uztic Davis juridiskajam birojam savus juridiskos jautājumus'}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
