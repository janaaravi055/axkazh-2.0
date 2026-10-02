
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { APP_INFO } from "../data/apps";
import { LANGUAGES, type Lang } from "../data/translations";
import { useApp } from "../context/AppContext";

const nav = [
  ["/dashboard", "▦", "dashboard"],
  ["/chatbot", "🧠", "chatbot"],
  ["/detection", "🔍", "detection"],
  ["/checklist", "✅", "checklist"],
  ["/userinfo", "📋", "userinfo"],
  ["/police", "🚔", "police"],
  ["/protection-flow", "↠", "protectionFlow"],
] as const;

export default function Layout() {
  const { t, lang, setLang, session, logout } = useApp();
  const navigate = useNavigate();

  if (!session) return null;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">⌁</div>
          <div>
            <strong>{t("brand")}</strong>
            <span>Malai 2.0</span>
          </div>
        </div>

        <nav className="side-nav">
          {nav.map(([path, icon, key]) => (
            <NavLink key={path} to={path} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <span>{icon}</span><span>{t(key)}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="selected-mini">
            {session.apps.map((app) => <span key={app}>{APP_INFO[app].icon} {app}</span>)}
          </div>
          <label className="language-box">
            <span>{t("language")}</span>
            <select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
              {LANGUAGES.map((item) => <option key={item.key} value={item.key}>{item.label}</option>)}
            </select>
          </label>
          <button className="logout-btn" onClick={() => { logout(); navigate("/"); }}>
            ↪ {t("logout")}
          </button>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="top-brand">{t("fullBrand")}</div>
          <div className="top-meta">MALAI 2.0 • HACKATHON 2026</div>
        </header>
        <Outlet />
        <footer className="developer-footer">
         Developed by Aakash P
        </footer>
      </main>
    </div>
  );
}
