import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/lib/content";

const SLUG = "massage-therapy";

export const metadata: Metadata = {
  title: "Massage Therapy",
  description: getServiceBySlug(SLUG)?.metaDescription,
  openGraph: {
    title: "Massage Therapy | Markham Pain and Chiropractic Clinic",
    description: getServiceBySlug(SLUG)?.metaDescription,
  },
};

export default function MassageTherapyPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
