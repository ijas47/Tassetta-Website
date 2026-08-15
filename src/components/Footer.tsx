import Link from "next/link";

const LINK_STYLE = {
  fontSize: 14,
  color: "#c7d2cf",
  textDecoration: "none",
} as const;

const COL_HEAD = {
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: "0.04em",
  textTransform: "uppercase" as const,
  color: "#fff",
  margin: "0 0 4px",
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#0a1413", padding: "clamp(48px,6vw,72px) 0 36px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,4vw,32px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "40px 32px",
            paddingBottom: 44,
            borderBottom: "1px solid #1e2c2a",
          }}
        >
          <div style={{ gridColumn: "1 / -1", maxWidth: 280 }}>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                textDecoration: "none",
                marginBottom: 14,
              }}
            >
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 8,
                  background: "#0d7d72",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontFamily: "var(--font-manrope), Manrope, sans-serif",
                  fontWeight: 800,
                  fontSize: 16,
                }}
              >
                T
              </span>
              <span
                style={{
                  fontFamily: "var(--font-manrope), Manrope, sans-serif",
                  fontWeight: 800,
                  fontSize: 20,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                }}
              >
                Tassetta
              </span>
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: "#7a8783", margin: 0 }}>
              Managed US sales tax compliance for Shopify and multi-channel ecommerce brands.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={COL_HEAD}>Product</p>
            <Link href="/how-it-works" className="t-flink" style={LINK_STYLE}>How it works</Link>
            <Link href="/what-we-handle" className="t-flink" style={LINK_STYLE}>What we handle</Link>
            <Link href="/pricing" className="t-flink" style={LINK_STYLE}>Pricing</Link>
            <Link href="/nexus-study" className="t-flink" style={LINK_STYLE}>Free nexus study</Link>
            <Link href="/security" className="t-flink" style={LINK_STYLE}>Security</Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={COL_HEAD}>Who it&rsquo;s for</p>
            <Link href="/who-its-for/shopify" className="t-flink" style={LINK_STYLE}>Shopify brands</Link>
            <Link href="/who-its-for/multi-channel" className="t-flink" style={LINK_STYLE}>Multi-channel sellers</Link>
            <Link href="/compare/software" className="t-flink" style={LINK_STYLE}>Compare vs software</Link>
            <Link href="/compare/cpa" className="t-flink" style={LINK_STYLE}>Compare vs a CPA</Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={COL_HEAD}>Company</p>
            <Link href="/about" className="t-flink" style={LINK_STYLE}>About</Link>
            <Link href="/resources" className="t-flink" style={LINK_STYLE}>Resources</Link>
            <Link href="/resources" className="t-flink" style={LINK_STYLE}>Blog</Link>
            <Link href="/contact" className="t-flink" style={LINK_STYLE}>Contact</Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={COL_HEAD}>Get started</p>
            <Link
              href="/nexus-study"
              className="t-cta-primary"
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                background: "#0d7d72",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                padding: "10px 18px",
                borderRadius: 24,
                textDecoration: "none",
              }}
            >
              Get your free nexus study
            </Link>
            <Link href="/contact" className="t-flink" style={LINK_STYLE}>Book a call</Link>
            <Link href="/login" className="t-flink" style={LINK_STYLE}>Log in</Link>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            alignItems: "center",
            padding: "28px 0",
          }}
        >
          <p style={{ fontSize: 13, color: "#7a8783", margin: 0 }}>
            © {year} Tassetta ·{" "}
            <Link href="/legal/privacy" className="t-flink" style={{ color: "#7a8783", textDecoration: "none" }}>
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href="/legal/terms" className="t-flink" style={{ color: "#7a8783", textDecoration: "none" }}>
              Terms
            </Link>{" "}
            ·{" "}
            <Link href="/legal/engagement" className="t-flink" style={{ color: "#7a8783", textDecoration: "none" }}>
              Engagement and liability terms
            </Link>
          </p>
        </div>

        <div style={{ borderTop: "1px solid #1e2c2a", paddingTop: 24 }}>
          <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "#7a8783", margin: 0, maxWidth: 940 }}>
            Tassetta provides managed sales tax compliance services. We are not a law firm and do not provide legal
            advice. Nexus thresholds, tax rates, and filing requirements vary by jurisdiction and change over time,
            and we verify them against the relevant tax authority before filing.{" "}
            <span style={{ fontFamily: "ui-monospace, Menlo, monospace", color: "#5d6a67" }}>
              [TODO: Add your real entity name, and once they exist, your E&amp;O insurance and any certifications.]
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
