"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LanguageSwitcherProps {
  locale: string;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  
  // Get the path without the locale prefix
  const pathnameWithoutLocale = pathname.replace(/^\/[^\/]+/, '') || '/';
  
  // Determine the target locale
  const targetLocale = locale === 'lv' ? 'en' : 'lv';
  
  // Create the URL for the other language
  const targetUrl = `/${targetLocale}${pathnameWithoutLocale}`;
  
  return (
    <Link 
      href={targetUrl}
      className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
      aria-label={locale === 'lv' ? 'Switch to English' : 'Pārslēgties uz latviešu valodu'}
    >
      {targetLocale.toUpperCase()}
    </Link>
  );
}
