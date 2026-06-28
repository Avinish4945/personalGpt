import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


export default function Chat({institutionType}) {
const { id } = useParams();

const [file, setFile] = useState(null);
const [documents, setDocuments] = useState([]);
const [isThinking, setIsThinking] = useState(false);

const API_URL =
import.meta.env.VITE_API_URL;

const fetchDocuments = async () => {
  try {

    const res = await axios.get(
      `${API_URL}/documents/${id}`,
      {
        headers: {
          Authorization:
            `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    setDocuments(res.data);

  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchDocuments();
}, [id]);

const handleUpload = async () => {

  if (!file) return;

  try {

    const formData = new FormData();

    formData.append("file", file);

    const response = await axios.post(

      `${API_URL}/documents/upload/${id}`,

      formData,

      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data"
        }
      }

    );

    console.log(response.data);
    await fetchDocuments();

    alert("PDF Uploaded Successfully");

  } catch (error) {

    console.log(error);

  }
};

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
  setIsThinking(true);

  try {

    const response = await axios.post(
      `${API_URL}/chatg`,
      {
        message: userMessage,
        gptId: id
      }
    );

    setMessages(prev => [
      ...prev,
      {
        role: "assistant",
        content: response.data.answer
      }
    ]);

  } catch (error) {

    console.log(error);

  } finally {

    setIsThinking(false);

  }

};

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! Upload documents and ask me anything about your institution."
    }
  ]);

  const [input, setInput] = useState("");

 const handleDelete = async (documentId) => {

  try {

    await axios.delete(
      `${API_URL}/documents/${documentId}`,
      {
        headers: {
          Authorization:
            `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    await fetchDocuments();

  } catch (error) {

    console.log(error);

  }

};

  return (
    <div className="h-screen bg-[#0B1020] flex">

      {/* Left Panel */}
      <div className="w-80 border-r border-white/10 bg-[#111827] p-5">

        <h2 className="text-white text-xl font-bold">
        
        </h2>

        <input
  type="file"
  accept=".pdf"
  onChange={(e) => setFile(e.target.files[0])}
  className="hidden"
  id="pdf-upload"
/>
{file && (
  <div className="mt-3 bg-white/5 border border-green-500/30 rounded-xl p-3">

    <p className="text-green-400 text-sm font-medium">
      ✅ PDF Selected
    </p>

    <p className="text-slate-300 text-sm mt-1">
      📄 {file.name}
    </p>

  </div>
)}
<label
  htmlFor="pdf-upload"
  className="mt-6 block w-full bg-blue-600 py-3 rounded-xl text-white text-center cursor-pointer"
>
  Upload PDF
</label>
<button
  onClick={handleUpload}
  className="mt-3 w-full bg-green-600 py-3 rounded-xl text-white"
>
  Save Document
</button>


        <div className="mt-8">

          <h3 className="text-slate-400 mb-3">
            Documents
          </h3>

        <div className="space-y-2">

  {documents.length === 0 ? (
    <p className="text-slate-500">
      No documents uploaded
    </p>
  ) : (
    documents.map((doc) => (
      <div
        key={doc._id}
        className="bg-white/5 p-3 rounded-lg flex justify-between items-center"
      >
        <span className="text-slate-300">
          {doc.fileName}
        </span>

        <button
          onClick={() => handleDelete(doc._id)}
          className="text-red-400"
        >
          🗑
        </button>
      </div>
    ))
  )}

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

     {isThinking && (
  <div className="bg-white/10 rounded-2xl p-4 w-fit">
    <div className="flex gap-1">
      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
      <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
    </div>
  </div>
)}

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


