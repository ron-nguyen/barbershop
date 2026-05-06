"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import NewsletterForm from "@/components/NewsletterForm";
import { BLOG_POSTS } from "@/lib/data";
import { useT } from "@/components/LanguageProvider";

export default function BlogPage() {
  const { t, locale } = useT();
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <HeroSection
        height="compact"
        eyebrow={t.blog.heroEyebrow}
        title={t.blog.heroTitle}
        subtitle={t.blog.heroSubtitle}
        image="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Featured post */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <span className="eyebrow">{t.blog.featured}</span>
          <article className="mt-6 grid md:grid-cols-2 gap-10 items-center">
            <Link
              href={`/blog#${featured.slug}`}
              className="relative aspect-[4/3] overflow-hidden border border-ink-600 hover:border-gold transition-colors group"
            >
              <Image
                src={featured.image}
                alt={featured.title[locale]}
                fill
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-gold text-ink text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
                {featured.category[locale]}
              </span>
            </Link>
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
                <span>{featured.date}</span>
                <span className="w-1 h-1 bg-gold rounded-full" />
                <span>
                  {t.blog.by} {featured.author}
                </span>
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl text-white">
                {featured.title[locale]}
              </h2>
              <p className="mt-5 text-white/70 leading-relaxed">
                {featured.excerpt[locale]}
              </p>
              <Link
                href={`/blog#${featured.slug}`}
                className="btn-outline mt-8"
              >
                {t.common.readArticle}
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* All posts */}
      <section className="py-20 md:py-28 bg-ink-800 border-t border-ink-600">
        <div className="container-x">
          <SectionTitle
            eyebrow={t.blog.latestEyebrow}
            title={t.blog.latestTitle}
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <div key={p.id} id={p.slug}>
                <BlogCard post={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x text-center max-w-xl">
          <h2 className="text-3xl md:text-4xl text-white">
            {t.blog.newsletterTitle}
          </h2>
          <p className="mt-4 text-white/60">{t.blog.newsletterSubtitle}</p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
