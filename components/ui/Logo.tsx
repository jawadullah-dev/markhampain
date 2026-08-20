import Link from "next/link";

type LogoProps = {
  className?: string;
  compact?: boolean;
  tone?: "dark" | "light";
};

export function Logo({
  className = "",
  compact = false,
  tone = "dark",
}: LogoProps) {
  const title =
    tone === "light"
      ? "text-cream group-hover:text-gold-light"
      : "text-charcoal group-hover:text-gold-dark";
  const subtitle = tone === "light" ? "text-cream/70" : "text-charcoal-soft";

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col ${className}`}
      aria-label="Markham Pain Clinic home"
    >
      <span
        className={`font-serif text-xl font-semibold leading-tight transition-colors sm:text-2xl ${title}`}
      >
        Markham Pain Clinic
      </span>
      {!compact && (
        <span
          className={`mt-0.5 text-[11px] font-medium uppercase tracking-[0.18em] ${subtitle}`}
        >
          Chiropractic &amp; Wellness
        </span>
      )}
    </Link>
  );
}
