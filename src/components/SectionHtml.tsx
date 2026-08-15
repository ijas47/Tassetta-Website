/**
 * Renders a chunk of preserved design HTML.
 * The design ships as inline-styled markup — we render it verbatim to keep
 * pixel fidelity with the original Claude Design source. Every link inside
 * still enters the SPA via a full-page navigation, which is fine for a
 * marketing site: pages are server-rendered and light.
 */
export default function SectionHtml({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
