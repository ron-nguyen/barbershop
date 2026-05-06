"use client";

import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ComboCard from "@/components/ComboCard";
import PriceList from "@/components/PriceList";
import PromoSection from "@/components/PromoSection";
import { COMBOS } from "@/lib/data";
import { useT } from "@/components/LanguageProvider";

export default function ServicesPage() {
  const { t } = useT();

  return (
    <>
      <HeroSection
        height="compact"
        eyebrow={t.services.heroEyebrow}
        title={t.services.heroTitle}
        subtitle={t.services.heroSubtitle}
        image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=80"
        primaryCta={{ label: t.common.bookAppointment, href: "/contact" }}
      />

      {/* Combos */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow={t.services.combosEyebrow}
            title={t.services.combosTitle}
            description={t.services.combosDescription}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMBOS.map((c) => (
              <ComboCard key={c.id} combo={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Individual price list */}
      <section className="py-20 md:py-28 bg-ink-800 border-y border-ink-600">
        <div className="container-x">
          <SectionTitle
            eyebrow={t.services.individualEyebrow}
            title={t.services.individualTitle}
            description={t.services.individualDescription}
          />
          <div className="mt-14">
            <PriceList />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow={t.services.ritualEyebrow}
            title={t.services.ritualTitle}
          />
          <ol className="mt-14 grid gap-10 md:grid-cols-4">
            {t.services.ritualSteps.map((s, i) => (
              <li key={i}>
                <div className="font-serif text-5xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-xl text-white">{s.t}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {s.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PromoSection />

      <section className="py-20">
        <div className="container-x text-center">
          <h2 className="text-3xl md:text-4xl text-white">
            {t.services.contactCtaTitle}
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            {t.services.contactCtaSubtitle}
          </p>
          <Link href="/contact" className="btn-gold mt-8">
            {t.common.contactUs}
          </Link>
        </div>
      </section>
    </>
  );
}
