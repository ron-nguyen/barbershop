"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALES,
  translations,
  type Locale,
  type Translations,
} from "@/lib/i18n";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "rin.locale";

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && (LOCALES as string[]).includes(stored)) {
      setLocaleState(stored as Locale);
      document.documentElement.lang = stored;
    } else {
      document.documentElement.lang = DEFAULT_LOCALE;
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  };

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used inside LanguageProvider");
  return ctx;
}
