import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "@/components/AppShell";
import { CHARACTERS, DEVICES } from "@/lib/pegasus";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile · Pegasus" }] }),
  component: Profile,
});

function Profile() {
  return (
    <AppShell subtitle="You" title="Profile & integrations">
      <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
        <Card>
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-clay to-terracotta" />
            <div>
              <p className="font-display text-xl text-ink">Alex Chen</p>
              <p className="text-xs text-muted-foreground">Millennial · NYC · 168 lb</p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2 text-center text-xs">
            <div className="rounded-xl bg-secondary p-2"><p className="font-display text-lg text-ink">28</p><p className="text-muted-foreground">days in</p></div>
            <div className="rounded-xl bg-secondary p-2"><p className="font-display text-lg text-ink">Mamba</p><p className="text-muted-foreground">current coach</p></div>
          </div>
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Goals</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Muscle building", "Stress reduction", "Better sleep"].map((g) => <Pill key={g}>{g}</Pill>)}
            </div>
          </div>
        </Card>
        <div className="space-y-5">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Wearables & ecosystem</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {DEVICES.map((d) => (
                <div key={d.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-3">
                  <div className="flex items-center gap-2">
                    <d.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-ink">{d.name}</span>
                  </div>
                  <Pill tone={d.status === "Connected" ? "sage" : "sand"}>{d.status}</Pill>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Character library</p>
            <p className="mt-1 text-xs text-muted-foreground">Swap your AI voice anytime.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {CHARACTERS.map((c) => (
                <span key={c.id} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-ink">{c.name}</span>
              ))}
            </div>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Subscription</p>
            <p className="mt-2 font-display text-xl text-ink">Monthly · $14.99</p>
            <p className="text-xs text-muted-foreground">Refer a friend → both get a month free.</p>
            <div className="mt-3 flex gap-2">
              <button className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">Upgrade to Annual</button>
              <button className="rounded-full border border-border bg-card px-4 py-2 text-xs">Manage</button>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}