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

  {/* Hero Section */}
  <section className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">

    <div className="text-center">

      <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
        🚀 AI-Powered Knowledge Platform
      </span>

      <h1 className="mt-8 text-6xl md:text-7xl font-black text-white leading-tight">
        Create AI Assistants
        <br />

        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
          For Your Institution
        </span>
      </h1>

      <p className="text-slate-400 text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
        Upload PDFs, policies, manuals, notes, regulations,
        and institutional knowledge.
        Let AI answer questions instantly.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

        <Link
          to="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-2xl shadow-lg shadow-blue-600/20"
        >
          Create GPT
        </Link>

        <button className="border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-2xl transition-all duration-300">
          Watch Demo
        </button>

      </div>

    </div>

    {/* AI Dashboard Preview */}

    <div className="mt-24 max-w-6xl mx-auto">

      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

        {/* Window Header */}

        <div className="flex gap-3 mb-8">

          <div className="w-3 h-3 rounded-full bg-red-500"></div>

          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

          <div className="w-3 h-3 rounded-full bg-green-500"></div>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

            <h3 className="text-white font-bold text-lg">
              ABC College GPT
            </h3>

            <p className="text-slate-400 mt-2">
              25 Documents Uploaded
            </p>

            <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">

              <div className="w-[80%] h-full bg-blue-500"></div>

            </div>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

            <h3 className="text-white font-bold text-lg">
              Questions Answered
            </h3>

            <p className="text-5xl font-black text-blue-400 mt-4">
              12.4K
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

            <h3 className="text-white font-bold text-lg">
              Active Users
            </h3>

            <p className="text-5xl font-black text-violet-400 mt-4">
              3.8K
            </p>

          </div>

        </div>

      </div>

    </div>

  </section>

  {/* Features Section */}

  <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

    <h2 className="text-4xl font-bold text-center text-white mb-14">
      Why Choose InstitutionGPT?
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

        <h3 className="text-white text-xl font-bold">
          Upload Knowledge
        </h3>

        <p className="text-slate-400 mt-3">
          Upload PDFs, DOCX, TXT files, manuals,
          policies and institutional documents.
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

        <h3 className="text-white text-xl font-bold">
          AI Search
        </h3>

        <p className="text-slate-400 mt-3">
          Users can ask questions naturally
          and receive instant AI-powered answers.
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

        <h3 className="text-white text-xl font-bold">
          Share Publicly
        </h3>

        <p className="text-slate-400 mt-3">
          Create an AI assistant for your organization
          and share it with students, employees or customers.
        </p>

      </div>

    </div>

  </section>

</div>
)
}
