import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { pricingHtml } from '@/lib/design-html';

export const metadata: Metadata = {
 title: 'Pricing',
 description: '$1,000 a year. Unlimited filing and unlimited states.',
 alternates: { canonical: '/pricing' },
 openGraph: {
 title: 'Pricing',
 description: '$1,000 a year. Unlimited filing and unlimited states.',
 url: '/pricing',
 type: 'website',
 },
};

export default function Page() {
 return <SectionHtml html={pricingHtml} />;
}
