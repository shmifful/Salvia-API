import React, { useState } from "react";

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
);

const Navbar: React.FC<{ 
  onSignUpClick: () => void; 
  onLogInClick: () => void; 
  onHomeClick: () => void 
}> = ({ onSignUpClick, onLogInClick, onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0E141E]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={onHomeClick}>
            <span className="text-2xl font-black tracking-tighter">
              <span className="text-[#60A5FA]">salvia.</span>
              <span className="text-white">dev</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={onHomeClick} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</button>
            <button onClick={onHomeClick} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Models</button>
            
            <div className="flex items-center space-x-3 ml-4">
              {/* Refined Log In CTA */}
              <button 
                onClick={onLogInClick} 
                className="px-5 py-2 text-sm font-bold text-gray-200 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                Log In
              </button>
              
              {/* Primary Sign Up CTA */}
              <button 
                onClick={onSignUpClick}
                className="px-6 py-2 text-sm bg-[#60A5FA] text-[#0E141E] font-black rounded-full hover:shadow-[0_0_25px_rgba(96,165,250,0.4)] transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Get Started
              </button>
            </div>
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
            <button onClick={() => { onHomeClick(); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Features</button>
            <button onClick={() => { onLogInClick(); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Log In</button>
            <div className="pt-4 px-3 space-y-2">
              <button 
                onClick={() => { onLogInClick(); setIsOpen(false); }}
                className="w-full px-5 py-3 text-center text-sm border border-white/10 text-white font-bold rounded-lg mb-2"
              >
                Log In
              </button>
              <button 
                onClick={() => { onSignUpClick(); setIsOpen(false); }}
                className="w-full px-5 py-3 text-center text-sm bg-[#60A5FA] text-[#0E141E] font-bold rounded-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;