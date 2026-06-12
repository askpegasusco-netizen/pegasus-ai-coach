import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Phone, Wind } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/panic")({
  head: () => ({ meta: [{ title: "Pegasus — Calm down. You're safe." }] }),
  component: Panic,
});

function Panic() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");
  const [count, setCount] = useState(4);
  const [round, setRound] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        if (c > 1) return c - 1;
        setPhase((p) => {
          if (p === "in") {
            setCount(7);
            return "hold";
          }
          if (p === "hold") {
            setCount(8);
            return "out";
          }
          setCount(4);
          setRound((r) => r + 1);
          return "in";
        });
        return 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const label = phase === "in" ? "Breathe in" : phase === "hold" ? "Hold" : "Breathe out, slowly";
  const size = phase === "in" ? 320 : phase === "hold" ? 320 : 180;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-cream via-sand to-clay text-ink">
      <button
        onClick={() => navigate({ to: "/dashboard" })}
        className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-card/80 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> I'm okay now
      </button>

      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Panic protocol · 4-7-8 breathing
        </p>
        <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">
          You're safe. I'm right here.
        </h1>

        <div
          className="my-12 flex items-center justify-center rounded-full bg-primary/15 transition-all duration-1000 ease-in-out"
          style={{ width: size, height: size }}
        >
          <div className="rounded-full bg-primary/30 p-10">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="font-display text-4xl">{count}</span>
            </div>
          </div>
        </div>

        <p className="font-display text-2xl text-ink">{label}</p>
        <p className="mt-1 text-sm text-muted-foreground">Round {round} of 4 · Mamba's got you.</p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <SoftBtn icon={Wind}>Open Calm</SoftBtn>
          <SoftBtn icon={Wind}>Open Headspace</SoftBtn>
          <SoftBtn icon={Phone}>Call a friend</SoftBtn>
          <SoftBtn icon={Phone}>988 Lifeline</SoftBtn>
        </div>

        <p className="mt-10 max-w-md text-xs text-muted-foreground">
          Detected on your wearable: HRV drop · elevated heart rate. Auto-launched at
          {" "}
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}.
        </p>
      </div>
    </div>
  );
}

function SoftBtn({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-sm font-medium text-ink backdrop-blur transition hover:bg-card">
      <Icon className="h-4 w-4 text-primary" />
      {children}
    </button>
  );
}