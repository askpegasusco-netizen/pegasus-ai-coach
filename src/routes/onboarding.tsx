import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Watch,
  ShieldAlert,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Upload,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { PegasusLogo } from "@/components/PegasusLogo";

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
];

type AccountSub = "choose" | "verify" | "name";
type Provider = "apple" | "google" | "email" | "phone";

const MALE_COACHES = [
  { id: "lebron", name: "LeBron", tag: "Trained Like a King", sample: "Bron mode: 6am, no excuses. Let's eat. 👑", accent: "from-amber-200 to-orange-300" },
  { id: "kobe", name: "Kobe — Mamba", tag: "Mamba Mentality", sample: "Job's not finished. One more rep.", accent: "from-purple-200 to-rose-200" },
  { id: "ronaldo", name: "CR7", tag: "Siuuu Mode", sample: "Talent without working hard is nothing. Andiamo. ⚽", accent: "from-emerald-200 to-amber-200" },
  { id: "kendall", name: "Kendall Roy", tag: "L to the OG", sample: "We are going to absolutely *cook* today, fam.", accent: "from-stone-200 to-amber-100" },
  { id: "ali", name: "Muhammad Ali", tag: "Float Like a Butterfly", sample: "I am the greatest. I said that even before I knew I was.", accent: "from-amber-100 to-yellow-200" },
  { id: "batman", name: "Batman", tag: "Dark Knight Discipline", sample: "It's not who I am underneath — it's what I do. 300 reps. Now.", accent: "from-zinc-300 to-stone-400" },
];

const FEMALE_COACHES = [
  { id: "zendaya", name: "Z", tag: "Soft Girl Strong", sample: "We protecting our peace AND our protein today.", accent: "from-rose-200 to-amber-100" },
  { id: "serena", name: "Serena", tag: "Queen of the Court", sample: "Pressure is a privilege. Step up, sis.", accent: "from-rose-200 to-fuchsia-200" },
  { id: "simone", name: "Simone Biles", tag: "GOAT Energy", sample: "Mental health first. Then we flip.", accent: "from-pink-200 to-amber-200" },
  { id: "taylor", name: "Tay", tag: "Era Mode", sample: "It's a new era — we're tracking sleep AND songwriting today.", accent: "from-stone-200 to-rose-200" },
  { id: "bey", name: "Beyoncé", tag: "Run the World", sample: "If we gonna do this, we gonna do it flawless.", accent: "from-amber-200 to-rose-300" },
  { id: "gg", name: "Girls' Generation", tag: "K-pop Power", sample: "Gee gee gee — one more set, baby baby baby.", accent: "from-rose-200 to-fuchsia-200" },
];

const GOALS = [
  "Weight control",
  "Fitness shape",
  "Muscle building",
  "Strength training",
  "Core balance",
  "Cardio endurance",
  "Flexibility & mobility",
  "Better sleep",
  "Stress reduction",
  "Mind resilience",
  "Better Diet",
  "Beat anxiety",
  "Train like a pro",
  "Read My Lab",
  "Surprise Me",
];

const TIMELINES = ["2 weeks", "1 month", "3 months", "6 months", "9 months", "1 year"];
const SLEEP_LABELS = ["Very Bad", "Bad", "OK", "Good", "Very Good"];
const STRESS_LABEL = (n: number) =>
  n <= 1 ? "Least stressed" : n <= 4 ? "Mild" : n === 5 ? "Moderate" : n <= 8 ? "High" : "Very stressed";
const HEAD_OPTIONS = [
  "Steady & focused",
  "Foggy / can't concentrate",
  "On edge / wired",
  "Heavy / low mood",
  "Burned out",
  "Anxious / racing thoughts",
  "Numb / disconnected",
  "Genuinely good",
];

const HEALTH_COMMON = [
  "Sore back",
  "Bad knees",
  "Tight shoulders",
  "Foot pain",
  "Migraines",
  "Trouble sleeping",
  "Low energy",
  "Tummy issues",
];
const HEALTH_FEMALE = [
  "Sore back",
  "Bad knees",
  "Period stuff is wack",
  "PCOS vibes",
  "Thyroid acting up",
  "Migraines",
  "Foot pain",
  "Low iron / always tired",
];
const HEALTH_MALE = [
  "Sore back",
  "Bad knees",
  "Tight shoulders",
  "Elbow pain",
  "Hip / leg nerve pain",
  "High blood pressure",
  "Low energy",
  "Trouble sleeping",
];

const HEALTH_GENX = [
  "Low back pain",
  "Shoulder impingement",
  "Sciatica",
  "Hypertension",
  "High cholesterol",
  "Pre-diabetes signs",
  "Plantar fasciitis",
  "Sleep apnea",
];

function ageGroup(birthYear: number): "GenZ" | "Millennial" | "GenX" | "Older" {
  const age = new Date().getFullYear() - birthYear;
  if (age <= 28) return "GenZ";
  if (age <= 44) return "Millennial";
  if (age <= 60) return "GenX";
  return "Older";
}

