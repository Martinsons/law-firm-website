"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  locale: string;
}

const translations = {
  lv: {
    title: "Sazinieties ar mums",
    subtitle: "Aizpildiet formu, un mēs ar jums sazināsimies tuvākajā laikā",
    name: "Vārds",
    email: "E-pasts",
    phone: "Tālrunis",
    service: "Pakalpojums",
    message: "Ziņojums",
    submit: "Nosūtīt ziņojumu",
    services: {
      select: "Izvēlieties pakalpojumu",
      corporate: "Korporatīvās tiesības",
      immigration: "Imigrācijas tiesības",
      criminal: "Krimināltiesības",
      property: "Īpašuma tiesības",
      family: "Ģimenes tiesības",
      other: "Cits"
    }
  },
  en: {
    title: "Contact Us",
    subtitle: "Fill out the form and we'll get back to you shortly",
    name: "Name",
    email: "Email",
    phone: "Phone",
    service: "Service",
    message: "Message",
    submit: "Send Message",
    services: {
      select: "Select a service",
      corporate: "Corporate Law",
      immigration: "Immigration Law",
      criminal: "Criminal Law",
      property: "Property Law",
      family: "Family Law",
      other: "Other"
    }
  }
};

export default function ContactForm({ locale }: ContactFormProps) {
  const t = translations[locale as keyof typeof translations];
  
  // Animation variants
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.8 } 
    },
    hover: { 
      scale: 1.03, 
      backgroundColor: "#2563eb",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.2 } 
    },
    tap: { scale: 0.98 }
  };
  
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-40"></div>
      <div className="absolute right-0 top-0 w-40 h-40 bg-blue-100 rounded-full -mr-20 -mt-20 opacity-20"></div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-3 py-1 px-3 border border-gray-200 bg-white text-blue-900 text-sm font-medium tracking-wider uppercase rounded-md">
            <span className="mr-1">•</span> GET IN TOUCH <span className="ml-1">•</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.title}</h2>
          <div className="w-16 h-1 bg-blue-600 mb-4"></div>
          <p className="text-gray-600 mb-8">{t.subtitle}</p>
        </motion.div>
      
        <motion.form 
          className="space-y-6"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
                required
              />
            </div>
          </motion.div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{t.phone}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">{t.service}</label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
                required
              >
                <option value="">{t.services.select}</option>
                <option value="corporate">{t.services.corporate}</option>
                <option value="immigration">{t.services.immigration}</option>
                <option value="criminal">{t.services.criminal}</option>
                <option value="property">{t.services.property}</option>
                <option value="family">{t.services.family}</option>
                <option value="other">{t.services.other}</option>
              </select>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t.message}</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
              required
            ></textarea>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md font-medium shadow-md transition-all duration-200"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {t.submit}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
}
