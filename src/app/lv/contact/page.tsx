import React from 'react';
import ContactForm from '@/components/contact/ContactForm';
import CalendlyIntegration from '@/components/contact/CalendlyIntegration';
import CaseCalculator from '@/components/contact/CaseCalculator';
import LiveChat from '@/components/shared/LiveChat';
import ClientContactPage from '../../../components/contact/ClientContactPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakti | Davis Juridiskais Birojs',
  description: 'Sazinieties ar Davis juridisko biroju. Pieteikt konsultāciju, atrast mūsu biroju vai izmantot tiešsaistes rīkus.',
};

export default function ContactPage() {
  return <ClientContactPage locale="lv" />;
}
