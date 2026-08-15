import type { Metadata } from 'next';
import FallbackPage from '@/components/FallbackPage';

export const metadata: Metadata = {
  title: 'Terms of service',
  description: 'The full terms of service live in the live product. For now, start with your free nexus study.',
  alternates: { canonical: '/legal/terms' },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <FallbackPage title='Terms of service' />;
}
