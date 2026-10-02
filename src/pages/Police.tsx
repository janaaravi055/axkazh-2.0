
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { readReports, type DemoReport } from "../utils/storage";

export default function Police() {
  const { t } = useApp();
  const reports = readReports();
  const incident = reports.find((r)=>r.type==="incident");
  const [selectedId, setSelectedId] = useState(incident?.id || reports[0]?.id || "");
  const [output, setOutput] = useState("");

  const current = useMemo<DemoReport | undefined>(() => reports.find((r)=>r.id===selectedId) || incident, [reports,selectedId,incident]);

  const generate = () => {
    if (!current) return;
    const data = current.data || {};
    setOutput([
      "MALAI 2.0 — SMART FRAUD ALERT SYSTEM",
      "PROFESSIONAL DEMO INCIDENT REPORT",
      "========================================",
      `Report ID: ${current.id}`,
      `Generated: ${new Date().toLocaleString()}`,
      `Type: ${current.type}`,
      `App: ${current.app || "Not provided"}`,
      `Risk: ${current.risk || "Not provided"}`,
      `Category: ${current.category || "Not provided"}`,
      "",
      "INCIDENT DETAILS",
      `Name: ${data.name || "Not provided"}`,
      `Phone: ${data.phone || "Not provided"}`,
      `Email: ${data.email || "Not provided"}`,
      `Date / Time: ${data.dateTime || "Not provided"}`,
      `Scam Type: ${data.scamType || "Not provided"}`,
      `Suspect Information: ${data.suspect || "Not provided"}`,
      `Suspicious URL: ${data.suspiciousUrl || "Not provided"}`,
      "",
      "SUSPICIOUS MESSAGE",
      `${data.suspiciousMessage || current.preview || "Not provided"}`,
      "",
      "DESCRIPTION / EVIDENCE",
      `${data.description || "Not provided"}`,
      `Evidence File: ${data.evidenceFile || "Not provided"}`,
      "",
      "PROTOTYPE NOTICE",
      t("notOfficial"),
    ].join("\n"));
  };

  const download = () => {
    if (!current || !output) return;
    const url = URL.createObjectURL(new Blob([output], {type:"text/plain;charset=utf-8"}));
    const a = document.createElement("a");
    a.href = url; a.download = `${current.id}-report.txt`; a.click();
    URL.revokeObjectURL(url);
  };

  const exportJson = () => {
    if (!current) return;
    const url = URL.createObjectURL(new Blob([JSON.stringify(current,null,2)], {type:"application/json"}));
    const a = document.createElement("a");
    a.href = url; a.download = `${current.id}-report.json`; a.click();
    URL.revokeObjectURL(url);
  };

  const share = async () => {
    if (!output) return;
    if (navigator.share) await navigator.share({title:current?.id || "Malai report",text:output});
    else await navigator.clipboard?.writeText(output);
  };

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div><div className="eyebrow">REPORT CENTER</div><h1>{t("policeTitle")}</h1><p>{t("policeSubtitle")}</p></div>
        <div className="police-mark">🚔</div>
      </div>

      {!current ? (
        <section className="panel empty-state"><h2>{t("noIncident")}</h2><Link className="primary-btn inline-btn" to="/userinfo">{t("goUserInfo")} →</Link></section>
      ) : (
        <div className="two-column">
          <section className="panel">
            <div className="panel-head"><div><div className="eyebrow">CASE</div><h2>{current.id}</h2></div><span className={`report-risk-badge ${current.risk}`}>{current.risk}</span></div>
            <label>{t("selectReport")}
              <select className="select" value={selectedId} onChange={(e)=>{setSelectedId(e.target.value);setOutput("")}}>
                {reports.map((r)=><option key={r.id} value={r.id}>{r.id} • {r.type} • {r.app || "—"}</option>)}
              </select>
            </label>
            <div className="case-summary">
              <div><small>{t("reportType")}</small><strong>{current.type}</strong></div>
              <div><small>{t("category")}</small><strong>{current.category || "—"}</strong></div>
              <div><small>{t("app")}</small><strong>{current.app || "—"}</strong></div>
              <div><small>{t("risk")}</small><strong>{current.risk || "—"}</strong></div>
            </div>
            <div className="button-row">
              <button className="primary-btn" onClick={generate}>{t("generateReport")}</button>
              <button className="secondary-btn" onClick={download} disabled={!output}>{t("download")}</button>
              <button className="secondary-btn" onClick={exportJson}>{t("exportJson")}</button>
              <button className="secondary-btn" onClick={share} disabled={!output}>{t("share")}</button>
            </div>
            <div className="not-official">{t("notOfficial")}</div>
          </section>

          <section className="panel report-preview-panel">
            <div className="eyebrow">{t("reportPreview")}</div>
            <pre>{output || "Generate the report to preview it."}</pre>
          </section>
        </div>
      )}
    </div>
  );
}
