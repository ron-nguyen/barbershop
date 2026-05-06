"use client";

import { INDIVIDUAL_SERVICES } from "@/lib/data";
import { useT } from "./LanguageProvider";

export default function PriceList() {
  const { locale } = useT();
  const items = INDIVIDUAL_SERVICES;
  const half = Math.ceil(items.length / 2);
  const left = items.slice(0, half);
  const right = items.slice(half);

  return (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 max-w-5xl mx-auto">
      {[left, right].map((col, idx) => (
        <ul key={idx} className="divide-y divide-ink-600">
          {col.map((s) => (
            <li
              key={s.id}
              className="flex items-baseline justify-between gap-4 py-4"
            >
              <span className="font-serif text-lg text-white">
                {s.name[locale]}
              </span>
              <span aria-hidden className="flex-1 mx-3 border-b border-dotted border-ink-500" />
              <span className="font-serif text-lg text-gold whitespace-nowrap">
                {s.price}
              </span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
