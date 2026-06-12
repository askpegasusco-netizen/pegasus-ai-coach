import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bell, Calendar, Flame, HeartPulse, Moon, ShieldAlert, Sparkles, Zap } from "lucide-react";
import { useState } from "react";
import { AppShell, Card, Pill } from "@/components/AppShell";
import { VIBES } from "@/lib/pegasus";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Today · Pegasus" }] }),
  component: Dashboard,
});

function Dashboard() {
  const [vibe, setVibe] = useState("badass");
  const greeting = "Good morning, fam.";

  return (
    <AppShell subtitle="Daily Check-in" title={greeting}>
      {/* Coach greeting */}
      <Card className="mb-5 bg-gradient-to-br from-card via-card to-sand">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Pill tone="terracotta">🐍 Coached by Mamba</Pill>
            <p className="mt-3 font-display text-2xl text-ink">
              "Job's not finished. We earn the recovery today."
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              You slept 7h 42m and HRV is up 4ms. Green light to push upper body.
            </p>
          </div>
          <button className="hidden h-10 w-10 items-center justify-center rounded-full bg-secondary md:flex">
            <Bell className="h-4 w-4" />
          </button>
        </div>
      </Card>

      {/* Mood picker */}
      <Card className="mb-5">
        <p className="text-sm font-medium text-ink">How do you feel today?</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {VIBES.map((v) => (
            <button
              key={v.id}
              onClick={() => setVibe(v.id)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                vibe === v.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <span className="mr-1.5">{v.emoji}</span>
              {v.label}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          We'll dial today's intensity to match your energy.
        </p>
      </Card>

      {/* Biometrics row */}
      <div className="mb-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon={HeartPulse} label="HRV" value="68" unit="ms" delta="+4" tone="sage" />
        <Stat icon={Moon} label="Sleep" value="7h 42m" delta="92%" tone="sage" />
        <Stat icon={Flame} label="Strain" value="14.1" delta="moderate" />
        <Stat icon={Zap} label="Panic Index" value="2" delta="stable" tone="sage" />
      </div>

      {/* Today plan + intervention */}
      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Today's Plan</p>
              <h2 className="mt-1 font-display text-2xl text-ink">Wednesday · Day 12 of 28</h2>
            </div>
            <Pill>🔥 Streak 12</Pill>
          </div>
          <div className="mt-5 space-y-3">
            <PlanRow time="07:00" title="Box breathing" sub="4 min · Heart rate prime" tag="Mind" cta="Start" to="/mental" />
            <PlanRow time="07:30" title="Mamba Push · Upper" sub="35 min · 6 exercises · video form-check" tag="Move" cta="Start" to="/fitness" />
            <PlanRow time="12:30" title="Pilates @ Solidcore" sub="ClassPass · booked · 0.4 mi" tag="Book" cta="Open" to="/ecosystem" />
            <PlanRow time="19:00" title="Journaling prompt" sub="3 min · Wind-down" tag="Mind" cta="Open" to="/mental" />
            <PlanRow time="22:30" title="Sleep wind-down" sub="Auto-dim Calm · Eight Sleep cool to 64°F" tag="Sleep" cta="Auto" />
          </div>
        </Card>

        <div className="space-y-5">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Predicted outcome</p>
            <h3 className="mt-1 font-display text-xl text-ink">By Sunday</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              −0.6% body fat · +6% HRV · sleep score 89 · stress 3.1
            </p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-[62%] bg-primary" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">62% of weekly goal</p>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-destructive/15 p-2 text-destructive">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-display text-base text-ink">Panic-button armed</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Auto-launches a calming protocol the moment your wearable detects a stress spike.
                </p>
                <Link
                  to="/panic"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-destructive px-3 py-1.5 text-xs font-semibold text-destructive-foreground"
                >
                  Test it now <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Surprise Box</p>
            </div>
            <h3 className="mt-2 font-display text-lg text-ink">Free ClassPass credit ✨</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Routine getting predictable? Try a hot yoga class on us this week.
            </p>
            <button className="mt-3 rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-cream">
              Claim
            </button>
          </Card>
        </div>
      </div>

      {/* Calendar peek */}
      <Card className="mt-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <h3 className="font-display text-lg text-ink">This week</h3>
          </div>
          <Link to="/calendar" className="text-xs font-medium text-primary">Open calendar →</Link>
        </div>
        <div className="mt-4 grid grid-cols-7 gap-2">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => {
            const done = i < 2;
            const today = i === 2;
            return (
              <div
                key={i}
                className={`rounded-xl border p-3 text-center text-xs ${
                  today
                    ? "border-primary bg-primary text-primary-foreground"
                    : done
                      ? "border-sage/40 bg-sage/10 text-ink"
                      : "border-border bg-card text-muted-foreground"
                }`}
              >
                <div className="font-semibold">{d}</div>
                <div className="mt-1 text-[10px] opacity-80">{done ? "✓" : today ? "now" : "—"}</div>
              </div>
            );
          })}
        </div>
      </Card>
    </AppShell>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  unit,
  delta,
  tone = "sand",
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  unit?: string;
  delta?: string;
  tone?: "sand" | "sage";
}) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <Icon className="h-4 w-4 text-primary" />
        <Pill tone={tone}>{delta}</Pill>
      </div>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-2xl text-ink">
        {value}
        {unit && <span className="text-sm text-muted-foreground"> {unit}</span>}
      </p>
    </Card>
  );
}

function PlanRow({
  time,
  title,
  sub,
  tag,
  cta,
  to,
}: {
  time: string;
  title: string;
  sub: string;
  tag: string;
  cta: string;
  to?: string;
}) {
  const body = (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-3 transition hover:border-primary/50">
      <span className="w-12 text-xs font-semibold text-muted-foreground">{time}</span>
      <div className="flex-1">
        <p className="text-sm font-medium text-ink">{title}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
      <Pill tone="terracotta">{tag}</Pill>
      <span className="text-xs font-semibold text-primary">{cta} →</span>
    </div>
  );
  return to ? <Link to={to}>{body}</Link> : body;
}