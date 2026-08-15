import type { Metadata } from 'next';
import FallbackPage from '@/components/FallbackPage';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'The full privacy policy lives in the live product. For now, start with your free nexus study.',
  alternates: { canonical: '/legal/privacy' },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <FallbackPage title='Privacy policy' />;
}
