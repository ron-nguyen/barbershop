"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SHOP } from "@/lib/data";
import { useT } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useT();

  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-ink-600">
      <div className="container-x flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-xl md:text-2xl tracking-wider text-white">
            <span className="text-gold">RIN</span>
            <span className="hidden sm:inline"> Hair Studio</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm uppercase tracking-[0.2em] text-white/80 hover:text-gold transition-colors"
            >
              {t.nav[n.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href={`tel:${SHOP.phone}`}
            className="hidden xl:inline text-sm text-white/70 hover:text-gold"
          >
            {SHOP.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-gold !py-2 !px-4 text-xs">
            {t.common.bookNow}
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-600 bg-ink">
          <nav className="container-x py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm uppercase tracking-[0.2em] text-white/80 hover:text-gold"
              >
                {t.nav[n.key]}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-3 pt-2">
              <LanguageSwitcher />
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-gold !py-2 !px-4 text-xs"
              >
                {t.common.bookNow}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
