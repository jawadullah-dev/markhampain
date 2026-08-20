import type { Metadata } from "next";
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
      />

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl text-charcoal">Visit the Clinic</h2>
            <ul className="mt-6 space-y-4 text-charcoal-soft">
              <li>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gold-dark">
                  Address
                </span>
                {clinic.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </li>
              <li>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gold-dark">
                  Phone
                </span>
                <a href={clinic.phoneHref} className="hover:text-gold-dark">
                  {clinic.phone}
                </a>
              </li>
              <li>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gold-dark">
                  Email
                </span>
                <a href={clinic.emailHref} className="hover:text-gold-dark">
                  {clinic.email}
                </a>
              </li>
              <li>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gold-dark">
                  Massage Hours
                </span>
                {clinic.massageHours}
              </li>
            </ul>

            <div className="mt-10 overflow-hidden rounded-3xl shadow-soft">
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
            <div className="rounded-3xl bg-cream-soft p-6 shadow-soft sm:p-8">
              <h2 className="font-serif text-3xl text-charcoal">
                Send a Message
              </h2>
              <p className="mt-2 text-sm text-charcoal-soft">
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

      <section className="bg-cream-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-10 text-center font-serif text-3xl text-charcoal">
              Doctor Hours
            </h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-3xl bg-cream p-6 shadow-soft sm:p-8">
                <h3 className="font-serif text-xl text-charcoal">
                  {pascual.name}&apos;s Hours
                </h3>
                <HoursList hours={pascual.hours} className="mt-5" />
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="rounded-3xl bg-cream p-6 shadow-soft sm:p-8">
                <h3 className="font-serif text-xl text-charcoal">
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
