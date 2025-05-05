"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CaseCalculatorProps {
  locale: string;
}

const translations = {
  lv: {
    title: "Lietas kalkulators",
    subtitle: "Aprēķiniet potenciālo kompensāciju savam gadījumam",
    caseType: "Lietas veids",
    severity: "Smaguma pakāpe",
    duration: "Lietas ilgums",
    calculate: "Aprēķināt",
    result: "Aptuvena kompensācija:",
    experience: "Mūsu pieredze",
    experienceText: "Mūsu advokāti ir palīdzējuši klientiem atgūt vairāk nekā 5 miljonu EUR kompensācijās dažādās lietās.",
    disclaimer: "* Šis ir tikai aptuvens aprēķins. Faktiskā summa var atšķirties. Sazinieties ar mūsu advokātiem, lai iegūtu precīzāku novērtējumu.",
    caseTypes: {
      select: "Izvēlieties lietas veidu",
      personal: "Personīgais kaitējums",
      employment: "Darba tiesības",
      medical: "Medicīniska kļūda",
      property: "Īpašuma strīds",
      traffic: "Satiksmes negadījums"
    },
    severityLevels: {
      select: "Izvēlieties smaguma pakāpi",
      low: "Zema - neliels kaitējums vai zaudējums",
      medium: "Vidēja - nozīmīgs kaitējums vai zaudējums",
      high: "Augsta - nopietns kaitējums vai zaudējums",
      severe: "Smaga - ekstremāls kaitējums vai zaudējums"
    },
    durations: {
      select: "Izvēlieties lietas ilgumu",
      short: "Īstermiņa (līdz 6 mēnešiem)",
      medium: "Vidēja termiņa (6-12 mēneši)",
      long: "Ilgtermiņa (1-2 gadi)",
      extended: "Pagarināta (vairāk nekā 2 gadi)"
    }
  },
  en: {
    title: "Case Calculator",
    subtitle: "Calculate potential compensation for your case",
    caseType: "Case Type",
    severity: "Severity Level",
    duration: "Case Duration",
    calculate: "Calculate",
    result: "Estimated Compensation:",
    experience: "Our Experience",
    experienceText: "Our attorneys have helped clients recover over €5 million in compensation across various cases.",
    disclaimer: "* This is only an approximate calculation. Actual amount may vary. Contact our attorneys for a more accurate assessment.",
    caseTypes: {
      select: "Select case type",
      personal: "Personal Injury",
      employment: "Employment Rights",
      medical: "Medical Malpractice",
      property: "Property Dispute",
      traffic: "Traffic Accident"
    },
    severityLevels: {
      select: "Select severity level",
      low: "Low - minor harm or loss",
      medium: "Medium - significant harm or loss",
      high: "High - serious harm or loss",
      severe: "Severe - extreme harm or loss"
    },
    durations: {
      select: "Select case duration",
      short: "Short term (up to 6 months)",
      medium: "Medium term (6-12 months)",
      long: "Long term (1-2 years)",
      extended: "Extended (more than 2 years)"
    }
  }
};

// Base compensation ranges by case type (in EUR)
const compensationRanges = {
  personal: { min: 1000, max: 50000 },
  employment: { min: 500, max: 25000 },
  medical: { min: 2000, max: 100000 },
  property: { min: 1000, max: 30000 },
  traffic: { min: 500, max: 20000 }
};

// Multipliers for severity
const severityMultipliers = {
  low: 0.25,
  medium: 0.5,
  high: 0.75,
  severe: 1.0
};

// Multipliers for duration
const durationMultipliers = {
  short: 0.7,
  medium: 0.85,
  long: 1.0,
  extended: 1.15
};

export default function CaseCalculator({ locale }: CaseCalculatorProps) {
  const t = translations[locale as keyof typeof translations];
  const [result, setResult] = useState<{min: number, max: number} | null>(null);
  const [caseType, setCaseType] = useState<string>("personal"); 
  const [severity, setSeverity] = useState<string>("medium");
  const [duration, setDuration] = useState<string>("medium");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    calculateCompensation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (caseType && severity && duration) {
      calculateCompensation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caseType, severity, duration]);

  const calculateCompensation = () => {
    if (!caseType || !severity || !duration) {
      setError(locale === 'lv' ? 'Lūdzu, aizpildiet visus laukus' : 'Please fill in all fields');
      return;
    }

    setError("");

    const baseRange = compensationRanges[caseType as keyof typeof compensationRanges];
    const severityMultiplier = severityMultipliers[severity as keyof typeof severityMultipliers];
    const durationMultiplier = durationMultipliers[duration as keyof typeof durationMultipliers];

    const minCompensation = Math.round(baseRange.min * severityMultiplier * durationMultiplier);
    const maxCompensation = Math.round(baseRange.max * severityMultiplier * durationMultiplier);

    setResult({ min: minCompensation, max: maxCompensation });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-semibold text-gray-900 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t.title}
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {t.subtitle}
        </motion.p>
      </motion.div>

      <div className="bg-gradient-to-br from-blue-50 to-white shadow-lg rounded-xl p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            className="flex flex-col space-y-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div>
              <label htmlFor="caseType" className="block text-sm font-medium text-gray-700 mb-2">{t.caseType}</label>
              <div className="relative">
                <select
                  id="caseType"
                  name="caseType"
                  value={caseType}
                  onChange={(e) => setCaseType(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none"
                >
                  <option value="personal">{t.caseTypes.personal}</option>
                  <option value="employment">{t.caseTypes.employment}</option>
                  <option value="medical">{t.caseTypes.medical}</option>
                  <option value="property">{t.caseTypes.property}</option>
                  <option value="traffic">{t.caseTypes.traffic}</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="severity" className="block text-sm font-medium text-gray-700 mb-2">{t.severity}</label>
              <div className="relative">
                <select
                  id="severity"
                  name="severity"
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none"
                >
                  <option value="low">{t.severityLevels.low}</option>
                  <option value="medium">{t.severityLevels.medium}</option>
                  <option value="high">{t.severityLevels.high}</option>
                  <option value="severe">{t.severityLevels.severe}</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">{t.duration}</label>
              <div className="relative">
                <select
                  id="duration"
                  name="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none"
                >
                  <option value="short">{t.durations.short}</option>
                  <option value="medium">{t.durations.medium}</option>
                  <option value="long">{t.durations.long}</option>
                  <option value="extended">{t.durations.extended}</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            
            <motion.button
              type="button"
              onClick={calculateCompensation}
              className="mt-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              <span>{t.calculate}</span>
            </motion.button>
            
            {error && (
              <motion.div 
                className="p-3 bg-red-50 text-red-700 rounded-lg text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.div>
            )}
          </motion.div>

          {/* Results Section */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {result && (
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md border border-blue-100"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{t.result}</h3>
                  <div className="text-3xl font-bold text-blue-600">
                    {new Intl.NumberFormat(locale === 'lv' ? 'lv-LV' : 'en-US', { 
                      style: 'currency', 
                      currency: 'EUR',
                      maximumFractionDigits: 0
                    }).format(result.min)} - {new Intl.NumberFormat(locale === 'lv' ? 'lv-LV' : 'en-US', { 
                      style: 'currency', 
                      currency: 'EUR',
                      maximumFractionDigits: 0
                    }).format(result.max)}
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p className="text-sm text-gray-600">{t.disclaimer}</p>
                  </div>
                </div>
              </motion.div>
            )}
            
            <motion.div 
              className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <h4 className="font-medium text-blue-800 mb-2">{t.experience}</h4>
              <p className="text-sm text-blue-700">{t.experienceText}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
