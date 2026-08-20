import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Checklist } from "@/components/ui/Checklist";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/sections/PageHero";
import { mvaContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Motor Vehicle Accidents",
  description:
    "Chiropractic, acupuncture and massage care for motor vehicle accident injuries in Markham — with direct insurance coordination.",
  openGraph: {
    title: "Motor Vehicle Accidents | Markham Pain and Chiropractic Clinic",
    description:
      "Timely care after a motor vehicle accident to support a healthy, pain-free recovery.",
  },
};

export default function MotorVehicleAccidentsPage() {
  return (
    <>
      <PageHero
        title="Motor Vehicle Accident Care"
        description="Don't let minor injuries become chronic. Get assessed early and recover with confidence."
        imageSrc="/images/mva-hero.jpg"
        imageAlt="Driver on the road at dusk — tasteful context for motor vehicle accident care"
      />

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
              <Image
                src="/images/mva-hero.jpg"
                alt="City traffic on a rainy road representing motor vehicle accident recovery care"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-lg leading-relaxed text-charcoal-soft">
              {mvaContent.intro}
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal-soft">
              {mvaContent.body}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream-soft py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl text-charcoal">
              Common post-accident symptoms
            </h2>
            <Checklist items={[...mvaContent.symptoms]} className="mt-8" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-lg leading-relaxed text-charcoal-soft">
              {mvaContent.closing}
            </p>
            <div className="mt-8">
              <Button href="/contact">Book a Consultation</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
