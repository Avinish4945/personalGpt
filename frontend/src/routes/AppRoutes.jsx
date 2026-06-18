import { Routes, Route } from "react-router-dom";

import LandingPage from "../assets/pages/LandingPage";
import Dashboard from "../assets/pages/Dashboard";
import ChatPage from "../assets/pages/ChatPage";
import Login from "../assets/pages/Login";
import Signup from "../assets/pages/Signup";
import Chat from "../assets/pages/Chat";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/chatg" element={<Chat/>} />
   
      
    </Routes>
  );
}