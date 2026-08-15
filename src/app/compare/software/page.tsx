import type { Metadata } from 'next';
import SectionHtml from '@/components/SectionHtml';
import { compareSoftwareHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Tassetta vs sales tax software',
  description: 'Avalara and TaxJar are calculation engines. Tassetta is a team that runs sales tax compliance for you.',
  alternates: { canonical: '/compare/software' },
  openGraph: {
    title: 'Tassetta vs sales tax software',
    description: 'Avalara and TaxJar are calculation engines. Tassetta is a team that runs sales tax compliance for you.',
    url: '/compare/software',
    type: 'website',
  },
};

export default function Page() {
  return <SectionHtml html={compareSoftwareHtml} />;
}
