/**
 * The live product. Sign-in sets a cookie on this host, so the marketing
 * site sends people here instead of embedding a login form.
 *
 * NEXT_PUBLIC_APP_URL overrides it for a preview or a future hostname.
 */
const FALLBACK = "https://app.tassetta.com";

export const appUrl = (process.env.NEXT_PUBLIC_APP_URL ?? FALLBACK).trim().replace(/\/$/, "");
