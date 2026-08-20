import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { servicesOverview } from "@/lib/content";

export function ServicesOverview() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="What We Offer"
            title="Care Designed Around How You Move"
            description="From spinal adjustments to custom orthotics, our team helps you address the root cause of pain — not just the symptoms."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesOverview.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-3xl bg-cream-soft p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark">
                  <ServiceIcon name={service.icon} />
                </span>
                <h3 className="font-serif text-xl text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-soft">
                  {service.shortDescription}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 text-sm font-semibold text-gold-dark transition hover:text-charcoal"
                >
                  Learn More →
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
