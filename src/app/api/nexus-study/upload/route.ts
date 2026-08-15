import { NextResponse } from 'next/server';

const MAX_BYTES = 25 * 1024 * 1024;

/**
 * TODO: real handler.
 * Should:
 *   1. Stream the file to durable storage (S3 / R2 / Blob) under a request id.
 *   2. Enqueue a nexus-study job (worker parses CSV, runs threshold analysis).
 *   3. Persist the submission (email, request id, filename, size, uploaded_at).
 *   4. Return the request id so the client can poll for status.
 *
 * This stub validates the payload shape so the client integration can be
 * exercised end-to-end during development.
 */
export async function POST(req: Request) {
  const form = await req.formData().catch(() => null);
  if (!form) {
    return NextResponse.json({ error: 'expected multipart/form-data' }, { status: 400 });
  }
  const file = form.get('file');
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'missing file field' }, { status: 400 });
  }
  if (!file.name.toLowerCase().endsWith('.csv')) {
    return NextResponse.json({ error: 'only .csv is accepted' }, { status: 415 });
  }
  if (file.size === 0) {
    return NextResponse.json({ error: 'file is empty' }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'file too large (max 25 MB)' }, { status: 413 });
  }
  return NextResponse.json({ status: 'accepted', filename: file.name, size: file.size });
}
