import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { clinic } from "@/lib/content";

export function FinalCtaBanner() {
  return (
    <section className="bg-gold py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl text-cream sm:text-4xl lg:text-5xl">
            Ready to Feel Better?
          </h2>
          <p className="mt-4 text-lg text-cream/90">
            Book Your Complimentary Consultation Today
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="light">
              Book Appointment
            </Button>
            <a
              href={clinic.phoneHref}
              className="text-lg font-semibold text-cream transition hover:text-cream-soft"
            >
              {clinic.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
