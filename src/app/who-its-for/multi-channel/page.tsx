import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { whoMultiHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Sales tax when you sell on Shopify and marketplaces',
  description: 'Marketplaces collect and remit for you. Your Shopify sales are yours to handle. We separate them so you never double-count.',
  alternates: { canonical: '/who-its-for/multi-channel' },
  openGraph: {
    title: 'Sales tax when you sell on Shopify and marketplaces',
    description: 'Marketplaces collect and remit for you. Your Shopify sales are yours to handle. We separate them so you never double-count.',
    url: '/who-its-for/multi-channel',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={whoMultiHtml} />;
}
