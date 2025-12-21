import React from "react";

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="p-6 md:p-8 rounded-2xl bg-[#1A2333]/50 border border-white/5 hover:border-[#60A5FA]/30 hover:bg-[#1A2333] transition-all duration-300 group">
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#60A5FA]/10 text-[#60A5FA] mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default FeatureCard;