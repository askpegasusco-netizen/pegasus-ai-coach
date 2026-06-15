import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { PegasusLogo } from "@/components/PegasusLogo";

export const Route = createFileRoute("/waitlist")({
  head: () => ({
    meta: [
      { title: "Join the Pegasus Waitlist — #PegasusFam" },
      { name: "description", content: "Be among the first 200 users to unlock a 2-month free trial of Pegasus, your AI BFF coach." },
      { property: "og:title", content: "Join the Pegasus Waitlist" },
      { property: "og:description", content: "First 200 users get a 2-month trial. Refer a friend, both get a limited discount." },
    ],
  }),
  component: Waitlist,
});

function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    coach: "",
    referral: "",
  });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  return (
    <div className="min-h-screen grain-bg text-foreground">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <PegasusLogo />
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back home
        </Link>
      </header>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-10 md:grid-cols-[1fr_1.1fr] md:py-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Founding 200 · 2-month free trial
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Join <span className="italic text-primary">#PegasusFam</span> before everyone else.
          </h1>
          <p className="mt-5 text-base text-muted-foreground">
            The first 200 sign-ups get a 2-month free trial of the full coach.
            Refer a friend — both of you get a limited launch discount. Pega
            doesn't do waitlist FOMO. Pega does early-access love. 🔥
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink">
            {[
              "Priority access to the closed beta",
              "Lock in founder pricing forever",
              "Help shape your AI BFF's tone & coaches",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-xl md:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h2 className="mt-4 font-display text-2xl text-ink">You're in, {form.name || "fam"}!</h2>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                We'll DM you the moment your spot opens. Share your referral
                link to bump up the line and unlock the duo discount.
              </p>
              <Link
                to="/onboarding"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Preview the app while you wait
              </Link>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <h2 className="font-display text-2xl text-ink">Reserve your spot</h2>
              <Field label="Full name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="input"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="input"
                  placeholder="you@vibes.com"
                />
              </Field>
              <Field label="Phone (optional)">
                <input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="input"
                  placeholder="+1 555 123 4567"
                />
              </Field>
              <Field label="What best describes you?">
                <select
                  value={form.role}
                  onChange={(e) => update("role", e.target.value)}
                  className="input"
                >
                  <option value="">Pick one</option>
                  <option>Gen Z — vibes & validation</option>
                  <option>Millennial — burnout-recovery era</option>
                  <option>Athlete / hybrid trainer</option>
                  <option>Mental-health forward</option>
                  <option>Just curious</option>
                </select>
              </Field>
              <Field label="Dream coach voice">
                <input
                  value={form.coach}
                  onChange={(e) => update("coach", e.target.value)}
                  className="input"
                  placeholder="LeBron, Mom, Goggins, your BFF…"
                />
              </Field>
              <Field label="Referral code (optional)">
                <input
                  value={form.referral}
                  onChange={(e) => update("referral", e.target.value)}
                  className="input"
                  placeholder="PEGAFAM-XXXX"
                />
              </Field>
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Join the Waitlist 🔥
              </button>
              <p className="text-center text-[11px] text-muted-foreground">
                By joining you agree to receive launch updates. No spam — Pega's word.
              </p>
            </form>
          )}
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--background));
          padding: 0.65rem 0.9rem;
          font-size: 0.9rem;
          color: hsl(var(--foreground));
          outline: none;
        }
        .input:focus { border-color: hsl(var(--primary)); box-shadow: 0 0 0 3px color-mix(in oklab, hsl(var(--primary)) 20%, transparent); }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}