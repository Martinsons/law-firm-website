"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/contact/ContactForm';
import CalendlyIntegration from '@/components/contact/CalendlyIntegration';
import CaseCalculator from '@/components/contact/CaseCalculator';

interface ClientContactPageProps {
  locale: string;
}

export default function ClientContactPage({ locale }: ClientContactPageProps) {
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
  
  // Content and translations based on locale
  const content = {
    en: {
      hero: {
        badge: "GET IN TOUCH",
        title: "Contact Us",
        description: "Our team is ready to help you solve your legal challenges. Reach out to us using the information below or by filling out the contact form."
      },
      contact: {
        badge: "REACH US",
        title: "Contact Information",
        address: "Address",
        addressValue: "Brivibas Street 39, Riga, LV-1010, Latvia",
        phone: "Phone",
        phoneValue: "+371 67 240 090",
        email: "Email",
        emailValue: "info@davis.lv",
        hours: "Working Hours",
        hoursValue1: "Monday - Friday: 9:00 AM - 6:00 PM",
        hoursValue2: "Saturday - Sunday: Closed"
      },
      location: {
        badge: "OUR LOCATION",
        title: "Our Office"
      },
      tools: {
        badge: "DIGITAL SERVICES",
        title: "Online Tools",
        description: "Use our online tools to schedule a consultation or calculate the potential cost of your case."
      }
    },
    lv: {
      hero: {
        badge: "KĀ MŪS SAZINĀTIES",
        title: "Sazinies ar mums",
        description: "Mūsu komanda ir gatava palīdzēt jums risināt jūsu juridiskos izaicinājumus. Sazinieties ar mums, izmantojot zemāk norādīto informāciju vai aizpildot kontaktformu."
      },
      contact: {
        badge: "SAZIŅAS INFORMĀCIJA",
        title: "Kontaktinformācija",
        address: "Adrese",
        addressValue: "Brīvības iela 39, Rīga, LV-1010, Latvija",
        phone: "Tālrunis",
        phoneValue: "+371 67 240 090",
        email: "E-pasts",
        emailValue: "info@davis.lv",
        hours: "Darba laiks",
        hoursValue1: "Pirmdiena - Piektdiena: 9:00 - 18:00",
        hoursValue2: "Sestdiena - Svētdiena: Slēgts"
      },
      location: {
        badge: "MŪSU ATRAŠANĀS VIETA",
        title: "Mūsu birojs"
      },
      tools: {
        badge: "DIGITĀLIE PAKALPOJUMI",
        title: "Tiešsaistes rīki",
        description: "Izmantojiet mūsu tiešsaistes rīkus, lai plānotu konsultāciju vai aprēķinātu potenciālās lietas izmaksas."
      }
    }
  };

  const t = content[locale as keyof typeof content];

  return (
    <>
      {/* Hero section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block mb-3 py-1 px-3 border border-gray-200 bg-white text-blue-900 text-sm font-medium tracking-wider uppercase rounded-md">
              <span className="mr-1">•</span> {t.hero.badge} <span className="ml-1">•</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="relative inline-block">
                {t.hero.title}
                <motion.span 
                  className="absolute bottom-2 left-0 w-full h-3 bg-blue-200 opacity-40 rounded-sm -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.span>
              </span>
            </h1>
            <motion.div 
              className="w-20 h-1 bg-blue-600 mb-6 mx-auto"  
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <p className="text-lg text-gray-600 mx-auto max-w-2xl">
              {t.hero.description}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact info and form section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f610_1px,transparent_1px)] bg-[size:20px_20px] opacity-70"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <motion.div 
                className="mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative elements */}
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-blue-50 rounded-full opacity-40"></div>
                <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-blue-50 rounded-full opacity-30"></div>
                <div className="relative z-10">
                  <div className="inline-block mb-3 py-1 px-3 border border-gray-200 bg-white text-blue-900 text-sm font-medium tracking-wider uppercase rounded">
                    <span className="mr-1">•</span> {t.contact.badge} <span className="ml-1">•</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.contact.title}</h2>
                  <div className="w-16 h-1 bg-blue-600 mb-6"></div>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="bg-blue-100 rounded-full p-3 mr-4 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{t.contact.address}</h3>
                        <p className="text-gray-600">{t.contact.addressValue}</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="bg-blue-100 rounded-full p-3 mr-4 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{t.contact.phone}</h3>
                        <p className="text-gray-600">{t.contact.phoneValue}</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <div className="bg-blue-100 rounded-full p-3 mr-4 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{t.contact.email}</h3>
                        <p className="text-gray-600">{t.contact.emailValue}</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="bg-blue-100 rounded-full p-3 mr-4 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{t.contact.hours}</h3>
                        <p className="text-gray-600">{t.contact.hoursValue1}</p>
                        <p className="text-gray-600">{t.contact.hoursValue2}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="relative z-10"
              >
                <div className="inline-block mb-3 py-1 px-3 border border-gray-200 bg-white text-blue-900 text-sm font-medium tracking-wider uppercase rounded">
                  <span className="mr-1">•</span> {t.location.badge} <span className="ml-1">•</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.location.title}</h2>
                <div className="w-16 h-1 bg-blue-600 mb-6"></div>
                <motion.div
                  className="rounded-lg overflow-hidden shadow-md border border-gray-200"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.4123735139997!2d24.12088337677117!3d56.95082647193768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd7a81eea03%3A0xe584ee5c618f5a5e!2zQnLEq3bEq2JhcyBpZWxhIDM5LCBDZSyEhXMgcmFqb25zLCBSxKtnYSwgTFYtMTAxMA!5e0!3m2!1sen!2slv!4v1714678107284!5m2!1sen!2slv" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ContactForm locale={locale} />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Calendly and Case Calculator sections */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f610_1px,transparent_1px)] bg-[size:20px_20px] opacity-70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block mb-3 py-1 px-3 border border-gray-200 bg-white text-blue-900 text-sm font-medium tracking-wider uppercase rounded-md">
              <span className="mr-1">•</span> {t.tools.badge} <span className="ml-1">•</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t.tools.title}</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.tools.description}</p>
          </motion.div>
        
          <motion.div 
            className="flex flex-col gap-16 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 relative overflow-hidden"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative elements */}
                <div className="absolute -left-12 -top-12 w-24 h-24 bg-blue-50 rounded-full opacity-40"></div>
                
                <div className="relative z-10">
                  <CalendlyIntegration locale={locale} />
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 relative overflow-hidden"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative elements */}
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-blue-50 rounded-full opacity-40"></div>
                
                <div className="relative z-10">
                  <CaseCalculator locale={locale} />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
