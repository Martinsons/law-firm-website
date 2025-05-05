import React from 'react';
import ClientContactPage from '../../../components/contact/ClientContactPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Davis Law Firm',
  description: 'Contact Davis Law Firm. Schedule a consultation, find our office or use our online tools.',
};

export default function ContactPage() {
  return <ClientContactPage locale="en" />;
}
