import { fallbackHtml } from '@/lib/design-html';

/**
 * Placeholder page for routes that would open the app or a legal document
 * in the live product. The design's fallback template swaps in a title
 * ({{ fallbackTitle }}); we replace it server-side so the rendered HTML is
 * clean and crawlable.
 */
export default function FallbackPage({ title }: { title: string }) {
  const safe = title.replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!
  ));
  const html = fallbackHtml.replace('{{ fallbackTitle }}', safe);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
