import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { whoItsForHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Who Tassetta is for',
  description: 'Built for ecommerce brands that have outgrown “we only collect in our home state” but do not want to turn sales tax into a job for someone on the team.',
  alternates: { canonical: '/who-its-for' },
  openGraph: {
    title: 'Who Tassetta is for',
    description: 'Built for ecommerce brands that have outgrown “we only collect in our home state” but do not want to turn sales tax into a job for someone on the team.',
    url: '/who-its-for',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={whoItsForHtml} />;
}
