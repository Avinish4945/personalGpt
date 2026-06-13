import { Routes, Route } from "react-router-dom";

import LandingPage from "../assets/pages/LandingPage";
import Dashboard from "../assets/pages/Dashboard";
import ChatPage from "../assets/pages/ChatPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}