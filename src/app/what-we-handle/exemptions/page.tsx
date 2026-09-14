import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { exemptionsHtml } from '@/lib/design-html';

export const metadata: Metadata = {
 title: 'Exemption certificates',
 description: 'Certificates collected, checked for validity and expiry, and tied to the exempt lines on your returns, so an exempt sale holds up when somebody checks it.',
 alternates: { canonical: '/what-we-handle/exemptions' },
 openGraph: {
 title: 'Exemption certificates',
 description: 'Certificates collected, checked for validity and expiry, and tied to the exempt lines on your returns, so an exempt sale holds up when somebody checks it.',
 url: '/what-we-handle/exemptions',
 type: 'website',
 },
};

export default function Page() {
 return <SectionHtml html={exemptionsHtml} />;
}
