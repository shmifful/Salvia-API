import React from "react";

const ModelCard: React.FC<{ title: string; version: string; desc: string; useCase: string; tags: string[] }> = ({ title, version, desc, useCase, tags }) => (
  <div className="p-6 md:p-8 rounded-2xl bg-[#1A2333] border border-white/5 hover:border-[#60A5FA]/50 transition-all cursor-pointer group hover:-translate-y-1">
    <div className="flex justify-between items-start mb-4">
      <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#60A5FA] transition-colors">{title}</h4>
      <span className="text-xs font-mono text-gray-500 bg-[#0E141E] px-2 py-1 rounded">{version}</span>
    </div>
    <p className="text-gray-400 mb-2 text-sm leading-relaxed">{desc}</p>
    <p className="text-[#60A5FA]/80 mb-6 text-xs font-medium italic">Use Case: {useCase}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider bg-[#0E141E] text-gray-400 rounded-md border border-white/5 group-hover:border-[#60A5FA]/30 group-hover:text-[#60A5FA] transition-colors">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ModelCard;