import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Checklist } from "@/components/ui/Checklist";
import { FadeIn } from "@/components/ui/FadeIn";
import type { ServicePage } from "@/types";

type ServiceDetailProps = {
  service: ServicePage;
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  const imageBlock = (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
      {service.secondaryImage && (
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-soft">
          <Image
            src={service.secondaryImage}
            alt={service.secondaryImageAlt || ""}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain bg-cream-soft p-4"
          />
        </div>
      )}
    </div>
  );

  const textBlock = (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
        Our Services
      </p>
      <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">
        {service.title}
      </h1>
      <p className="mt-5 text-base leading-relaxed text-charcoal-soft sm:text-lg">
        {service.intro}
      </p>
      <p className="mt-4 text-base leading-relaxed text-charcoal-soft">
        {service.body}
      </p>
    </div>
  );

  return (
    <>
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <FadeIn className={service.imageLeft ? "lg:order-1" : "lg:order-2"}>
            {imageBlock}
          </FadeIn>
          <FadeIn
            delay={0.08}
            className={service.imageLeft ? "lg:order-2" : "lg:order-1"}
          >
            {textBlock}
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream-soft py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl text-charcoal">
              This treatment helps with
            </h2>
            <Checklist items={service.helpsWith} className="mt-8" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl text-charcoal">
              Curious if this treatment is right for you?
            </h2>
            <p className="mt-3 text-charcoal-soft">
              Book a complimentary consultation.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Book Appointment</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
