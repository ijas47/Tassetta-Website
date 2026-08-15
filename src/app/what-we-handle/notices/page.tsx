import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { noticesHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Notices and audits — when a state writes back, we answer',
  description: 'We intake the notice, match it to the filing period, draft the response, you approve, and we close it out. The whole exchange is logged.',
  alternates: { canonical: '/what-we-handle/notices' },
  openGraph: {
    title: 'Notices and audits — when a state writes back, we answer',
    description: 'We intake the notice, match it to the filing period, draft the response, you approve, and we close it out. The whole exchange is logged.',
    url: '/what-we-handle/notices',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={noticesHtml} />;
}
