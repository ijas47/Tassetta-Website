import type { Metadata } from 'next';
import FallbackPage from '@/components/FallbackPage';

export const metadata: Metadata = {
  title: 'Book a call',
  description: 'Booking connects to the live product’s scheduler. For now, start with your free nexus study.',
  alternates: { canonical: '/book' },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <FallbackPage title='Book a call' />;
}
