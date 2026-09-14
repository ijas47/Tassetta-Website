import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { pricingHtml } from '@/lib/design-html';

export const metadata: Metadata = {
 title: 'Pricing',
 description: 'A monthly base plus a flat fee for each state you are registered in. Priced on states, not transactions, so your compliance bill does not climb with your best month.',
 alternates: { canonical: '/pricing' },
 openGraph: {
 title: 'Pricing',
 description: 'A monthly base plus a flat fee for each state you are registered in. Priced on states, not transactions, so your compliance bill does not climb with your best month.',
 url: '/pricing',
 type: 'website',
 },
};

export default function Page() {
 return <SectionHtml html={pricingHtml} />;
}
