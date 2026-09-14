import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { filingHtml } from '@/lib/design-html';

export const metadata: Metadata = {
 title: 'Filing and remittance',
 description: 'Each return calculated from your live sales, reconciled against the tax you actually collected, verified and signed by a named CPA, approved by you, then filed and remitted on the state schedule.',
 alternates: { canonical: '/what-we-handle/filing' },
 openGraph: {
 title: 'Filing and remittance',
 description: 'Each return calculated from your live sales, reconciled against the tax you actually collected, verified and signed by a named CPA, approved by you, then filed and remitted on the state schedule.',
 url: '/what-we-handle/filing',
 type: 'website',
 },
};

export default function Page() {
 return <SectionHtml html={filingHtml} />;
}
