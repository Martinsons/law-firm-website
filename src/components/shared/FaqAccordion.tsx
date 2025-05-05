"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqAccordionProps {
  locale: string;
}

const translations = {
  lv: {
    title: "Biežāk uzdotie jautājumi",
    searchPlaceholder: "Meklēt jautājumus...",
    noResults: "Nav atrasti rezultāti. Lūdzu, mēģiniet citu meklēšanas terminu.",
    faqs: [
      {
        question: "Kā es varu pieteikties bezmaksas konsultācijai?",
        answer: "Jūs varat pieteikties bezmaksas konsultācijai, aizpildot mūsu tiešsaistes formu kontaktu sadaļā, zvanot mums pa tālruni +371 67 240 090 vai izmantojot Calendly, lai ieplānotu tikšanos ar mūsu advokātiem."
      },
      {
        question: "Kādas ir jūsu juridisko pakalpojumu izmaksas?",
        answer: "Mūsu pakalpojumu izmaksas ir atkarīgas no lietas sarežģītības un nepieciešamo darbu apjoma. Mēs piedāvājam sākotnējo bezmaksas konsultāciju, pēc kuras varam sniegt precīzu izmaksu novērtējumu. Mums ir pieejami dažādi pakalpojumu plāni, kas sākas no €50 par konsultāciju līdz €300+ par lietu pārstāvību."
      },
      {
        question: "Vai jūs strādājat ar korporatīvajiem klientiem?",
        answer: "Jā, mēs piedāvājam plašu juridisko pakalpojumu klāstu korporatīvajiem klientiem, ieskaitot uzņēmumu dibināšanu, līgumu izstrādi, darba tiesības, intelektuālā īpašuma aizsardzību un pārstāvību tiesvedībās."
      },
      {
        question: "Kā ilgi parasti ilgst lietas izskatīšana?",
        answer: "Lietu ilgums var ievērojami atšķirties atkarībā no lietas veida un sarežģītības. Vienkāršas lietas var tikt atrisinātas dažu nedēļu laikā, savukārt sarežģītākas lietas var prasīt vairākus mēnešus vai pat gadus. Mēs vienmēr cenšamies nodrošināt efektīvu un ātru lietu risināšanu."
      },
      {
        question: "Vai jūs piedāvājat juridiskos pakalpojumus arī ārpus Rīgas?",
        answer: "Jā, mēs apkalpojam klientus visā Latvijā. Gadījumos, kad nav iespējams tikties klātienē, mēs piedāvājam konsultācijas arī attālināti, izmantojot video zvanus vai telefonu."
      },
      {
        question: "Kādās valodās jūs piedāvājat juridiskos pakalpojumus?",
        answer: "Mūsu juristi sniedz pakalpojumus latviešu, angļu un krievu valodās, nodrošinot efektīvu komunikāciju ar dažādu valstu klientiem."
      },
      {
        question: "Vai jūs palīdzat ar pilsonības un imigrācijas jautājumiem?",
        answer: "Jā, mūsu birojā strādā pieredzējuši imigrācijas tiesību speciālisti, kas var palīdzēt ar uzturēšanās atļauju iegūšanu, pilsonības pieteikumiem, investoru vīzām un citiem ar imigrāciju saistītiem jautājumiem."
      },
      {
        question: "Kā es varu atrast man piemērotāko advokātu jūsu birojā?",
        answer: "Mūsu sākotnējā konsultācijā mēs izvērtēsim jūsu lietu un piemērosim jums vispiemērotāko advokātu, balstoties uz viņa pieredzi un specializāciju. Jūs varat arī aplūkot mūsu advokātu profilus mūsu mājaslapas sadaļā 'Par mums'."
      }
    ]
  },
  en: {
    title: "Frequently Asked Questions",
    searchPlaceholder: "Search questions...",
    noResults: "No results found. Please try a different search term.",
    faqs: [
      {
        question: "How can I schedule a free consultation?",
        answer: "You can schedule a free consultation by filling out our online form in the Contact section, calling us at +371 67 240 090, or using Calendly to schedule an appointment with our attorneys."
      },
      {
        question: "What are your legal service fees?",
        answer: "Our service fees depend on the complexity of the case and the scope of work required. We offer an initial free consultation, after which we can provide an accurate cost estimate. We have various service plans starting from €50 for consultation to €300+ for case representation."
      },
      {
        question: "Do you work with corporate clients?",
        answer: "Yes, we offer a wide range of legal services for corporate clients, including company formation, contract drafting, employment law, intellectual property protection, and litigation representation."
      },
      {
        question: "How long does a case usually take?",
        answer: "Case duration can vary significantly depending on the type and complexity of the case. Simple cases can be resolved within a few weeks, while more complex cases may take several months or even years. We always strive to provide efficient and prompt case resolution."
      },
      {
        question: "Do you offer legal services outside of Riga?",
        answer: "Yes, we serve clients throughout Latvia. In cases where it's not possible to meet in person, we also offer consultations remotely via video calls or phone."
      },
      {
        question: "In what languages do you offer legal services?",
        answer: "Our lawyers provide services in Latvian, English, and Russian, ensuring effective communication with clients from different countries."
      },
      {
        question: "Do you help with citizenship and immigration issues?",
        answer: "Yes, our office has experienced immigration law specialists who can help with obtaining residence permits, citizenship applications, investor visas, and other immigration-related matters."
      },
      {
        question: "How can I find the most suitable attorney for me in your office?",
        answer: "In our initial consultation, we will evaluate your case and match you with the most suitable attorney based on their experience and specialization. You can also view our attorneys' profiles in the 'About Us' section of our website."
      }
    ]
  }
};

export default function FaqAccordion({ locale }: FaqAccordionProps) {
  const t = translations[locale as keyof typeof translations];
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [filteredFaqs, setFilteredFaqs] = useState(t.faqs);
  
  // Handle search functionality
  useEffect(() => {
    const filtered = t.faqs.filter(faq => {
      const question = faq.question.toLowerCase();
      const answer = faq.answer.toLowerCase();
      const term = searchTerm.toLowerCase().trim();
      
      return question.includes(term) || answer.includes(term) || term === '';
    });
    
    setFilteredFaqs(filtered);
  }, [searchTerm, t.faqs]);
  
  // Toggle FAQ item
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <div className="max-w-xl mx-auto">
            <motion.div 
              className="relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pl-10 transition-shadow duration-300 hover:shadow-md"
                placeholder={t.searchPlaceholder}
              />
              <div className="absolute left-3 top-3 text-gray-400">
                <motion.svg 
                  animate={{ rotate: searchTerm ? [0, -20, 20, -10, 10, 0] : 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </motion.svg>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <AnimatePresence>
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <motion.button
                      whileHover={{ backgroundColor: '#F9FAFB' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={openIndex === index}
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 border-t border-gray-100 pt-3">
                            <motion.p 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                              className="text-gray-700"
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-10"
                >
                  <p className="text-gray-500">{t.noResults}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
