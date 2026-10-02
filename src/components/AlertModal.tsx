
import { useEffect } from "react";
import type { Lang } from "../data/translations";
import { useApp } from "../context/AppContext";
import Modal from "./Modal";

const localeMap: Record<Lang, string> = {
  en: "en-US",
  ta: "ta-IN",
  hi: "hi-IN",
  fr: "fr-FR",
};

function playSiren() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const a = ctx.createOscillator();
    const g = ctx.createGain();
    a.type = "sawtooth";
    a.frequency.setValueAtTime(580, ctx.currentTime);
    a.frequency.linearRampToValueAtTime(940, ctx.currentTime + 0.28);
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.42);
    a.connect(g).connect(ctx.destination);
    a.start();
    a.stop(ctx.currentTime + 0.43);
  } catch {}
}

function speak(text: string, lang: Lang) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = localeMap[lang];
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

export default function AlertModal({
  open,
  onClose,
  risk,
  message,
}: {
  open: boolean;
  onClose: () => void;
  risk: "suspicious" | "high";
  message: string;
}) {
  const { lang, t } = useApp();

  useEffect(() => {
    if (!open) return;
    playSiren();
    speak(message, lang);
  }, [open, message, lang]);

  const replay = () => {
    playSiren();
    speak(message, lang);
  };

  return (
    <Modal open={open} title={t("warning")} onClose={onClose}>
      <div className={`alert-modal ${risk}`}>
        <div className="siren-wrap">
          <div className="siren-glow" />
          <div className="siren">🚨</div>
        </div>
        <div className="risk-tag">{risk === "high" ? t("high") : t("suspicious")}</div>
        <h2>{t("suspiciousLoginDetected")}</h2>
        <p>{message}</p>
        <div className="button-row center">
          <button className="primary-btn" onClick={replay}>🔊 {t("playAgain")}</button>
          <button className="secondary-btn" onClick={onClose}>{t("dismiss")}</button>
        </div>
      </div>
    </Modal>
  );
}
