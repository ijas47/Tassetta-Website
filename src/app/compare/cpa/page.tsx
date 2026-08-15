import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { compareCpaHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Tassetta vs a bookkeeper or CPA',
  description: 'A CPA can handle your sales tax by hand. Tassetta does the same job on a platform built for it — live view, reconciled returns, flat fees.',
  alternates: { canonical: '/compare/cpa' },
  openGraph: {
    title: 'Tassetta vs a bookkeeper or CPA',
    description: 'A CPA can handle your sales tax by hand. Tassetta does the same job on a platform built for it — live view, reconciled returns, flat fees.',
    url: '/compare/cpa',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={compareCpaHtml} />;
}
