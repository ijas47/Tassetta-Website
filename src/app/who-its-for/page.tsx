import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { whoItsForHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Who Tassetta is for',
  description: 'For ecommerce brands shipping into many states who want sales tax handled without hiring for it, and without losing sight of where they stand.',
  alternates: { canonical: '/who-its-for' },
  openGraph: {
    title: 'Who Tassetta is for',
    description: 'For ecommerce brands shipping into many states who want sales tax handled without hiring for it, and without losing sight of where they stand.',
    url: '/who-its-for',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={whoItsForHtml} />;
}
