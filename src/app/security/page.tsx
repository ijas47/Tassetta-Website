import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { securityHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Security',
  description: 'You are handing us your sales data and authority to file on your behalf. Here is how that is protected.',
  alternates: { canonical: '/security' },
  openGraph: {
    title: 'Security',
    description: 'You are handing us your sales data and authority to file on your behalf. Here is how that is protected.',
    url: '/security',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={securityHtml} />;
}
