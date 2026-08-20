import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function AboutPreview() {
  return (
    <section className="bg-cream-soft py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
            <Image
              src="/images/about-preview.jpg"
              alt="Patients listening attentively during a warm, personalized consultation at the clinic"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            About Us
          </p>
          <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
            Root-cause care for lasting relief
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal-soft sm:text-lg">
            Markham Pain and Chiropractic Clinic exists to address the root
            cause of pain, not just mask the symptoms. Our team combines
            chiropractic, acupuncture and massage therapy to create a
            personalized path back to full mobility.
          </p>
          <div className="mt-8">
            <Button href="/doctors">Meet Our Doctors</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
