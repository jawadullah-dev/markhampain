import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function AboutPreview() {
  return (
    <section className="border-b border-hairline bg-surface py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <FadeIn className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-hairline">
            <Image
              src="/images/about-preview.webp"
              alt="Doctor consulting with a patient in warm clinical lighting"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="lg:col-span-6 lg:pl-4">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-teal">
            About Us
          </p>
          <h2 className="font-display text-3xl tracking-tight text-mist sm:text-4xl">
            Root-cause care for lasting relief
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">
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
