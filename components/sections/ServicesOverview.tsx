import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { servicesOverview } from "@/lib/content";

export function ServicesOverview() {
  return (
    <section className="border-b border-hairline py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="What We Offer"
            title="Care Designed Around How You Move"
            description="From spinal adjustments to custom orthotics, our team helps you address the root cause of pain — not just the symptoms."
            align="left"
          />
        </FadeIn>

        <Stagger className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {servicesOverview.map((service) => (
            <StaggerItem key={service.slug}>
              <article className="group flex h-full flex-col bg-ink p-6 transition-colors duration-200 hover:bg-surface">
                <span className="mb-4 flex h-10 w-10 items-center justify-center border border-hairline text-teal transition-colors group-hover:border-teal">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl text-mist">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">
                  {service.shortDescription}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 text-sm font-medium text-coral transition-colors group-hover:text-teal"
                >
                  Learn More →
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
