import React from "react";
import { Link } from "react-router-dom";

const LogIn: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-md w-full space-y-8 bg-[#1A2333] p-8 sm:p-10 rounded-2xl border border-white/5 shadow-2xl">
      <div>
        <button className="text-sm text-gray-400 hover:text-white flex items-center mb-6 transition-colors group">
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back to Home
        </button>
        <h2 className="mt-2 text-center text-3xl font-extrabold text-white">
          Welcome back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Don't have an account? <Link to="/signup" className="text-[#60A5FA] hover:underline">Sign up</Link>
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-4">
          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-gray-400 mb-1">Email address</label>
            <input id="login-email" type="email" required className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-[#0E141E] placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent sm:text-sm transition-all" placeholder="john.doe@email.com" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label htmlFor="login-password" className="block text-sm font-medium text-gray-400">Password</label>
              <a href="#" className="text-xs text-[#60A5FA] hover:underline">Forgot password?</a>
            </div>
            <input id="login-password" type="password" required className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-[#0E141E] placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent sm:text-sm transition-all" placeholder="••••••••" />
          </div>
        </div>
        <button  type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-[#0E141E] bg-[#60A5FA] hover:bg-[#5094e8] transition-all transform hover:scale-[1.02]">
          Sign In
        </button>
      </form>
    </div>
  </div>
);

export default LogIn;