import Image from "next/image";

export function TeamPhoto() {
  // TODO: client will provide real team photo — replace /public/images/team-placeholder.jpg
  return (
    <div className="relative mx-auto aspect-[16/9] max-w-4xl overflow-hidden rounded-3xl shadow-soft">
      <Image
        src="/images/team-placeholder.jpg"
        alt="Placeholder image for the Markham Pain Clinic team photo"
        fill
        sizes="(max-width: 1024px) 100vw, 896px"
        className="object-cover"
      />
    </div>
  );
}
