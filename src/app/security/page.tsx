import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { securityHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Security',
  description: 'You are giving Tassetta your sales data and the authority to file in your name. Here is how both are protected, and what is still on the roadmap.',
  alternates: { canonical: '/security' },
  openGraph: {
    title: 'Security',
    description: 'You are giving Tassetta your sales data and the authority to file in your name. Here is how both are protected, and what is still on the roadmap.',
    url: '/security',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={securityHtml} />;
}
