"use client";

import { useState } from "react";
import { useT } from "./LanguageProvider";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useT();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mt-8 flex flex-col sm:flex-row gap-3"
    >
      <input
        type="email"
        required
        placeholder={t.common.yourEmail}
        className="flex-1 bg-ink border border-ink-600 px-4 py-3 text-white focus:outline-none focus:border-gold"
      />
      <button type="submit" className="btn-gold">
        {submitted ? t.common.subscribed : t.common.subscribe}
      </button>
    </form>
  );
}
