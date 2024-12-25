export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary: string;
  profileImage?: string;
  availability?: string;
  desiredRole?: string;
  salaryExpectation?: string;
  portfolioLinks?: {
    title: string;
    url: string;
  }[];
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  teamSize?: number;
  responsibilities?: string[];
  projectHighlights?: {
    name: string;
    description: string;
    impact: string;
  }[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
  activities?: string[];
  relevantCourses?: string[];
  thesis?: {
    title: string;
    description: string;
    supervisor?: string;
  };
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Technical' | 'Soft' | 'Language' | 'Other';
  yearsOfExperience?: number;
  certifications?: string[];
  projects?: string[];
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  startDate: string;
  endDate?: string;
  technologies: string[];
  highlights: string[];
  role?: string;
  teamSize?: number;
  impact?: string;
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialId?: string;
  url?: string;
  skills?: string[];
  description?: string;
  score?: string;
}

export interface Language {
  language: string;
  proficiency: 'Basic' | 'Intermediate' | 'Advanced' | 'Native' | 'Fluent';
  certifications?: string[];
  lastUsed?: string;
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description: string;
  url?: string;
}

export interface Publication {
  title: string;
  authors: string[];
  date: string;
  publisher: string;
  url?: string;
  doi?: string;
  abstract?: string;
}

export interface Volunteer {
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export interface CV {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  awards?: Award[];
  publications?: Publication[];
  volunteer?: Volunteer[];
  references?: {
    name: string;
    title: string;
    company: string;
    email: string;
    phone?: string;
    relationship: string;
  }[];
}