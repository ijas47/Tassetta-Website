export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        padding: "var(--space-section) var(--space-gutter) 3rem",
        background: "var(--ink)",
        color: "#fff",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white font-extrabold text-teal"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                T
              </span>
              <span
                className="font-bold"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Tassetta
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Managed US sales tax compliance for Shopify brands and
              multi-channel sellers.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Product
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              {["How it works", "What we handle", "Pricing", "Compare"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-white/70 no-underline hover:text-white"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Company
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              {["About", "Contact", "Log in"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-white/70 no-underline hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row"
        >
          <p>© {new Date().getFullYear()} Tassetta. All rights reserved.</p>
          <a
            href="#nexus-study"
            className="btn-primary"
            style={{ background: "var(--teal)" }}
          >
            Get your free nexus study
          </a>
        </div>
      </div>
    </footer>
  );
}