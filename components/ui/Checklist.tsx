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
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-teal text-teal"
            aria-hidden="true"
          >
            <Check className="h-3 w-3" strokeWidth={2.5} />
          </span>
          <span className="text-mute">{item}</span>
        </li>
      ))}
    </ul>
  );
}
