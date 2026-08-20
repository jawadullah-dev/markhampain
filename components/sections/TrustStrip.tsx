import { FadeIn } from "@/components/ui/FadeIn";
import { clinic, trustBadges } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="bg-cream-soft py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-base text-charcoal-soft sm:text-lg">
            Trusted by families across Markham for natural, drug-free pain
            relief since {clinic.foundedYear}.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-gold/30 bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gold-dark sm:text-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
