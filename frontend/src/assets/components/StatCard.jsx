export default function StatCard({
  title,
  value
}) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

      <h3 className="text-slate-400">
        {title}
      </h3>

      <p className="text-3xl text-white font-bold mt-3">
        {value}
      </p>

    </div>
  );
}