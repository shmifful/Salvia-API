import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const login = useGoogleLogin({
    onSuccess: credentialResponse => {
      console.log(credentialResponse);
      console.log("Log in successful");
    },
    onError: () => {
      console.log('Login Failed');
    }
  });

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0E141E]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link className="flex-shrink-0 flex items-center cursor-pointer" to="/">
            <span className="text-2xl font-black tracking-tighter">
              <span className="text-[#60A5FA]">salvia.</span>
              <span className="text-white">dev</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <button  className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</button>
            <button  className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Models</button>
            
            <button 
              onClick={() => login()}
              className="px-6 py-2 text-sm bg-[#60A5FA] text-[#0E141E] font-bold rounded-full hover:shadow-[0_0_25px_rgba(96,165,250,0.4)] transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Get Started with Google
            </button>

            {/* <div className="flex items-center space-x-3 ml-4">
              <Link 
                to="/login"
                className="px-5 py-2 text-sm font-bold text-gray-200 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                Log In
              </Link>
              
              <Link 
                to="/signup"
                className="px-6 py-2 text-sm bg-[#60A5FA] text-[#0E141E] font-black rounded-full hover:shadow-[0_0_25px_rgba(96,165,250,0.4)] transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Get Started
              </Link>
            </div> */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1A2333] border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Features</button>
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Models</button>
            
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;