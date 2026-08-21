import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section className="border-b border-hairline py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Care that feels personal — and works"
            align="left"
          />
        </FadeIn>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full border-t border-teal pt-5">
                <h3 className="font-display text-xl text-mist">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
