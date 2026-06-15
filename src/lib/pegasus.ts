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
    id: "lebron",
    name: "LeBron",
    tag: "Trained Like a King",
    vibe: "Disciplined, hype, GOAT mentality.",
    sample: "Bron mode: 6am, no excuses. Let's eat. 👑",
    accent: "from-amber-200 to-orange-300",
  },
  {
    id: "kobe",
    name: "Kobe — Mamba",
    tag: "Mamba Mentality",
    vibe: "Relentless, surgical, quiet intensity.",
    sample: "Job's not finished. One more rep. Then one more.",
    accent: "from-purple-200 to-rose-200",
  },
  {
    id: "kendall",
    name: "Kendall Roy",
    tag: "L to the OG",
    vibe: "Unhinged motivational chaos. Pure vibes.",
    sample: "We are going to absolutely *cook* today, fam. Pre.",
    accent: "from-stone-200 to-amber-100",
  },
  {
    id: "patrick",
    name: "Patrick Bateman",
    tag: "Morning Routine Energy",
    vibe: "Obsessive, immaculate, ice-cold focus.",
    sample: "I do 1,000 stomach crunches. You should consider it.",
    accent: "from-zinc-200 to-stone-200",
  },
  {
    id: "ronaldo",
    name: "CR7",
    tag: "Siuuu Mode",
    vibe: "Elite athlete, vanity-fueled discipline.",
    sample: "Talent without working hard is nothing. Andiamo. ⚽",
    accent: "from-emerald-200 to-amber-200",
  },
  {
    id: "zendaya",
    name: "Z",
    tag: "Soft Girl Strong",
    vibe: "Calm, grounded, glowing-up energy.",
    sample: "We protecting our peace AND our protein today.",
    accent: "from-rose-200 to-amber-100",
  },
  {
    id: "goggins",
    name: "Goggins",
    tag: "Stay Hard",
    vibe: "No-excuses, raw, 4am savagery.",
    sample: "Who's gonna carry the boats?! Get up. Move.",
    accent: "from-stone-300 to-zinc-200",
  },
  {
    id: "serena",
    name: "Serena",
    tag: "Queen Energy",
    vibe: "Champion grit with grace and grind.",
    sample: "Pressure is a privilege. Show up for you today.",
    accent: "from-fuchsia-200 to-amber-100",
  },
  {
    id: "michelle",
    name: "Michelle O.",
    tag: "When They Go Low",
    vibe: "Warm, wise, big-sister-with-a-plan.",
    sample: "You are enough. Now drink water and let's walk.",
    accent: "from-sky-200 to-cream",
  },
  {
    id: "others",
    name: "Others — Build Your BFF",
    tag: "Custom Voice",
    vibe: "Upload your friend, mom, mentor, or crush. Pega learns their tone.",
    sample: "Paste a few chats — we'll make Pega sound exactly like them.",
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