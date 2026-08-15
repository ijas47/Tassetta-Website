import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { whoShopifyHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Sales tax for Shopify brands',
  description: 'Shopify calculates tax at checkout — it does not tell you where you have a filing obligation, register you, or file. Tassetta closes that gap.',
  alternates: { canonical: '/who-its-for/shopify' },
  openGraph: {
    title: 'Sales tax for Shopify brands',
    description: 'Shopify calculates tax at checkout — it does not tell you where you have a filing obligation, register you, or file. Tassetta closes that gap.',
    url: '/who-its-for/shopify',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={whoShopifyHtml} />;
}
