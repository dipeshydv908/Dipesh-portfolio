export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  technologies: string[];
  description: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  imageUrl?: string;
  badge?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: string;
  credentialId?: string;
  description: string;
  imageUrl?: string;
  topics: string[];
  verified: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  duration: string;
  type: 'hackathon' | 'internship';
  description: string;
  highlights: string[];
  certificateId?: string;
  technologies: string[];
}

export interface CreativeItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  beforeImageUrl?: string;
  tags: string[];
  aspectRatio?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  status: string;
  highlights: string[];
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
  resumeUrl?: string;
}
