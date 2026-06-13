import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import GPTCard from "../components/GPTCard";

export default function Dashboard() {

  const gpts = [
    {
      name: "ABC College AI",
      type: "College",
      docs: 23,
      chats: 1420
    },
    {
      name: "XYZ School GPT",
      type: "School",
      docs: 14,
      chats: 900
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#0B1020]">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-4 mt-8">

          <StatCard title="Total GPTs" value="12" />
          <StatCard title="Documents" value="230" />
          <StatCard title="Chats" value="25K" />
          <StatCard title="Users" value="8K" />

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {gpts.map((gpt, index) => (
            <GPTCard
              key={index}
              {...gpt}
            />
          ))}

        </div>

      </main>

    </div>
  );
}