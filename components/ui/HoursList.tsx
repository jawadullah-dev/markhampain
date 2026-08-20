import type { DoctorHours } from "@/types";

type HoursListProps = {
  hours: DoctorHours[];
  className?: string;
};

export function HoursList({ hours, className = "" }: HoursListProps) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {hours.map((row) => (
        <li
          key={row.day}
          className="flex items-baseline justify-between gap-4 border-b border-charcoal/5 pb-2 last:border-0"
        >
          <span className="text-sm font-medium text-charcoal">{row.day}</span>
          <span className="text-right text-sm font-medium text-gold-dark">
            {row.hours}
          </span>
        </li>
      ))}
    </ul>
  );
}
