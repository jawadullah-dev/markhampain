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
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ease-out ${
        solid
          ? "border-b border-hairline bg-ink/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo compact className="min-w-0 shrink" />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.split("#")[0] || link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-teal" : "text-mute hover:text-mist"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-teal transition-transform duration-200 ease-out ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={clinic.phoneHref}
            className="inline-flex items-center gap-2 font-mono text-sm text-mute transition-colors hover:text-teal"
          >
            <Phone className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
            {clinic.phone}
          </a>
          <Button href="/contact">Book Appointment</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline text-mist xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-ink xl:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-medium text-mist hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={clinic.phoneHref}
              className="mt-2 inline-flex items-center gap-2 rounded-md px-3 py-3 font-mono text-sm text-mute"
            >
              <Phone className="h-4 w-4 text-teal" aria-hidden="true" />
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
