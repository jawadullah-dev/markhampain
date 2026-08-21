import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { clinic } from "@/lib/content";

export function FinalCtaBanner() {
  return (
    <section className="border-b border-hairline bg-teal py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Ready to Feel Better?
          </h2>
          <p className="mt-4 text-lg text-ink/80">
            Book Your Complimentary Consultation Today
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" className="!bg-ink !text-mist hover:!bg-surface">
              Book Appointment
            </Button>
            <a
              href={clinic.phoneHref}
              className="font-mono text-lg font-medium text-ink transition hover:opacity-80"
            >
              {clinic.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
