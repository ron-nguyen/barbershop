"use client";

import Image from "next/image";
import Link from "next/link";
import type { Combo } from "@/lib/data";
import { useT } from "./LanguageProvider";

export default function ComboCard({ combo }: { combo: Combo }) {
  const { locale, t } = useT();

  return (
    <article
      className={`group flex flex-col bg-ink-800 border ${
        combo.featured ? "border-gold" : "border-ink-600"
      } hover:border-gold transition-colors overflow-hidden`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={combo.image}
          alt={combo.name[locale]}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-gold text-ink text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
          {combo.badge[locale]}
        </span>
      </div>

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-2xl text-white">
            {combo.name[locale]}
          </h3>
          <span className="font-serif text-3xl text-gold">{combo.price}</span>
        </div>

        <div className="mt-5 pt-5 border-t border-ink-600 flex-1">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            {t.common.includes}
          </p>
          <ol className="mt-3 space-y-2 text-sm text-white/80">
            {combo.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-gold font-serif w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span>{step[locale]}</span>
              </li>
            ))}
          </ol>
        </div>

        <Link
          href="/contact"
          className="mt-7 btn-outline w-full justify-center"
        >
          {t.common.bookAppointment}
        </Link>
      </div>
    </article>
  );
}
