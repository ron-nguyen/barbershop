"use client";

import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ComboCard from "@/components/ComboCard";
import BarberCard from "@/components/BarberCard";
import BlogCard from "@/components/BlogCard";
import TestimonialCard from "@/components/TestimonialCard";
import PromoSection from "@/components/PromoSection";
import StatsSection from "@/components/StatsSection";
import BrandSection from "@/components/BrandSection";
import { COMBOS, BARBERS, BLOG_POSTS, TESTIMONIALS } from "@/lib/data";
import { useT } from "@/components/LanguageProvider";

export default function HomePage() {
  const { t } = useT();

  return (
    <>
      <HeroSection
        eyebrow={t.home.heroEyebrow}
        title={t.home.heroTitle}
        subtitle={t.home.heroSubtitle}
        primaryCta={{ label: t.common.bookAppointment, href: "/contact" }}
        secondaryCta={{ label: t.common.ourServices, href: "/services" }}
      />

      {/* About strip */}
      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] border border-gold">
            <Image
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80"
              alt="Inside RIN Hair Studio"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionTitle
              align="left"
              eyebrow={t.home.aboutEyebrow}
              title={t.home.aboutTitle}
              description={t.home.aboutDescription}
            />
            <ul className="mt-8 space-y-4 text-white/70">
              {t.home.aboutBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold font-serif">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-outline mt-10">
              {t.common.ourStory}
            </Link>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Combos preview */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow={t.home.servicesEyebrow}
            title={t.home.servicesTitle}
            description={t.home.servicesDescription}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMBOS.map((c) => (
              <ComboCard key={c.id} combo={c} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="btn-outline">
              {t.common.viewAllServices}
            </Link>
          </div>
        </div>
      </section>

      <PromoSection />

      {/* Barbers */}
      <section className="py-20 md:py-28 bg-ink-800 border-y border-ink-600">
        <div className="container-x">
          <SectionTitle
            eyebrow={t.home.teamEyebrow}
            title={t.home.teamTitle}
            description={t.home.teamDescription}
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
            eyebrow={t.home.testimonialsEyebrow}
            title={t.home.testimonialsTitle}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((tt) => (
              <TestimonialCard key={tt.id} t={tt} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-20 md:py-28 bg-ink-800 border-t border-ink-600">
        <div className="container-x">
          <SectionTitle eyebrow={t.home.blogEyebrow} title={t.home.blogTitle} />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/blog" className="btn-outline">
              {t.common.allArticles}
            </Link>
          </div>
        </div>
      </section>

      <BrandSection />

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <Image
          src="https://images.unsplash.com/photo-1521322800607-8c38375eef04?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative container-x text-center max-w-2xl">
          <span className="eyebrow">{t.home.ctaEyebrow}</span>
          <h2 className="mt-3 text-3xl md:text-5xl text-white">
            {t.home.ctaTitle}
          </h2>
          <p className="mt-5 text-white/70">{t.home.ctaSubtitle}</p>
          <Link href="/contact" className="btn-gold mt-8">
            {t.common.bookAppointment}
          </Link>
        </div>
      </section>
    </>
  );
}
