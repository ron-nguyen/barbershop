"use client";

import Image from "next/image";
import Link from "next/link";
import { PROMOS } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import { useT } from "./LanguageProvider";

export default function PromoSection() {
  const { locale, t } = useT();

  return (
    <section className="py-20 md:py-28 bg-ink">
      <div className="container-x">
        <SectionTitle
          eyebrow={locale === "vi" ? "Ưu đãi" : "Promotions"}
          title={
            locale === "vi"
              ? "Ưu Đãi Đặc Biệt Cho Quý Ông"
              : "Special Offers For Gentlemen"
          }
          description={
            locale === "vi"
              ? "Ưu đãi độc quyền cập nhật mỗi tháng. Chỉ cần nhắc khi thanh toán — không cần app, không phức tạp."
              : "Exclusive deals refreshed monthly. Mention the offer at checkout — no app, no fuss."
          }
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {PROMOS.map((p) => (
            <article
              key={p.id}
              className="relative aspect-[16/10] overflow-hidden border border-ink-600 group"
            >
              <Image
                src={p.image}
                alt={p.title[locale]}
                fill
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <span className="self-start bg-gold text-ink text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
                  {p.badge[locale]}
                </span>
                <h3 className="mt-4 text-2xl md:text-3xl text-white max-w-sm">
                  {p.title[locale]}
                </h3>
                <p className="mt-3 text-white/70 text-sm max-w-md">
                  {p.description[locale]}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-block text-xs uppercase tracking-[0.25em] text-gold"
                >
                  {t.common.claimOffer} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
