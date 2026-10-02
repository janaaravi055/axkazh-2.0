
import { useMemo, useState } from "react";
import { useApp } from "../context/AppContext";
import { readChecklist, saveChecklist } from "../utils/storage";

const keys = [
  "useUniquePasswords", "enable2fa", "verifySender", "checkUrls",
  "neverShare", "updateApps", "reportSuspicious", "screenLock"
] as const;

export default function Checklist() {
  const { t } = useApp();
  const [checked, setChecked] = useState<boolean[]>(() => readChecklist());
  const done = useMemo(() => checked.filter(Boolean).length, [checked]);

  const toggle = (index: number) => {
    setChecked((current) => {
      const next = [...current];
      next[index] = !next[index];
      saveChecklist(next);
      return next;
    });
  };

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div><div className="eyebrow">PROTECTION LAYER</div><h1>{t("checklist")}</h1><p>{t("checklistSubtitle")}</p></div>
        <div className="progress-ring"><strong>{Math.round(done / keys.length * 100)}%</strong><small>{t("progress")}</small></div>
      </div>
      <section className="panel checklist">
        {keys.map((key, index) => (
          <button key={key} className={checked[index] ? "check-row done" : "check-row"} onClick={()=>toggle(index)}>
            <span className="checkbox">{checked[index] ? "✓" : ""}</span>
            <span><strong>{t(key)}</strong></span>
            <b>{checked[index] ? t("done") : t("openStatus")}</b>
          </button>
        ))}
      </section>
    </div>
  );
}
