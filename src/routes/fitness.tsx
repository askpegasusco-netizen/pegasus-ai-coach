import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Dumbbell, Play, RotateCcw, SkipForward, Timer } from "lucide-react";
import { useEffect, useState } from "react";
import { AppShell, Card, Pill } from "@/components/AppShell";

export const Route = createFileRoute("/fitness")({
  head: () => ({ meta: [{ title: "Move · Pegasus" }] }),
  component: Fitness,
});

const WORKOUTS = [
  { id: "mamba", name: "Mamba Push · Upper", time: 35, kind: "Strength", equip: "Dumbbells", why: "HRV green, sleep solid — push day approved." },
  { id: "hiit", name: "CR7 Sprint Pyramid", time: 25, kind: "HIIT", equip: "Bodyweight", why: "Boost VO2 + burn 320 kcal." },
  { id: "yoga", name: "Z's Slow Flow", time: 30, kind: "Yoga", equip: "Mat", why: "Calm nervous system, low strain." },
  { id: "mobility", name: "20-min Mobility Reset", time: 20, kind: "Recovery", equip: "None", why: "You're tired — protect tomorrow." },
];

const EXERCISES = [
  { name: "Dynamic warm-up", reps: "4 min" },
  { name: "Incline DB press", reps: "4 × 8" },
  { name: "Pull-ups", reps: "4 × max" },
  { name: "Seated shoulder press", reps: "3 × 10" },
  { name: "Cable row", reps: "3 × 12" },
  { name: "Tricep pushdown", reps: "3 × 12" },
  { name: "Bicep curls", reps: "3 × 12" },
  { name: "Cool-down stretch", reps: "5 min" },
];

function Fitness() {
  const [active, setActive] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [equip, setEquip] = useState<string[]>(["Dumbbells", "Bodyweight", "Mat"]);
  const [secs, setSecs] = useState(0);
  const [running, setRunning] = useState(false);
  const [rpe, setRpe] = useState(7);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const visible = WORKOUTS.filter((w) => equip.includes(w.equip) || w.equip === "None");

  if (done) {
    return (
      <AppShell subtitle="Workout complete" title="Job's finished. ✓">
        <Card>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-sage" />
            <p className="font-display text-xl text-ink">
              You moved for {Math.floor(secs / 60)}:{String(secs % 60).padStart(2, "0")}
            </p>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <Mini label="Calories" value="412" />
            <Mini label="Avg HR" value="142" unit="bpm" />
            <Mini label="Strain" value="14.6" />
          </div>
          <div className="mt-6">
            <p className="text-sm font-medium text-ink">Rate today's effort (RPE)</p>
            <input
              type="range"
              min={1}
              max={10}
              value={rpe}
              onChange={(e) => setRpe(Number(e.target.value))}
              className="mt-2 w-full accent-[color:var(--primary)]"
            />
            <p className="text-xs text-muted-foreground">{rpe}/10 — coach will tune tomorrow's plan.</p>
          </div>
          <div className="mt-6">
            <p className="text-sm font-medium text-ink">Any localized pain or fatigue?</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["None", "Lower back", "Knees", "Shoulders", "Just sore"].map((t) => (
                <button key={t} className="rounded-full border border-border bg-card px-3 py-1 text-xs">{t}</button>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-2xl bg-secondary p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Coach insight</p>
            <p className="mt-1 text-sm text-ink">
              Push days at RPE 7 + HRV recovery {">"}60ms typically yield +2.1% strength in 4 weeks. You're on pace.
            </p>
          </div>
          <button
            onClick={() => { setDone(false); setActive(null); setStep(0); setSecs(0); }}
            className="mt-6 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
          >
            Back to workouts
          </button>
        </Card>
      </AppShell>
    );
  }

  if (active) {
    const ex = EXERCISES[step];
    return (
      <AppShell subtitle="Now playing" title={WORKOUTS.find((w) => w.id === active)!.name}>
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Pill tone="terracotta">Step {step + 1} of {EXERCISES.length}</Pill>
            <div className="flex items-center gap-1 font-display text-2xl text-ink">
              <Timer className="h-5 w-5 text-primary" />
              {String(Math.floor(secs / 60)).padStart(2, "0")}:{String(secs % 60).padStart(2, "0")}
            </div>
          </div>
          <div className="mt-6 aspect-video rounded-2xl bg-gradient-to-br from-ink to-clay text-cream">
            <div className="flex h-full flex-col items-center justify-center gap-2">
              <Play className="h-10 w-10" />
              <p className="font-display text-2xl">{ex.name}</p>
              <p className="text-sm opacity-80">{ex.reps}</p>
              <p className="mt-2 rounded-full bg-cream/15 px-3 py-1 text-xs">HD form-check video</p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              className="rounded-xl border border-border bg-card py-3 text-sm font-medium"
            >
              <RotateCcw className="mr-1 inline h-4 w-4" /> Prev
            </button>
            <button
              onClick={() => setRunning((r) => !r)}
              className="rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground"
            >
              {running ? "Pause" : "Start"}
            </button>
            <button
              onClick={() =>
                step < EXERCISES.length - 1 ? setStep(step + 1) : setDone(true)
              }
              className="rounded-xl border border-border bg-card py-3 text-sm font-medium"
            >
              <SkipForward className="mr-1 inline h-4 w-4" />
              {step < EXERCISES.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
          <button className="mt-3 w-full rounded-xl bg-secondary py-2 text-xs font-medium text-muted-foreground">
            Too hard? Swap to easier version
          </button>

          <div className="mt-6 rounded-2xl bg-secondary p-4 text-sm text-ink">
            <p className="font-medium">🎧 Now playing: Mamba Mix · Spotify</p>
            <p className="text-xs text-muted-foreground">Auto-shuffling your character workout playlist.</p>
          </div>
        </Card>
      </AppShell>
    );
  }

  return (
    <AppShell subtitle="Phase 4 · Fitness flow" title="Pick today's move">
      <Card className="mb-5">
        <p className="text-sm font-medium text-ink">Equipment available</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Dumbbells", "Barbell", "Bodyweight", "Mat", "Resistance bands", "Kettlebell"].map((e) => {
            const on = equip.includes(e);
            return (
              <button
                key={e}
                onClick={() =>
                  setEquip((s) => (on ? s.filter((x) => x !== e) : [...s, e]))
                }
                className={`rounded-full border px-3 py-1.5 text-sm ${
                  on ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
                }`}
              >
                {e}
              </button>
            );
          })}
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {visible.map((w) => (
          <Card key={w.id}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <Pill tone="sand">{w.kind}</Pill>
                <h3 className="mt-2 font-display text-xl text-ink">{w.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.why}</p>
              </div>
              <div className="rounded-xl bg-secondary p-2 text-primary">
                <Dumbbell className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>⏱ {w.time} min · {w.equip}</span>
              <button
                onClick={() => { setActive(w.id); setStep(0); setSecs(0); setRunning(false); }}
                className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground"
              >
                Start
              </button>
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}

function Mini({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return (
    <div className="rounded-xl bg-secondary p-3 text-center">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-xl text-ink">{value}{unit && <span className="text-xs"> {unit}</span>}</p>
    </div>
  );
}