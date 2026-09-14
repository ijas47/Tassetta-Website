import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { nexusHtml } from '@/lib/design-html';

export const metadata: Metadata = {
 title: 'Nexus monitoring',
 description: 'Your sales measured against the current economic nexus threshold in all 50 states and DC, continuously, with the rules dataset versioned so the math never runs on stale numbers.',
 alternates: { canonical: '/what-we-handle/nexus' },
 openGraph: {
 title: 'Nexus monitoring',
 description: 'Your sales measured against the current economic nexus threshold in all 50 states and DC, continuously, with the rules dataset versioned so the math never runs on stale numbers.',
 url: '/what-we-handle/nexus',
 type: 'website',
 },
};

export default function Page() {
 return <SectionHtml html={nexusHtml} />;
}
