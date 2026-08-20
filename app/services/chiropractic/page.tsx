import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/lib/content";

const SLUG = "chiropractic";

export const metadata: Metadata = {
  title: "Chiropractic Care",
  description: getServiceBySlug(SLUG)?.metaDescription,
  openGraph: {
    title: "Chiropractic Care | Markham Pain and Chiropractic Clinic",
    description: getServiceBySlug(SLUG)?.metaDescription,
  },
};

export default function ChiropracticPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
