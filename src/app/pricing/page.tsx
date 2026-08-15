import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { pricingHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Pricing — simple, flat, one line per state',
  description: 'A flat monthly base plus a flat fee per state you are registered in. No per-transaction fees, so a big sales month does not become a big software bill.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — simple, flat, one line per state',
    description: 'A flat monthly base plus a flat fee per state you are registered in. No per-transaction fees, so a big sales month does not become a big software bill.',
    url: '/pricing',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={pricingHtml} />;
}
