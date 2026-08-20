import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/lib/content";

const SLUG = "acupuncture";

export const metadata: Metadata = {
  title: "Acupuncture",
  description: getServiceBySlug(SLUG)?.metaDescription,
  openGraph: {
    title: "Acupuncture | Markham Pain and Chiropractic Clinic",
    description: getServiceBySlug(SLUG)?.metaDescription,
  },
};

export default function AcupuncturePage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
