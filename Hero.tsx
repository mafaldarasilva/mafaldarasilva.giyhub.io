
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center mb-16 md:mb-24">
      <img
        className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-slate-700 shadow-lg"
        src="https://picsum.photos/seed/sofia-almeida/200"
        alt="Sofia Almeida"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
        Sofia Almeida
      </h1>
      <p className="mt-3 text-xl md:text-2xl text-cyan-400 font-medium">
        AI Training Specialist
      </p>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
        Enhancing AI through meticulous evaluation and expert human feedback. Specializing in RLHF and quality assurance for large language models.
      </p>
    </section>
  );
};

export default Hero;
