import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Care that feels personal — and works"
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.07}>
              <div className="h-full rounded-3xl border border-gold/20 bg-cream-soft p-6">
                <div className="mb-4 h-1 w-10 rounded-full bg-gold" />
                <h3 className="font-serif text-xl text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
