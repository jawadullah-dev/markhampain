import Image from "next/image";

type PageHeroProps = {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({
  title,
  description,
  imageSrc,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-charcoal via-[#3a342c] to-gold-dark" />
        )}
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-charcoal/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/90">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
