import { createFileRoute } from "@tanstack/react-router";
import { Mic, Send, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AppShell, Card, Pill } from "@/components/AppShell";
import { CHARACTERS } from "@/lib/pegasus";

export const Route = createFileRoute("/coach")({
  head: () => ({ meta: [{ title: "AI Coach Chat · Pegasus" }] }),
  component: Coach,
});

type Msg = { id: string; from: "coach" | "you"; text: string; gif?: string };

const SEED: Msg[] = [
  {
    id: "1",
    from: "coach",
    text: "Job's not finished. HRV's up 4ms — that's the green light. Push upper body today?",
  },
  { id: "2", from: "you", text: "I'm tired tho. Maybe rest?" },
  {
    id: "3",
    from: "coach",
    text: "Tired-tired, or 'haven't started' tired? Be honest with me. We can swap to a 20-min mobility flow and protect sleep tonight. Same outcome, less ego.",
  },
];

function Coach() {
  const [character, setCharacter] = useState(CHARACTERS[1]);
  const [msgs, setMsgs] = useState<Msg[]>(SEED);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    end.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  function send(text?: string) {
    const t = (text ?? input).trim();
    if (!t) return;
    setMsgs((m) => [...m, { id: crypto.randomUUID(), from: "you", text: t }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const replies: Record<string, string> = {
        kobe: "Mamba mentality: you don't ask the body, you tell it. 20-min mobility, 4-min box breath, then we re-check. Go.",
        lebron: "King mode. We not skipping today, we *scaling*. 20-min mobility + protein hit. Locked in. 👑",
        kendall: "OK, OK — chill flex. 20 minutes, nothing crazy. We are *not* posting a bad workout. Let's just move.",
        patrick: "I find the morning, after a brief 20-minute mobility flow, that I'm most productive. Begin.",
        ronaldo: "Mentality, work, dedication. 20 minutes is *nothing*. Andiamo. Siuuu.",
        zendaya: "Hey — we protecting your peace. 20 min slow flow, then a 4-min breath. Glow comes from rest too. 🌿",
      };
      setMsgs((m) => [
        ...m,
        { id: crypto.randomUUID(), from: "coach", text: replies[character.id] ?? replies.kobe },
      ]);
      setTyping(false);
    }, 900);
  }

  return (
    <AppShell subtitle="AI Coach" title={`Talking to ${character.name}`}>
      <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
        {/* Persona switcher */}
        <Card className="h-fit">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Swap persona</p>
          <p className="mt-1 text-xs text-muted-foreground">
            The tone, memes, even the rest-day pitch changes.
          </p>
          <div className="mt-4 space-y-2">
            {CHARACTERS.map((c) => {
              const active = c.id === character.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setCharacter(c)}
                  className={`flex w-full items-center gap-3 rounded-xl border p-2 text-left transition ${
                    active ? "border-primary bg-primary/10" : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <div className={`h-9 w-9 rounded-lg bg-gradient-to-br ${c.accent}`} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-ink">{c.name}</p>
                    <p className="truncate text-[10px] text-muted-foreground">{c.tag}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        {/* Chat */}
        <Card className="flex h-[70vh] min-h-[520px] flex-col">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-3">
              <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${character.accent}`} />
              <div>
                <p className="text-sm font-medium text-ink">{character.name}</p>
                <p className="text-[10px] text-muted-foreground">{character.tag} · responds in your tone</p>
              </div>
            </div>
            <Pill tone="sage">🎧 Spotify mix synced</Pill>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto py-4">
            {msgs.map((m) => (
              <Bubble key={m.id} from={m.from}>{m.text}</Bubble>
            ))}
            {typing && (
              <Bubble from="coach">
                <span className="inline-flex gap-1">
                  <Dot /><Dot delay={120} /><Dot delay={240} />
                </span>
              </Bubble>
            )}
            <div ref={end} />
          </div>

          <div className="border-t border-border pt-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {[
                "I'm anxious",
                "Find me a class tonight",
                "Plan my next 7 days",
                "Make today easier",
                "Surprise me",
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground hover:border-primary/50"
                >
                  <Sparkles className="mr-1 inline h-3 w-3 text-primary" />
                  {q}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-input bg-card px-3 py-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={`Tell ${character.name} what's up…`}
                className="flex-1 bg-transparent text-sm outline-none"
              />
              <button className="rounded-full p-2 text-muted-foreground hover:text-foreground">
                <Mic className="h-4 w-4" />
              </button>
              <button
                onClick={() => send()}
                className="rounded-full bg-primary p-2 text-primary-foreground"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

function Bubble({ from, children }: { from: "you" | "coach"; children: React.ReactNode }) {
  return (
    <div className={`flex ${from === "you" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          from === "you"
            ? "rounded-br-md bg-primary text-primary-foreground"
            : "rounded-bl-md bg-secondary text-ink"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-ink"
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}