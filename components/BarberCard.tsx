"use client";

import Image from "next/image";
import type { Barber } from "@/lib/data";
import { useT } from "./LanguageProvider";

export default function BarberCard({ barber }: { barber: Barber }) {
  const { locale } = useT();

  return (
    <article className="group text-center">
      <div className="relative aspect-[3/4] overflow-hidden border border-ink-600 group-hover:border-gold transition-colors">
        <Image
          src={barber.image}
          alt={barber.name}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex justify-center gap-3">
            {Object.entries(barber.socials).map(([k, v]) => (
              <a
                key={k}
                href={v}
                aria-label={`${barber.name} on ${k}`}
                className="w-8 h-8 grid place-items-center border border-white/30 text-white/80 text-xs uppercase hover:bg-gold hover:text-ink hover:border-gold"
              >
                {k[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
      <h3 className="mt-5 text-xl text-white">{barber.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gold">
        {barber.role[locale]}
      </p>
      <p className="mt-3 text-sm text-white/60 max-w-xs mx-auto">
        {barber.bio[locale]}
      </p>
    </article>
  );
}
