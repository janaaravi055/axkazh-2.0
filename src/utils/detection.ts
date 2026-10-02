
import type { RiskLevel } from "./storage";

export type AnalysisResult = {
  risk: RiskLevel;
  category: "safe" | "spam" | "phishing" | "fraud";
  score: number;
  reasons: string[];
};

const highSignals = [
  { regex: /\botp\b|\bone[- ]time password\b/i, label: "OTP request" },
  { regex: /\bpassword\b|\bpasswd\b|\bpin\b|\bcvv\b/i, label: "Credential request" },
  { regex: /\bbank account\b|\bcard number\b|\baccount number\b/i, label: "Financial-account request" },
  { regex: /\bpay now\b|\burgent payment\b|\bsend money\b|\btransfer money\b/i, label: "Payment pressure" },
  { regex: /\bcrypto\b|\bcryptocurrency\b|\bgift card\b/i, label: "Unusual payment method" },
];

const suspiciousSignals = [
  { regex: /\bclick\b|\btap\b.*\blink\b/i, label: "Link-click request" },
  { regex: /\bverify\b|\bconfirm\b|\blogin\b|\bsign in\b/i, label: "Verification/login request" },
  { regex: /\bprize\b|\bwinner\b|\breward\b|\bclaim\b/i, label: "Prize/reward lure" },
  { regex: /\bsuspended\b|\bblocked\b|\bexpires?\b|\blimited time\b/i, label: "Urgency/account-threat language" },
  { regex: /https?:\/\/|www\./i, label: "External URL present" },
  { regex: /\bbit\.ly\b|\btinyurl\b|\bshorturl\b/i, label: "Shortened URL" },
  { regex: /\bfree\b.*\boffer\b|\bbonus\b/i, label: "Promotional lure" },
];

export function analyzeContent(content: string): AnalysisResult {
  const highReasons = highSignals.filter((s) => s.regex.test(content)).map((s) => `Sensitive indicator: ${s.label}`);
  const suspiciousReasons = suspiciousSignals.filter((s) => s.regex.test(content)).map((s) => `Suspicious indicator: ${s.label}`);
  const reasons = [...highReasons, ...suspiciousReasons];
  const score = highReasons.length * 3 + suspiciousReasons.length;

  let category: AnalysisResult["category"] = "safe";
  if (/\botp\b|\bpassword\b|\bcvv\b|\bbank account\b|\bpay now\b|\bsend money\b/i.test(content)) {
    category = "fraud";
  } else if (suspiciousReasons.some((r) => /Prize|Promotional/i.test(r))) {
    category = "spam";
  } else if (reasons.length) {
    category = "phishing";
  }

  const risk: RiskLevel = score >= 4 ? "high" : score > 0 ? "suspicious" : "safe";

  return {
    risk,
    category,
    score,
    reasons: reasons.length ? reasons : ["No strong demo indicators matched."],
  };
}
