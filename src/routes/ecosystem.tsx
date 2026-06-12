import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Search } from "lucide-react";
import { useState } from "react";
import { AppShell, Card, Pill } from "@/components/AppShell";
import { ECOSYSTEM } from "@/lib/pegasus";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({ meta: [{ title: "Book · Pegasus" }] }),
  component: Ecosystem,
});

function Ecosystem() {
  const [q, setQ] = useState("");
  const list = ECOSYSTEM.filter(
    (e) =>
      e.name.toLowerCase().includes(q.toLowerCase()) ||
      e.kind.toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <AppShell subtitle="Closing the loop" title="Book the rest of your life.">
      <Card className="mb-5">
        <div className="flex items-center gap-2 rounded-xl border border-input bg-card px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try: pilates tonight under $25"
            className="flex-1 bg-transparent text-sm outline-none"
          />
          <span className="text-xs text-muted-foreground">
            <MapPin className="mr-1 inline h-3 w-3" /> NYC
          </span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          AI search across studios, clinics, therapists, classes, trials. We earn 12–15% — never from you.
        </p>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {list.map((e) => (
          <Card key={e.id}>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg text-ink">{e.name}</h3>
              <Pill tone="sand">{e.kind}</Pill>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Tap to book directly. Confirmation drops into your Pegasus calendar.
            </p>
            <button className="mt-4 w-full rounded-full bg-primary py-2 text-sm font-semibold text-primary-foreground">
              {e.cta}
            </button>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}