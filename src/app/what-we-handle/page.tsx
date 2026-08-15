import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { whatWeHandleHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'What Tassetta handles',
  description: 'The full lifecycle of a sales tax obligation, from the moment you might owe to the archived proof that you filed.',
  alternates: { canonical: '/what-we-handle' },
  openGraph: {
    title: 'What Tassetta handles',
    description: 'The full lifecycle of a sales tax obligation, from the moment you might owe to the archived proof that you filed.',
    url: '/what-we-handle',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={whatWeHandleHtml} />;
}
