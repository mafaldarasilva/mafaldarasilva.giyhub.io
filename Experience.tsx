
import React from 'react';
import type { ExperienceItem } from '../types';
import SectionHeader from './SectionHeader';

const experienceData: ExperienceItem[] = [
  {
    company: 'Outlier',
    role: 'AI Data Trainer (RLHF Specialist)',
    period: '2022 - Present',
    description: 'Played a key role in a large-scale project to train and refine next-generation large language models using Reinforcement Learning from Human Feedback (RLHF).',
    tasks: [
      'Evaluated AI-generated responses for quality, accuracy, and safety based on complex project guidelines.',
      'Wrote and refined high-quality prompts and model responses for creative and factual writing tasks.',
      'Ranked multiple AI responses to the same prompt to create preference data for model training.',
      'Conducted fact-checking to ensure the veracity of information presented by the AI.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Proofreader & Content Editor',
    period: '2020 - 2022',
    description: 'Provided professional proofreading and editing services for a variety of clients, honing my attention to detail and command of the Portuguese language.',
    tasks: [
        'Reviewed documents for grammatical errors, spelling, punctuation, and style.',
        'Ensured consistency in tone and voice across various content types.',
        'Collaborated with authors to improve clarity and readability of their texts.',
    ]
  }
];

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="relative pl-8 sm:pl-12 py-4 group">
    <div className="absolute top-5 left-0 w-px h-full bg-slate-700 sm:w-0.5"></div>
    <div className="absolute top-5 left-[-9px] sm:left-[-11px] w-5 h-5 bg-slate-900 border-2 border-cyan-400 rounded-full"></div>
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 transition-all duration-300 group-hover:border-cyan-400">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                <p className="text-md font-semibold text-cyan-400">{item.company}</p>
            </div>
            <span className="text-sm text-slate-500 flex-shrink-0 ml-4">{item.period}</span>
        </div>
        <p className="mt-4 text-slate-400">{item.description}</p>
        <ul className="mt-4 space-y-2 list-disc list-inside text-slate-300">
        {item.tasks.map((task, index) => (
            <li key={index}>{task}</li>
        ))}
        </ul>
    </div>
  </div>
);


const Experience: React.FC = () => {
  return (
    <section id="experience">
      <SectionHeader title="Relevant Experience" subtitle="My Professional Journey" />
      <div className="relative">
        {experienceData.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
