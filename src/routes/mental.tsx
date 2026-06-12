import { createFileRoute } from "@tanstack/react-router";
import { Brain, Heart, Wind } from "lucide-react";
import { useEffect, useState } from "react";
import { AppShell, Card, Pill } from "@/components/AppShell";

export const Route = createFileRoute("/mental")({
  head: () => ({ meta: [{ title: "Mind · Pegasus" }] }),
  component: Mental,
});

const SESSIONS = [
  { id: "box", name: "Box Breathing", desc: "4-4-4-4 · regulate stress in 2 min", len: 2 },
  { id: "478", name: "4-7-8 Breath", desc: "Pre-sleep wind-down", len: 4 },
  { id: "scan", name: "Body Scan", desc: "Tension release, top to toe", len: 10 },
  { id: "loving", name: "Loving Kindness", desc: "Soft heart, anxious mind", len: 8 },
  { id: "deep", name: "Deep Dive", desc: "20-min open awareness", len: 20 },
];

const SOUNDS = ["Rain", "White noise", "Forest", "Ocean", "Brown noise", "Off"];

function Mental() {
  const [active, setActive] = useState<string | null>(null);
  const [sound, setSound] = useState("Rain");
  const [mood, setMood] = useState(5);
  const [journal, setJournal] = useState("");
  const [post, setPost] = useState(false);

  const session = SESSIONS.find((s) => s.id === active);

  return (
    <AppShell subtitle="Phase 5 · Mental wellness" title="Steady the mind">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          {!active && (
            <Card>
              <Pill tone="terracotta">AI suggested</Pill>
              <h2 className="mt-3 font-display text-2xl text-ink">
                Stress at 6.2/10 — let's do Box Breathing
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Cortisol-aware. Takes 2 minutes. HRV will climb ~6ms after.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {SESSIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setActive(s.id); setPost(false); }}
                    className="rounded-2xl border border-border bg-card p-4 text-left transition hover:border-primary/50"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-display text-lg text-ink">{s.name}</p>
                      <Pill tone="sand">{s.len} min</Pill>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </button>
                ))}
              </div>
            </Card>
          )}

          {active && !post && (
            <Card>
              <Pill tone="terracotta">In session · {session!.name}</Pill>
              <BreathPacer />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Soundscape: {sound}
              </p>
              <div className="mt-6 flex justify-center gap-2">
                <button
                  onClick={() => setPost(true)}
                  className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
                >
                  End session
                </button>
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full border border-border bg-card px-5 py-2 text-sm"
                >
                  Cancel
                </button>
              </div>
            </Card>
          )}

          {post && (
            <Card>
              <Pill tone="sage">Session reflection</Pill>
              <h3 className="mt-3 font-display text-xl text-ink">How's the heart now?</h3>
              <input
                type="range"
                min={1}
                max={10}
                value={mood}
                onChange={(e) => setMood(Number(e.target.value))}
                className="mt-3 w-full accent-[color:var(--primary)]"
              />
              <p className="text-xs text-muted-foreground">Mood: {mood}/10</p>
              <div className="mt-5 rounded-2xl bg-secondary p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Why this works</p>
                <p className="mt-1 text-sm text-ink">
                  4-second cycles activate the parasympathetic system. After 4 rounds, vagal tone
                  rises and cortisol drops. You just earned a +3 Peace Score.
                </p>
              </div>
              <p className="mt-5 text-sm font-medium text-ink">Quick journal · what's loud right now?</p>
              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                rows={4}
                placeholder="Type, or hit mic. Stays private."
                className="mt-2 w-full rounded-xl border border-input bg-card p-3 text-sm outline-none focus:border-primary"
              />
              <button
                onClick={() => { setActive(null); setPost(false); setJournal(""); }}
                className="mt-4 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
              >
                Save & close
              </button>
            </Card>
          )}
        </div>

        <div className="space-y-5">
          <Card>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary" />
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Peace Score</p>
            </div>
            <p className="mt-2 font-display text-5xl text-ink">74</p>
            <p className="text-xs text-muted-foreground">+8 this week · trending up 🌱</p>
            <div className="mt-4 flex h-12 items-end gap-1">
              {[40, 52, 48, 60, 66, 70, 74].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-primary/70"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-primary" />
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Soundscape</p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {SOUNDS.map((s) => (
                <button
                  key={s}
                  onClick={() => setSound(s)}
                  className={`rounded-full border px-3 py-1.5 text-xs ${
                    sound === s
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-primary" />
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Today's prompt</p>
            </div>
            <p className="mt-2 text-sm text-ink">
              Name one thing today that's bigger than your worry. Write 2 sentences.
            </p>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function BreathPacer() {
  const [size, setSize] = useState(140);
  useEffect(() => {
    let big = false;
    const id = setInterval(() => {
      big = !big;
      setSize(big ? 240 : 140);
    }, 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="my-8 flex h-72 items-center justify-center">
      <div
        className="flex items-center justify-center rounded-full bg-primary/15 transition-all duration-[4000ms] ease-in-out"
        style={{ width: size, height: size }}
      >
        <div className="rounded-full bg-primary/30 p-8">
          <div className="h-14 w-14 rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}