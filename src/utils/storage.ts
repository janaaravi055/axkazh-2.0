
export type RiskLevel = "safe" | "suspicious" | "high";

export type DemoReport = {
  id: string;
  type: "detection" | "incident";
  app?: string;
  risk?: RiskLevel;
  category?: string;
  preview?: string;
  time: string;
  reasons?: string[];
  data?: Record<string, string | undefined>;
};

const SESSION_KEY = "malai_session";
const LANG_KEY = "malai_lang";
const REPORTS_KEY = "malai_reports";
const CHECKLIST_KEY = "malai_checklist";

export const readSession = (): { username: string; apps: string[] } | null => {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); } catch { return null; }
};

export const writeSession = (value: { username: string; apps: string[] }) =>
  localStorage.setItem(SESSION_KEY, JSON.stringify(value));

export const clearSession = () => localStorage.removeItem(SESSION_KEY);

export const readLanguage = () => localStorage.getItem(LANG_KEY) || "en";
export const writeLanguage = (lang: string) => localStorage.setItem(LANG_KEY, lang);

export const readReports = (): DemoReport[] => {
  try {
    const value = JSON.parse(localStorage.getItem(REPORTS_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch { return []; }
};

export const saveReports = (reports: DemoReport[]) =>
  localStorage.setItem(REPORTS_KEY, JSON.stringify(reports.slice(0, 100)));

export const addReport = (report: DemoReport) =>
  saveReports([report, ...readReports()]);

export const getReport = (id: string) =>
  readReports().find((report) => report.id === id);

export const makeId = (prefix: string) =>
  `${prefix}-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

export const readChecklist = (): boolean[] => {
  try {
    const value = JSON.parse(localStorage.getItem(CHECKLIST_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch { return []; }
};

export const saveChecklist = (items: boolean[]) =>
  localStorage.setItem(CHECKLIST_KEY, JSON.stringify(items));
