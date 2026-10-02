import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { APP_GROUPS, APP_INFO, type AppKey } from "../data/apps";
import { LANGUAGES } from "../data/translations";
import { useApp } from "../context/AppContext";

export default function Login() {
  const navigate = useNavigate();
  const { t, lang, setLang, login } = useApp();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [apps, setApps] = useState<AppKey[]>([
    "WhatsApp",
    "Gmail",
    "SMS",
  ]);

  const [error, setError] = useState("");

  const toggle = (app: AppKey) => {
    setApps((current) =>
      current.includes(app)
        ? current.filter((item) => item !== app)
        : [...current, app]
    );
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError(`${t("username")} + ${t("password")} required.`);
      return;
    }

    if (apps.length === 0) {
      setError(t("chooseApps"));
      return;
    }

    login(username.trim(), apps);
    navigate("/dashboard");
  };

  return (
    <main className="login-screen">
      <section className="login-hero">
        <div className="eyebrow">
          ◈ MALAI 2.0 • CYBER SAFETY PROTOTYPE
        </div>

        <h1>{t("fullBrand")}</h1>

        <div className="hero-tagline">
          {t("tagline")}
        </div>

        <p>{t("privacySafe")}</p>

        <div className="hero-flow">
          <div>
            <span>01</span>
            <b>Detect</b>
          </div>

          <i>→</i>

          <div>
            <span>02</span>
            <b>Alert</b>
          </div>

          <i>→</i>

          <div>
            <span>03</span>
            <b>Guide</b>
          </div>

          <i>→</i>

          <div>
            <span>04</span>
            <b>Protect</b>
          </div>
        </div>
      </section>

      <form className="login-card" onSubmit={submit}>
        <div className="mini-symbol">◈</div>

        <div className="eyebrow">
          {t("login")}
        </div>

        <h2>{t("login")}</h2>

        <p className="form-note">
          {t("demoCredentials")}
        </p>

        <label>
          {t("username")}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={t("username")}
            autoComplete="username"
          />
        </label>

        <label>
          {t("password")}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder={t("password")}
            autoComplete="current-password"
          />
        </label>

        <label>
          {t("language")}
          <select
            className="select"
            value={lang}
            onChange={(e) =>
              setLang(e.target.value as typeof lang)
            }
          >
            {LANGUAGES.map((item) => (
              <option
                key={item.key}
                value={item.key}
              >
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <div className="app-picker">
          <div className="field-title">
            {t("chooseApps")}
          </div>

          {(Object.keys(APP_GROUPS) as Array<keyof typeof APP_GROUPS>).map(
            (group) => (
              <div
                className="app-group"
                key={group}
              >
                <div className="group-label">
                  {t(
                    group === "messaging"
                      ? "messaging"
                      : group === "email"
                      ? "emailGroup"
                      : "social"
                  )}
                </div>

                <div className="app-options">
                  {APP_GROUPS[group].map((app) => (
                    <button
                      type="button"
                      key={app}
                      onClick={() => toggle(app)}
                      className={
                        apps.includes(app)
                          ? "app-option selected"
                          : "app-option"
                      }
                    >
                      <span>
                        {APP_INFO[app].icon}
                      </span>

                      <strong>{app}</strong>

                      <i>
                        {apps.includes(app)
                          ? "✓"
                          : "+"}
                      </i>
                    </button>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {error && (
          <div className="error-box">
            {error}
          </div>
        )}

        <button
          className="primary-btn full-btn"
          type="submit"
        >
          {t("enterDashboard")} →
        </button>
      </form>

      <div className="login-footer">
        {t("fullBrand")} • MALAI 2.0 • {t("prototype")}
      </div>
      <div className="login-footer">
  {t("fullBrand")} • MALAI 2.0 • {t("prototype")}
</div>

<div className="developer-footer">
  Developed by Aakash P
</div>
    </main>
  );
}