import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FinalCtaBanner } from "@/components/sections/FinalCtaBanner";
import { HomeHero } from "@/components/sections/HomeHero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Markham Pain Clinic offers chiropractic care, acupuncture, massage therapy and orthotics — helping you move with ease in Markham, Ontario.",
  openGraph: {
    title: "Home | Markham Pain and Chiropractic Clinic",
    description:
      "Your path to pain-free living starts here. Book a complimentary consultation today.",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <ServicesOverview />
      <AboutPreview />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FinalCtaBanner />
    </>
  );
}
