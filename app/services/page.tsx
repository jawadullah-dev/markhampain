import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { servicesOverview } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore chiropractic care, massage therapy, acupuncture and custom orthotics at Markham Pain Clinic.",
  openGraph: {
    title: "Services | Markham Pain and Chiropractic Clinic",
    description:
      "Chiropractic, massage, acupuncture and orthotics in Markham, ON.",
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Comprehensive, drug-free care to help you move comfortably and live fully."
        imageSrc="/images/chiropractic.jpg"
        imageAlt="Hands-on chiropractic care supporting comfortable movement"
      />

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {servicesOverview.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.07}>
              <Link
                href={service.href}
                className="flex h-full flex-col rounded-3xl bg-cream-soft p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark">
                  <ServiceIcon name={service.icon} />
                </span>
                <h2 className="font-serif text-2xl text-charcoal">
                  {service.title}
                </h2>
                <p className="mt-3 flex-1 text-charcoal-soft">
                  {service.shortDescription}
                </p>
                <span className="mt-6 text-sm font-semibold text-gold-dark">
                  Learn More →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/motor-vehicle-accidents"
              className="flex flex-col rounded-3xl border border-gold/25 bg-cream-soft p-8 transition hover:border-gold sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="font-serif text-2xl text-charcoal">
                  Motor Vehicle Accident Care
                </h2>
                <p className="mt-2 max-w-2xl text-charcoal-soft">
                  Personalized treatment after an accident — with insurance
                  coordination handled directly through the clinic.
                </p>
              </div>
              <span className="mt-4 text-sm font-semibold text-gold-dark sm:mt-0">
                Learn More →
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
