import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B1020]/70 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-xl">
            🤖
          </div>

          <h1 className="text-2xl font-bold text-white">
            InstitutionGPT
          </h1>
        </Link>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-10">

          <a
            href="#features"
            className="text-slate-300 hover:text-white transition"
          >
            Features
          </a>

          <a
            href="#how"
            className="text-slate-300 hover:text-white transition"
          >
            How it Works
          </a>

          <a
            href="#demo"
            className="text-slate-300 hover:text-white transition"
          >
            Demo
          </a>

          <a
            href="https://github.com/yourusername/institutiongpt"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-white transition"
          >
            GitHub
          </a>

        </div>

        {/* Buttons */}

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:scale-105 transition-all text-white font-semibold shadow-lg shadow-blue-600/20"
          >
            Get Started →
          </Link>

        </div>

      </div>

    </nav>
  );
}