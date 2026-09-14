import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { whoMultiHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Sales tax when you sell on Shopify and marketplaces',
  description: 'Marketplaces remit as the facilitator. Your direct sales are yours to file. Tassetta splits them at import so your return covers what is actually yours.',
  alternates: { canonical: '/who-its-for/multi-channel' },
  openGraph: {
    title: 'Sales tax when you sell on Shopify and marketplaces',
    description: 'Marketplaces remit as the facilitator. Your direct sales are yours to file. Tassetta splits them at import so your return covers what is actually yours.',
    url: '/who-its-for/multi-channel',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={whoMultiHtml} />;
}
