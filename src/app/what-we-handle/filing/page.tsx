import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { filingHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Filing and remittance — returns filed, on time, reviewed by a person',
  description: 'Expert-prepared returns reconciled against tax you actually collected. You approve. We file and remit on the schedule each state assigns you.',
  alternates: { canonical: '/what-we-handle/filing' },
  openGraph: {
    title: 'Filing and remittance — returns filed, on time, reviewed by a person',
    description: 'Expert-prepared returns reconciled against tax you actually collected. You approve. We file and remit on the schedule each state assigns you.',
    url: '/what-we-handle/filing',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={filingHtml} />;
}
