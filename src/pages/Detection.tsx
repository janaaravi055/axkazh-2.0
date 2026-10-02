import { useMemo, useState } from "react";
import { APP_INFO, type AppKey } from "../data/apps";
import type { Lang } from "../data/translations";
import { useApp } from "../context/AppContext";
import AlertModal from "../components/AlertModal";
import { addReport, makeId } from "../utils/storage";
import {
  analyzeContent,
  type AnalysisResult,
} from "../utils/detection";

function speechText(lang: Lang, login = true) {
  const messages: Record<Lang, string> = {
    en: login
      ? "Warning! Suspicious login detected. Please verify this activity before continuing."
      : "Warning! Suspicious content detected. Please verify before continuing.",

    ta: login
      ? "எச்சரிக்கை! சந்தேகமான உள்நுழைவு கண்டறியப்பட்டது. தொடர்வதற்கு முன் இந்த செயல்பாட்டை சரிபார்க்கவும்."
      : "எச்சரிக்கை! சந்தேகமான உள்ளடக்கம் கண்டறியப்பட்டது. தொடர்வதற்கு முன் சரிபார்க்கவும்.",

    hi: login
      ? "चेतावनी! संदिग्ध लॉगिन का पता चला। जारी रखने से पहले इस गतिविधि को सत्यापित करें।"
      : "चेतावनी! संदिग्ध सामग्री मिली। जारी रखने से पहले इसे सत्यापित करें।",

    fr: login
      ? "Alerte ! Une connexion suspecte a été détectée. Vérifiez cette activité avant de continuer."
      : "Alerte ! Un contenu suspect a été détecté. Vérifiez avant de continuer.",
  };

  return messages[lang];
}

