import { FadeIn } from "@/components/ui/FadeIn";
import { clinic, trustBadges } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="border-b border-hairline bg-surface py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-base text-mute sm:text-lg">
            Trusted by families across Markham for natural, drug-free pain
            relief since{" "}
            <span className="font-mono text-teal">{clinic.foundedYear}</span>.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="border border-hairline px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-teal"
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
