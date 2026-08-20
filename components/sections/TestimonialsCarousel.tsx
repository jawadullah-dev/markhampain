"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="scroll-mt-24 bg-cream-soft py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Testimonials"
            title="What our patients say"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative mx-auto max-w-3xl rounded-3xl bg-cream p-8 shadow-soft sm:p-12">
            <div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 font-serif text-lg font-semibold text-gold-dark"
              aria-hidden="true"
            >
              {current.initials}
            </div>
            <blockquote>
              <p className="text-center font-serif text-xl leading-relaxed text-charcoal sm:text-2xl">
                “{current.quote}”
              </p>
              <footer className="mt-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-gold-dark">
                — {current.author}
              </footer>
            </blockquote>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 text-charcoal transition hover:border-gold hover:text-gold-dark"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Testimonials">
                {testimonials.map((t, i) => (
                  <button
                    key={t.author}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show testimonial from ${t.author}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === index ? "bg-gold" : "bg-charcoal/20"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 text-charcoal transition hover:border-gold hover:text-gold-dark"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
