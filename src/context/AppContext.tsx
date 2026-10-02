
import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { AppKey } from "../data/apps";
import type { Lang, TranslationKey } from "../data/translations";
import { translations } from "../data/translations";
import { clearSession, readLanguage, readSession, writeLanguage, writeSession } from "../utils/storage";

type Session = { username: string; apps: AppKey[] };

type AppContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
  session: Session | null;
  login: (username: string, apps: AppKey[]) => void;
  logout: () => void;
};

const Context = createContext<AppContextValue | null>(null);

function validLang(value: string): Lang {
  return value === "ta" || value === "hi" || value === "fr" ? value : "en";
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => validLang(readLanguage()));
  const [session, setSession] = useState<Session | null>(() => {
    const stored = readSession();
    return stored ? { username: stored.username, apps: stored.apps as AppKey[] } : null;
  });

  const setLang = (next: Lang) => {
    setLangState(next);
    writeLanguage(next);
  };

  const login = (username: string, apps: AppKey[]) => {
    const value = { username, apps };
    setSession(value);
    writeSession(value);
  };

  const logout = () => {
    clearSession();
    setSession(null);
  };

  const value = useMemo<AppContextValue>(() => ({
    lang,
    setLang,
    t: (key) => translations[lang][key] ?? translations.en[key],
    session,
    login,
    logout,
  }), [lang, session]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useApp() {
  const value = useContext(Context);
  if (!value) throw new Error("useApp must be used inside AppProvider");
  return value;
}
