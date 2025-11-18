// FIX: Import React to resolve the "Cannot find namespace 'React'" error.
import type React from 'react';

export interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  tasks: string[];
}