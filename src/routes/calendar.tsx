import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "@/components/AppShell";

export const Route = createFileRoute("/calendar")({
  head: () => ({ meta: [{ title: "Plan · Pegasus" }] }),
  component: Plan,
});

const WEEK: ReadonlyArray<readonly [string, readonly string[]]> = [
  ["Mon", ["07:00 Breath", "07:30 Mamba Push"]],
  ["Tue", ["08:00 Recovery walk", "20:00 Journaling"]],
  ["Wed", ["07:00 Box Breath", "12:30 Solidcore", "22:30 Wind-down"]],
  ["Thu", ["Rest day"]],
  ["Fri", ["06:30 Lower body", "13:00 Therapist · BetterHelp"]],
  ["Sat", ["10:00 Hot yoga · ClassPass"]],
  ["Sun", ["09:00 Long walk", "20:00 Week review"]],
];

function Plan() {
  return (
    <AppShell subtitle="Calendar" title="The week, in one glance.">
      <div className="grid gap-3 md:grid-cols-7">
        {WEEK.map(([d, items]) => (
          <Card key={d} className="!p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">{d}</p>
            <div className="mt-2 space-y-1">
              {items.map((it) => (
                <p key={it} className="rounded-md bg-secondary px-2 py-1 text-xs text-ink">{it}</p>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <Card className="mt-5">
        <Pill tone="terracotta">Auto-blocked</Pill>
        <p className="mt-2 text-sm text-ink">
          Pegasus protects 22:30–07:00 as wind-down. No notifications, Eight Sleep auto-cools, Calm pre-loads.
        </p>
      </Card>
    </AppShell>
  );
}