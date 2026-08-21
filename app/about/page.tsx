import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TeamPhoto } from "@/components/sections/TeamPhoto";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { aboutApproach } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Markham Pain Clinic's mission — drug-free, non-invasive chiropractic and acupuncture care that addresses the root cause of pain.",
  openGraph: {
    title: "About | Markham Pain and Chiropractic Clinic",
    description:
      "Drug-free chiropractic and acupuncture care in Markham focused on root-cause healing.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Markham Pain Clinic"
        description="A precise, patient-first approach to chiropractic and acupuncture — clear plans, lasting relief."
        imageSrc="/images/about-hero.webp"
        imageAlt="Modern physical therapy clinic interior with clean treatment spaces"
      />

      <section className="border-b border-hairline py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-tight text-mist sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-mute">
              The philosophies of chiropractic and acupuncture work incredibly
              in the treatment of neuromusculo-skeletal injuries. More and more
              people are choosing this drug-free, non-invasive method of healing
              because they look to address the root problem rather than just
              mask the pain and symptoms.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-hairline bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-10 font-display text-3xl tracking-tight text-mist sm:text-4xl">
              Our Approach
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {aboutApproach.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.07}>
                <article className="h-full border-t border-teal pt-5">
                  <h3 className="font-display text-xl text-mist">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <TeamPhoto />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-12 text-center">
              <h2 className="font-display text-3xl tracking-tight text-mist">
                Meet the team behind your care
              </h2>
              <div className="mt-6 flex justify-center">
                <Button href="/doctors">Meet Our Doctors</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
