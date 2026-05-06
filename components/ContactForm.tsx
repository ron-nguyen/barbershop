"use client";

import { useState } from "react";
import { COMBOS, INDIVIDUAL_SERVICES } from "@/lib/data";
import { useT } from "./LanguageProvider";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { t, locale } = useT();

  const serviceOptions = [
    ...COMBOS.map((c) => `${c.name[locale]} (${c.price})`),
    ...INDIVIDUAL_SERVICES.map((s) => `${s.name[locale]} (${s.price})`),
  ];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-ink-800 border border-ink-600 p-8 md:p-10 space-y-5"
    >
      <h3 className="font-serif text-2xl md:text-3xl text-white">
        {t.contact.formTitle}
      </h3>
      <p className="text-sm text-white/60">{t.contact.formSubtitle}</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={t.contact.fullName} name="name" type="text" required />
        <Field label={t.contact.phone} name="phone" type="tel" required />
      </div>
      <Field label={t.contact.email} name="email" type="email" required />

      <div className="grid sm:grid-cols-2 gap-4">
        <SelectField
          label={t.contact.service}
          name="service"
          options={serviceOptions}
        />
        <Field label={t.contact.preferredDate} name="date" type="date" />
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-[0.25em] text-white/60"
        >
          {t.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full bg-ink border border-ink-600 px-4 py-3 text-white focus:outline-none focus:border-gold"
        />
      </div>

      <button type="submit" className="btn-gold w-full">
        {t.common.sendRequest}
      </button>

      {submitted && (
        <p className="text-sm text-gold">{t.contact.formSuccess}</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-[0.25em] text-white/60"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-ink border border-ink-600 px-4 py-3 text-white focus:outline-none focus:border-gold"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-[0.25em] text-white/60"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full bg-ink border border-ink-600 px-4 py-3 text-white focus:outline-none focus:border-gold"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
