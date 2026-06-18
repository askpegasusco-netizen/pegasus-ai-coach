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
  "Gym Rat",
  "Aura Farmer",
  "Soft Girl",
  "Zen Master",
  "Rizzmaxxer",
  "Pilates Queen",
  "Fibermaxxer",
  "Sleepmaxxer",
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
    <div className="relative min-h-screen grain-bg text-foreground">
      {/* Tech-grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--ink) 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--ink) 8%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at top, black 40%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -top-40 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "conic-gradient(from 120deg, transparent, color-mix(in oklab, var(--primary) 25%, transparent), transparent)" }}
      />
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <PegasusLogo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#problem" className="hover:text-foreground">Problem</a>
          <a href="#solution" className="hover:text-foreground">Solution</a>
          <a href="#characters" className="hover:text-foreground">Coaches</a>
          <a href="#why" className="hover:text-foreground">Why Pegasus</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
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
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Live · Biometrics streaming
            </span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl">
              Vibe Training with my <VibeRotator />.
              <br />
              <span className="italic">Where One Belief Leads?</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Ask Pegasus what the rizz on your wearable biometrics mean, and actually get
              no-sus fitness and wellness plans 💪
              <br />
              Start Auramaxxing rn with your favorite AI Homie.
              <br />
              Let's go #PegasusFam 🔥
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/onboarding"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 px-6 py-3 text-sm font-bold uppercase tracking-wider text-ink shadow-[0_8px_28px_-8px_oklch(0.75_0.18_55/0.7)] ring-1 ring-amber-300/60 transition hover:scale-[1.03]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Sparkles className="h-4 w-4" /> Start 1-Month Trial
              </Link>
              <Link
                to="/waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
              >
                Join Waitlist <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/community"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                Join #PegaFam Chat
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              *First 200 users get a free 2-month trial. Refer a friend, and get a free trial for friend.
            </p>
          </div>

          {/* hero card */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-clay/50 via-cream to-sand blur-2xl" />
            <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-primary/40 via-transparent to-amber-300/40 opacity-60 blur-sm" />
            <div className="relative rounded-[2rem] border border-border/60 bg-card/80 p-6 shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                  ◐ Live · Coached by your Homie
                </p>
                <Pill>🔥 Streak 12</Pill>
              </div>
              {/* AI insight on mood → plan adaption */}
              <div className="mt-4 rounded-2xl border border-primary/30 bg-primary/5 p-3">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  ✦ Pega Insight · Mood: anxious-ish
                </p>
                <p className="mt-1 text-sm text-ink">
                  Cortisol's spicy today — swapped HIIT → mobility flow + magnesium-rich dinner.
                  We protect the nervous system first, no cap.
                </p>
              </div>
              {/* Mamba-mentality homie box */}
              <div className="mt-3 rounded-2xl border border-amber-300/50 bg-gradient-to-br from-amber-50 to-rose-50 p-3">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                  🐍 Homie Says · Mamba Mode
                </p>
                <p className="mt-1 text-sm italic text-ink">
                  "yo bestie. ur reps for today? not done. ur PR? still waiting. come back rn, we
                  lock in for 12 min — that's it. job's not finished, fam. 🔥"
                </p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <Metric label="HRV" value="68" unit="ms" trend="up" delta="+6%" />
                <Metric label="Sleep" value="92%" trend="up" delta="+4 pts" />
                <Metric label="Stress" value="3.1" unit="/10" trend="down" delta="−18%" />
              </div>
              {/* Tech bio-waveform */}
              <svg viewBox="0 0 300 40" className="mt-4 h-10 w-full text-primary/70" preserveAspectRatio="none" aria-hidden>
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  points="0,20 20,20 28,8 36,32 44,20 80,20 90,12 100,28 110,20 160,20 170,4 180,36 190,20 240,20 250,14 260,26 270,20 300,20"
                />
              </svg>
              <div className="mt-5 rounded-2xl bg-secondary p-4">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">→ Next Action</p>
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
              {/* Weekly prediction */}
              <div className="mt-3 rounded-2xl border border-border bg-card/60 p-3">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    7-Day Prediction
                  </p>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                    On track ↗
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div><p className="text-muted-foreground">Recovery</p><p className="font-semibold text-ink">84 → 89 ▲</p></div>
                  <div><p className="text-muted-foreground">Peace™</p><p className="font-semibold text-ink">7.4 → 8.1 ▲</p></div>
                  <div><p className="text-muted-foreground">Streak</p><p className="font-semibold text-ink">12 → 19 ▲</p></div>
                </div>
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
        {/* Biometric ticker */}
        <div className="mt-14 overflow-hidden rounded-full border border-border bg-card/60 py-2.5 backdrop-blur">
          <div className="flex animate-[marquee_38s_linear_infinite] gap-10 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex shrink-0 items-center gap-10 px-6">
                <span>◉ HRV 68ms</span><span>◉ SpO₂ 98%</span><span>◉ Sleep 7h 42m</span>
                <span>◉ Recovery 84</span><span>◉ Stress 3.1</span><span>◉ VO₂ 47</span>
                <span>◉ Glucose 92</span><span>◉ Peace™ 7.4</span><span>◉ Cardio Reserve 91</span>
                <span>◉ Inflammation 0.8</span><span>◉ Steps 8,412</span><span>◉ Streak 12d</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section id="problem" eyebrow="The Problem" title={"Wearables ≠ change.\nRobotic AI ≠ care."}>
        <div className="grid gap-5 md:grid-cols-4">
          {[
            [
              "73%",
              "of wearable owners abandon the device within 6 months — data without next step.",
              "Endeavour Partners / PwC Health Research Institute, Wearables Adoption Study (2022).",
            ],
            [
              "21%",
              "average dropout in standard digital health interventions vs. 6% in identity-matched coaching.",
              "Nature npj Digital Medicine, Adherence in mHealth Apps (2022).",
            ],
            [
              "2.4×",
              "stronger habit formation when mental + physical health are coached in the same loop.",
              "American Journal of Lifestyle Medicine, Integrated Wellness Outcomes (2023).",
            ],
            [
              "0",
              "apps today combine Gen Z persona-coaching, mental & physical health dual plans, and anti-generic-ass fitness drops. that's the gap, bestie.",
              "Pegasus competitive teardown, 2026.",
            ],
          ].map(([n, l, src]) => (
            <div key={n} className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-5 transition hover:border-primary/40">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="font-display text-3xl text-primary">{n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l}</p>
              <p className="mt-3 font-mono text-[10px] italic text-muted-foreground/80">{src}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Solution */}
      <Section id="solution" eyebrow="The Solution" title="One app. Biometrics → action. In your voice.">
        <div className="grid gap-5 md:grid-cols-3">
          <Pillar icon={Watch} title="Wearables that actually mean smth">
            Connect your Apple Watch, Samsung Galaxy Watch, Oura, WHOOP, AmazFit, Fitbit, Eight
            Sleep, Muse, Meta Ray-Bans — all fused into one biometric story your AI homie acts
            on, no spreadsheet energy.
          </Pillar>
          <Pillar icon={Brain} title="Mental health, built in">
            Daily mood check-ins, peace score, and a panic button that auto-launches a
            calming protocol the second your stress spikes.
          </Pillar>
          <Pillar icon={HeartPulse} title="Persona-coded homie coach">
            Pick your vibe — Gym Rat, Aura Farmer, Soft Girl, Zen Master, Rizzmaxxer,
            Pilates Queen, Fibermaxxer, Sleepmaxxer — speak to your homie and actually get
            your shi done. nothing feels like a home win. 🏠
          </Pillar>
          <Pillar icon={Activity} title="Action plan with predicted outcomes">
            Weekly, monthly, quarterly plans with the predicted result — no more "what
            does 6.8 HRV even mean?"
          </Pillar>
          <Pillar icon={Trophy} title="PegaFam community + battles">
            Join the Rizz Battles to claim your W, then share your Aura Index Card, Rizz W/L
            Card, and Slay Streak Card on IG, Snap, and text. Receipts only. 🏆
          </Pillar>
        </div>
      </Section>

      {/* Characters */}
      <Section id="characters" eyebrow="Coaches" title="Choose Your Homie, Serving Main Character Energy ✨">
        <div className="grid gap-4 md:grid-cols-3">
          {CHARACTERS.map((c) => (
            <div key={c.id} className="group relative rounded-2xl border border-border bg-card/80 p-5 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
              <div className={`relative h-24 overflow-hidden rounded-xl bg-gradient-to-br ${c.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_60%)]" />
                <span className="absolute bottom-2 right-3 font-mono text-[10px] uppercase tracking-widest text-ink/60">v.{c.id}</span>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">{c.tag}</p>
              <h3 className="mt-1 font-display text-xl text-ink">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.vibe}</p>
              <p className="mt-3 rounded-xl bg-secondary p-3 text-sm italic text-ink">"{c.sample}"</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comp landscape */}
      <Section id="why" eyebrow="Why Pegasus Wins" title="What Fitness Apps and the rest don't have.">
        <div className="overflow-x-auto rounded-2xl border border-border bg-card/80 backdrop-blur">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-secondary text-left font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Pain point → Solved?</th>
                <th className="px-4 py-3 text-center text-primary">Pegasus</th>
                <th className="px-4 py-3 text-center">Fitness Apps</th>
                <th className="px-4 py-3 text-center">MyFitnessPal</th>
                <th className="px-4 py-3 text-center">Headspace</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Biometric data → actual next action", "✓", "—", "—", "—"],
                ["Speaks Gen Z / Millennial slang (no robotic AI)", "✓", "—", "—", "—"],
                ["Mental + physical health in ONE loop", "✓", "—", "—", "—"],
                ["Panic-button auto-intervention", "✓", "—", "—", "—"],
                ["Predicted outcomes (wk / mo / qtr)", "✓", "—", "—", "—"],
                ["Spotify character playlist sync", "✓", "—", "—", "—"],
                ["Smart glasses application", "✓", "—", "—", "—"],
                ["HD video form-check", "✓", "—", "✓", "—"],
                ["Shareable community battles + wraps", "✓", "—", "—", "—"],
              ].map(([f, p, a, b, c]) => (
                <tr key={f} className="border-t border-border">
                  <td className="px-4 py-2.5 font-medium text-ink">{f}</td>
                  <td className="px-4 py-2.5 text-center font-semibold text-primary">{p}</td>
                  <td className="px-4 py-2.5 text-center text-muted-foreground">{a}</td>
                  <td className="px-4 py-2.5 text-center text-muted-foreground">{b}</td>
                  <td className="px-4 py-2.5 text-center text-muted-foreground">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" eyebrow="Pricing" title="Feel Free to Start with Homie, Go Down The Road with Homie too 🔥">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["Free", "—", "Basic tracking · 1-mo trial"],
            ["Monthly", "$12.99", "Full coaching + integrations"],
            ["Quarterly", "$35.99", "Save ~8% + bonus features"],
            ["Annual", "$115.99", "Best value + community perks"],
          ].map(([name, price, desc], i) => (
            <div
              key={name}
              className={`relative overflow-hidden rounded-2xl border p-6 ${i === 3 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card/80"}`}
            >
              {i === 3 && (
                <span className="absolute right-3 top-3 rounded-full bg-amber-300 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink">Best</span>
              )}
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] opacity-80">{name}</p>
              <p className="mt-2 font-display text-4xl">{price}</p>
              <p className="mt-2 text-sm opacity-80">{desc}</p>
            </div>
          ))}
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
        <h2 className="mt-2 whitespace-pre-line font-display text-4xl font-semibold text-ink md:text-5xl">{title}</h2>
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

function Metric({
  label,
  value,
  unit,
  trend,
  delta,
}: {
  label: string;
  value: string;
  unit?: string;
  trend?: "up" | "down" | "flat";
  delta?: string;
}) {
  const trendColor =
    trend === "up"
      ? "text-emerald-600"
      : trend === "down"
        ? "text-rose-600"
        : "text-muted-foreground";
  const arrow = trend === "up" ? "▲" : trend === "down" ? "▼" : "→";
  return (
    <div className="rounded-xl bg-secondary px-2 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-lg text-ink">
        {value}
        {unit && <span className="text-xs text-muted-foreground"> {unit}</span>}
      </p>
      {delta && (
        <p className={`mt-0.5 text-[10px] font-semibold ${trendColor}`}>
          {arrow} {delta}
        </p>
      )}
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
