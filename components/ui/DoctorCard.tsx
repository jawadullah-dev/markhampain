import Image from "next/image";
import { HoursList } from "@/components/ui/HoursList";
import type { Doctor } from "@/types";

type DoctorCardProps = {
  doctor: Doctor;
};

function getInitials(name: string) {
  return name
    .replace(/^Dr\.\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const initials = getInitials(doctor.name);

  return (
    <article className="overflow-hidden rounded-3xl bg-cream-soft shadow-soft">
      <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[220px_1fr] md:items-start">
        <div className="mx-auto w-full max-w-[220px]">
          <div className="relative aspect-square overflow-hidden rounded-full border-4 border-cream shadow-soft">
            {doctor.useInitialsPlaceholder ? (
              <div
                className="flex h-full w-full items-center justify-center bg-[#EDE6DA] font-serif text-5xl font-semibold text-gold-dark"
                role="img"
                aria-label={doctor.imageAlt}
              >
                {initials}
              </div>
            ) : (
              <Image
                src={doctor.image}
                alt={doctor.imageAlt}
                fill
                sizes="220px"
                className="object-cover object-top"
              />
            )}
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-charcoal sm:text-3xl">
            {doctor.name}
          </h2>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-gold-dark">
            {doctor.credentials}
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal-soft">
            {doctor.bio}
          </p>
          {/* TODO: client will refine Dr. Fujimagari's bio copy */}
          {doctor.bioTodo && (
            <span className="sr-only">Bio pending client confirmation</span>
          )}

          <h3 className="mt-8 font-serif text-xl text-charcoal">
            Clinic Hours
          </h3>
          <HoursList hours={doctor.hours} className="mt-4 max-w-md" />
        </div>
      </div>
    </article>
  );
}
