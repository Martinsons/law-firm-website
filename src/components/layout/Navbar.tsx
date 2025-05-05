"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

interface NavbarProps {
  locale: string;
}

const translations = {
  lv: {
    home: "Sākums",
    about: "Par mums",
    practiceAreas: "Darbības virzieni",
    contact: "Kontakti",
    login: "Ienākt",
    signup: "Reģistrēties"
  },
  en: {
    home: "Home",
    about: "About Us",
    practiceAreas: "Practice Areas",
    contact: "Contact",
    login: "Login",
    signup: "Sign Up"
  }
};

export default function Navbar({ locale }: NavbarProps) {
  const t = translations[locale as keyof typeof translations];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="py-4 px-6 bg-white shadow-sm relative z-30">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/${locale}`} className="flex items-center group transition-all duration-300">
          <div className="flex items-center mr-2 bg-blue-600 text-white p-1.5 rounded transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-xl font-semibold text-gray-900 transition-all duration-300 group-hover:text-blue-600">Davis</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href={`/${locale}`} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
            {t.home}
          </Link>
          <Link href={`/${locale}/about`} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
            {t.about}
          </Link>
          <Link href={`/${locale}/practice-areas`} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
            {t.practiceAreas}
          </Link>
          <Link href={`/${locale}/contact`} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
            {t.contact}
          </Link>
        </nav>
        
        <div className="flex items-center space-x-2">
          <LanguageSwitcher locale={locale} />
          <Link href="/login" className="hidden md:inline-flex px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-300">
            {t.login}
          </Link>
          <Link href="/signup" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300">
            {t.signup}
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 border-t border-gray-100 z-50">
          <nav className="flex flex-col space-y-4">
            <Link 
              href={`/${locale}`} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.home}
            </Link>
            <Link 
              href={`/${locale}/about`} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.about}
            </Link>
            <Link 
              href={`/${locale}/practice-areas`} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.practiceAreas}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.contact}
            </Link>
            <div className="pt-4 border-t border-gray-100">
              <Link 
                href="/login" 
                className="block w-full text-center px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md mb-3 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.login}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
