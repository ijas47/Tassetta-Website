import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { resourcesHtml } from '@/lib/design-html';

export const metadata: Metadata = {
 title: 'Resources',
 description: 'Plain writing on the parts of sales tax that actually affect Shopify and multi-channel brands.',
 alternates: { canonical: '/resources' },
 openGraph: {
 title: 'Resources',
 description: 'Plain writing on the parts of sales tax that actually affect Shopify and multi-channel brands.',
 url: '/resources',
 type: 'website',
 },
};

export default function Page() {
 return <SectionHtml html={resourcesHtml} />;
}
