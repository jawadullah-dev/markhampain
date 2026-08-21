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
      <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-hairline">
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
        <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-hairline bg-surface">
          <Image
            src={service.secondaryImage}
            alt={service.secondaryImageAlt || ""}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-4"
          />
        </div>
      )}
    </div>
  );

  const textBlock = (
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-teal">
        Our Services
      </p>
      <h1 className="font-display text-4xl tracking-tight text-mist sm:text-5xl">
        {service.title}
      </h1>
      <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">
        {service.intro}
      </p>
      <p className="mt-4 text-base leading-relaxed text-mute">{service.body}</p>
    </div>
  );

  return (
    <>
      <section className="border-b border-hairline py-16 sm:py-20">
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

      <section className="border-b border-hairline bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-tight text-mist">
              This treatment helps with
            </h2>
            <Checklist items={service.helpsWith} className="mt-8" />
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-tight text-mist">
              Curious if this treatment is right for you?
            </h2>
            <p className="mt-3 text-mute">Book a complimentary consultation.</p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Book Appointment</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
