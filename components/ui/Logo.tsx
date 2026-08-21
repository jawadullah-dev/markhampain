import Link from "next/link";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className = "", compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex flex-col ${className}`}
      aria-label="Markham Pain Clinic home"
    >
      <span className="font-display text-lg font-medium leading-tight tracking-tight text-mist transition-colors group-hover:text-teal sm:text-xl">
        Markham Pain Clinic
      </span>
      {!compact && (
        <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
          Alignment · Precision · Care
        </span>
      )}
    </Link>
  );
}
