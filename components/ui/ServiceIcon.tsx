import {
  Activity,
  Bone,
  Footprints,
  Hand,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  chiropractic: Bone,
  massage: Hand,
  acupuncture: Activity,
  orthotics: Footprints,
};

type ServiceIconProps = {
  name: keyof typeof icons;
  className?: string;
};

export function ServiceIcon({ name, className = "h-6 w-6" }: ServiceIconProps) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
