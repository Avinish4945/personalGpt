export default function GPTCard({
  name,
  type,
  docs,
  chats
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-105 transition-all">

      <h2 className="text-white text-xl font-bold">
        {name}
      </h2>

      <p className="text-slate-400 mt-2">
        {type}
      </p>

      <div className="flex gap-5 mt-4">

        <span className="text-slate-300">
          📄 {docs}
        </span>

        <span className="text-slate-300">
          💬 {chats}
        </span>

      </div>

      <button className="mt-6 bg-blue-600 px-4 py-2 rounded-xl text-white">
        Open GPT
      </button>

    </div>
  );
}