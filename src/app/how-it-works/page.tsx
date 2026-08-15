import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { howItWorksHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'How it works',
  description: 'Four stages, from the first data pull to a filed return. You are involved at exactly one of them — the approval. The rest is ours.',
  alternates: { canonical: '/how-it-works' },
  openGraph: {
    title: 'How it works',
    description: 'Four stages, from the first data pull to a filed return. You are involved at exactly one of them — the approval. The rest is ours.',
    url: '/how-it-works',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={howItWorksHtml} />;
}
