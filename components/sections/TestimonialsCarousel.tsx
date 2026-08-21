"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = testimonials[index];

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => {
      const next = i + dir;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-b border-hairline bg-surface py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Testimonials" title="What our patients say" />
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="relative mx-auto max-w-3xl overflow-hidden border border-hairline bg-ink p-8 sm:p-12">
            <div
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-hairline font-mono text-sm text-teal"
              aria-hidden="true"
            >
              {current.initials}
            </div>

            <div className="relative min-h-[160px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.blockquote
                  key={current.author}
                  custom={direction}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, x: direction >= 0 ? 48 : -48 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={
                    reduceMotion
                      ? undefined
                      : { opacity: 0, x: direction >= 0 ? -48 : 48 }
                  }
                  transition={{ duration: 0.35, ease: easeOut }}
                >
                  <p className="text-center font-display text-xl leading-relaxed text-mist sm:text-2xl">
                    “{current.quote}”
                  </p>
                  <footer className="mt-6 text-center font-mono text-xs uppercase tracking-[0.16em] text-teal">
                    — {current.author}
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center border border-hairline text-mist transition hover:border-teal hover:text-teal"
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
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={`h-1.5 w-6 transition ${
                      i === index ? "bg-coral" : "bg-mute/40"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center border border-hairline text-mist transition hover:border-teal hover:text-teal"
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
