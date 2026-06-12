import { createFileRoute } from "@tanstack/react-router";
import { Flame, Trophy, Users } from "lucide-react";
import { AppShell, Card, Pill } from "@/components/AppShell";

export const Route = createFileRoute("/community")({
  head: () => ({ meta: [{ title: "AimiFam · Pegasus" }] }),
  component: Community,
});

function Community() {
  const board = [
    { rank: 1, name: "marco_lift", pts: 4820, you: false },
    { rank: 2, name: "zaraaa", pts: 4610, you: false },
    { rank: 3, name: "you", pts: 4420, you: true },
    { rank: 4, name: "calm_kai", pts: 4180, you: false },
    { rank: 5, name: "j.rod", pts: 4050, you: false },
  ];
  return (
    <AppShell subtitle="Community" title="The AimiFam.">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <Pill tone="terracotta">Battle of the Week</Pill>
                <h2 className="mt-2 font-display text-2xl text-ink">7-Day Mamba Mile</h2>
                <p className="text-sm text-muted-foreground">Run 1 mile every day. Loser buys oat lattes.</p>
              </div>
              <Flame className="h-8 w-8 text-primary" />
            </div>
            <div className="mt-4 space-y-2">
              {[["you", 5], ["marco_lift", 5], ["zaraaa", 4], ["calm_kai", 3]].map(([n, d]) => (
                <div key={n as string} className="flex items-center gap-3">
                  <span className="w-24 text-sm text-ink">{n}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full bg-primary" style={{ width: `${((d as number) / 7) * 100}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground">{d}/7</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <h3 className="font-display text-lg text-ink">Group challenges</h3>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[["Sober October", "342 in"], ["10k steps × 30 days", "1.2k in"], ["No doom-scroll after 10pm", "590 in"], ["Yoga twice a week", "880 in"]].map(([t, c]) => (
                <div key={t} className="rounded-xl border border-border bg-card p-3">
                  <p className="text-sm font-medium text-ink">{t}</p>
                  <p className="text-xs text-muted-foreground">{c}</p>
                  <button className="mt-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium">Join</button>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="font-display text-lg text-ink">Shareable wins</h3>
            <p className="mt-1 text-xs text-muted-foreground">Straight to IG story or Snap.</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {["12-day streak", "Peace Score +18", "First 5k under 30"].map((w, i) => (
                <div key={w} className={`aspect-[4/5] rounded-xl bg-gradient-to-br ${["from-clay to-terracotta", "from-sand to-clay", "from-ink to-clay"][i]} p-4 text-cream`}>
                  <p className="text-[10px] uppercase tracking-wider opacity-80">Pegasus</p>
                  <p className="mt-12 font-display text-xl">{w}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card>
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-primary" />
            <h3 className="font-display text-lg text-ink">City leaderboard · NYC</h3>
          </div>
          <div className="mt-3 space-y-1">
            {board.map((r) => (
              <div key={r.rank} className={`flex items-center justify-between rounded-xl px-3 py-2 ${r.you ? "bg-primary text-primary-foreground" : "bg-card"}`}>
                <span className="text-sm font-medium">{r.rank}. {r.name}</span>
                <span className="text-xs">{r.pts} pts</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}