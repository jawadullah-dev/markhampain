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
          className="flex items-baseline justify-between gap-4 border-b border-hairline pb-2 last:border-0"
        >
          <span className="font-mono text-sm text-mist">{row.day}</span>
          <span className="text-right font-mono text-sm text-teal">
            {row.hours}
          </span>
        </li>
      ))}
    </ul>
  );
}
