import { Check } from "lucide-react";

type ChecklistProps = {
  items: string[];
  className?: string;
};

export function Checklist({ items, className = "" }: ChecklistProps) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold"
            aria-hidden="true"
          >
            <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          <span className="text-charcoal-soft">{item}</span>
        </li>
      ))}
    </ul>
  );
}
