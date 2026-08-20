import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { clinic, footerLinks } from "@/lib/content";

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.4V9.84c0-2.37 1.4-3.68 3.55-3.68 1.03 0 2.1.18 2.1.18v2.32h-1.18c-1.17 0-1.53.73-1.53 1.48v1.78h2.61l-.42 2.9h-2.19V22c4.78-.75 8.44-4.91 8.44-9.93z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/5 bg-charcoal text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Logo tone="light" />
          <p className="max-w-xs text-sm leading-relaxed text-cream/75">
            Chiropractic care, acupuncture, massage therapy and custom orthotics
            — helping Markham families move with ease.
          </p>
          <div className="flex gap-3">
            <a
              href={clinic.social.facebook}
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-gold"
            >
              <FacebookIcon />
            </a>
            <a
              href={clinic.social.instagram}
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-gold"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-cream">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/75 transition hover:text-gold-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-cream">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
              <span>{clinic.address}</span>
            </li>
            <li>
              <a
                href={clinic.phoneHref}
                className="inline-flex items-center gap-3 transition hover:text-gold-light"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold-light" />
                {clinic.phone}
              </a>
            </li>
            <li>
              <a
                href={clinic.emailHref}
                className="inline-flex items-center gap-3 transition hover:text-gold-light"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold-light" />
                {clinic.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-cream">Hours</h3>
          <p className="mt-4 text-sm leading-relaxed text-cream/75">
            Doctor hours vary by provider. Massage therapy is available by
            appointment only. Call us to find a time that works for you.
          </p>
          <Link
            href="/doctors"
            className="mt-4 inline-block text-sm font-semibold text-gold-light transition hover:text-cream"
          >
            View doctor schedules →
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {clinic.name}. All rights reserved.
          </p>
          <p>Markham, Ontario, Canada</p>
        </div>
      </div>
    </footer>
  );
}
