import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/lib/content";

const SLUG = "orthotics";

export const metadata: Metadata = {
  title: "Custom Orthotics",
  description: getServiceBySlug(SLUG)?.metaDescription,
  openGraph: {
    title: "Custom Orthotics | Markham Pain and Chiropractic Clinic",
    description: getServiceBySlug(SLUG)?.metaDescription,
  },
};

export default function OrthoticsPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
