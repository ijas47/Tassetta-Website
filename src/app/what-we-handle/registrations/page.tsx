import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { registrationsHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Registrations — we get you registered in new states',
  description: 'Crossing a threshold means you have to register before you can legally collect and file. We prepare, you approve, we track it through to confirmed.',
  alternates: { canonical: '/what-we-handle/registrations' },
  openGraph: {
    title: 'Registrations — we get you registered in new states',
    description: 'Crossing a threshold means you have to register before you can legally collect and file. We prepare, you approve, we track it through to confirmed.',
    url: '/what-we-handle/registrations',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={registrationsHtml} />;
}
