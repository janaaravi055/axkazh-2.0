
import { useMemo, useState } from "react";
import { useApp } from "../context/AppContext";

export default function Chatbot() {
  const { t } = useApp();
  const topics = useMemo(() => [
    ["2fa", t("q2fa"), t("a2fa")],
    ["otp", t("qotp"), t("aotp")],
    ["link", t("qlink"), t("alink")],
    ["password", t("qpassword"), t("apassword")],
    ["report", t("qreport"), t("areport")],
  ], [t]);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{from:"bot"|"user";text:string}[]>([
    { from: "bot", text: t("chatbotIntro") },
  ]);

  const ask = (question: string) => {
    const q = question.trim();
    if (!q) return;
    setMessages((items) => [...items, { from: "user", text: q }]);
    const low = q.toLowerCase();
    const match = topics.find(([key]) => low.includes(String(key)));
    const answer = match
      ? String(match[2])
      : "For this prototype, verify suspicious requests through official channels and never share OTPs, passwords, PINs, or CVVs.";
    setTimeout(() => setMessages((items) => [...items, { from: "bot", text: answer }]), 280);
    setInput("");
  };

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div><div className="eyebrow">GUIDANCE NODE</div><h1>{t("chatbot")}</h1><p>{t("chatbotIntro")}</p></div>
        <div className="bot-orb">🧠</div>
      </div>
      <div className="two-column">
        <section className="panel chat-panel">
          <div className="chat-window">
            {messages.map((message, i) => <div key={i} className={`bubble ${message.from}`}>{message.text}</div>)}
          </div>
          <div className="chat-input-row">
            <input value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>e.key==="Enter"&&ask(input)} placeholder={t("askSafety")} />
            <button className="primary-btn" onClick={()=>ask(input)}>{t("send")}</button>
          </div>
        </section>
        <section className="panel">
          <div className="eyebrow">{t("quickQuestions")}</div>
          {topics.map(([key, q]) => (
            <button className="question-btn" key={key} onClick={()=>ask(String(q))}><span>{q}</span><b>→</b></button>
          ))}
        </section>
      </div>
    </div>
  );
}
