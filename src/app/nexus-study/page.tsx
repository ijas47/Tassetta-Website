import type { Metadata } from 'next';
import NexusStudyUploader from '@/components/NexusStudyUploader';
import { nexusStudyHtml } from '@/lib/design-html';

export const metadata: Metadata = {
  title: 'Free nexus study — find out where you owe',
  description:
    'Send us one CSV export from Shopify. Within 3 to 5 business days we send back a report showing every state where you have already crossed a sales tax threshold, where you are about to, and what it would take to get compliant.',
  alternates: { canonical: '/nexus-study' },
  openGraph: {
    title: 'Free nexus study — find out where you owe',
    description:
      'One CSV export. A report on every state where you have crossed a sales tax threshold, where you are close, and what it would take to get compliant.',
    url: '/nexus-study',
    type: 'website',
  },
};

const [beforeUploader, afterUploader] = (() => {
  const parts = nexusStudyHtml.split('<!--NEXUS_UPLOADER-->');
  if (parts.length !== 2) {
    // Extractor invariant broke — degrade gracefully rather than crash the page.
    return [nexusStudyHtml, ''];
  }
  return parts as [string, string];
})();

export default function NexusStudyPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: beforeUploader }} />
      <section
        aria-label="Upload your CSV"
        style={{ background: '#eef2f0', padding: '0 0 clamp(24px,4vw,48px)' }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 clamp(20px,4vw,32px)' }}>
          <div
            style={{
              background: '#fff',
              borderRadius: 28,
              padding: 'clamp(24px,4vw,44px)',
              boxShadow: '0 30px 70px -34px rgba(15,27,26,0.32)',
            }}
          >
            <NexusStudyUploader />
          </div>
        </div>
      </section>
      <div dangerouslySetInnerHTML={{ __html: afterUploader }} />
    </>
  );
}
