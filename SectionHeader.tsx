
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
      <p className="mt-3 text-lg text-cyan-400">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
