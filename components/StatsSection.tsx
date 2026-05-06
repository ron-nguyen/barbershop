"use client";

import { useT } from "./LanguageProvider";

export default function StatsSection() {
  const { t } = useT();
  return (
    <section className="bg-ink-800 border-y border-ink-600">
      <div className="container-x py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {t.stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-serif text-4xl md:text-5xl text-gold">
              {s.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
