import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { PegasusLogo } from "@/components/PegasusLogo";
import { CHARACTERS } from "@/lib/pegasus";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Welcome to Pegasus — Onboarding" }] }),
  component: Onboarding,
});

const STEPS = [
  "Welcome",
  "Account",
  "About you",
  "Goals",
  "Lifestyle",
  "Coach persona",
  "Wearables",
  "Plan reveal",
];

function Onboarding() {
  const [step, setStep] = useState(0);
  const [focus, setFocus] = useState<string[]>([]);
  const [time, setTime] = useState(30);
  const [stress, setStress] = useState(5);
  const [character, setCharacter] = useState("kobe");
  const navigate = useNavigate();

  const toggle = (v: string) =>
    setFocus((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]));

  const next = () => (step < STEPS.length - 1 ? setStep(step + 1) : navigate({ to: "/dashboard" }));
  const back = () => setStep(Math.max(0, step - 1));

  return (
    <div className="min-h-screen grain-bg">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <Link to="/"><PegasusLogo /></Link>
        <span className="text-xs font-medium text-muted-foreground">
          Step {step + 1} of {STEPS.length} · {STEPS[step]}
        </span>
      </header>
      <div className="mx-auto max-w-3xl px-6">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>
      <main className="mx-auto max-w-3xl px-6 py-10">
        <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-sm backdrop-blur">
          {step === 0 && (
            <Welcome onNext={next} />
          )}
          {step === 1 && (
            <div>
              <H>Create your account</H>
              <P>Continue with one tap. We're HIPAA-aligned and your data is encrypted.</P>
              <div className="mt-6 grid gap-3">
                <SocialBtn label="Continue with Apple" emoji="" />
                <SocialBtn label="Continue with Google" emoji="G" />
                <SocialBtn label="Continue with Email" emoji="@" />
                <SocialBtn label="Continue with Phone" emoji="📱" />
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                By continuing you accept the privacy policy and data consent for health information.
              </p>
            </div>
          )}
          {step === 2 && (
            <div>
              <H>A bit about you</H>
              <P>Used to tailor the plan. Skip anything you don't want to share.</P>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="Age range">
                  <Select options={["Gen Z (18–27)", "Millennial (28–43)", "Gen X (44–59)", "Boomer (60+)"]} />
                </Field>
                <Field label="Gender">
                  <Select options={["Woman", "Man", "Non-binary", "Prefer not to say"]} />
                </Field>
                <Field label="Weight (lb)"><Input placeholder="160" /></Field>
                <Field label="Height"><Input placeholder={`5'10"`} /></Field>
                <Field label="Activity level (Sedentary → Athlete)">
                  <input type="range" min={1} max={5} defaultValue={3} className="w-full accent-[color:var(--primary)]" />
                </Field>
                <Field label="Health restrictions / injuries">
                  <Input placeholder="e.g. low back, runner's knee" />
                </Field>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Optional: snap medical records or import from MyChart later in Profile.
              </p>
            </div>
          )}
          {step === 3 && (
            <div>
              <H>What are you here for?</H>
              <P>Pick all that apply — we'll prioritize them in your plan.</P>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Weight control",
                  "Fitness shape",
                  "Muscle building",
                  "Better sleep",
                  "Stress reduction",
                  "Stronger mind",
                  "Mental resilience",
                  "Beat anxiety",
                  "Train like a pro",
                ].map((g) => (
                  <Chip key={g} active={focus.includes(g)} onClick={() => toggle(g)}>
                    {g}
                  </Chip>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-sm font-medium text-ink">Daily time commitment</p>
                <div className="mt-3 flex gap-2">
                  {[15, 30, 45, 60].map((m) => (
                    <Chip key={m} active={time === m} onClick={() => setTime(m)}>
                      {m} min
                    </Chip>
                  ))}
                </div>
              </div>
              <Field label="Hitting a milestone by (timeline)" className="mt-6">
                <Select options={["2 weeks", "1 month", "3 months", "6 months", "1 year"]} />
              </Field>
            </div>
          )}
          {step === 4 && (
            <div>
              <H>Lifestyle baseline</H>
              <P>Last 7 days — gut answer is fine.</P>
              <div className="mt-6 grid gap-5">
                <Field label="Sleep quality">
                  <input type="range" min={1} max={10} defaultValue={6} className="w-full accent-[color:var(--primary)]" />
                </Field>
                <Field label="Dietary preference">
                  <Select options={["Omnivore", "Vegan", "Vegetarian", "Keto", "Mediterranean", "Pescatarian"]} />
                </Field>
                <Field label={`Stress level: ${stress}/10`}>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={stress}
                    onChange={(e) => setStress(Number(e.target.value))}
                    className="w-full accent-[color:var(--primary)]"
                  />
                </Field>
                <Field label="How's your head right now?">
                  <div className="flex flex-wrap gap-2">
                    {["Steady", "Foggy", "On edge", "Heavy", "Genuinely good"].map((x) => (
                      <Chip key={x}>{x}</Chip>
                    ))}
                  </div>
                </Field>
              </div>
            </div>
          )}
          {step === 5 && (
            <div>
              <H>Who's in your ear?</H>
              <P>The tone, slang, even the GIFs change. You can swap any time.</P>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {CHARACTERS.map((c) => {
                  const active = character === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setCharacter(c.id)}
                      className={`group rounded-2xl border p-4 text-left transition ${
                        active
                          ? "border-primary bg-primary/10"
                          : "border-border bg-card hover:border-primary/50"
                      }`}
                    >
                      <div className={`h-16 rounded-xl bg-gradient-to-br ${c.accent}`} />
                      <div className="mt-3 flex items-center justify-between">
                        <p className="font-display text-lg text-ink">{c.name}</p>
                        {active && <Check className="h-4 w-4 text-primary" />}
                      </div>
                      <p className="text-xs text-primary">{c.tag}</p>
                      <p className="mt-2 text-xs italic text-muted-foreground">"{c.sample}"</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {step === 6 && (
            <div>
              <H>Sync your wearables</H>
              <P>The more we see, the smarter the plan. You can add more later.</P>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  "Apple Watch",
                  "Oura Ring",
                  "WHOOP 5.0",
                  "Meta Ray-Ban Glasses",
                  "Muse Headband",
                  "Eight Sleep",
                  "Garmin",
                  "Fitbit",
                ].map((d) => (
                  <label
                    key={d}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm hover:border-primary/50"
                  >
                    <span className="font-medium text-ink">{d}</span>
                    <input type="checkbox" className="h-4 w-4 accent-[color:var(--primary)]" />
                  </label>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Optional: Spotify & Apple Music for your character workout playlist.
              </p>
            </div>
          )}
          {step === 7 && (
            <div>
              <H>Your first 7 days, decoded.</H>
              <P>
                Based on your answers, here's what your coach will run. You can swap any day before
                we start.
              </P>
              <div className="mt-6 space-y-2">
                {[
                  ["Mon", "Mamba Push · 35-min upper + 5-min box breathing"],
                  ["Tue", "Recovery walk + Mindfulness 10m"],
                  ["Wed", "HIIT 25-min · CR7 sprint pyramid"],
                  ["Thu", "Rest · journaling prompt + sleep wind-down"],
                  ["Fri", "Lower body strength · video form-check"],
                  ["Sat", "Class booked via ClassPass (your pick)"],
                  ["Sun", "Sunday Reset · body scan + week review"],
                ].map(([d, t]) => (
                  <div key={d} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                    <span className="w-10 text-xs font-semibold text-muted-foreground">{d}</span>
                    <span className="text-sm text-ink">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-ink p-4 text-cream">
                <p className="text-xs uppercase tracking-wider text-clay">Predicted outcome · 4 weeks</p>
                <p className="mt-1 font-display text-xl">
                  -2.1% body fat · +14% HRV · stress drops from {stress}/10 → ~{Math.max(1, stress - 2)}/10
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={back}
              disabled={step === 0}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <button
              onClick={next}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              {step === STEPS.length - 1 ? "Enter Pegasus" : "Continue"} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

function Welcome({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Welcome</p>
      <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
        Hey. I'm your Pegasus coach.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
        I'm built from biometrics, mental-health science, and the voice of whoever you want
        in your head. Eight quick questions, then we move.
      </p>
      <button
        onClick={onNext}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        Let's go <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-3xl text-ink">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-muted-foreground">{children}</p>;
}
function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium text-ink">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary"
    />
  );
}
function Select({ options }: { options: string[] }) {
  return (
    <select className="w-full rounded-xl border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary">
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  );
}
function Chip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground hover:border-primary/50"
      }`}
    >
      {children}
    </button>
  );
}
function SocialBtn({ label, emoji }: { label: string; emoji: string }) {
  return (
    <button className="flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-ink hover:border-primary/50">
      <span className="font-display text-base">{emoji || ""}</span>
      {label}
    </button>
  );
}