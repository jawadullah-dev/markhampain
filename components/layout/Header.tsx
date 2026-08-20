"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { clinic, navLinks } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/5 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo compact className="min-w-0 shrink" />

        <nav
          className="hidden items-center gap-1 xl:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.split("#")[0] || link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-gold-dark"
                    : "text-charcoal-soft hover:text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={clinic.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition-colors hover:text-gold-dark"
          >
            <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
            {clinic.phone}
          </a>
          <Button href="/contact">Book Appointment</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-charcoal/10 text-charcoal xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-charcoal/5 bg-cream xl:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-charcoal hover:bg-cream-soft"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={clinic.phoneHref}
              className="mt-2 inline-flex items-center gap-2 rounded-xl px-3 py-3 text-base font-semibold text-charcoal"
            >
              <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
              {clinic.phone}
            </a>
            <Button href="/contact" className="mt-2 w-full">
              Book Appointment
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
