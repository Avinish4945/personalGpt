import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-white">
          InstitutionGPT
        </h1>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}