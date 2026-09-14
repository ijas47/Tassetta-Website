/**
 * Web3Forms configuration.
 *
 * The access key is PUBLIC by design. Web3Forms keys sit in client-side
 * form markup; they identify the destination inbox, they are not a secret.
 * Overridable via env so the key can be rotated without a code change.
 *
 * Plan: Free (250 submissions/month, resets on the 1st).
 * Delivery inbox: ijas@tassetta.com
 *
 * NOT available on Free, both are Pro features:
 *   - File attachments on submissions
 *   - Autoresponder (automatic reply to the person who submitted)
 * See docs/HANDOVER.md for the upgrade path if either becomes worth it.
 */
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '58fe756a-e127-491b-8010-3a7e62d0f7d2';

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export type Web3FormsResult =
  | { ok: true }
  | { ok: false; error: string };

/**
 * Post a plain object to Web3Forms as JSON.
 * Callers own their own loading/success/error UI.
 */
export async function submitToWeb3Forms(
  fields: Record<string, string | number | undefined>,
): Promise<Web3FormsResult> {
  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...fields }),
    });
    const data = (await res.json()) as { success?: boolean; message?: string };
    if (!res.ok || !data.success) {
      return { ok: false, error: data.message || `Submission failed (${res.status})` };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'Could not reach the server. Check your connection and try again.' };
  }
}
