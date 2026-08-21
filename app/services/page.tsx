import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
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
        imageSrc="/images/chiropractic.webp"
        imageAlt="Chiropractic spinal adjustment treatment in a clinical setting"
      />

      <section className="border-b border-hairline py-16 sm:py-20">
        <Stagger className="mx-auto grid max-w-7xl gap-px bg-hairline px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          {servicesOverview.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={service.href}
                className="group flex h-full flex-col bg-ink p-8 transition-colors duration-200 hover:bg-surface"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center border border-hairline text-teal transition-colors group-hover:border-teal">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </span>
                <h2 className="font-display text-2xl text-mist">{service.title}</h2>
                <p className="mt-3 flex-1 text-mute">{service.shortDescription}</p>
                <span className="mt-6 text-sm font-medium text-coral transition-colors group-hover:text-teal">
                  Learn More →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/motor-vehicle-accidents"
              className="flex flex-col border border-hairline p-8 transition hover:border-teal sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="font-display text-2xl text-mist">
                  Motor Vehicle Accident Care
                </h2>
                <p className="mt-2 max-w-2xl text-mute">
                  Personalized treatment after an accident — with insurance
                  coordination handled directly through the clinic.
                </p>
              </div>
              <span className="mt-4 text-sm font-medium text-coral sm:mt-0">
                Learn More →
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
