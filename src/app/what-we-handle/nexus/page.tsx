import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { nexusHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Nexus monitoring — know where you owe before the state does',
  description: 'We track your sales against economic nexus thresholds in all 50 states and DC, updated as the rules change.',
  alternates: { canonical: '/what-we-handle/nexus' },
  openGraph: {
    title: 'Nexus monitoring — know where you owe before the state does',
    description: 'We track your sales against economic nexus thresholds in all 50 states and DC, updated as the rules change.',
    url: '/what-we-handle/nexus',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={nexusHtml} />;
}
