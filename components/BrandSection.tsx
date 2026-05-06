"use client";

import { BRANDS } from "@/lib/data";
import { useT } from "./LanguageProvider";

export default function BrandSection() {
  const { locale } = useT();
  return (
    <section className="py-16 bg-ink border-b border-ink-600">
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40">
          {locale === "vi" ? "Đối tác tin cậy" : "Trusted Partners"}
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-6 items-center">
          {BRANDS.map((b) => (
            <div
              key={b.id}
              className="text-center font-serif text-xl md:text-2xl tracking-[0.2em] text-white/40 hover:text-gold transition-colors"
            >
              {b.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
