export type AppKey =
  | "WhatsApp"
  | "Telegram"
  | "SMS"
  | "Gmail"
  | "Outlook"
  | "Instagram"
  | "Facebook";

export type AppGroup = "messaging" | "email" | "social";

export const APP_INFO: Record<AppKey, { icon: string; group: AppGroup }> = {
  WhatsApp: { icon: "💬", group: "messaging" },
  Telegram: { icon: "✈️", group: "messaging" },
  SMS: { icon: "📱", group: "messaging" },
  Gmail: { icon: "✉️", group: "email" },
  Outlook: { icon: "📨", group: "email" },
  Instagram: { icon: "📸", group: "social" },
  Facebook: { icon: "ⓕ", group: "social" },
};

export const APP_GROUPS: Record<AppGroup, AppKey[]> = {
  messaging: ["WhatsApp", "Telegram", "SMS"],
  email: ["Gmail", "Outlook"],
  social: ["Instagram", "Facebook"],
};
