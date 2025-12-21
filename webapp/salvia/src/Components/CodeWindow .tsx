import React from "react";

const CodeWindow: React.FC = () => (
  <section className="px-4 sm:px-6 lg:px-8 pb-24">
    <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-[#0d1117]">
      <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex-1 text-center text-xs font-mono text-gray-500">main.py</div>
      </div>
      <div className="p-6 md:p-8 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed">
          <code className="text-[#e6edf3]">
            <span className="text-[#ff7b72]">import</span> salvia{"\n\n"}
            <span className="text-[#8b949e]"># Initialize with your secure key</span>{"\n"}
            client = salvia.<span className="text-[#d2a8ff]">Client</span>(api_key=<span className="text-[#a5d6ff]">"sk_live_salvia_123"</span>){"\n\n"}
            <span className="text-[#8b949e]"># Analyze sentiment instantly</span>{"\n"}
            analysis = client.models.<span className="text-[#d2a8ff]">sentiment</span>({"{"}{"\n"}
            {"    "}<span className="text-[#79c0ff]">text</span>: <span className="text-[#a5d6ff]">"The developer experience is flawless."</span>{"\n"}
            {"}"}){"\n\n"}
            <span className="text-[#d2a8ff]">print</span>(analysis.label) <span className="text-[#8b949e]"># Output: "positive"</span>
          </code>
        </pre>
      </div>
    </div>
  </section>
);

export default CodeWindow;