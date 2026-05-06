"use client";

import { SHOP } from "@/lib/data";
import { useT } from "./LanguageProvider";

export default function ContactInfo() {
  const { t, locale } = useT();
  return (
    <div className="space-y-8">
      <div>
        <span className="eyebrow">{t.contact.visit}</span>
        <p className="mt-2 text-white text-lg leading-relaxed">
          {SHOP.address[locale]}
        </p>
      </div>
      <div>
        <span className="eyebrow">{t.contact.call}</span>
        <p className="mt-2">
          <a
            href={`tel:${SHOP.phone}`}
            className="text-white text-lg hover:text-gold"
          >
            {SHOP.phoneDisplay}
          </a>
        </p>
      </div>
      <div>
        <span className="eyebrow">{t.contact.facebook}</span>
        <p className="mt-2">
          <a
            href={SHOP.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg hover:text-gold"
          >
            {SHOP.facebookHandle}
          </a>
        </p>
      </div>
      <div>
        <span className="eyebrow">{t.contact.hours}</span>
        <ul className="mt-2 space-y-1 text-white/80">
          {t.hours.map((h) => (
            <li key={h.day} className="flex justify-between max-w-xs">
              <span>{h.day}</span>
              <span className="text-gold">{h.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
