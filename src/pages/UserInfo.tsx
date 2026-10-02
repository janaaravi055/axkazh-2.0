
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { addReport, makeId } from "../utils/storage";
import Modal from "../components/Modal";

type FormState = Record<string, string>;

export default function UserInfo() {
  const { t } = useApp();
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({});
  const [fileName, setFileName] = useState("");
  const [caseId, setCaseId] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);

  const set = (key: string, value: string) => setForm((current)=>({...current,[key]:value}));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.consent !== "yes") return;

    const id = makeId("CASE");
    const data = {...form, evidenceFile: fileName || "Not provided"};

    addReport({
      id,
      type: "incident",
      risk: "suspicious",
      category: form.scamType || "incident",
      preview: form.suspiciousMessage || form.description || "Incident report",
      time: new Date().toLocaleString(),
      data,
    });

    localStorage.setItem("malai_latest_case", JSON.stringify({id,data}));
    setCaseId(id);
    setConfirmOpen(true);
  };

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div><div className="eyebrow">INCIDENT RECORD</div><h1>{t("incidentTitle")}</h1><p>{t("incidentSubtitle")}</p></div>
      </div>

      <form className="panel incident-form" onSubmit={submit}>
        <div className="form-grid">
          <label>{t("name")}<input value={form.name || ""} onChange={(e)=>set("name",e.target.value)} /></label>
          <label>{t("phone")}<input value={form.phone || ""} onChange={(e)=>set("phone",e.target.value)} /></label>
          <label>{t("email")}<input type="email" value={form.email || ""} onChange={(e)=>set("email",e.target.value)} /></label>
          <label>{t("dateTime")}<input type="datetime-local" value={form.dateTime || ""} onChange={(e)=>set("dateTime",e.target.value)} /></label>
          <label>{t("scamType")}
            <select className="select" value={form.scamType || ""} onChange={(e)=>set("scamType",e.target.value)}>
              <option value="">Select</option><option>Phishing</option><option>OTP Scam</option><option>Fake Support</option><option>Payment Fraud</option><option>Impersonation</option><option>Suspicious Login</option><option>Spam</option>
            </select>
          </label>
          <label>{t("suspectInfo")}<input value={form.suspect || ""} onChange={(e)=>set("suspect",e.target.value)} /></label>
          <label className="full">{t("suspiciousMessage")}<textarea rows={4} value={form.suspiciousMessage || ""} onChange={(e)=>set("suspiciousMessage",e.target.value)} /></label>
          <label className="full">{t("suspiciousUrl")}<input value={form.suspiciousUrl || ""} onChange={(e)=>set("suspiciousUrl",e.target.value)} /></label>
          <label className="full">{t("description")}<textarea rows={5} value={form.description || ""} onChange={(e)=>set("description",e.target.value)} /></label>
          <label className="full file-input">{t("screenshotEvidence")}
            <input type="file" accept="image/*,.pdf,.txt" onChange={(e)=>setFileName(e.target.files?.[0]?.name || "")} />
            <span>{fileName || t("noFile")}</span>
          </label>
        </div>

        <label className="consent">
          <input type="checkbox" checked={form.consent === "yes"} onChange={(e)=>set("consent",e.target.checked ? "yes" : "")} />
          <span>{t("consent")}</span>
        </label>

        <div className="button-row">
          <button className="primary-btn" type="submit">{t("saveReport")} →</button>
          {caseId && <button className="secondary-btn" type="button" onClick={()=>navigate("/police")}>{t("viewPoliceReport")} →</button>}
        </div>

        {caseId && <div className="success-box">✓ {t("saveSuccess")} • {t("caseId")}: <strong>{caseId}</strong></div>}
      </form>

      <Modal open={confirmOpen} title={t("confirmation")} onClose={()=>setConfirmOpen(false)}>
        <div className="confirmation-card">
          <div className="confirm-icon">✓</div>
          <h2>{t("reportSaved")}</h2>
          <div className="case-pill">{t("caseId")}: <strong>{caseId}</strong></div>
          <button className="primary-btn" onClick={()=>{setConfirmOpen(false);navigate("/police")}}>{t("viewPoliceReport")} →</button>
        </div>
      </Modal>
    </div>
  );
}
