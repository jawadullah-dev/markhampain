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
    <article className="border border-hairline bg-surface">
      <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[200px_1fr] md:items-start">
        <div className="mx-auto w-full max-w-[200px]">
          <div className="relative aspect-square overflow-hidden rounded-md border border-hairline">
            {doctor.useInitialsPlaceholder ? (
              <div
                className="flex h-full w-full items-center justify-center bg-ink font-mono text-4xl text-teal"
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
                sizes="200px"
                className="object-cover object-top"
              />
            )}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl tracking-tight text-mist sm:text-3xl">
            {doctor.name}
          </h2>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-teal">
            {doctor.credentials}
          </p>
          <p className="mt-4 text-base leading-relaxed text-mute">{doctor.bio}</p>
          {doctor.bioTodo && (
            <span className="sr-only">Bio pending client confirmation</span>
          )}

          <h3 className="mt-8 font-display text-xl text-mist">Clinic Hours</h3>
          <HoursList hours={doctor.hours} className="mt-4 max-w-md" />
        </div>
      </div>
    </article>
  );
}
