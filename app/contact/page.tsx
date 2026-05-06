"use client";

import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import { SHOP } from "@/lib/data";
import { useT } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { t } = useT();

  return (
    <>
      <HeroSection
        height="compact"
        eyebrow={t.contact.heroEyebrow}
        title={t.contact.heroTitle}
        subtitle={t.contact.heroSubtitle}
        image="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=2000&q=80"
        primaryCta={{ label: t.common.callNow, href: `tel:${SHOP.phone}` }}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-14">
          <div>
            <SectionTitle
              align="left"
              eyebrow={t.contact.detailsEyebrow}
              title={t.contact.detailsTitle}
              description={t.contact.detailsDescription}
            />
            <div className="mt-10">
              <ContactInfo />
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-x">
          <div className="relative aspect-[16/7] border border-ink-600 overflow-hidden bg-ink-800">
            <iframe
              title="RIN Hair Studio location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=106.6388%2C10.7846%2C106.6588%2C10.7946&layer=mapnik"
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-ink-800 border-t border-ink-600">
        <div className="container-x">
          <SectionTitle eyebrow={t.contact.faqEyebrow} title={t.contact.faqTitle} />
          <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {t.contact.faqs.map((f) => (
              <div
                key={f.q}
                className="p-6 border border-ink-600 hover:border-gold transition-colors"
              >
                <h3 className="font-serif text-lg text-gold">{f.q}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
