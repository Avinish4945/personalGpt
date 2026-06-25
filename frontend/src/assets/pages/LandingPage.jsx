import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function LandingPage() {
return ( <div className="min-h-screen bg-[#0B1020] relative overflow-hidden">

```
  {/* Background Glow Effects */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

    <div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl"></div>

    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  </div>

  <Navbar />

 <section className="relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">

    <div className="absolute left-1/2 top-32 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-[180px] rounded-full"></div>

    <div className="absolute left-20 top-60 w-80 h-80 bg-violet-600/10 blur-[150px] rounded-full"></div>

  </div>

  <div className="max-w-7xl mx-auto px-6 py-24 text-center">

    {/* Badge */}

    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">

      ✨ AI Powered Knowledge Platform

    </div>

    {/* Heading */}

    <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white">

      Build AI Assistants

      <br />

      <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">

        That Know Your Institution

      </span>

    </h1>

    {/* Description */}

    <p className="mt-8 max-w-3xl mx-auto text-xl text-slate-400 leading-9">

      Upload PDFs, policies, manuals, SOPs, and institutional
      documents. InstitutionGPT creates an AI assistant that
      answers questions using your organization's own knowledge.

    </p>

    {/* Buttons */}

    <div className="mt-12 flex justify-center gap-5">

      <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:scale-105 transition">

        🚀 Get Started Free

      </button>

      <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition">

        ▶ Watch Demo

      </button>

    </div>

    {/* Feature Chips */}

    <div className="mt-10 flex justify-center flex-wrap gap-4">

      <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300">

        📄 Upload PDFs

      </div>

      <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300">

        ⚡ Instant AI Answers

      </div>

      <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300">

        🔒 Secure Authentication

      </div>

    </div>

  </div>

</section>

</div>
)
}
