import {
  Activity,
  Brain,
  Calendar as CalendarIcon,
  Compass,
  Dumbbell,
  Flame,
  HeartPulse,
  Home,
  MessageCircleHeart,
  Trophy,
  User,
} from "lucide-react";

export const NAV = [
  { to: "/dashboard", label: "Today", icon: Home },
  { to: "/coach", label: "Coach", icon: MessageCircleHeart },
  { to: "/fitness", label: "Move", icon: Dumbbell },
  { to: "/mental", label: "Mind", icon: Brain },
  { to: "/progress", label: "Progress", icon: Activity },
  { to: "/community", label: "AimiFam", icon: Trophy },
  { to: "/ecosystem", label: "Book", icon: Compass },
  { to: "/calendar", label: "Plan", icon: CalendarIcon },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export const CHARACTERS = [
  {
    id: "gymrat",
    name: "Gym Rat",
    tag: "PR or ER",
    vibe: "Lives at the rack. Pre-workout is a personality.",
    sample: "bro we are NOT skipping leg day again 😤 rack it up, one more set, locked tf in.",
    accent: "from-amber-200 to-orange-300",
  },
  {
    id: "aurafarmer",
    name: "Aura Farmer",
    tag: "+9999 Aura",
    vibe: "Silent grind, max aura points, never explains.",
    sample: "u don't talk, u just show up at 5am. aura farm secured. trust.",
    accent: "from-stone-300 to-zinc-300",
  },
  {
    id: "softgirl",
    name: "Soft Girl",
    tag: "Soft Life Era",
    vibe: "Pilates, matcha, slow mornings, hard boundaries.",
    sample: "babe we're protecting the peace today 🌸 slow flow, oat matcha, journal. that's it.",
    accent: "from-rose-200 to-amber-100",
  },
  {
    id: "zenmaster",
    name: "Zen Master",
    tag: "Inner Peace Mode",
    vibe: "Breathwork over breakdowns. Calm but locked in.",
    sample: "inhale 4, hold 4, exhale 8. the panic is mid. you are not. let's move.",
    accent: "from-emerald-200 to-sand",
  },
  {
    id: "rizzmaxxer",
    name: "Rizzmaxxer",
    tag: "Unspoken Rizz",
    vibe: "Mirror pump, fit-check ready, confidence-coded.",
    sample: "posture up, jaw forward, that's the look. one fit check after this set. W rizz incoming.",
    accent: "from-fuchsia-200 to-rose-200",
  },
  {
    id: "pilatesqueen",
    name: "Pilates Queen",
    tag: "Reformer Royalty",
    vibe: "Long lines, deep core, lowkey the strongest in the room.",
    sample: "ribs down, scoop the core, breathe. tiny moves, huge results — that's the slay.",
    accent: "from-pink-200 to-stone-200",
  },
  {
    id: "fibermaxxer",
    name: "Fibermaxxer",
    tag: "Gut Goals",
    vibe: "30 plants a week, glow comes from the gut, no skip.",
    sample: "30g fiber today or we riot. chia bowl + lentils + berries. gut microbiome literally thriving.",
    accent: "from-emerald-200 to-amber-200",
  },
  {
    id: "sleepmaxxer",
    name: "Sleepmaxxer",
    tag: "REM Royalty",
    vibe: "Mouth-taped, magnesium-pilled, screens off by 9.",
    sample: "phone in the other room. magnesium glycinate. 67°F. we are sleepmaxxing tonight, no debate.",
    accent: "from-sky-200 to-stone-200",
  },
  {
    id: "others",
    name: "Others — Build Your BFF",
    tag: "Custom Voice",
    vibe: "Got Locked in with your friends, mom, mentor, or even your high school crush.",
    sample: "Paste a few chats — we'll make Pega sound like your homies, no cap.",
    accent: "from-clay/60 to-sand",
  },
];

export const VIBES = [
  { id: "ready", label: "So Ready", emoji: "🔥" },
  { id: "badass", label: "Feeling Badass", emoji: "😤" },
  { id: "tired", label: "Tired", emoji: "🥱" },
  { id: "anx", label: "Anxious AF", emoji: "🫠" },
  { id: "surprise", label: "Surprise Me", emoji: "🎲" },
];

export const DEVICES = [
  { id: "apple-watch", name: "Apple Watch", status: "Connected", icon: HeartPulse },
  { id: "oura", name: "Oura Ring", status: "Connected", icon: Flame },
  { id: "whoop", name: "WHOOP 5.0", status: "Tap to connect", icon: Activity },
  { id: "meta-glasses", name: "Meta Ray-Ban", status: "Tap to connect", icon: Compass },
  { id: "muse", name: "Muse Headband", status: "Tap to connect", icon: Brain },
  { id: "eight-sleep", name: "Eight Sleep", status: "Connected", icon: HeartPulse },
];

export const ECOSYSTEM = [
  { id: "classpass", name: "ClassPass", kind: "Studios near you", cta: "Book class" },
  { id: "mindbody", name: "Mindbody", kind: "Yoga & pilates", cta: "Reserve" },
  { id: "zocdoc", name: "Zocdoc", kind: "Clinic check-ups", cta: "Find doc" },
  { id: "betterhelp", name: "BetterHelp", kind: "Licensed therapists", cta: "Match me" },
  { id: "calm", name: "Calm", kind: "Sleep & meditation", cta: "Open session" },
  { id: "headspace", name: "Headspace", kind: "Guided mindfulness", cta: "Open session" },
  { id: "spotify", name: "Spotify", kind: "Character workout mix", cta: "Sync vibe" },
  { id: "timeleft", name: "Timeleft", kind: "Dinner with strangers", cta: "Sign up" },
  { id: "trials", name: "ResearchMatch", kind: "Clinical trials", cta: "Apply" },
];

export type Vibe = (typeof VIBES)[number]["id"];