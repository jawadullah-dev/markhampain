"use client";

import { Calendar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileBookButton() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4 lg:hidden">
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-cream shadow-lift transition hover:bg-gold-light"
        aria-label="Book an appointment"
      >
        <Calendar className="h-4 w-4" aria-hidden="true" />
        Book Appointment
      </Link>
    </div>
  );
}