function Onboarding() {
  const [step, setStep] = useState(0);
  const [focus, setFocus] = useState<string[]>([]);
  const [stress, setStress] = useState(5);
  const [sleep, setSleep] = useState(3);
  const [activity, setActivity] = useState(3);
  const [timelineIdx, setTimelineIdx] = useState(2);
  const [weightUnit, setWeightUnit] = useState<"lb" | "kg">("lb");
  const [heightUnit, setHeightUnit] = useState<"in" | "cm">("in");
  const [birthYear, setBirthYear] = useState(1998);
  const [birthMonth, setBirthMonth] = useState(1);
  const [gender, setGender] = useState<"Woman" | "Man" | "Non-binary" | "Prefer not to say">("Woman");
  const [restrictions, setRestrictions] = useState<string[]>([]);
  const [labPhotos, setLabPhotos] = useState<string[]>([]);
  const [diet, setDiet] = useState("Omnivore");
  const [headState, setHeadState] = useState<string | null>(null);
  const [workoutStyle, setWorkoutStyle] = useState<string>("let try it first");
  // account sub-flow
  const [accountSub, setAccountSub] = useState<AccountSub>("choose");
  const [provider, setProvider] = useState<Provider | null>(null);
  const [name, setName] = useState("");
  // coach
  const [coachGender, setCoachGender] = useState<"male" | "female">("male");
  const [character, setCharacter] = useState("kobe");
  const [customCoachName, setCustomCoachName] = useState("");
  const [customCoachShots, setCustomCoachShots] = useState<string[]>([]);
  // plan reveal
  const [openDay, setOpenDay] = useState<string | null>("Mon");
  const navigate = useNavigate();

  const toggle = (v: string) =>
    setFocus((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]));
  const toggleRestriction = (v: string) =>
    setRestrictions((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]));

  const next = () => {
    // sub-flow for Account step
    if (step === 1 && accountSub === "choose") {
      // user must have picked a provider first
      if (!provider) return;
      if (provider === "phone") setAccountSub("verify");
      else setStep(2);
      return;
    }
    if (step === 1 && accountSub === "verify") {
      setAccountSub("name");
      return;
    }
    if (step === 1 && accountSub === "name") {
      setStep(2);
      setAccountSub("choose");
      return;
    }
    // After wearables (last questionnaire step), step becomes STEPS.length → plan reveal
    if (step < STEPS.length) setStep(step + 1);
    else navigate({ to: "/dashboard" });
  };
  const back = () => {
    if (step === 1 && accountSub === "name") return setAccountSub("verify");
    if (step === 1 && accountSub === "verify") return setAccountSub("choose");
    setStep(Math.max(0, step - 1));
  };

  const coaches = coachGender === "male" ? MALE_COACHES : FEMALE_COACHES;
  const ageSeg = ageGroup(birthYear);
  const baseList =
    gender === "Woman" ? HEALTH_FEMALE : gender === "Man" ? HEALTH_MALE : HEALTH_COMMON;
  // Gen X gets clinical terms; Gen Z / Millennials get human terms
  const healthList = ageSeg === "GenX" || ageSeg === "Older" ? HEALTH_GENX : baseList;
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 90 }, (_, i) => currentYear - 13 - i);
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];
  const inQuestionnaire = step < STEPS.length;

  return (
    <div className="min-h-screen grain-bg">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <Link to="/"><PegasusLogo /></Link>
        <span className="text-xs font-medium text-muted-foreground">
          {inQuestionnaire ? `Step ${step + 1} of ${STEPS.length} · ${STEPS[step]}` : "Your personalized plan"}
        </span>
      </header>
      <div className="mx-auto max-w-3xl px-6">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${(Math.min(step + 1, STEPS.length) / STEPS.length) * 100}%` }}
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
              {accountSub === "choose" && (
                <>
                  <H>Create your account</H>
                  <div className="mt-6 grid gap-3">
                    {([
                      ["apple", "Continue with Apple", ""],
                      ["google", "Continue with Google", "G"],
                      ["email", "Continue with Email", "@"],
                      ["phone", "Continue with Phone", "📱"],
                    ] as const).map(([id, label, emoji]) => (
                      <SocialBtn
                        key={id}
                        label={label}
                        emoji={emoji}
                        active={provider === id}
                        onClick={() => setProvider(id)}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">
                    By continuing you accept the privacy policy and data consent for health information.
                  </p>
                </>
              )}
              {accountSub === "verify" && (
                <>
                  <H>
                    {provider === "phone"
                      ? "Verify your phone"
                      : provider === "email"
                      ? "Verify your email"
                      : provider === "apple"
                      ? "Confirm Apple ID"
                      : "Confirm Google sign-in"}
                  </H>
                  <P>
                    {provider === "phone"
                      ? "We just sent a 6-digit code via SMS."
                      : provider === "email"
                      ? "Check your inbox for a magic link or the 6-digit code."
                      : provider === "apple"
                      ? "Approve the sign-in request on your Apple device."
                      : "Approve the Google account picker on your device."}
                  </P>
                  {(provider === "phone" || provider === "email") ? (
                    <div className="mt-6 flex justify-center gap-2">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <input
                          key={i}
                          maxLength={1}
                          className="h-12 w-10 rounded-xl border border-input bg-card text-center text-lg font-semibold outline-none focus:border-primary"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="mt-6 rounded-2xl border border-dashed border-border bg-secondary/40 p-6 text-center text-sm text-muted-foreground">
                      Waiting for approval…
                    </div>
                  )}
                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    Didn't get it? <span className="underline">Resend</span>
                  </p>
                </>
              )}
              {accountSub === "name" && (
                <>
                  <H>What is your name? :)</H>
                  <P>Customize your fun experience with Pega</P>
                  <div className="mt-6">
                    <Input
                      autoFocus
                      placeholder="e.g. Jordan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>
          )}
          {step === 2 && (
            <div>
              <H>My OG Profile 🎤</H>
              <P>add your info so your homie makes no-sus plan for ya</P>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="My birth month & year">
                  <div className="flex gap-2">
                    <select
                      value={birthMonth}
                      onChange={(e) => setBirthMonth(Number(e.target.value))}
                      className="w-1/2 rounded-xl border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                    >
                      {months.map((m, i) => (
                        <option key={m} value={i + 1}>{m}</option>
                      ))}
                    </select>
                    <select
                      value={birthYear}
                      onChange={(e) => setBirthYear(Number(e.target.value))}
                      className="w-1/2 rounded-xl border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                    >
                      {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                </Field>
                <Field label="My gender">
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as typeof gender)}
                    className="w-full rounded-xl border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                  >
                    {["Woman", "Man", "Non-binary", "Prefer not to say"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
                <Field label="My weight">
                  <div className="flex gap-2">
                    <Input placeholder={weightUnit === "lb" ? "160" : "73"} />
                    <UnitToggle
                      options={["lb", "kg"]}
                      value={weightUnit}
                      onChange={(v) => setWeightUnit(v as "lb" | "kg")}
                    />
                  </div>
                </Field>
                <Field label="My height">
                  <div className="flex gap-2">
                    <Input placeholder={heightUnit === "in" ? `5'10"` : "178"} />
                    <UnitToggle
                      options={["in", "cm"]}
                      value={heightUnit}
                      onChange={(v) => setHeightUnit(v as "in" | "cm")}
                    />
                  </div>
                </Field>
                <Field label="Activity level" className="md:col-span-2">
                  <input
                    type="range"
                    min={1}
                    max={5}
                    value={activity}
                    onChange={(e) => setActivity(Number(e.target.value))}
                    className="w-full accent-[color:var(--primary)]"
                  />
                  <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
                    <span>1 · Least active</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5 · Most active</span>
                  </div>
                </Field>
                <Field label="Health restrictions / injuries" className="md:col-span-2">
                  <p className="mb-2 text-xs text-muted-foreground">
                    Common picks for {gender === "Woman" ? "women" : gender === "Man" ? "men" : "your profile"} — tap all that apply.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {healthList.map((h) => (
                      <Chip key={h} active={restrictions.includes(h)} onClick={() => toggleRestriction(h)}>
                        {h}
                      </Chip>
                    ))}
                    <Chip active={restrictions.includes("None")} onClick={() => toggleRestriction("None")}>
                      None of these
                    </Chip>
                  </div>
                  <Input className="mt-3" placeholder="Add your own (e.g. wrist pain)" />
                  <label className="mt-3 flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-primary/40 bg-primary/5 px-4 py-3 text-sm">
                    <span className="flex items-center gap-2 text-ink">
                      <Upload className="h-4 w-4 text-primary" />
                      Upload photos / lab reports for AI screening
                      <span className="hidden text-[10px] text-muted-foreground md:inline">
                        — diabetes pre-symptoms, thyroid, irregular cycle, etc.
                      </span>
                    </span>
                    <input
                      type="file"
                      multiple
                      accept="image/*,application/pdf"
                      className="hidden"
                      onChange={(e) =>
                        setLabPhotos(Array.from(e.target.files ?? []).map((f) => f.name))
                      }
                    />
                    <span className="text-xs font-semibold text-primary">
                      {labPhotos.length ? `${labPhotos.length} uploaded` : "Browse"}
                    </span>
                  </label>
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
                {GOALS.map((g) => (
                  <Chip key={g} active={focus.includes(g)} onClick={() => toggle(g)}>
                    {g}
                  </Chip>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-sm font-medium text-ink">
                  Hitting a milestone by:{" "}
                  <span className="text-primary">{TIMELINES[timelineIdx]}</span>
                </p>
                <input
                  type="range"
                  min={0}
                  max={TIMELINES.length - 1}
                  value={timelineIdx}
                  onChange={(e) => setTimelineIdx(Number(e.target.value))}
                  className="mt-3 w-full accent-[color:var(--primary)]"
                />
                <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
                  {TIMELINES.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {step === 4 && (
            <div>
              <H>Lifestyle baseline</H>
              <P>Last 7 days — gut answer is fine.</P>
              <div className="mt-6 grid gap-5">
                <Field label={`Sleep quality: ${SLEEP_LABELS[sleep - 1]}`}>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    value={sleep}
                    onChange={(e) => setSleep(Number(e.target.value))}
                    className="w-full accent-[color:var(--primary)]"
                  />
                  <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
                    {SLEEP_LABELS.map((l, i) => (
                      <span key={l}>{i + 1} · {l}</span>
                    ))}
                  </div>
                </Field>
                <Field label={`Stress level: ${stress}/10 · ${STRESS_LABEL(stress)}`}>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={stress}
                    onChange={(e) => setStress(Number(e.target.value))}
                    className="w-full accent-[color:var(--primary)]"
                  />
                  <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
                    <span>1 · Least</span>
                    <span>5 · Moderate</span>
                    <span>10 · Very stressed</span>
                  </div>
                </Field>
                <Field label="Dietary preference">
                  <select
                    value={diet}
                    onChange={(e) => setDiet(e.target.value)}
                    className="w-full rounded-xl border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                  >
                    {["Omnivore", "Vegan", "Vegetarian", "Keto", "Mediterranean", "Pescatarian", "Gluten-free", "Dairy-free", "Halal", "Kosher"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
                <Field label="My workout style">
                  <div className="flex flex-wrap gap-2">
                    {["starting from small", "gimme everything", "let try it first", "surprise me"].map((o) => (
                      <Chip key={o} active={workoutStyle === o} onClick={() => setWorkoutStyle(o)}>
                        {o}
                      </Chip>
                    ))}
                  </div>
                </Field>
                <Field label="How's your head right now? (pick one)">
                  <div className="flex flex-wrap gap-2">
                    {HEAD_OPTIONS.map((x) => (
                      <Chip key={x} active={headState === x} onClick={() => setHeadState(x)}>
                        {x}
                      </Chip>
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
              <div className="mt-5 inline-flex rounded-full border border-border bg-secondary/50 p-1 text-xs font-medium">
                {(["male", "female"] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => {
                      setCoachGender(g);
                      setCharacter(g === "male" ? "kobe" : "zendaya");
                    }}
                    className={`rounded-full px-4 py-1.5 transition ${
                      coachGender === g ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {g === "male" ? "Male coaches" : "Female coaches"}
                  </button>
                ))}
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {coaches.map((c) => {
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
                <button
                  onClick={() => setCharacter("others")}
                  className={`group rounded-2xl border-2 border-dashed p-4 text-left transition ${
                    character === "others"
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className="flex h-16 items-center justify-center rounded-xl bg-secondary/50">
                    <Plus className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="font-display text-lg text-ink">Others</p>
                    {character === "others" && <Check className="h-4 w-4 text-primary" />}
                  </div>
                  <p className="text-xs text-primary">Choose your own dream coach</p>
                  <p className="mt-2 text-xs italic text-muted-foreground">
                    Type a name — celeb, mom, dad, best friend.
                  </p>
                </button>
              </div>
              {character === "others" && (
                <div className="mt-4 space-y-3 rounded-2xl border border-primary/30 bg-primary/5 p-4">
                  <Input
                    placeholder="Who should Pega sound like? (e.g. David Goggins, Mom, Coach Mike)"
                    value={customCoachName}
                    onChange={(e) => setCustomCoachName(e.target.value)}
                  />
                  <label className="flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-primary/40 bg-card px-4 py-3 text-sm">
                    <span className="flex items-center gap-2 text-ink">
                      <Upload className="h-4 w-4 text-primary" />
                      Upload chat screenshots so AI learns their tone & approach
                    </span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        setCustomCoachShots(Array.from(e.target.files ?? []).map((f) => f.name))
                      }
                    />
                    <span className="text-xs font-semibold text-primary">
                      {customCoachShots.length ? `${customCoachShots.length} added` : "Browse"}
                    </span>
                  </label>
                  <p className="text-[11px] text-muted-foreground">
                    Required when your pick isn't a public figure we can model (e.g. family or friends).
                    Public icons are auto-modeled from interviews & writing.
                  </p>
              </div>
              )}
              <p className="mt-3 text-[11px] text-muted-foreground">
                Tip: more personas (Patrick Bateman, Hailey Bieber, custom) unlock in Coach.
              </p>
            </div>
          )}
          {step === 6 && (
            <div>
              <H>Sync your wearables</H>
              <P>The more we see, the smarter the plan. You can add more later.</P>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  "Apple Watch",
                  "Samsung Galaxy Watch",
                  "Google Pixel Watch",
                  "Oura Ring",
                  "Ultrahuman Ring Air",
                  "RingConn Smart Ring",
                  "WHOOP 5.0",
                  "Meta Ray-Ban Glasses",
                  "Fitbit",
                  "Muse Headband",
                  "Eight Sleep",
                  "Garmin",
                  "Polar Vantage",
                  "Coros Pace",
                  "Suunto Race",
                  "Amazfit",
                  "Withings ScanWatch",
                  "Levels CGM",
                  "Lumen Metabolism",
                  "Apollo Neuro",
                  "Bia Smart Yoga Pants",
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
          {step === STEPS.length && (
            <PlanReveal
              focus={focus}
              stress={stress}
              diet={diet}
              restrictions={restrictions}
              openDay={openDay}
              setOpenDay={setOpenDay}
            />
          )}

          {step !== 0 && (
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={back}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <button
                onClick={next}
                disabled={step === 1 && accountSub === "choose" && !provider}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-40"
              >
                {step === STEPS.length
                  ? "Enter Pegasus"
                  : step === STEPS.length - 1
                  ? "Reveal my plan"
                  : "Continue"}{" "}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function Welcome({ onNext }: { onNext: () => void }) {
  const bullets = [
    { icon: Watch, text: "Connect Apple Watch, Samsung Galaxy Watch, Oura, Garmin & more." },
    { icon: ShieldAlert, text: "Auto stop the Panic Attack storm in 3 secs." },
    { icon: Sparkles, text: "Vibe Training with your favourite mentor with health plan ⛑️🧢" },
  ];
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Welcome</p>
      <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
        Meet Pega — Your New AI BFF Coach
      </h1>
      <ul className="mx-auto mt-6 max-w-md space-y-3 text-left">
        {bullets.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-3 rounded-xl border border-border bg-card/60 p-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-sm text-ink">{text}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onNext}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        Let's go <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

const DAY_PLAN: {
  day: string;
  title: string;
  intensity: "Low" | "Medium" | "High";
  steps: string[];
}[] = [
  { day: "Mon", title: "Mamba Push · 35-min upper + 5-min box breathing", intensity: "High",
    steps: ["Warm-up: 5 min jump rope", "DB Bench Press 4×8", "Pull-ups 4×6 (assisted ok)", "Seated Row 3×10", "Finisher: 5 min box breathing (4-4-4-4)"] },
  { day: "Tue", title: "Recovery walk + Mindfulness 10m", intensity: "Low",
    steps: ["30 min Zone 2 walk outside", "10 min guided body-scan meditation"] },
  { day: "Wed", title: "HIIT 25-min · CR7 sprint pyramid", intensity: "High",
    steps: ["Dynamic warm-up 5 min", "Sprints: 10-20-30-20-10s on / 60s off ×3", "Cool-down stretch 5 min"] },
  { day: "Thu", title: "Rest · journaling prompt + sleep wind-down", intensity: "Low",
    steps: ["3-line journaling prompt", "Caffeine cut-off 2pm", "Wind-down playlist + screen off 30 min before bed"] },
  { day: "Fri", title: "Lower body strength · video form-check", intensity: "Medium",
    steps: ["Goblet Squat 4×10", "Romanian Deadlift 4×8", "Walking Lunges 3×12", "Form scan: AI camera review per set"] },
  { day: "Sat", title: "Class booked via ClassPass (your pick)", intensity: "Medium",
    steps: ["Reserve a yoga/pilates/HIIT class near you", "Sync HR data from class", "Post-class protein within 30 min"] },
  { day: "Sun", title: "Sunday Reset · body scan + week review", intensity: "Low",
    steps: ["10 min body-scan meditation", "Review week: wins, misses, energy", "Set 1 micro-goal for next week"] },
];

function PlanReveal({
  focus,
  stress,
  diet,
  restrictions,
  openDay,
  setOpenDay,
}: {
  focus: string[];
  stress: number;
  diet: string;
  restrictions: string[];
  openDay: string | null;
  setOpenDay: (d: string | null) => void;
}) {
  // Per-day diverse diet rotation tuned to dietary preference
  const weeklyDietBank: Record<string, { meal: string; healthy: string; treat: string }[][]> = {
    base: [
      [ { meal: "Breakfast", healthy: "3-egg omelet + oats + berries", treat: "Iced oat-milk latte" },
        { meal: "Lunch", healthy: "Chicken + rice + broccoli", treat: "Dark chocolate square" },
        { meal: "Dinner", healthy: "Grilled salmon + quinoa + greens", treat: "Glass of wine" } ],
      [ { meal: "Breakfast", healthy: "Greek yogurt + granola + banana", treat: "Mini croissant" },
        { meal: "Lunch", healthy: "Turkey wrap + side salad", treat: "Boba (half-sugar)" },
        { meal: "Dinner", healthy: "Steak + sweet potato + asparagus", treat: "2 squares dark choc" } ],
      [ { meal: "Breakfast", healthy: "Protein smoothie + peanut butter toast", treat: "Iced matcha" },
        { meal: "Lunch", healthy: "Poke bowl (salmon, edamame, rice)", treat: "Spicy mayo drizzle" },
        { meal: "Dinner", healthy: "Chicken stir-fry + brown rice", treat: "Mochi ice cream" } ],
      [ { meal: "Breakfast", healthy: "Avocado toast + 2 eggs", treat: "Oat-milk cappuccino" },
        { meal: "Lunch", healthy: "Cobb salad (chicken, egg, bacon bits)", treat: "Sourdough roll" },
        { meal: "Dinner", healthy: "Shrimp tacos + slaw", treat: "1 margarita" } ],
      [ { meal: "Breakfast", healthy: "Overnight oats + chia + berries", treat: "Honey drizzle" },
        { meal: "Lunch", healthy: "Quinoa power bowl + chickpeas", treat: "Hummus + pita chips" },
        { meal: "Dinner", healthy: "Baked cod + lemon rice + greens", treat: "Tiramisu bite" } ],
      [ { meal: "Breakfast", healthy: "Cottage cheese + pineapple + flax", treat: "Iced coffee" },
        { meal: "Lunch", healthy: "Beef bibimbap + kimchi", treat: "Korean fried chicken wing" },
        { meal: "Dinner", healthy: "Margherita pizza (thin) + arugula", treat: "Gelato scoop" } ],
      [ { meal: "Breakfast", healthy: "Banana protein pancakes", treat: "Maple syrup splash" },
        { meal: "Lunch", healthy: "Sushi handroll set + miso", treat: "Edamame + sake (1)" },
        { meal: "Dinner", healthy: "Roast chicken + veg tray bake", treat: "Apple crumble" } ],
    ],
    Vegan: [
      [ { meal: "Breakfast", healthy: "Tofu scramble + sourdough + spinach", treat: "Almond mocha" },
        { meal: "Lunch", healthy: "Tempeh grain bowl + tahini", treat: "Dark chocolate" },
        { meal: "Dinner", healthy: "Lentil curry + brown rice", treat: "Vegan ice cream" } ],
      [ { meal: "Breakfast", healthy: "Chia pudding + berries + granola", treat: "Oat-milk latte" },
        { meal: "Lunch", healthy: "Falafel + hummus + pita", treat: "Stuffed grape leaves" },
        { meal: "Dinner", healthy: "Tofu pad thai + peanuts", treat: "Coconut sticky rice" } ],
      [ { meal: "Breakfast", healthy: "Avocado toast + tomato + hemp", treat: "Maple oat cookie" },
        { meal: "Lunch", healthy: "Buddha bowl (quinoa, sweet potato, kale)", treat: "Tahini drizzle" },
        { meal: "Dinner", healthy: "Mushroom stroganoff + farro", treat: "Dark chocolate truffle" } ],
      [ { meal: "Breakfast", healthy: "Banana-oat smoothie + pb", treat: "Date energy ball" },
        { meal: "Lunch", healthy: "Veggie sushi + edamame", treat: "Vegan mochi" },
        { meal: "Dinner", healthy: "Black bean tacos + avocado", treat: "Vegan margarita" } ],
      [ { meal: "Breakfast", healthy: "Vegan protein pancakes", treat: "Maple syrup" },
        { meal: "Lunch", healthy: "Chickpea 'tuna' wrap", treat: "Veggie chips" },
        { meal: "Dinner", healthy: "Coconut chickpea curry + rice", treat: "Vegan brownie" } ],
      [ { meal: "Breakfast", healthy: "Granola + soy yogurt + berries", treat: "Cold brew" },
        { meal: "Lunch", healthy: "Lentil soup + sourdough", treat: "Olive oil + bread dip" },
        { meal: "Dinner", healthy: "Stuffed peppers (quinoa + bean)", treat: "Vegan cheesecake bite" } ],
      [ { meal: "Breakfast", healthy: "Acai bowl + granola + nuts", treat: "Coconut whip" },
        { meal: "Lunch", healthy: "Soba noodles + edamame + sesame", treat: "Bubble tea (half-sugar)" },
        { meal: "Dinner", healthy: "Cauliflower steak + lentils", treat: "Vegan tiramisu" } ],
    ],
    Keto: [
      [ { meal: "Breakfast", healthy: "Avocado + 3 eggs + bacon", treat: "Bulletproof coffee" },
        { meal: "Lunch", healthy: "Steak salad + olive oil", treat: "Keto fat-bomb" },
        { meal: "Dinner", healthy: "Salmon + asparagus + butter", treat: "Berries + cream" } ],
      [ { meal: "Breakfast", healthy: "Cheese omelet + spinach", treat: "MCT-oil coffee" },
        { meal: "Lunch", healthy: "Cobb salad + ranch", treat: "Pork rinds" },
        { meal: "Dinner", healthy: "Ribeye + broccoli + butter", treat: "Keto cheesecake bite" } ],
      [ { meal: "Breakfast", healthy: "Chia pudding + almond milk + flax", treat: "Almond-flour muffin" },
        { meal: "Lunch", healthy: "Tuna lettuce wraps + avo", treat: "Olives" },
        { meal: "Dinner", healthy: "Pork chop + cauliflower mash", treat: "Sugar-free dark choc" } ],
      [ { meal: "Breakfast", healthy: "Greek yogurt (full-fat) + walnuts", treat: "Coconut chips" },
        { meal: "Lunch", healthy: "Chicken Caesar (no croutons)", treat: "Parmesan crisps" },
        { meal: "Dinner", healthy: "Lamb chops + zucchini noodles", treat: "Whipped cream + berries" } ],
      [ { meal: "Breakfast", healthy: "Bacon + 3 eggs + avocado", treat: "Bulletproof cocoa" },
        { meal: "Lunch", healthy: "Bunless burger + side salad", treat: "Cheese crisps" },
        { meal: "Dinner", healthy: "Shrimp scampi (zoodles)", treat: "Keto brownie bite" } ],
      [ { meal: "Breakfast", healthy: "Smoked salmon + cream cheese roll", treat: "Espresso" },
        { meal: "Lunch", healthy: "Egg salad + arugula", treat: "Macadamias" },
        { meal: "Dinner", healthy: "Steak fajita bowl (no rice)", treat: "Sugar-free flan" } ],
      [ { meal: "Breakfast", healthy: "Sausage + eggs + sautéed greens", treat: "Heavy-cream coffee" },
        { meal: "Lunch", healthy: "Chicken thighs + cauliflower rice", treat: "Pesto drizzle" },
        { meal: "Dinner", healthy: "Slow-roast pork + brussels sprouts", treat: "Keto pecan pie bite" } ],
    ],
    Mediterranean: [
      [ { meal: "Breakfast", healthy: "Greek yogurt + honey + walnuts", treat: "Espresso" },
        { meal: "Lunch", healthy: "Chickpea + tuna salad", treat: "Olive bread" },
        { meal: "Dinner", healthy: "Grilled fish + veg + olive oil", treat: "Glass of red wine" } ],
      [ { meal: "Breakfast", healthy: "Shakshuka + sourdough", treat: "Mint tea + halva" },
        { meal: "Lunch", healthy: "Greek salad + grilled chicken", treat: "Feta drizzle" },
        { meal: "Dinner", healthy: "Seafood paella (small)", treat: "Sangria (1)" } ],
      [ { meal: "Breakfast", healthy: "Whole-grain toast + tomato + olive oil", treat: "Espresso + biscotti" },
        { meal: "Lunch", healthy: "Lentil + farro salad", treat: "Olives + almonds" },
        { meal: "Dinner", healthy: "Grilled lamb skewers + tzatziki", treat: "Baklava bite" } ],
      [ { meal: "Breakfast", healthy: "Yogurt + pomegranate + pistachio", treat: "Honey drizzle" },
        { meal: "Lunch", healthy: "Tabbouleh + grilled halloumi", treat: "Pita + hummus" },
        { meal: "Dinner", healthy: "Branzino + roasted veg", treat: "Limoncello (sip)" } ],
      [ { meal: "Breakfast", healthy: "Frittata + tomato + basil", treat: "Cappuccino" },
        { meal: "Lunch", healthy: "Niçoise salad", treat: "Crusty bread + olive oil" },
        { meal: "Dinner", healthy: "Whole-wheat pasta + clams", treat: "Tiramisu bite" } ],
      [ { meal: "Breakfast", healthy: "Muesli + warm milk + figs", treat: "Espresso" },
        { meal: "Lunch", healthy: "Stuffed peppers + bulgur", treat: "Stuffed dates" },
        { meal: "Dinner", healthy: "Grilled octopus + lemon potatoes", treat: "Glass of rosé" } ],
      [ { meal: "Breakfast", healthy: "Cottage cheese + cucumber + olives", treat: "Date + walnut" },
        { meal: "Lunch", healthy: "Salmon + farro + arugula", treat: "Lemon olive cake bite" },
        { meal: "Dinner", healthy: "Slow-roast lamb + couscous", treat: "Gelato scoop" } ],
    ],
  };
  const week = weeklyDietBank[diet] ?? weeklyDietBank.base;
  const restrictionNote =
    restrictions.length && !restrictions.includes("None")
      ? `Adjusted for: ${restrictions.filter((r) => r !== "None").slice(0, 3).join(", ")}`
      : null;
  return (
    <div>
      <H>Your first 7 days, decoded.</H>
      <P>
        Based on your answers, here's what Pega will run. Tap any day to see the workout details
        and an AI-suggested diet tuned to your <span className="font-semibold text-ink">{diet}</span> profile
        {restrictionNote ? ` — ${restrictionNote.toLowerCase()}` : ""}. Swap any day before we start.
      </P>
      <div className="mt-6 space-y-2">
        {DAY_PLAN.map((d, dayIdx) => {
          const open = openDay === d.day;
          const meals = week[dayIdx % week.length];
          return (
            <div key={d.day} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                onClick={() => setOpenDay(open ? null : d.day)}
                className="flex w-full items-center gap-3 p-3 text-left"
              >
                <span className="w-10 text-xs font-semibold text-muted-foreground">{d.day}</span>
                <span className="flex-1 text-sm text-ink">{d.title}</span>
                <IntensityBadge level={d.intensity} />
                {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
              </button>
              {open && (
                <div className="space-y-4 border-t border-border bg-secondary/30 px-4 py-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">Workout</p>
                    <ol className="mt-1.5 space-y-1.5 text-sm text-ink">
                      {d.steps.map((s, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary">{i + 1}.</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="rounded-lg bg-card p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                        My diet · {diet} · 80 / 20
                      </p>
                      <span className="text-[10px] text-muted-foreground">Tuned to {d.intensity.toLowerCase()} intensity</span>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-sm text-ink">
                      {meals.map((m: { meal: string; healthy: string; treat: string }) => (
                        <li key={m.meal} className="flex flex-wrap gap-x-2">
                          <span className="w-20 text-xs font-semibold text-muted-foreground">{m.meal}</span>
                          <span className="flex-1">{m.healthy}</span>
                          <span className="text-xs italic text-clay">+ treat: {m.treat}</span>
                        </li>
                      ))}
                    </ul>
                    {restrictionNote && (
                      <p className="mt-2 text-[10px] text-muted-foreground">{restrictionNote}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {(() => {
        const mentalGoals = ["Stress reduction", "Mind resilience", "Beat anxiety", "Better sleep"];
        const isMentalFirst =
          focus.length > 0 &&
          focus.some((g) => mentalGoals.includes(g)) &&
          !focus.some((g) => ["Weight control", "Fitness shape", "Muscle building"].includes(g));
        return (
          <div className="mt-6 rounded-2xl bg-ink p-4 text-cream">
            <p className="text-xs uppercase tracking-wider text-clay">Predicted outcome · 4 weeks</p>
            {isMentalFirst ? (
              <>
                <p className="mt-1 font-display text-xl">
                  Stress {stress}/10 → ~{Math.max(1, stress - 3)}/10 · +18% HRV · resting HR
                  −6 bpm · sleep latency −12 min
                </p>
                <p className="mt-2 text-xs text-cream/70">
                  We're skipping body-fat noise — your plan focuses on Peace Score™,
                  Cardio Reserve™ & Inflammation Idx™. We'll revisit body comp only if you ask.
                </p>
              </>
            ) : (
              <>
                <p className="mt-1 font-display text-xl">
                  -2.1% body fat · +14% HRV · stress drops from {stress}/10 → ~{Math.max(1, stress - 2)}/10
                </p>
                <p className="mt-2 text-xs text-cream/70">
                  Plus Pega-only metrics you can't get from your watch: Peace Score, Metabolic
                  Flex, Cardio Reserve.
                </p>
              </>
            )}
          </div>
        );
      })()}
      {focus.length > 0 && (
        <p className="mt-3 text-xs text-muted-foreground">
          Goals weighted in this plan: {focus.slice(0, 4).join(" · ")}
        </p>
      )}
    </div>
  );
}

function IntensityBadge({ level }: { level: "Low" | "Medium" | "High" }) {
  const cls =
    level === "High"
      ? "bg-rose-200/60 text-rose-900"
      : level === "Medium"
      ? "bg-amber-200/60 text-amber-900"
      : "bg-emerald-200/60 text-emerald-900";
  return (
    <span className={`hidden md:inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${cls}`}>
      {level} intensity
    </span>
  );
}

function UnitToggle({
  options,
  value,
  onChange,
}: {
  options: [string, string];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="inline-flex rounded-xl border border-input bg-card p-0.5 text-xs font-medium">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`rounded-lg px-3 py-1.5 transition ${
            value === o ? "bg-primary text-primary-foreground" : "text-muted-foreground"
          }`}
        >
          {o}
        </button>
      ))}
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
function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary ${className}`}
    />
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
function SocialBtn({
  label,
  emoji,
  active,
  onClick,
}: {
  label: string;
  emoji: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition ${
        active
          ? "border-primary bg-primary/10 text-ink"
          : "border-border bg-card text-ink hover:border-primary/50"
      }`}
    >
      <span className="font-display text-base">{emoji || ""}</span>
      {label}
    </button>
  );
}