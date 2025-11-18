
import React from 'react';
import SectionHeader from './SectionHeader';

const WhyFit: React.FC = () => {
  return (
    <section id="why-fit">
      <SectionHeader title="Why I'm a Great Fit for Avenidas" subtitle="Alignment with Your Needs" />
      <div className="bg-cyan-900/20 rounded-lg p-8 shadow-2xl backdrop-blur-sm border border-cyan-700/50 text-center">
        <p className="text-lg leading-relaxed text-slate-200 max-w-3xl mx-auto">
          My hands-on experience in RLHF and AI evaluation at Outlier aligns perfectly with the responsibilities of the AI Trainer role at Avenidas. I am not just passionate about AI; I have practical, proven experience in the meticulous, detail-oriented work required to improve it. My ability to work independently, manage my time effectively, and adhere to complex instructions has been central to my success. I am confident that my skills in quality assessment, content generation, and my native proficiency in Portuguese make me an ideal candidate to contribute to your AI development efforts.
        </p>
        <a 
          href="https://avenidas.factorialhr.pt/apply/ai-training-jobs-flexivel-e-pago-por-tarefa-267642?utm_source=linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-600 transition-colors duration-300 shadow-lg"
        >
          View Job Description
        </a>
      </div>
    </section>
  );
};

export default WhyFit;
