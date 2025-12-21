import React from "react";

const Footer: React.FC = () => (
  <footer className="py-12 border-t border-white/5 bg-[#070B12]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="flex space-x-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
        {/* <a href="#" className="hover:text-[#60A5FA] transition-colors">Twitter</a> */}
        <a href="#" className="hover:text-[#60A5FA] transition-colors">GitHub</a>
        <a href="#" className="hover:text-[#60A5FA] transition-colors">Discord</a>
        <a href="#" className="hover:text-[#60A5FA] transition-colors">Status</a>
      </div>
      <p className="mt-8 text-[10px] text-gray-700 uppercase tracking-[0.2em]">
        &copy; 2025 SALVIA TECHNOLOGIES
      </p>
    </div>
  </footer>
);

export default Footer;