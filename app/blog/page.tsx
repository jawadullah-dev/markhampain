import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Wellness articles and clinic news from Markham Pain and Chiropractic Clinic.",
  openGraph: {
    title: "Blog | Markham Pain and Chiropractic Clinic",
    description: "Tips and insights on chiropractic care and recovery.",
  },
};

// TODO: replace with real CMS-driven content once client provides posts.
export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog / News"
        description="Practical insights on pain relief, recovery, and staying active."
      />

      <section className="py-16 sm:py-20">
        <Stagger className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <article className="group flex h-full flex-col overflow-hidden border border-hairline bg-surface transition duration-200 hover:-translate-y-1 hover:border-teal">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <time
                    dateTime={post.date}
                    className="font-mono text-[11px] uppercase tracking-wide text-teal"
                  >
                    {new Date(post.date).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 font-display text-xl text-mist">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog#${post.slug}`}
                    className="mt-5 text-sm font-medium text-coral transition-colors group-hover:text-teal"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
