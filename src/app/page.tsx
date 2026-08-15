import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { homeHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  description: 'Managed US sales tax compliance. The platform watches where you owe across all 50 states, a tax expert files every return, and you approve in one click.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Tassetta — Sales tax, handled. Not handed back to you.',
    description: 'Managed US sales tax compliance. The platform watches where you owe across all 50 states, a tax expert files every return, and you approve in one click.',
    url: '/',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={homeHtml} />;
}
