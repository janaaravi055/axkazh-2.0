
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import Modal from "../components/Modal";

type Stage = {
  id: number;
  titleKey: "stageNotification"|"stageAnalysis"|"stageThreat"|"stageAlarm"|"stageLogin"|"stageChatbot"|"stageSecurity"|"stageProtection";
  route: string;
  noteKey: "incomingAlert"|"patternAnalysis"|"riskIdentified"|"soundVoice"|"secureAccess"|"stepByStep"|"checklistReport"|"safeNext";
  icon: string;
  tone?: "danger"|"safe";
};

const stages: Stage[] = [
  {id:1,titleKey:"stageNotification",route:"/detection",noteKey:"incomingAlert",icon:"✉️"},
  {id:2,titleKey:"stageAnalysis",route:"/detection",noteKey:"patternAnalysis",icon:"🧠"},
  {id:3,titleKey:"stageThreat",route:"/detection",noteKey:"riskIdentified",icon:"⚠️",tone:"danger"},
  {id:4,titleKey:"stageAlarm",route:"/detection",noteKey:"soundVoice",icon:"🚨",tone:"danger"},
  {id:5,titleKey:"stageLogin",route:"/dashboard",noteKey:"secureAccess",icon:"👤"},
  {id:6,titleKey:"stageChatbot",route:"/chatbot",noteKey:"stepByStep",icon:"🤖"},
  {id:7,titleKey:"stageSecurity",route:"/checklist",noteKey:"checklistReport",icon:"🛡️",tone:"safe"},
  {id:8,titleKey:"stageProtection",route:"/police",noteKey:"safeNext",icon:"🔐",tone:"safe"},
];

export default function ProtectionFlow() {
  const { t } = useApp();
  const navigate = useNavigate();
  const [referenceOpen, setReferenceOpen] = useState(false);

  return (
    <div className="page-wrap flow-page">
      <div className="page-header">
        <div>
          <div className="eyebrow">MALAI 2.0 • END-TO-END SAFETY JOURNEY</div>
          <h1>{t("workflow")}</h1>
          <p>{t("workflowSubtitle")}</p>
        </div>
        <button className="secondary-btn" onClick={()=>setReferenceOpen(true)}>◎ {t("prototypeReference")}</button>
      </div>

      <section className="prototype-flow-card">
        <img src="/protection-flow-reference.jpg" alt={t("workflow")} />
        <div className="flow-hotspots" aria-label={t("workflow")}>
          {stages.map((stage)=>(
            <button
              key={stage.id}
              className={`flow-hotspot hs-${stage.id}`}
              onClick={()=>navigate(stage.route)}
              title={t(stage.titleKey)}
              aria-label={t(stage.titleKey)}
            />
          ))}
        </div>
      </section>

      <div className="flow-motto">{t("detectAlertGuideProtect")}</div>

      <section className="coded-flow panel">
        <div className="panel-head">
          <div>
            <div className="eyebrow">INTERACTIVE WORKFLOW</div>
            <h2>{t("workflowHint")}</h2>
          </div>
          <Link className="primary-btn" to="/detection">{t("goDetection")} →</Link>
        </div>

        <div className="coded-track">
          {stages.map((stage,index)=>(
            <div className="coded-stage-wrap" key={stage.id}>
              <button
                className={`coded-stage ${stage.tone || ""}`}
                onClick={()=>navigate(stage.route)}
              >
                <span className="stage-number">0{stage.id}</span>
                <span className="stage-icon">{stage.icon}</span>
                <strong>{t(stage.titleKey)}</strong>
                <small>{t(stage.noteKey)}</small>
              </button>
              {index < stages.length-1 && <span className="coded-arrow">➜</span>}
            </div>
          ))}
        </div>
      </section>

      <div className="flow-actions">
        <Link to="/detection">🔍 {t("goDetection")}</Link>
        <Link to="/chatbot">🤖 {t("goChatbot")}</Link>
        <Link to="/checklist">🛡️ {t("goChecklist")}</Link>
        <Link to="/userinfo">📋 {t("goUserInfo")}</Link>
        <Link to="/police">🚔 {t("goPolice")}</Link>
      </div>

      <Modal open={referenceOpen} title={t("prototypeReference")} onClose={()=>setReferenceOpen(false)} wide>
        <div className="reference-modal">
          <img src="/protection-flow-reference.jpg" alt="Prototype reference" />
          <p>{t("prototype")}</p>
        </div>
      </Modal>
    </div>
  );
}
