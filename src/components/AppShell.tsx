import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";
import type { ReactNode } from "react";
import { NAV } from "@/lib/pegasus";
import { PegasusLogo } from "./PegasusLogo";

export function AppShell({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grain-bg text-foreground">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 pb-24 pt-6 md:px-8 md:pt-8">
        {/* sidebar */}
        <aside className="sticky top-6 hidden h-[calc(100vh-3rem)] w-60 shrink-0 flex-col rounded-3xl border border-border bg-card/70 p-5 backdrop-blur md:flex">
          <Link to="/dashboard">
            <PegasusLogo />
          </Link>
          <nav className="mt-8 flex flex-1 flex-col gap-1">
            {NAV.map((item) => {
              const active = location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button
            onClick={() => navigate({ to: "/panic" })}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-destructive/40 bg-destructive/10 px-3 py-2.5 text-sm font-semibold text-destructive transition hover:bg-destructive hover:text-destructive-foreground"
          >
            <ShieldAlert className="h-4 w-4" />
            Panic Button
          </button>
        </aside>

        {/* main */}
        <main className="min-w-0 flex-1">
          <div className="mb-6 flex items-end justify-between md:hidden">
            <PegasusLogo />
            <button
              onClick={() => navigate({ to: "/panic" })}
              className="rounded-full border border-destructive/40 bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive"
            >
              Panic
            </button>
          </div>
          {(title || subtitle) && (
            <header className="mb-6">
              {subtitle && (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {subtitle}
                </p>
              )}
              {title && (
                <h1 className="mt-1 text-3xl font-semibold text-ink md:text-4xl">
                  {title}
                </h1>
              )}
            </header>
          )}
          {children}
        </main>
      </div>

      {/* mobile bottom nav */}
      <nav className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-around gap-1 rounded-2xl border border-border bg-card/95 p-1.5 shadow-lg backdrop-blur md:hidden">
        {NAV.slice(0, 5).map((item) => {
          const active = location.pathname.startsWith(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-1 flex-col items-center gap-0.5 rounded-xl px-2 py-2 text-[10px] font-medium ${
                active ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card/80 p-5 shadow-[0_1px_0_oklch(0.86_0.025_78)] backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

export function Pill({ children, tone = "sand" }: { children: ReactNode; tone?: "sand" | "sage" | "terracotta" | "ink" }) {
  const map: Record<string, string> = {
    sand: "bg-secondary text-secondary-foreground",
    sage: "bg-sage/20 text-sage",
    terracotta: "bg-primary/15 text-primary",
    ink: "bg-ink text-cream",
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${map[tone]}`}>
      {children}
    </span>
  );
}