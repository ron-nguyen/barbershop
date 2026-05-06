import Link from "next/link";
import Image from "next/image";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  height?: "full" | "compact";
};

export default function HeroSection({
  eyebrow = "Premium Barbershop",
  title,
  subtitle,
  image = "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=2000&q=80",
  primaryCta,
  secondaryCta,
  height = "full",
}: Props) {
  return (
    <section
      className={`relative w-full ${
        height === "full" ? "min-h-[88vh]" : "min-h-[55vh]"
      } flex items-center`}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative container-x py-24 max-w-3xl">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-white/70 text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-gold">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-outline">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
