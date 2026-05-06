"use client";

import Image from "next/image";
import type { Testimonial } from "@/lib/data";
import { useT } from "./LanguageProvider";

export default function TestimonialCard({ t: testimonial }: { t: Testimonial }) {
  const { locale } = useT();

  return (
    <figure className="bg-ink-800 border border-ink-600 p-8 md:p-10">
      <span aria-hidden className="font-serif text-6xl text-gold leading-none">
        “
      </span>
      <blockquote className="mt-2 text-white/80 text-lg leading-relaxed italic">
        {testimonial.quote[locale]}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-white">{testimonial.name}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            {testimonial.role[locale]}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
