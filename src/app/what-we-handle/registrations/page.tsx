import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { registrationsHtml } from '@/lib/design-html';

export const metadata: Metadata = {
 title: 'State registrations',
 description: 'Crossing a threshold means registering before you can legally collect or file. The platform prepares the registration, a CPA reviews it, you approve, and it is tracked through to the state account number.',
 alternates: { canonical: '/what-we-handle/registrations' },
 openGraph: {
 title: 'State registrations',
 description: 'Crossing a threshold means registering before you can legally collect or file. The platform prepares the registration, a CPA reviews it, you approve, and it is tracked through to the state account number.',
 url: '/what-we-handle/registrations',
 type: 'website',
 },
};

export default function Page() {
 return <SectionHtml html={registrationsHtml} />;
}
