import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";
import { AppShell, Card, Pill } from "@/components/AppShell";

export const Route = createFileRoute("/progress")({
  head: () => ({ meta: [{ title: "Progress · Pegasus" }] }),
  component: Progress,
});

function Progress() {
  const heatmap = Array.from({ length: 28 }, (_, i) => (i + 3) % 5);
  return (
    <AppShell subtitle="Phase 6 · Progress" title="The receipts.">
      <div className="grid gap-5 lg:grid-cols-3">
        <Card>
          <Pill tone="sage">+14%</Pill>
          <h3 className="mt-2 font-display text-xl text-ink">HRV trend</h3>
          <div className="mt-4 flex h-20 items-end gap-1">
            {[42, 48, 50, 55, 53, 60, 62, 64, 66, 68].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-primary/70" style={{ height: `${h}%` }} />
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">10-week recovery curve</p>
        </Card>
        <Card>
          <Pill tone="sage">−2.1%</Pill>
          <h3 className="mt-2 font-display text-xl text-ink">Body fat</h3>
          <div className="mt-4 flex h-20 items-end gap-1">
            {[80, 78, 76, 75, 73, 71, 70, 68, 66, 65].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-sage/70" style={{ height: `${h}%` }} />
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Strength up 8% same window</p>
        </Card>
        <Card>
          <Pill tone="sage">+18 pts</Pill>
          <h3 className="mt-2 font-display text-xl text-ink">Peace Score</h3>
          <div className="mt-4 flex h-20 items-end gap-1">
            {[40, 45, 50, 56, 60, 65, 68, 70, 72, 74].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-clay" style={{ height: `${h}%` }} />
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Anxiety episodes down 60%</p>
        </Card>
      </div>

      <Card className="mt-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl text-ink">Consistency heatmap</h3>
          <Pill tone="terracotta"><TrendingUp className="mr-1 inline h-3 w-3" /> 12-day streak</Pill>
        </div>
        <div className="mt-4 grid grid-cols-7 gap-1.5">
          {heatmap.map((v, i) => (
            <div key={i} className="aspect-square rounded-md" style={{ backgroundColor: `oklch(0.63 0.13 42 / ${0.15 + v * 0.18})` }} />
          ))}
        </div>
      </Card>

      <Card className="mt-5">
        <h3 className="font-display text-xl text-ink">AI plan optimizations</h3>
        <ul className="mt-3 space-y-2 text-sm text-ink">
          <li>· Auto-bumped Thursday HIIT difficulty +10% — you reported it too easy.</li>
          <li>· Inserted rest day Tuesday — HRV dropped below 55ms threshold.</li>
          <li>· Swapped 22:00 doomscroll trigger with 4-7-8 breath reminder.</li>
        </ul>
      </Card>

      <Card className="mt-5 border-primary/40 bg-primary/5">
        <Pill tone="terracotta">🎉 Milestone</Pill>
        <h3 className="mt-2 font-display text-2xl text-ink">First 30 days, locked in.</h3>
        <p className="mt-1 text-sm text-muted-foreground">Generate your Pegasus Wrapped — share to IG story or Snap.</p>
        <button className="mt-4 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Make Wrapped card</button>
      </Card>
    </AppShell>
  );
}