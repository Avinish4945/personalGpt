import { Send } from "lucide-react";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-[#0B1020] flex">

      <aside className="w-72 border-r border-white/10 bg-white/5">

        <div className="p-5">

          <button className="w-full bg-blue-600 rounded-xl py-3 text-white">
            New Chat
          </button>

        </div>

      </aside>

      <main className="flex-1 flex flex-col">

        <div className="p-6 border-b border-white/10">

          <h1 className="text-white text-2xl font-bold">
            ABC College Assistant
          </h1>

        </div>

        <div className="flex-1 p-8 overflow-auto">

          <div className="max-w-3xl">

            <div className="bg-white/10 p-4 rounded-2xl text-white w-fit">
              Hello! How can I help you today?
            </div>

            <div className="bg-blue-600 p-4 rounded-2xl text-white w-fit ml-auto mt-6">
              What is admission fee?
            </div>

          </div>

        </div>

        <div className="p-6 border-t border-white/10">

          <div className="flex gap-3">

            <input
              placeholder="Ask anything..."
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
            />

            <button className="bg-blue-600 px-5 rounded-2xl text-white">
              <Send />
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}