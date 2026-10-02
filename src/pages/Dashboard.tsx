
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { APP_INFO, type AppKey } from "../data/apps";
import { useApp } from "../context/AppContext";
import { readReports, type DemoReport } from "../utils/storage";
import Modal from "../components/Modal";

export default function Dashboard() {
  const { t, session } = useApp();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<DemoReport | null>(null);
  const reports = readReports();

  const stats = useMemo(() => ({
    reports: reports.length,
    cases: reports.filter((r) => r.type === "incident" || r.risk !== "safe").length,
    safe: reports.filter((r) => r.risk === "safe").length,
    high: reports.filter((r) => r.risk === "high").length,
  }), [reports]);

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <div className="eyebrow">MALAI 2.0 • CONTROL CENTER</div>
          <h1>{t("dashboard")}</h1>
          <p>{t("welcome")}, <b>{session?.username}</b>. {t("prototype")}</p>
        </div>
        <div className="live-badge"><span className="pulse-dot" /> DEMO MONITOR ONLINE</div>
      </div>

      <div className="stats-grid">
        {[
          ["◫", t("reports"), stats.reports, "cyan"],
          ["⚠", t("cases"), stats.cases, "red"],
          ["✓", t("safeMessages"), stats.safe, "green"],
          ["!", t("highRiskAlerts"), stats.high, "orange"],
        ].map(([icon, label, value, tone]) => (
          <div className={`stat-card ${tone}`} key={label as string}>
            <span className="stat-icon">{icon}</span>
            <div><strong>{value}</strong><span>{label}</span></div>
          </div>
        ))}
      </div>

      <section className="workflow-banner">
        <div>
          <div className="eyebrow">END-TO-END SAFETY JOURNEY</div>
          <h2>{t("workflow")}</h2>
          <p>{t("workflowSubtitle")}</p>
        </div>
        <Link className="primary-btn" to="/protection-flow">{t("openFlow")} →</Link>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div><div className="eyebrow">CONTROLLED SCOPE</div><h2>{t("selectedApps")}</h2></div>
          <span className="scope-count">{session?.apps.length} apps • {t("appScope")}</span>
        </div>
        <div className="selected-app-grid">
          {(session?.apps || []).map((app: AppKey) => (
            <button key={app} className="selected-app" onClick={() => navigate("/detection")}>
              <span>{APP_INFO[app].icon}</span><strong>{app}</strong><small>SIMULATION READY</small>
            </button>
          ))}
        </div>
      </section>

      <section className="quick-grid">
        {[
          ["/chatbot", "🧠", t("chatbot"), "Interactive Q&A"],
          ["/detection", "🔍", t("detection"), "Analyze + alert"],
          ["/checklist", "✅", t("checklist"), "Security actions"],
          ["/userinfo", "📋", t("userinfo"), "Create incident"],
          ["/police", "🚔", t("police"), "Report center"],
        ].map(([path, icon, title, sub]) => (
          <Link className="quick-card" key={path} to={path}>
            <span className="quick-icon">{icon}</span>
            <span><strong>{title}</strong><small>{sub}</small></span>
            <b>→</b>
          </Link>
        ))}
      </section>

      <section className="panel">
        <div className="panel-head">
          <div><div className="eyebrow">ACTIVITY LOG</div><h2>{t("recentReports")}</h2></div>
        </div>
        {reports.length === 0 ? (
          <div className="empty-state">{t("noReports")}</div>
        ) : (
          <div className="report-list">
            {reports.slice(0, 10).map((report) => (
              <button key={report.id} className="report-row" onClick={() => setSelected(report)}>
                <span className={`risk-dot ${report.risk || "suspicious"}`} />
                <span className="report-main">
                  <strong>{report.type === "incident" ? t("typeIncident") : t("typeDetection")} • {report.app || "—"}</strong>
                  <small>{report.preview || report.category || report.id} • {report.time}</small>
                </span>
                <span className={`report-risk ${report.risk || ""}`}>{report.risk ? t(report.risk) : "—"}</span>
                <b>→</b>
              </button>
            ))}
          </div>
        )}
      </section>

      <div className="prototype-note">{t("privacySafe")}</div>

      <Modal open={!!selected} title={t("view")} onClose={() => setSelected(null)} wide>
        {selected && (
          <div className="report-view">
            <div className="report-meta-grid">
              <div><small>{t("reportId")}</small><strong>{selected.id}</strong></div>
              <div><small>{t("reportType")}</small><strong>{selected.type}</strong></div>
              <div><small>{t("app")}</small><strong>{selected.app || "—"}</strong></div>
              <div><small>{t("risk")}</small><strong>{selected.risk || "—"}</strong></div>
            </div>
            <pre>{JSON.stringify(selected, null, 2)}</pre>
          </div>
        )}
      </Modal>
    </div>
  );
}
