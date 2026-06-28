import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;
   const navigate = useNavigate();

   const token=localStorage.getItem("token")

   if(token){
    navigate('/dashboard');
   }

  const handleLogin = async () => {
  try {

    const response = await axios.post(
      `${API_URL}/auth/login`,
      {
        email: loginEmail,
        password: loginPassword,
      }
    );

    console.log(response.data);

    localStorage.setItem(
      "token",
      response.data.token
    );

  navigate("/dashboard");

  } catch (error) {

    console.log(error.response?.data);

    alert(
      error.response?.data?.message ||
      "Login Failed"
    );

  }
};
  return (
    <div className="min-h-screen bg-[#0B1020] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white">
            InstitutionGPT
          </h1>

          <p className="text-slate-400 mt-2">
            Welcome back
          </p>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="text-slate-300 text-sm">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
              value={loginEmail}
  onChange={(e) => setLoginEmail(e.target.value)}
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
            placeholder="Enter your password"
              value={loginPassword}
  onChange={(e) => setLoginPassword(e.target.value)}
            className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-6">
          <button className="text-blue-400 text-sm hover:text-blue-300">
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-xl text-white font-semibold">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/10"></div>

          <span className="px-3 text-slate-500 text-sm">
            OR
          </span>

          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Google Login */}
        <button className="w-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all py-3 rounded-xl text-white">
          Continue with Google
        </button>

        {/* Signup */}
        <p className="text-center text-slate-400 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-400 hover:text-blue-300"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}