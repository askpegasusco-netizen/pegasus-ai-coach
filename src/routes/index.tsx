import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Brain,
  HeartPulse,
  ShieldAlert,
  Sparkles,
  Trophy,
  Watch,
} from "lucide-react";
import { PegasusLogo } from "@/components/PegasusLogo";
import { CHARACTERS } from "@/lib/pegasus";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pegasus — Vibe Training with your role model. Change Your Life in Just 3 Seconds." },
      { name: "description", content: "Pegasus is the AI BFF coach that turns biometrics into action — character-coached fitness, automated mental-health intervention, and one-tap ecosystem booking." },
      { property: "og:title", content: "Pegasus — Your AI BFF Coach, head to toes" },
      { property: "og:description", content: "From motivation to action plan, in your role model's voice." },
    ],
  }),
  component: Index,
});

const VIBE_NAMES = [
  "Kobe Bryant",
  "CR7",
  "Taylor Swift",
  "Serena Williams",
  "Simone Biles",
  "Batman",
  "Mom",
  "Girls' Generation",
];

function VibeRotator() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % VIBE_NAMES.length), 1600);
    return () => clearInterval(t);
  }, [paused]);
  return (
    <span
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onClick={() => setI((x) => (x + 1) % VIBE_NAMES.length)}
      className="inline-block cursor-pointer italic text-primary transition-all duration-300 hover:scale-105"
      title="Hover to pause · click to swap"
    >
      {VIBE_NAMES[i]}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen grain-bg text-foreground">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <PegasusLogo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#problem" className="hover:text-foreground">Problem</a>
          <a href="#solution" className="hover:text-foreground">Solution</a>
          <a href="#characters" className="hover:text-foreground">Coaches</a>
          <a href="#market" className="hover:text-foreground">Market</a>
          <a href="#ask" className="hover:text-foreground">The Ask</a>
        </nav>
        <Link
          to="/onboarding"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
        >
          Open app <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:pt-20">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Pre-seed · $550K · MVP in Q3 2026
            </span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl">
              Vibe Training with <VibeRotator />.
              <br />
              Change Your Life in <span className="italic">Just 3 Seconds</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Ask Pegasus for WTF your wearable biometrics mean, and actually get shi done in
              your pace for both fitness and mental health 💪. Start Vibe Training rn with your
              own customized AI BFF Coach. Let's go #PegasusFam 🔥
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/onboarding"
                className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-sand"
              >
                Start the 1-month trial <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
              >
                Join Waitlist <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                Preview the app
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              *First 200 users get a free 2-month trial. Refer a friend, and get a free trial for friend.
            </p>
          </div>

          {/* hero card */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-clay/50 via-cream to-sand blur-2xl" />
            <div className="relative rounded-[2rem] border border-border bg-card/90 p-6 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Today · Coached by Mamba
                </p>
                <Pill>🔥 Streak 12</Pill>
              </div>
              <p className="mt-4 font-display text-2xl text-ink">
                "Job's not finished. One more rep. Then one more."
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <Metric label="HRV" value="68" unit="ms" />
                <Metric label="Sleep" value="7h 42m" />
                <Metric label="Stress" value="3.1" unit="/10" />
              </div>
              <div className="mt-5 rounded-2xl bg-secondary p-4">
                <p className="text-xs font-semibold text-muted-foreground">NEXT ACTION</p>
                <p className="mt-1 text-sm font-medium text-ink">
                  35-min Mamba Push · Upper body + 4-min box breathing
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-ink">Diet:</span> Greek yogurt + berries · grilled
                  chicken bowl · 1 square dark chocolate (80/20 buffer)
                </p>
                <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">
                  Start <ArrowRight className="h-3 w-3" />
                </button>
              </div>
              <div className="mt-3 flex items-center justify-between rounded-xl border border-destructive/30 bg-destructive/5 px-3 py-2">
                <span className="flex items-center gap-2 text-xs font-semibold text-destructive">
                  <ShieldAlert className="h-3.5 w-3.5" /> Panic index 2 · stable
                </span>
                <span className="text-[10px] text-muted-foreground">Auto-launch ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section id="problem" eyebrow="The Problem" title="Health apps exist. Real change doesn't.">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["80%+", "of wearable users get data but no next step."],
            ["63%", "of users disengage after one bad robotic AI chat."],
            ["0", "apps that have fully customized AI coach and automate buying based on your life habits."],
            ["3.9×", "higher 6-month adherence when coaching is personalized to identity and tone (Journal of Medical Internet Research, 2023)."],
          ].map(([n, l]) => (
            <div key={n} className="rounded-2xl border border-border bg-card/70 p-5">
              <p className="font-display text-3xl text-primary">{n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Solution */}
      <Section id="solution" eyebrow="The Solution" title="One app. Biometrics → action. In your voice.">
        <div className="grid gap-5 md:grid-cols-3">
          <Pillar icon={Watch} title="Wearables that mean something">
            Apple Watch, Oura, WHOOP, Eight Sleep, Muse, Meta Ray-Bans — all fused into one
            biometric story your AI coach actually acts on.
          </Pillar>
          <Pillar icon={Brain} title="Mental health, built in">
            Daily mood check-ins, peace score, and a panic button that auto-launches a
            calming protocol the second your stress spikes.
          </Pillar>
          <Pillar icon={HeartPulse} title="Role-model character coach">
            Pick Mamba, Bron, CR7, Kendall Roy — the AI speaks in their voice, with the
            memes and GIFs Gen Z and Millennials actually respond to.
          </Pillar>
          <Pillar icon={Activity} title="Action plan with predicted outcomes">
            Weekly, monthly, quarterly plans with the predicted result — no more "what
            does 6.8 HRV even mean?"
          </Pillar>
          <Pillar icon={Trophy} title="PegaFam community + battles">
            Friendly battles, leaderboards, Spotify-Wrapped-style shareable milestones.
            Surprise boxes break the routine so you keep coming back.
          </Pillar>
          <Pillar icon={Sparkles} title="Ecosystem booking, one tap">
            ClassPass, Mindbody, Zocdoc, BetterHelp, Calm, Headspace, Timeleft, clinical
            trials — booked from inside one AI search. Literally from head to toes, you got
            you covered. 😉
          </Pillar>
        </div>
      </Section>

      {/* Characters */}
      <Section id="characters" eyebrow="Coaches" title="Pick the voice you actually want in your head.">
        <div className="grid gap-4 md:grid-cols-3">
          {CHARACTERS.map((c) => (
            <div key={c.id} className="rounded-2xl border border-border bg-card/80 p-5">
              <div className={`h-24 rounded-xl bg-gradient-to-br ${c.accent}`} />
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">{c.tag}</p>
              <h3 className="mt-1 font-display text-xl text-ink">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.vibe}</p>
              <p className="mt-3 rounded-xl bg-secondary p-3 text-sm italic text-ink">"{c.sample}"</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Market */}
      <Section id="market" eyebrow="Market" title="A fast-growing, untapped slice of digital health.">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["$10B", "TAM · US smart-watch & smart-glasses users", "CAGR +12% · 2026–2035", "Source: Grand View Research, Smart Wearables Market Report (2024)"],
            ["$3.5B", "SAM · US digital health coaching", "CAGR +10% · 2025–2030", "Source: McKinsey & Co., The Future of Digital Health Coaching (2023)"],
            ["$35M", "SOM · 1% conversion of SAM", "Initial revenue target", "Source: Deloitte Center for Health Solutions, Consumer Health Survey (2024)"],
          ].map(([k, t, s]) => (
            <div key={k} className="rounded-2xl border border-border bg-card/80 p-6">
              <p className="font-display text-5xl text-primary">{k}</p>
              <p className="mt-3 font-medium text-ink">{t}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s}</p>
              <p className="mt-2 text-[10px] italic text-muted-foreground">{(arguments as never) && (s as string).length ? "" : ""}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comp landscape */}
      <Section eyebrow="Why Pegasus Wins" title="What Nori AI and the rest don't have.">
        <div className="overflow-hidden rounded-2xl border border-border bg-card/80">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3 text-center">Nori AI</th>
                <th className="px-4 py-3 text-center">MyFitnessPal</th>
                <th className="px-4 py-3 text-center">Headspace</th>
                <th className="px-4 py-3 text-center text-primary">Pegasus</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Mental health coach", "—", "—", "✓", "✓"],
                ["Character-tone AI (LeBron, Kobe…)", "—", "—", "—", "✓"],
                ["Panic auto-intervention", "—", "—", "—", "✓"],
                ["Predicted outcomes (wk/mo/qtr)", "—", "—", "—", "✓"],
                ["Spotify character playlist sync", "—", "—", "—", "✓"],
                ["Smart glasses (Meta) integration", "—", "—", "—", "✓"],
                ["HD video form-check", "—", "✓", "—", "✓"],
                ["Ecosystem booking (ClassPass, Zocdoc…)", "—", "—", "—", "✓"],
                ["Community battles + shareable wraps", "—", "—", "—", "✓"],
                ["Surprise-box anti-boredom loop", "—", "—", "—", "✓"],
              ].map(([f, a, b, c, d]) => (
                <tr key={f} className="border-t border-border">
                  <td className="px-4 py-2.5 font-medium text-ink">{f}</td>
                  <td className="px-4 py-2.5 text-center text-muted-foreground">{a}</td>
                  <td className="px-4 py-2.5 text-center text-muted-foreground">{b}</td>
                  <td className="px-4 py-2.5 text-center text-muted-foreground">{c}</td>
                  <td className="px-4 py-2.5 text-center font-semibold text-primary">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Pricing */}
      <Section eyebrow="Pricing" title="Free to start. Pay when the habit sticks.">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["Free", "—", "Basic tracking · 1-mo trial"],
            ["Monthly", "$9.99", "Full coaching + integrations"],
            ["Quarterly", "$25.99", "Save ~13% + bonus features"],
            ["Annual", "$99.99", "Best value + community perks"],
          ].map(([name, price, desc], i) => (
            <div
              key={name}
              className={`rounded-2xl border p-6 ${i === 3 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card/80"}`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider opacity-80">{name}</p>
              <p className="mt-2 font-display text-4xl">{price}</p>
              <p className="mt-2 text-sm opacity-80">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Ask */}
      <Section id="ask" eyebrow="The Ask" title="$550K Pre-Seed · 18 months to PMF.">
        <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-border bg-card/80 p-6">
            <h3 className="font-display text-xl text-ink">Use of funds</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ["Product Dev", "45%"],
                ["Marketing & Paid Users", "30%"],
                ["App Features", "17%"],
                ["Operations", "8%"],
              ].map(([k, v]) => (
                <li key={k}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-ink">{k}</span>
                    <span className="text-muted-foreground">{v}</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full bg-primary" style={{ width: v }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-ink p-6 text-cream">
            <p className="text-xs font-semibold uppercase tracking-wider text-clay">Team & Advisors</p>
            <p className="mt-3 font-display text-2xl">
              ex-Meta · ex-IBM · ex-Intel · ex-Micron · 3× founders (1 exit) · Head of Strategy, Two Hands VC
            </p>
            <Link
              to="/onboarding"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Try the prototype <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <footer className="mx-auto max-w-7xl border-t border-border px-6 py-10 text-xs text-muted-foreground">
        © Pegasus Health · One app, head to toes. Not medical advice.
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        <h2 className="mt-2 font-display text-4xl font-semibold text-ink md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Pillar({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/80 p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-lg text-ink">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

function Metric({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return (
    <div className="rounded-xl bg-secondary px-2 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-lg text-ink">
        {value}
        {unit && <span className="text-xs text-muted-foreground"> {unit}</span>}
      </p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-ink">
      {children}
    </span>
  );
}
