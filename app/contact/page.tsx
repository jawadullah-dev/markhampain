import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { HoursList } from "@/components/ui/HoursList";
import { clinic, doctors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Markham Pain Clinic at 8312 McCowan Rd Suite #206. Call 905 470-2626 or send us a message.",
  openGraph: {
    title: "Contact | Markham Pain and Chiropractic Clinic",
    description: "Book an appointment or reach our Markham clinic team.",
  },
};

export default function ContactPage() {
  const pascual = doctors[0];
  const fujimagari = doctors[1];

  return (
    <>
      <PageHero
        title="Contact Us"
        description="We're here to help you take the first step toward feeling better."
        imageSrc="/images/contact-visual.webp"
        imageAlt="Calm wellness clinic waiting room"
      />

      <section className="border-b border-hairline py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-tight text-mist">
              Visit the Clinic
            </h2>
            <ul className="mt-6 space-y-4 text-mute">
              <li>
                <span className="mb-1 block font-mono text-xs uppercase tracking-[0.14em] text-teal">
                  Address
                </span>
                {clinic.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </li>
              <li>
                <span className="mb-1 block font-mono text-xs uppercase tracking-[0.14em] text-teal">
                  Phone
                </span>
                <a href={clinic.phoneHref} className="font-mono hover:text-teal">
                  {clinic.phone}
                </a>
              </li>
              <li>
                <span className="mb-1 block font-mono text-xs uppercase tracking-[0.14em] text-teal">
                  Email
                </span>
                <a href={clinic.emailHref} className="hover:text-teal">
                  {clinic.email}
                </a>
              </li>
              <li>
                <span className="mb-1 block font-mono text-xs uppercase tracking-[0.14em] text-teal">
                  Massage Hours
                </span>
                <span className="font-mono">{clinic.massageHours}</span>
              </li>
            </ul>

            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-md border border-hairline lg:hidden">
              <Image
                src="/images/contact-visual.webp"
                alt="Calm clinic waiting area"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-10 overflow-hidden rounded-md border border-hairline">
              <iframe
                title="Map to Markham Pain Clinic at 8312 McCowan Rd Suite 206"
                src={clinic.map.embedUrl}
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="border border-hairline bg-surface p-6 sm:p-8">
              <h2 className="font-display text-3xl tracking-tight text-mist">
                Send a Message
              </h2>
              <p className="mt-2 text-sm text-mute">
                Tell us a little about what you need — we&apos;ll follow up to
                book your visit.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-10 text-center font-display text-3xl tracking-tight text-mist">
              Doctor Hours
            </h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn>
              <div className="border border-hairline bg-ink p-6 sm:p-8">
                <h3 className="font-display text-xl text-mist">
                  {pascual.name}&apos;s Hours
                </h3>
                <HoursList hours={pascual.hours} className="mt-5" />
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="border border-hairline bg-ink p-6 sm:p-8">
                <h3 className="font-display text-xl text-mist">
                  {fujimagari.name}&apos;s Hours
                </h3>
                <HoursList hours={fujimagari.hours} className="mt-5" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
