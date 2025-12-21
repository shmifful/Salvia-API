import React from "react";

const SignUp: React.FC<{ onBack: () => void; onSwitchToLogin: () => void }> = ({ onBack, onSwitchToLogin }) => (
  <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-md w-full space-y-8 bg-[#1A2333] p-8 sm:p-10 rounded-2xl border border-white/5 shadow-2xl">
      <div>
        <button onClick={onBack} className="text-sm text-gray-400 hover:text-white flex items-center mb-6 transition-colors group">
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back to Home
        </button>
        <h2 className="mt-2 text-center text-3xl font-extrabold text-white">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Already have an account? <button onClick={onSwitchToLogin} className="text-[#60A5FA] hover:underline">Log in</button>
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-4">
          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
            <input id="full-name" type="text" required className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-[#0E141E] placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent sm:text-sm transition-all" placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-400 mb-1">Email address</label>
            <input id="email-address" type="email" required className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-[#0E141E] placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent sm:text-sm transition-all" placeholder="john.doe@email.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">Password</label>
            <input id="password" type="password" required className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-[#0E141E] placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent sm:text-sm transition-all" placeholder="••••••••" />
          </div>
        </div>
        <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-[#0E141E] bg-[#60A5FA] hover:bg-[#5094e8] transition-all transform hover:scale-[1.02]">
          Create Account
        </button>
      </form>
    </div>
  </div>
);

export default SignUp;