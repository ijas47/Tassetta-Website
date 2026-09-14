import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { contactHtml } from '@/lib/design-html';

export const metadata: Metadata = {
 title: 'Contact',
 description: 'Got a notice and need help fast, or sizing up the platform. Either way, give us the basics and we will come back quickly.',
 alternates: { canonical: '/contact' },
 openGraph: {
 title: 'Contact',
 description: 'Got a notice and need help fast, or sizing up the platform. Either way, give us the basics and we will come back quickly.',
 url: '/contact',
 type: 'website',
 },
};

export default function Page() {
 return <SectionHtml html={contactHtml} />;
}
