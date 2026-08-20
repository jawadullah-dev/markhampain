import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function HomeHero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-adjustment.jpg"
          alt="Chiropractor performing a hands-on spinal adjustment to help a patient move with ease"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-cream/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/80 via-transparent to-cream/30" />
      </div>

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
            Markham Pain Clinic
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl lg:text-6xl">
            Your Path to Pain-Free Living Starts Here
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-soft">
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
      </div>
    </section>
  );
}
