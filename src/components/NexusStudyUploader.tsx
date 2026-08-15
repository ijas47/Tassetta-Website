"use client";

import { useRef, useState } from "react";

const MAX_MB = 25;
const MAX_BYTES = MAX_MB * 1024 * 1024;

type Status = "idle" | "chosen" | "submitting" | "done" | "error";

export default function NexusStudyUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  function validate(f: File): string | null {
    const looksCsv = f.name.toLowerCase().endsWith(".csv");
    const mimeOk = !f.type || f.type === "text/csv" || f.type === "application/vnd.ms-excel";
    if (!looksCsv || !mimeOk) return "Please choose a .csv file.";
    if (f.size === 0) return "That file looks empty.";
    if (f.size > MAX_BYTES) return `That file is over ${MAX_MB} MB. Please export a smaller range or contact us.`;
    return null;
  }

  function accept(f: File) {
    const err = validate(f);
    if (err) {
      setError(err);
      setStatus("error");
      setFile(null);
      return;
    }
    setError(null);
    setFile(f);
    setStatus("chosen");
  }

  function clear() {
    setFile(null);
    setStatus("idle");
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  async function submit() {
    if (!file) return;
    setStatus("submitting");
    setError(null);
    try {
      const body = new FormData();
      body.append("file", file);
      // TODO: point this at the real ingestion endpoint (e.g. /api/nexus-study/upload
      //       or a signed S3 URL). Stubbed for now; server should scan the CSV,
      //       enqueue a study job, and return a submission id.
      const res = await fetch("/api/nexus-study/upload", { method: "POST", body });
      if (!res.ok) throw new Error(`Upload failed (${res.status})`);
      setStatus("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  const idle = status === "idle" || (status === "error" && !file);
  const submitting = status === "submitting";
  const done = status === "done";

  return (
    <div>
      {idle && (
        <label
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            const f = e.dataTransfer.files?.[0];
            if (f) accept(f);
          }}
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 18,
            border: `2px dashed ${dragOver ? "#0d7d72" : "#b9ccc6"}`,
            borderRadius: 20,
            padding: "clamp(36px,6vw,64px) 24px",
            cursor: "pointer",
            background: dragOver ? "#f4f9f7" : "#f8faf9",
            transition: "background-color 160ms ease, border-color 160ms ease",
          }}
        >
          <span
            style={{
              width: 64,
              height: 64,
              borderRadius: 9999,
              background: "#d9ede9",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-manrope), Manrope, sans-serif",
                fontWeight: 800,
                fontSize: 26,
                color: "#0d7d72",
              }}
              aria-hidden
            >
              ↑
            </span>
          </span>
          <span
            style={{
              fontFamily: "var(--font-manrope), Manrope, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(20px,2.4vw,26px)",
              letterSpacing: "-0.01em",
              color: "#0f1b1a",
            }}
          >
            Drag your CSV here, or browse
          </span>
          <span style={{ fontSize: 15, lineHeight: 1.5, color: "#7a8783", maxWidth: 420 }}>
            One export of your sales by state from Shopify. That is the whole ask.
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#0d7d72",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16,
              padding: "14px 28px",
              borderRadius: 24,
              marginTop: 4,
            }}
          >
            Upload your CSV
          </span>
          <input
            ref={inputRef}
            type="file"
            accept=".csv,text/csv"
            aria-label="Upload your CSV of Shopify sales by state"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) accept(f);
            }}
            style={{ position: "absolute", width: 1, height: 1, opacity: 0, overflow: "hidden" }}
          />
          {error && (
            <span
              role="alert"
              style={{ fontSize: 14, color: "#d03238", marginTop: 4 }}
            >
              {error}
            </span>
          )}
        </label>
      )}

      {(status === "chosen" || status === "submitting" || status === "error") && file && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 18,
            border: "2px solid #d9ede9",
            borderRadius: 20,
            padding: "clamp(36px,6vw,64px) 24px",
            background: "#f4f9f7",
          }}
        >
          <span
            style={{
              width: 64,
              height: 64,
              borderRadius: 9999,
              background: "#d9ede9",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-manrope), Manrope, sans-serif",
                fontWeight: 800,
                fontSize: 26,
                color: "#0d7d72",
              }}
              aria-hidden
            >
              ✓
            </span>
          </span>
          <span
            style={{
              fontFamily: "var(--font-manrope), Manrope, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(18px,2.2vw,24px)",
              letterSpacing: "-0.01em",
              color: "#0f1b1a",
              wordBreak: "break-all",
            }}
          >
            {file.name}
          </span>
          <span style={{ fontSize: 14, color: "#7a8783" }}>
            {(file.size / 1024).toLocaleString(undefined, { maximumFractionDigits: 1 })} KB
          </span>
          <span style={{ fontSize: 15, lineHeight: 1.5, color: "#7a8783", maxWidth: 420 }}>
            Ready to send. We&rsquo;ll return your report in 3 to 5 business days.
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 4 }}>
            <button
              type="button"
              onClick={submit}
              disabled={submitting}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: submitting ? "#0a655c" : "#0d7d72",
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
                padding: "14px 28px",
                borderRadius: 24,
                border: "none",
                cursor: submitting ? "wait" : "pointer",
                opacity: submitting ? 0.85 : 1,
              }}
            >
              {submitting ? "Sending…" : "Send it"}
            </button>
            <button
              type="button"
              onClick={clear}
              disabled={submitting}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                color: "#0f1b1a",
                border: "1px solid #0f1b1a",
                fontWeight: 600,
                fontSize: 16,
                padding: "14px 28px",
                borderRadius: 24,
                cursor: submitting ? "not-allowed" : "pointer",
              }}
            >
              Choose a different file
            </button>
          </div>
          {error && (
            <span role="alert" style={{ fontSize: 14, color: "#d03238" }}>
              {error}
            </span>
          )}
        </div>
      )}

      {done && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 14,
            border: "2px solid #d9ede9",
            borderRadius: 20,
            padding: "clamp(36px,6vw,64px) 24px",
            background: "#f4f9f7",
          }}
        >
          <span
            style={{
              width: 64,
              height: 64,
              borderRadius: 9999,
              background: "#0d7d72",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: 26,
            }}
            aria-hidden
          >
            ✓
          </span>
          <span
            style={{
              fontFamily: "var(--font-manrope), Manrope, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(20px,2.4vw,26px)",
              letterSpacing: "-0.01em",
              color: "#0f1b1a",
            }}
          >
            We&rsquo;ve got it.
          </span>
          <span style={{ fontSize: 15, lineHeight: 1.55, color: "#41504d", maxWidth: 460 }}>
            We&rsquo;ll email your nexus report in 3 to 5 business days. If we need anything to interpret the export
            we&rsquo;ll reach out first.
          </span>
        </div>
      )}

      <p style={{ fontSize: 14, lineHeight: 1.5, color: "#7a8783", textAlign: "center", margin: "22px 0 0" }}>
        Not sure which export to pull?{" "}
        <a href="/contact" style={{ color: "#0d7d72", textDecoration: "none", fontWeight: 600 }}>
          Book a 15-minute call.
        </a>
      </p>
    </div>
  );
}
