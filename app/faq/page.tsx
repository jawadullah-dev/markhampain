import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/sections/PageHero";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about referrals, payments, acupuncture, booking and care at Markham Pain Clinic.",
  openGraph: {
    title: "FAQ | Markham Pain and Chiropractic Clinic",
    description: "Frequently asked questions about our clinic and services.",
  },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Clear answers to help you feel confident before your first visit."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Accordion items={faqs} />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
