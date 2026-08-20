import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid min-h-[72vh] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <FadeIn className="relative z-10 max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
            Markham Pain Clinic
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl lg:text-[3.4rem]">
            Your Path to Pain-Free Living Starts Here
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-charcoal-soft">
            Markham Pain Clinic offers chiropractic care, acupuncture, massage
            therapy and orthotics — helping you move with ease and get back to
            the life you love.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Book an Appointment</Button>
            <Button href="/services" variant="ghost">
              Our Services
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lift sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[520px]">
            <Image
              src="/images/hero-adjustment.jpg"
              alt="Hands-on wellness treatment helping a patient relax and move with ease"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_20%]"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
