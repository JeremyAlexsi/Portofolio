export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: 'Fullstack Web' | 'Mobile App' | 'Game Dev';
  metrics: string;
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: number; // optional, tidak wajib
    description: string;
  }[];
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  description: string[];
  technologies: string[];
}
