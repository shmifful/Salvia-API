import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const Hero: React.FC = () => {
  // Move function inside the component
  const handleGetAccess = useGoogleLogin({
    onSuccess: credentialResponse => {
      console.log(credentialResponse);
      console.log("Log in successful");
    },
    onError: () => {
      console.log('Login Failed');
    }
  });

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto">
      <div className="inline-flex items-center px-3 py-1 mb-8 rounded-full border border-[#60A5FA]/30 bg-[#60A5FA]/10">
        <span className="flex h-2 w-2 rounded-full bg-[#60A5FA] mr-2 animate-pulse"></span>
        <span className="text-xs font-semibold tracking-wide text-[#60A5FA] uppercase">Public Beta Live</span>
      </div>
      
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-8 text-white">
        Intelligence as an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-blue-400">API.</span>
      </h1>
      
      <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
        Stop managing infrastructure. Access state-of-the-art machine learning models with a single line of code. Built by developers, for developers.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button 
          onClick={() => handleGetAccess()}
          className="w-full sm:w-auto px-8 py-4 bg-[#60A5FA] text-[#0E141E] font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-200"
        >
          Get API Access
        </button>
        <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-700 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-gray-600 transition-all duration-200 flex items-center justify-center gap-2">
          Read the Docs <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
};

export default Hero;