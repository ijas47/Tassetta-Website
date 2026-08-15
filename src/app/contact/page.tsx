import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { contactHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Contact — talk to us about your sales tax',
  description: 'Reach out if you have a notice, or are sizing up the service. Give us the basics and we will get back fast.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — talk to us about your sales tax',
    description: 'Reach out if you have a notice, or are sizing up the service. Give us the basics and we will get back fast.',
    url: '/contact',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={contactHtml} />;
}
