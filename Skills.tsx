
import React from 'react';
import type { Skill } from '../types';
import SectionHeader from './SectionHeader';

const BrainIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 4h4m5 4h-4M4.93 19.07A10 10 0 1119.07 4.93 10 10 0 014.93 19.07z" />
  </svg>
);

const CheckBadgeIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const PencilIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
  </svg>
);

const LanguageIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m4 13-4-4m0 0l4-4m-4 4h12M3 17h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const skills: Skill[] = [
  {
    icon: <BrainIcon />,
    title: 'RLHF & AI Evaluation',
    description: 'Expert in evaluating and ranking AI model responses to improve performance through human feedback.',
  },
  {
    icon: <CheckBadgeIcon />,
    title: 'Quality & Factual Accuracy',
    description: 'Meticulous attention to detail for verifying information and ensuring the highest quality of AI-generated text.',
  },
  {
    icon: <PencilIcon />,
    title: 'Content & Prompt Crafting',
    description: 'Skilled in writing clear, high-quality content and creating effective prompts to test and train AI models.',
  },
  {
    icon: <LanguageIcon />,
    title: 'Native Portuguese Proficiency',
    description: 'C2-level fluency in Portuguese, with excellent reading and writing skills for nuanced evaluation.',
  },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center space-x-4">
      <div>{skill.icon}</div>
      <h3 className="text-xl font-bold text-white">{skill.title}</h3>
    </div>
    <p className="mt-4 text-slate-400">{skill.description}</p>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <SectionHeader title="Core Competencies" subtitle="My Professional Skillset" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
