import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-gold text-cream shadow-soft hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lift focus-visible:outline-gold",
    ghost:
      "border border-charcoal/20 bg-transparent text-charcoal hover:-translate-y-0.5 hover:border-gold hover:text-gold-dark focus-visible:outline-gold",
    light:
      "bg-cream text-charcoal shadow-soft hover:-translate-y-0.5 hover:bg-cream-soft focus-visible:outline-cream",
  };

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
