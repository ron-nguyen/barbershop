"use client";

import { LOCALES, type Locale } from "@/lib/i18n";
import { useT } from "./LanguageProvider";

const LABELS: Record<Locale, string> = { en: "EN", vi: "VI" };

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { locale, setLocale, t } = useT();

  return (
    <div
      className={`inline-flex items-center border border-ink-500 ${className}`}
      role="group"
      aria-label={t.language.switch}
    >
      {LOCALES.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors ${
              active
                ? "bg-gold text-ink"
                : "text-white/70 hover:text-gold"
            }`}
          >
            {LABELS[l]}
          </button>
        );
      })}
    </div>
  );
}
