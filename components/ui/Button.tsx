import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "teal";
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
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-150 ease-out active:scale-[0.98] hover:scale-[1.02]";

  const variants = {
    primary: "bg-coral text-ink hover:bg-coral-dim",
    teal: "bg-teal text-ink hover:bg-teal-dim",
    ghost:
      "border border-hairline bg-transparent text-mist hover:border-teal hover:text-teal",
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
