import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { resourcesHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Resources — sales tax explained for ecommerce brands',
  description: 'Plain-English writing on the parts of sales tax that actually affect Shopify and multi-channel brands. No jargon for its own sake.',
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Resources — sales tax explained for ecommerce brands',
    description: 'Plain-English writing on the parts of sales tax that actually affect Shopify and multi-channel brands. No jargon for its own sake.',
    url: '/resources',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={resourcesHtml} />;
}