export default function Detection() {
  const { t, lang, session } = useApp();

  const apps = (session?.apps || []) as AppKey[];

  const [app, setApp] = useState<AppKey>(
    apps[0] || "SMS"
  );

  const [content, setContent] = useState("");

  const [analysis, setAnalysis] =
    useState<AnalysisResult | null>(null);

  const [alertOpen, setAlertOpen] =
    useState(false);

  const [alertRisk, setAlertRisk] =
    useState<"suspicious" | "high">("high");

  const [loginAlert, setLoginAlert] =
    useState(true);

  const languageMessage = useMemo(
    () => speechText(lang, loginAlert),
    [lang, loginAlert]
  );

  const runAnalysis = (value = content) => {
    if (!value.trim()) {
      return;
    }

    const result = analyzeContent(value);

    setAnalysis(result);
    setLoginAlert(false);

    addReport({
      id: makeId("DET"),
      type: "detection",
      app,
      risk: result.risk,
      category: result.category,
      preview: value
        .replace(/\s+/g, " ")
        .slice(0, 100),
      reasons: result.reasons,
      time: new Date().toLocaleString(),
    });

    if (result.risk !== "safe") {
      setAlertRisk(result.risk);
      setAlertOpen(true);
    }
  };

  const simulateLogin = () => {
    setLoginAlert(true);
    setAlertRisk("high");
    setAlertOpen(true);

    addReport({
      id: makeId("LOGIN"),
      type: "detection",
      app,
      risk: "high",
      category: "suspicious-login",
      preview: `Suspicious login simulation • ${app}`,
      reasons: [
        "Unrecognized login pattern",
        "New device/location indicator",
        "Verification required",
      ],
      time: new Date().toLocaleString(),
    });
  };

  const clearDetection = () => {
    setContent("");
    setAnalysis(null);
    setLoginAlert(true);
    setAlertOpen(false);
  };

  return (
    <div className="page-wrap">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <div className="eyebrow">
            AI-STYLE SAFETY SIMULATION
          </div>

          <h1>{t("detection")}</h1>

          <p>
            {t("detectionSubtitle")}
          </p>
        </div>

        <div className="shield-badge">
          ⌁
        </div>
      </div>

      {/* DETECTION AREA */}
      <div className="detection-layout">

        {/* INPUT PANEL */}
        <section className="panel">

          <div className="panel-head">
            <div>
              <div className="eyebrow">
                SCOPED APP
              </div>

              <h2>
                {t("app")} • {app}
              </h2>
            </div>
          </div>

          {/* APP SELECT */}
          <label>
            {t("app")}

            <select
              className="select"
              value={app}
              onChange={(event) =>
                setApp(
                  event.target.value as AppKey
                )
              }
            >
              {apps.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {APP_INFO[item].icon} {item}
                </option>
              ))}
            </select>
          </label>

          {/* SUSPICIOUS CONTENT */}
          <label>
            {t("suspiciousContent")}

            <textarea
              rows={10}
              value={content}
              onChange={(event) =>
                setContent(event.target.value)
              }
              placeholder={t("pasteContent")}
            />
          </label>

          {/* SAMPLE BUTTONS */}
          <div className="sample-row">

            <button
              type="button"
              className="sample high"
              onClick={() =>
                setContent(
                  "URGENT: Your bank account is suspended. Verify your OTP now by clicking http://secure-login.example"
                )
              }
            >
              {t("highSample")}
            </button>

            <button
              type="button"
              className="sample suspicious"
              onClick={() =>
                setContent(
                  "Congratulations! You are a winner. Click this limited-time link to claim your reward."
                )
              }
            >
              {t("suspiciousSample")}
            </button>

            <button
              type="button"
              className="sample safe"
              onClick={() =>
                setContent(
                  "Your meeting is confirmed for tomorrow at 10 AM."
                )
              }
            >
              {t("safeSample")}
            </button>

          </div>

          {/* ACTION BUTTONS */}
          <div className="button-row">

            <button
              type="button"
              className="primary-btn"
              onClick={() => runAnalysis()}
              disabled={!content.trim()}
            >
              {t("analyze")} →
            </button>

            <button
              type="button"
              className="secondary-btn"
              onClick={clearDetection}
            >
              {t("clear")}
            </button>

          </div>

        </section>

        {/* RESULT PANEL */}
        <section className="panel result-panel">

          <div className="panel-head">
            <div>

              <div className="eyebrow">
                {t("analysisOutput")}
              </div>

              <h2>
                {t("status")}
              </h2>

            </div>
          </div>

          {/* EMPTY STATE */}
          {!analysis ? (

            <div className="empty-detection">

              <div className="big-shield">
                ◈
              </div>

              <h2>
                {t("awaitingContent")}
              </h2>

              <p>
                {t("pasteAndScan")}
              </p>

            </div>

          ) : (

            /* ANALYSIS RESULT */
            <div
              className={`analysis-card ${analysis.risk}`}
            >

              <div className="analysis-top">

                <span className="analysis-icon">
                  {analysis.risk === "safe"
                    ? "✓"
                    : "!"}
                </span>

                <span className="analysis-level">
                  {t(analysis.risk)}
                </span>

              </div>

              <h2>
                {analysis.risk === "safe"
                  ? t("safeMsg")
                  : analysis.risk === "high"
                  ? t("highMsg")
                  : t("suspiciousMsg")}
              </h2>

              <div className="analysis-category">
                {analysis.category.toUpperCase()}
                {" • "}
                SCORE {analysis.score}
              </div>

              {/* REASONS */}
              <div className="reason-list">

                <strong>
                  {t("reasons")}
                </strong>

                {analysis.reasons.map(
                  (reason, index) => (
                    <div
                      key={`${reason}-${index}`}
                    >
                      • {reason}
                    </div>
                  )
                )}

              </div>

              {/* WARNING BUTTON */}
              {analysis.risk !== "safe" && (
  <button
    type="button"
    className="danger-btn"
    onClick={() => {
      if (
        analysis.risk === "suspicious" ||
        analysis.risk === "high"
      ) {
        setAlertRisk(analysis.risk);
        setLoginAlert(false);
        setAlertOpen(true);
      }
    }}
  >
    🔊 {t("warning")}
  </button>
)}

            </div>
          )}

        </section>

      </div>

      {/* SUSPICIOUS LOGIN SIMULATION */}
      <section className="panel login-simulation">

        <div>

          <div className="eyebrow">
            ALARM LAYER
          </div>

          <h2>
            {t("suspiciousLoginSimulation")}
          </h2>

          <p>
            {t("simulateHint")}
          </p>

        </div>

        <button
          type="button"
          className="danger-action"
          onClick={simulateLogin}
        >
          🚨 {t("simulate")}
        </button>

      </section>

      {/* ALERT MODAL */}
      <AlertModal
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
        risk={alertRisk}
        message={languageMessage}
      />

    </div>
  );
}