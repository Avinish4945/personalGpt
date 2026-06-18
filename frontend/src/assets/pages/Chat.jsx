import { useState } from "react";
import axios from "axios";
export default function Chat() {


  const handleSend = async () => {

  if (!input.trim()) return;

  const userMessage = input;

  setMessages(prev => [
    ...prev,
    {
      role: "user",
      content: userMessage
    }
  ]);

  setInput("");

  const response = await axios.post(
    "http://localhost:5000/api/chatg",
    {
      message: userMessage
    }
  );

  setMessages(prev => [
    ...prev,
    {
      role: "assistant",
      content: response.data.answer
    }
  ]);
};

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! Upload documents and ask me anything about your institution."
    }
  ]);

  const [input, setInput] = useState("");

  // const handleSend = () => {

  //   if (!input.trim()) return;

  //   setMessages(prev => [
  //     ...prev,
  //     {
  //       role: "user",
  //       content: input
  //     },
  //     {
  //       role: "assistant",
  //       content:
  //         "This response will come from AI later."
  //     }
  //   ]);

  //   setInput("");
  // };

  return (
    <div className="h-screen bg-[#0B1020] flex">

      {/* Left Panel */}
      <div className="w-80 border-r border-white/10 bg-[#111827] p-5">

        <h2 className="text-white text-xl font-bold">
          ABC College AI
        </h2>

        <button className="mt-6 w-full bg-blue-600 py-3 rounded-xl text-white">
          Upload Documents
        </button>

        <div className="mt-8">

          <h3 className="text-slate-400 mb-3">
            Documents
          </h3>

          <div className="space-y-2">

            <div className="bg-white/5 p-3 rounded-lg text-slate-300">
              admission.pdf
            </div>

            <div className="bg-white/5 p-3 rounded-lg text-slate-300">
              hostel_rules.pdf
            </div>

          </div>

        </div>

      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <div className="border-b border-white/10 p-5">

          <h1 className="text-white text-2xl font-bold">
            InstitutionGPT
          </h1>

        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`max-w-3xl p-4 rounded-2xl ${
                msg.role === "user"
                  ? "ml-auto bg-blue-600 text-white"
                  : "bg-white/10 text-slate-200"
              }`}
            >
              {msg.content}
            </div>

          ))}

        </div>

        {/* Suggested Prompts */}
        <div className="px-6 pb-4 flex gap-3 flex-wrap">

          <button className="bg-white/5 px-4 py-2 rounded-xl text-slate-300">
            Admission Process
          </button>

          <button className="bg-white/5 px-4 py-2 rounded-xl text-slate-300">
            Fee Structure
          </button>

          <button className="bg-white/5 px-4 py-2 rounded-xl text-slate-300">
            Hostel Rules
          </button>

        </div>

        {/* Input */}
        <div className="border-t border-white/10 p-5">

          <div className="flex gap-3">

            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              placeholder="Ask anything..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none"
            />

            <button
              onClick={handleSend}
              className="bg-blue-600 px-6 rounded-xl text-white"

            >
              Send
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}


