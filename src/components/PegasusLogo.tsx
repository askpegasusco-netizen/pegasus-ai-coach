import pegasusIcon from "@/assets/pegasus-icon.png.asset.json";

export function PegasusLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={pegasusIcon.url}
        alt="Pegasus"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
      <span className="font-display text-xl font-semibold tracking-tight text-ink">
        Pegasus
      </span>
    </div>
  );
}