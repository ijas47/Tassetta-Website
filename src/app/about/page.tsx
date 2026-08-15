import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { aboutHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'About Tassetta',
  description: 'A tax team that does the work, running on a platform we built ourselves — the outcome of hiring an expert with the speed and transparency of good software.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Tassetta',
    description: 'A tax team that does the work, running on a platform we built ourselves — the outcome of hiring an expert with the speed and transparency of good software.',
    url: '/about',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={aboutHtml} />;
}
