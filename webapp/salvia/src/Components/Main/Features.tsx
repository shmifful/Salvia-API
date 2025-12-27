import React from "react";
import FeatureCard from "./FeatureCard";

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

// const ShieldIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
// );

const CpuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
);

const Features: React.FC = () => (
  <section id="features" className="py-24 border-t border-white/5 bg-[#0E141E]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Build with Salvia?</h2>
        <p className="text-gray-400">Engineered for performance, reliability, and ease of integration.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard 
          icon={<ZapIcon />} 
          title="Ultra-Low Latency" 
          desc="Optimized Rust-based inference engines ensure your users never wait for a result. Cold starts are virtually eliminated." 
        />
        {/* <FeatureCard 
          icon={<ShieldIcon />} 
          title="Enterprise Security" 
          desc="SOC2 Type II compliant. Your data is encrypted in transit, processed securely, and never used for retraining our models." 
        /> */}
        <FeatureCard 
          icon={<CpuIcon />} 
          title="Infinite Scale" 
          desc="From 10 requests to 10 million. Our serverless architecture scales automatically with your growth, with zero config." 
        />
      </div>
    </div>
  </section>
);

export default Features;