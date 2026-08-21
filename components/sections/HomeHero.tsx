"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { SpineLine } from "@/components/brand/SpineLine";
import { Button } from "@/components/ui/Button";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  const lines = [
    "Your Path to",
    "Pain-Free Living",
    "Starts Here",
  ];

  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-20">
        <div className="relative z-10 lg:col-span-6 xl:col-span-5">
          <motion.p
            className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-teal"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            Markham Pain Clinic
          </motion.p>

          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-mist sm:text-5xl lg:text-[3.35rem]">
            {lines.map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: reduceMotion ? 0 : 0.12 + i * 0.12,
                  ease: easeOut,
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-mute sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: reduceMotion ? 0 : 0.55,
              ease: easeOut,
            }}
          >
            Markham Pain Clinic offers chiropractic care, acupuncture, massage
            therapy and orthotics — helping you move with ease and get back to
            the life you love.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: reduceMotion ? 0 : 0.75,
              ease: easeOut,
            }}
          >
            <Button href="/contact">Book an Appointment</Button>
            <Button href="/services" variant="ghost">
              Our Services
            </Button>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center gap-6 lg:col-span-6 xl:col-span-7">
          <motion.div
            className="hidden h-64 w-12 shrink-0 sm:block lg:h-80"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <SpineLine progress={0} className="h-full w-full" />
          </motion.div>

          <motion.div
            className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-md border border-hairline sm:aspect-[5/4] lg:max-w-none lg:aspect-[4/3]"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5, ease: easeOut }}
          >
            <Image
              src="/images/hero-adjustment.webp"
              alt="Chiropractor adjusting a patient's back during a clinical treatment session"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
