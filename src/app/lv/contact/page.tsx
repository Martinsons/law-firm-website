import React from 'react';
import ClientContactPage from '../../../components/contact/ClientContactPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakti | Davis Juridiskais Birojs',
  description: 'Sazinieties ar Davis juridisko biroju. Pieteikt konsultāciju, atrast mūsu biroju vai izmantot tiešsaistes rīkus.',
};

export default function ContactPage() {
  return <ClientContactPage locale="lv" />;
}
