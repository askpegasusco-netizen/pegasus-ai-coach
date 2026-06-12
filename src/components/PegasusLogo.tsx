export function PegasusLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M4 22c4-2 6-6 8-10 2 4 4 6 8 6 4 0 6-2 8-6-1 8-7 14-14 14-5 0-9-2-10-4z"
          fill="oklch(0.63 0.13 42)"
        />
        <circle cx="22" cy="10" r="1.8" fill="oklch(0.27 0.03 50)" />
        <path
          d="M4 22c3-1 5-3 7-7"
          stroke="oklch(0.27 0.03 50)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight text-ink">
        Pegasus
      </span>
    </div>
  );
}