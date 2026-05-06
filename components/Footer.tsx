"use client";

import Link from "next/link";
import { NAV, SHOP } from "@/lib/data";
import { useT } from "./LanguageProvider";

export default function Footer() {
  const { t, locale } = useT();

  return (
    <footer className="bg-ink-800 border-t border-ink-600 mt-20">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div>
          <Link href="/" className="font-serif text-2xl tracking-wider text-white">
            <span className="text-gold">RIN</span> Hair Studio
          </Link>
          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-gold mb-4">
            {t.footer.navigate}
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-gold">
                  {t.nav[n.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-gold mb-4">
            {t.footer.hours}
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {t.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-white/90">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-gold mb-4">
            {t.footer.contact}
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>{SHOP.address[locale]}</li>
            <li>
              <a href={`tel:${SHOP.phone}`} className="hover:text-gold">
                {SHOP.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={SHOP.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {SHOP.facebookHandle}
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            {Object.entries(SHOP.social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="w-9 h-9 grid place-items-center border border-ink-500 text-white/70 hover:border-gold hover:text-gold uppercase text-xs"
              >
                {key[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ink-600">
        <div className="container-x py-6 text-xs text-white/50 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {SHOP.name}. {t.footer.rights}
          </span>
          <span>{t.footer.crafted}</span>
        </div>
      </div>
    </footer>
  );
}
