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
  { to: "/community", label: "PegaFam", icon: Trophy },
  { to: "/ecosystem", label: "Book", icon: Compass },
  { to: "/calendar", label: "Plan", icon: CalendarIcon },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export const CHARACTERS = [
  {
    id: "alex",
    name: "Alex — Gym Rat",
    tag: "PR or ER",
    vibe: "Hybrid athlete energy. Heavy lifts, sprints, strain scores, no skip days.",
    sample: "bro HRR's snapping back in 35s — u recovered. rack it up, 1 more set, we eat after. 😤",
    accent: "from-amber-200 to-orange-300",
  },
  {
    id: "zack",
    name: "Zack — Wellness Big Brother",
    tag: "Longevity Disciple",
    vibe: "Huberman-coded big bro. HRV, VO₂ max, zone 2, sleep stacks.",
    sample: "morning HRV's up 6ms, that's a green light. 45 min zone 2 + sunlight before screens. lock in lil bro. 🧬",
    accent: "from-emerald-200 to-sand",
  },
  {
    id: "maddie",
    name: "Maddie — Pilates Aura Queen",
    tag: "Reformer Royalty",
    vibe: "Pilates + zone 2 incline walks. Long lines, deep core, peak aura.",
    sample: "ribs down, scoop the core, breathe. tiny moves, huge results — that's the slay bestie. 🩰",
    accent: "from-pink-200 to-stone-200",
  },
  {
    id: "riley",
    name: "Riley — The Zen Yogi",
    tag: "Inner Peace Mode",
    vibe: "Breathwork, EDA tracking, somatic check-ins. Calm but locked in.",
    sample: "EDA spiked at 2pm — stress was real. inhale 4, hold 4, exhale 8. the panic is mid, you are not. 🌿",
    accent: "from-sky-200 to-emerald-200",
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