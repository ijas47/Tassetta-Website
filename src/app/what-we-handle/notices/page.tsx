import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { noticesHtml } from '@/lib/design-html';

export const metadata: Metadata = {
 title: 'Notices and audits',
 description: 'A notice is matched to the exact return and period it concerns. The CPA who worked that return drafts the response, you approve it, and the exchange is logged against the filing.',
 alternates: { canonical: '/what-we-handle/notices' },
 openGraph: {
 title: 'Notices and audits',
 description: 'A notice is matched to the exact return and period it concerns. The CPA who worked that return drafts the response, you approve it, and the exchange is logged against the filing.',
 url: '/what-we-handle/notices',
 type: 'website',
 },
};

export default function Page() {
 return <SectionHtml html={noticesHtml} />;
}
