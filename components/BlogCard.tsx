"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/data";
import { useT } from "./LanguageProvider";

export default function BlogCard({ post }: { post: BlogPost }) {
  const { locale, t } = useT();

  return (
    <article className="group flex flex-col">
      <Link
        href={`/blog#${post.slug}`}
        className="relative aspect-[16/10] overflow-hidden border border-ink-600 group-hover:border-gold transition-colors"
      >
        <Image
          src={post.image}
          alt={post.title[locale]}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-gold text-ink text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
          {post.category[locale]}
        </span>
      </Link>
      <div className="mt-5">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-gold rounded-full" />
          <span>
            {t.blog.by} {post.author}
          </span>
        </div>
        <h3 className="mt-3 text-xl text-white group-hover:text-gold transition-colors">
          <Link href={`/blog#${post.slug}`}>{post.title[locale]}</Link>
        </h3>
        <p className="mt-3 text-sm text-white/60 leading-relaxed">
          {post.excerpt[locale]}
        </p>
        <Link
          href={`/blog#${post.slug}`}
          className="mt-4 inline-block text-xs uppercase tracking-[0.25em] text-gold"
        >
          {t.blog.readMore} →
        </Link>
      </div>
    </article>
  );
}
