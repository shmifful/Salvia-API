import React from "react";
import ModelCard from "./ModelCard";

const Models: React.FC = () => (
  <section id="models" className="py-24 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">The Model Library</h2>
        <p className="text-gray-400">Production-ready models available via simple REST endpoints.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ModelCard 
          title="Sentiment Analysis" 
          version="v1.0" 
          desc="Detect whether text is positive, negative, or neutral with state-of-the-art accuracy." 
          useCase="Automate customer support ticket prioritization based on user frustration levels."
          tags={['Text', 'NLP', 'Real-time']} 
        />
        <ModelCard 
          title="Emotion Classifier" 
          version="v1.0" 
          desc="Identify specific emotional tones such as joy, anger, sadness, or surprise in any string." 
          useCase="Monitor social media brand health to identify and respond to viral joy or brewing anger."
          tags={['Text', 'Psychology', 'Analytics']} 
        />
      </div>
    </div>
  </section>
);

export default Models;