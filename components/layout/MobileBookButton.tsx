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
        className="inline-flex items-center gap-2 rounded-md bg-coral px-5 py-3 text-sm font-semibold text-ink transition hover:bg-coral-dim active:scale-[0.98]"
        aria-label="Book an appointment"
      >
        <Calendar className="h-4 w-4" aria-hidden="true" />
        Book Appointment
      </Link>
    </div>
  );
}
