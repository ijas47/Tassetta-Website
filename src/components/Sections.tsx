import SplitTitle from "./SplitTitle";

const services = [
  {
    title: "Nexus monitoring",
    desc: "Know where you owe before the state does.",
    href: "#nexus",
  },
  {
    title: "Registrations",
    desc: "We get you registered in new states.",
    href: "#registrations",
  },
  {
    title: "Filing and remittance",
    desc: "Returns filed, on time, reviewed by a person.",
    href: "#filing",
  },
  {
    title: "Notices and audits",
    desc: "When a state writes back, we answer.",
    href: "#notices",
  },
];

const steps = [
  {
    num: "01",
    title: "Connect your sales",
    desc: "Shopify, marketplaces, and payment processors, separated automatically.",
  },
  {
    num: "02",
    title: "See where you owe",
    desc: "Live nexus dashboard shows exposure building state by state.",
  },
  {
    num: "03",
    title: "We prepare, you approve",
    desc: "Every return reviewed before filing. You stay in control.",
  },
  {
    num: "04",
    title: "We file, remit, and keep the record",
    desc: "Proof archived for the day someone checks your work.",
  },
];

export default function Sections() {
  return (
    <>
      {/* Photography + blend-mode headline */}
      <section className="scroll-section relative min-h-[70vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div
          className="scene-content relative flex min-h-[70vh] items-center"
          style={{ padding: "var(--space-section) var(--space-gutter)" }}
        >
          <div className="mx-auto max-w-6xl">
            <h2
              className="blend-headline font-extrabold leading-none tracking-tight"
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "var(--text-hero)",
              }}
            >
              Compliance
              <br />
              without chaos.
            </h2>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section
        className="scroll-section relative"
        style={{
          padding: "var(--space-section) var(--space-gutter)",
          background: "var(--section-a)",
        }}
      >
        <div className="section-overlay pointer-events-none absolute inset-0" />
        <div className="scene-content relative mx-auto max-w-6xl">
          <SplitTitle
            text="You probably owe sales tax in states you have never registered in."
            as="h2"
            className="max-w-4xl font-bold leading-tight tracking-tight"
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "var(--text-display)",
              color: "var(--ink)",
            }}
          />
          <p className="mt-6 max-w-2xl" style={{ color: "var(--muted)" }}>
            Economic nexus thresholds crossed quietly. Marketplace facilitator
            rules misread. Q4 exposure that shows up as a notice, not a
            dashboard warning.
          </p>
        </div>
      </section>

      {/* Differentiator */}
      <section
        className="scroll-section"
        style={{
          padding: "var(--space-section) var(--space-gutter)",
          background: "var(--section-b)",
        }}
      >
        <div className="scene-content mx-auto max-w-6xl">
          <p
            className="mb-3 font-semibold uppercase tracking-widest"
            style={{ color: "var(--teal)", fontSize: "var(--text-small)" }}
          >
            How Tassetta is different
          </p>
          <h2
            className="font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "var(--text-display)",
            }}
          >
            You watch it. We file it.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="scene-item card">
              <p className="text-sm font-semibold uppercase tracking-wide text-teal">
                You: the live view
              </p>
              <p className="mt-3" style={{ color: "var(--muted)" }}>
                Real-time nexus exposure, registration status, and return
                history. Full visibility without doing the work yourself.
              </p>
              <div
                className="mt-6 flex h-48 items-center justify-center rounded-xl text-sm"
                style={{ background: "var(--mist)", color: "var(--muted)" }}
              >
                [ Live nexus dashboard ]
              </div>
            </div>
            <div className="scene-item card">
              <p className="text-sm font-semibold uppercase tracking-wide text-teal">
                We: the accountable filing
              </p>
              <p className="mt-3" style={{ color: "var(--muted)" }}>
                Everything between &ldquo;you might owe&rdquo; and &ldquo;it is
                filed and archived.&rdquo; Human-reviewed returns, on time, every
                time.
              </p>
              <div
                className="mt-6 flex h-48 items-center justify-center rounded-xl text-sm"
                style={{ background: "var(--mint)", color: "var(--teal-dark)" }}
              >
                [ Filing workflow: prepare → approve → file ]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="scroll-section"
        style={{
          padding: "var(--space-section) var(--space-gutter)",
          background: "var(--foam)",
        }}
      >
        <div className="scene-content mx-auto max-w-6xl">
          <h2
            className="max-w-3xl font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "var(--text-title)",
            }}
          >
            Everything between &ldquo;you might owe&rdquo; and &ldquo;it is filed
            and archived.&rdquo;
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.title} className="scene-item card">
                <h3
                  className="font-semibold"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontSize: "var(--text-body)",
                  }}
                >
                  {s.title}
                </h3>
                <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                  {s.desc}
                </p>
                <a href={s.href} className="btn-ghost mt-4">
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section
        className="scroll-section"
        style={{
          padding: "var(--space-section) var(--space-gutter)",
          background: "var(--section-e)",
        }}
      >
        <div className="scene-content mx-auto max-w-6xl">
          <h2
            className="font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "var(--text-title)",
            }}
          >
            We know the difference between your sales and Amazon&apos;s.
          </h2>
          <p className="mt-4 max-w-2xl" style={{ color: "var(--muted)" }}>
            Marketplace-aware. Direct Shopify sales, facilitator-remitted
            channels, and payment processors, separated automatically. No
            double-counting.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { label: "Direct Shopify sales", tag: "Yours to file" },
              { label: "Amazon · Walmart · Etsy", tag: "Facilitator remits" },
              { label: "TikTok Shop · Stripe · PayPal", tag: "Separated automatically" },
            ].map((row) => (
              <div key={row.label} className="scene-item card">
                <p className="font-semibold">{row.label}</p>
                <p
                  className="mt-2 text-sm font-medium"
                  style={{ color: "var(--teal)" }}
                >
                  {row.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section
        className="scroll-section"
        style={{
          padding: "var(--space-section) var(--space-gutter)",
          background: "var(--mist)",
        }}
      >
        <div className="scene-content mx-auto max-w-6xl text-center">
          <h2
            className="font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "var(--text-title)",
            }}
          >
            Built for the day someone checks your work.
          </h2>
          <p className="mx-auto mt-4 max-w-xl" style={{ color: "var(--muted)" }}>
            Used by Shopify brands doing seven and eight figures across multiple
            states.
          </p>
          <div
            className="scene-item mx-auto mt-10 flex h-24 max-w-lg items-center justify-center rounded-2xl text-sm"
            style={{ background: "#fff", color: "var(--muted)" }}
          >
            [ Customer logos, pending permission ]
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="scroll-section"
        style={{
          padding: "var(--space-section) var(--space-gutter)",
          background: "var(--mint)",
        }}
      >
        <div className="scene-content mx-auto max-w-6xl text-center">
          <h2
            className="font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "var(--text-display)",
            }}
          >
            Flat fee per state. No surprise bills in Q4.
          </h2>
          <a href="#pricing-detail" className="btn-primary mt-8">
            See pricing →
          </a>
        </div>
      </section>

      {/* Nexus Study CTA */}
      <section
        id="nexus-study"
        className="scroll-section relative overflow-hidden"
        style={{
          padding: "var(--space-section) var(--space-gutter)",
          background: "var(--teal)",
          color: "#fff",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.15) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="scene-content relative mx-auto max-w-6xl">
          <p
            className="font-semibold uppercase tracking-widest text-white/70"
            style={{ fontSize: "var(--text-small)" }}
          >
            Find out where you stand. It is free.
          </p>
          <h2
            className="mt-3 font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "var(--text-display)",
            }}
          >
            Find out where you owe sales tax. Free.
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="scene-item rounded-2xl border-2 border-dashed border-white/30 p-10 text-center">
              <p className="text-lg font-medium">Drag your CSV here, or browse</p>
              <p className="mt-2 text-sm text-white/70">
                One export of your sales by state from Shopify. That is the whole
                ask.
              </p>
              <button type="button" className="btn-primary mt-6 bg-white text-teal hover:bg-white/90">
                Upload your CSV
              </button>
            </div>

            <div>
              <h3 className="font-semibold">What you get in the report</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                <li className="scene-item">
                  States where you are approaching a threshold and should watch.
                </li>
                <li className="scene-item">
                  An estimate of your current exposure, the tax you may already
                  owe.
                </li>
                <li className="scene-item">
                  A clear next step for each state: register now, monitor, or no
                  action.
                </li>
              </ul>
              <p className="mt-6 text-sm text-white/70">
                Not sure which export to pull?{" "}
                <a href="#contact" className="font-semibold text-white underline">
                  Book a 15-minute call.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="scroll-section"
        style={{
          padding: "var(--space-section) var(--space-gutter)",
          background: "var(--section-d)",
          color: "#fff",
        }}
      >
        <div className="scene-content mx-auto max-w-6xl">
          <h2
            className="font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "var(--text-display)",
            }}
          >
            How Tassetta works
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.num} className="scene-item">
                <span
                  className="font-mono text-sm font-bold"
                  style={{ color: "var(--mint)" }}
                >
                  {step.num}
                </span>
                <h3
                  className="mt-3 font-semibold"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontSize: "var(--text-body)",
                  }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-white/65">{step.desc}</p>
              </article>
            ))}
          </div>

          <p className="scene-item mt-12 max-w-2xl text-white/70">
            The one step we keep human on purpose is the filing itself. Every
            return is reviewed by a person before it goes to the state.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section
        id="about"
        className="scroll-section"
        style={{
          padding: "var(--space-section) var(--space-gutter)",
          background: "var(--foam)",
        }}
      >
        <div className="scene-content mx-auto max-w-6xl">
          <h2
            className="font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "var(--text-title)",
            }}
          >
            Who Tassetta is for
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="scene-item card">
              <h3 className="font-semibold text-teal">You are a fit if</h3>
              <ul className="mt-4 space-y-3 text-sm" style={{ color: "var(--muted)" }}>
                <li>Shopify brands doing meaningful revenue across multiple states</li>
                <li>Multi-channel sellers on Shopify plus Amazon, Walmart, or Etsy</li>
                <li>You want visibility without becoming a sales tax expert</li>
              </ul>
            </div>
            <div className="scene-item card">
              <h3 className="font-semibold" style={{ color: "var(--muted)" }}>
                You are probably not a fit yet if
              </h3>
              <ul className="mt-4 space-y-3 text-sm" style={{ color: "var(--muted)" }}>
                <li>You sell in only one or two states with no growth plans</li>
                <li>You need enterprise ERP integrations today</li>
                <li>You want DIY filing software, not managed compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}