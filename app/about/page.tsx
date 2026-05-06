"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import BarberCard from "@/components/BarberCard";
import StatsSection from "@/components/StatsSection";
import TestimonialCard from "@/components/TestimonialCard";
import BrandSection from "@/components/BrandSection";
import { BARBERS, TESTIMONIALS } from "@/lib/data";
import { useT } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useT();

  return (
    <>
      <HeroSection
        height="compact"
        eyebrow={t.about.heroEyebrow}
        title={t.about.heroTitle}
        subtitle={t.about.heroSubtitle}
        image="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] border border-gold">
            <Image
              src="https://images.unsplash.com/photo-1521490878406-bbf456cfd13a?auto=format&fit=crop&w=900&q=80"
              alt="RIN founder"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionTitle
              align="left"
              eyebrow={t.about.storyEyebrow}
              title={t.about.storyTitle}
              description={t.about.storyDescription}
            />
            <p className="mt-6 text-white/60 leading-relaxed">
              {t.about.storyParagraph}
            </p>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow={t.about.valuesEyebrow}
            title={t.about.valuesTitle}
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {t.about.values.map((v) => (
              <div
                key={v.t}
                className="p-8 border border-ink-600 bg-ink-800 hover:border-gold transition-colors"
              >
                <h3 className="font-serif text-2xl text-gold">{v.t}</h3>
                <p className="mt-3 text-white/70 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-ink-800 border-y border-ink-600">
        <div className="container-x">
          <SectionTitle
            eyebrow={t.about.teamEyebrow}
            title={t.about.teamTitle}
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {BARBERS.map((b) => (
              <BarberCard key={b.id} barber={b} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow={t.about.testimonialsEyebrow}
            title={t.about.testimonialsTitle}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((tt) => (
              <TestimonialCard key={tt.id} t={tt} />
            ))}
          </div>
        </div>
      </section>

      <BrandSection />

      <section className="py-20">
        <div className="container-x text-center">
          <h2 className="text-3xl md:text-4xl text-white">
            {t.about.ctaTitle}
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            {t.about.ctaSubtitle}
          </p>
          <Link href="/contact" className="btn-gold mt-8">
            {t.common.getInTouch}
          </Link>
        </div>
      </section>
    </>
  );
}
