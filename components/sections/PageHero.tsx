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
    <section className="relative isolate overflow-hidden border-b border-hairline">
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
          <div className="h-full w-full bg-surface" />
        )}
        <div className="absolute inset-0 bg-ink/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <h1 className="max-w-3xl font-display text-4xl leading-tight tracking-tight text-mist sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mute">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
