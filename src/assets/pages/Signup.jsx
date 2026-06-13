import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen bg-[#0B1020] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white">
            InstitutionGPT
          </h1>

          <p className="text-slate-400 mt-2">
            Create your account
          </p>
        </div>

        {/* Full Name */}
        <div className="mb-5">
          <label className="text-slate-300 text-sm">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="text-slate-300 text-sm">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="text-slate-300 text-sm">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="text-slate-300 text-sm">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        {/* Signup Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-xl text-white font-semibold">
          Create Account
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/10"></div>

          <span className="px-3 text-slate-500 text-sm">
            OR
          </span>

          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Google Signup */}
        <button className="w-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all py-3 rounded-xl text-white">
          Continue with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-slate-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}