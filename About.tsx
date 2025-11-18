
import React from 'react';
import SectionHeader from './SectionHeader';

const About: React.FC = () => {
  return (
    <section id="about">
       <SectionHeader title="About Me" subtitle="A Passion for Developing Intelligent Systems" />
      <div className="bg-slate-800/50 rounded-lg p-8 shadow-2xl backdrop-blur-sm border border-slate-700">
        <p className="text-lg leading-relaxed text-slate-300">
          I am a dedicated AI Training Specialist with a proven track record in refining large language models through Reinforcement Learning from Human Feedback (RLHF). My experience at Outlier involved a deep dive into the nuances of AI-generated content, where I was responsible for evaluating and ranking model responses to enhance their safety, accuracy, and overall quality.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          My goal is to contribute to the development of AI that is not only powerful but also responsible and aligned with human values. I thrive in detail-oriented tasks and am adept at following complex guidelines to provide the high-quality data necessary for building state-of-the-art AI systems.
        </p>
      </div>
    </section>
  );
};

export default About;
