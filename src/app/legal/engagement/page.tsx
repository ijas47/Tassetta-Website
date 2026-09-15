import type { Metadata } from 'next';
import FallbackPage from '@/components/FallbackPage';

export const metadata: Metadata = {
  title: 'Engagement and liability terms',
  description: 'The engagement and liability terms live in the live product. For now, book a call.',
  alternates: { canonical: '/legal/engagement' },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <FallbackPage title='Engagement and liability terms' />;
}
