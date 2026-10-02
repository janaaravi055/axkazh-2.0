import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppProvider, useApp } from "./context/AppContext";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/Chatbot";
import Detection from "./pages/Detection";
import Checklist from "./pages/Checklist";
import UserInfo from "./pages/UserInfo";
import Police from "./pages/Police";
import ProtectionFlow from "./pages/ProtectionFlow";

function Protected({ children }: { children: ReactNode }) {
  const { session } = useApp();
  return session ? <>{children}</> : <Navigate to="/" replace />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        element={
          <Protected>
            <Layout />
          </Protected>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/detection" element={<Detection />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/police" element={<Police />} />
        <Route path="/protection-flow" element={<ProtectionFlow />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
