import type { Metadata } from 'next';
import FallbackPage from '@/components/FallbackPage';

export const metadata: Metadata = {
  title: 'Log in',
  description: 'The customer dashboard opens in the live product. For now, book a call.',
  alternates: { canonical: '/login' },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <FallbackPage title='Log in' />;
}
