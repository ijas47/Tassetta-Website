import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { exemptionsHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Exemption certificates — wholesale and exempt sales, documented properly',
  description: 'We collect certificates, check them for validity and expiry, and resolve which sales are genuinely exempt. No more guessing at audit time.',
  alternates: { canonical: '/what-we-handle/exemptions' },
  openGraph: {
    title: 'Exemption certificates — wholesale and exempt sales, documented properly',
    description: 'We collect certificates, check them for validity and expiry, and resolve which sales are genuinely exempt. No more guessing at audit time.',
    url: '/what-we-handle/exemptions',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={exemptionsHtml} />;
}
