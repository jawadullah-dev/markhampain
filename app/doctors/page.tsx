import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { doctors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet Dr. James Pascual and Dr. John Fujimagari — experienced chiropractors serving families in Markham, Ontario.",
  openGraph: {
    title: "Our Team | Markham Pain and Chiropractic Clinic",
    description:
      "Meet the doctors at Markham Pain Clinic and view clinic hours.",
  },
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        description="Experienced chiropractors dedicated to personalized, drug-free care in Markham."
        imageSrc="/images/about-hero.jpg"
        imageAlt="Welcoming consultation atmosphere at Markham Pain Clinic"
      />

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
          {doctors.map((doctor, index) => (
            <FadeIn key={doctor.id} delay={index * 0.08}>
              <DoctorCard doctor={doctor} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
