import { useNavigate } from "react-router-dom";

export default function GPTCard({
  id,
  name,
  institutionType,
  description,
  docs ,
  chats ,
   handleDelete
}) {

  const navigate = useNavigate();

  const getIcon = () => {

    switch (institutionType) {

      case "School":
        return "🏫";

      case "College":
        return "🎓";

      case "Hospital":
        return "🏥";

      case "Company":
        return "🏢";

      default:
        return "🤖";

    }

  };

  return (

    <div className="bg-[#151B2D] border border-white/10 rounded-3xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">

      <div className="flex items-center gap-3">

        <div className="text-3xl">
          {getIcon()}
        </div>

        <div>

          <p className="text-sm text-blue-400">
            {institutionType}
          </p>

          <h2 className="text-white text-xl font-bold">
            {name}
          </h2>

        </div>

      </div>

      <p className="text-slate-400 mt-4 line-clamp-2">

        {description || "No description provided."}

      </p>

      <div className="flex justify-between mt-6 text-slate-300">

        <span>
          📄 {docs}
        </span>

        <span>
          💬 {chats}
        </span>

      </div>

     <div className="flex gap-3 mt-6">

  <button
    onClick={() => navigate(`/chatg/${id}`)}
    className="flex-1 bg-gradient-to-r from-blue-600 to-violet-600 py-3 rounded-xl text-white font-semibold hover:scale-[1.02] transition"
  >
    Open GPT →
  </button>

  <button
    onClick={() => handleDelete(id)}
    className="px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white"
  >
    🗑
  </button>

</div>

    </div>

  );

}