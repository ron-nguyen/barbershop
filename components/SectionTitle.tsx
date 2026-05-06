type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-white">
        {title}
      </h2>
      {align === "center" && <div className="mt-5 gold-divider" />}
      {description && (
        <p className="mt-5 text-white/60 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
