import {
  LayoutDashboard,
  Bot,
  FileText,
  Settings,
  MessageSquare
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white/5 border-r border-white/10 backdrop-blur-xl">

      <div className="p-6">

        <h1 className="text-white text-2xl font-bold">
          InstitutionGPT
        </h1>

      </div>

      <nav className="flex flex-col gap-2 p-4">

        <button className="sidebar-btn">
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        <button className="sidebar-btn">
          <Bot size={18} />
          My GPTs
        </button>

        <button className="sidebar-btn">
          <FileText size={18} />
          Documents
        </button>

        <button className="sidebar-btn">
          <MessageSquare size={18} />
          Chats
        </button>

        <button className="sidebar-btn">
          <Settings size={18} />
          Settings
        </button>

      </nav>
    </aside>
  );
}