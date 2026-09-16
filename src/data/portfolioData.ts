import { ProjectItem, CertificateItem, ExperienceItem, CreativeItem, EducationItem, SocialLinks } from '../types';

export const INITIAL_SOCIAL_LINKS: SocialLinks = {
  linkedin: '', // Editable placeholder
  github: '', // Editable placeholder
  email: 'dipeshydv908@gmail.com',
  resumeUrl: '',
};

export const INITIAL_EDUCATION: EducationItem = {
  institution: 'Global Institute of Technology, Jaipur',
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science Engineering',
  duration: '2025 – 2029',
  location: 'Jaipur, Rajasthan, India',
  status: 'Undergraduate Student',
  highlights: [
    'Core Focus: Data Structures, Algorithms, AI & Machine Learning, Web Technologies',
    'Active participant in technical hackathons and competitive engineering events',
    'Synthesizing computer engineering discipline with visual digital design aesthetics'
  ]
};

export const TECHNICAL_SKILLS = [
  { name: 'Python', category: 'Core & AI', level: 90, icon: 'code-2' },
  { name: 'Artificial Intelligence', category: 'AI & ML', level: 85, icon: 'sparkles' },
  { name: 'C', category: 'Core', level: 82, icon: 'cpu' },
  { name: 'C++', category: 'Core', level: 84, icon: 'binary' },
  { name: 'Git', category: 'DevOps & Tools', level: 86, icon: 'git-branch' },
  { name: 'GitHub', category: 'DevOps & Tools', level: 88, icon: 'github' },
  { name: 'Responsive Web Development', category: 'Web', level: 94, icon: 'smartphone' },
];

export const CREATIVE_SKILLS = [
  { name: 'Photo Editing', tools: 'Lightroom, Photoshop', highlight: 'Raw processing, color balance & dynamic range recovery' },
  { name: 'Video Editing', tools: 'Premiere Pro, After Effects', highlight: 'Pacing, sound design, transitions & motion graphics' },
  { name: 'Social Media Design', tools: 'Figma & Photoshop', highlight: 'High-CTR visual posts, banners & carousels' },
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'AI-Powered Personal Assistant',
    subtitle: 'Intelligent Autonomous Agent',
    technologies: ['Python', 'Artificial Intelligence', 'NLP', 'APIs'],
    description: 'An intelligent assistant designed to help users perform tasks using AI. Integrates natural language processing to automate productivity workflows, query answering, and user operations with intuitive execution.',
    badge: 'Featured AI Project',
    githubUrl: '', // To be filled by user
    liveDemoUrl: '', // To be filled by user
  },
  {
    id: 'proj-2',
    title: 'Smart Car Parking System',
    subtitle: 'IoT & Hardware Automation',
    technologies: ['Arduino UNO', 'HC-SR04 Ultrasonic Sensors', 'LCD', 'LEDs', 'Buzzer'],
    description: 'An automated parking system that detects parking-slot availability using ultrasonic sensors. Provides real-time visual feedback on LCD displays and safety audio alerts to eliminate congestion.',
    badge: 'IoT Hardware',
    githubUrl: '', // To be filled by user
    liveDemoUrl: '', // To be filled by user
  },
  {
    id: 'proj-3',
    title: 'Personal Portfolio Website',
    subtitle: 'Futuristic Developer Experience',
    technologies: ['TypeScript', 'Tailwind', 'Three.js', 'Motion', 'Vite'],
    description: 'A responsive modern developer portfolio showcasing my skills, projects, achievements, and certificates with interactive 3D spatial visuals, dark glassmorphism, and instant recruiter access.',
    badge: 'Web App',
    githubUrl: '', // To be filled by user
    liveDemoUrl: '', // To be filled by user
  },
  {
    id: 'proj-4',
    title: 'Creative Editing Portfolio',
    subtitle: 'Visual Aesthetics & Media Showcase',
    technologies: ['Photo Editing', 'Video Editing', 'Social Media Design'],
    description: 'A curated showcase of photo editing, video editing, and high-CTR social media design work, highlighting color harmony, motion pacing, and visual storytelling.',
    badge: 'Creative Showcase',
    githubUrl: '', // To be filled by user
    liveDemoUrl: '', // To be filled by user
  }
];

export const INITIAL_CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-codefiesta',
    title: 'CODEFIESTA Hackathon 4.0 Certificate of Achievement',
    organization: 'Global Institute of Technology, Jaipur',
    date: '09–10 October 2025',
    type: '24 Hr. Hackathon Participation & Achievement',
    credentialId: 'GITJ-CF4-2025',
    description: 'Awarded to Dipesh for participating in CODEFIESTA 4.0 (24 Hr. Hackathon) organized by Global Institute of Technology, Jaipur. Powered by H2S, Global Innovation Community Technology Hackathon, Google Developer Group, NAAC A+, IIC, and AICTE.',
    imageUrl: '/certificates/cert_codefiesta_git.svg',
    topics: ['24-Hour Rapid Prototyping', 'Software Innovation', 'Teamwork', 'GIT Jaipur', 'Problem Solving'],
    verified: true,
  },
  {
    id: 'cert-linuxworld-aws',
    title: 'Certificate of Training - Python with AWS Cloud Training',
    organization: 'LinuxWorld #13 Learn to Lead',
    date: '13 July – 27 July 2026',
    type: 'Python & AWS Cloud Engineering Training',
    credentialId: 'LW-JPR-2026-5309',
    description: 'Bestowed upon Dipesh for attending an exceptional in-depth 20+ hours of hands-on Python with AWS Cloud training featuring practical demonstrations and 5 real-world cloud projects under the mentorship of Syed Jibbran Ali Sir and Vimal Daga (Founder - #13).',
    imageUrl: '/certificates/cert_linuxworld_aws.svg',
    topics: ['Python OOP', 'AWS CLI & Boto3', 'Amazon EC2 & S3', 'Amazon DynamoDB', 'AWS Lambda', 'Amazon CloudWatch', 'Production Automation'],
    verified: true,
  },
  {
    id: 'cert-ibm-genai',
    title: 'Completion Certificate - Generative Artificial Intelligence',
    organization: 'IBM SkillsBuild',
    date: '10 August 2026 (GMT)',
    type: 'Professional AI Certification',
    credentialId: 'PLAN-48EB3211A34F',
    description: 'Presented to DIPESH . for the completion of Generative Artificial Intelligence, according to the Your Learning Builder - Plans system of record.',
    imageUrl: '/certificates/cert_ibm_genai.svg',
    topics: ['Generative Artificial Intelligence', 'Prompt Engineering', 'Foundation Models', 'AI Architecture'],
    verified: true,
  },
  {
    id: 'cert-codeup-aiedge',
    title: 'Certificate OF AI EDGE INTERNSHIP PROGRAM',
    organization: 'CodeUp',
    date: '10 July 2026',
    type: 'AI Edge Internship Program',
    credentialId: 'CODEUP-AIEDGE-2026',
    description: 'Presented to Dipesh for the successful completion of 15-Day AI Edge Internship Program, conducted from 22 June to 08 July 2026. Signed by Priyanka Jangid.',
    imageUrl: '/certificates/cert_codeup_aiedge.svg',
    topics: ['15-Day AI Edge Program', 'Machine Learning', 'Python Engineering', 'Edge Computing', 'CodeUp'],
    verified: true,
  },
  {
    id: 'cert-tcs-careeredge',
    title: 'Certificate of Achievement - TCS iON Career Edge - Young Professional',
    organization: 'TCS iON, Tata Consultancy Services',
    date: '14 June 2026',
    type: 'Professional Technical & Workplace Certification',
    credentialId: '272697-32356944-1016',
    description: 'Awarded to Dipesh for successfully completing TCS iON Career Edge - Young Professional course covering Communication Skills, Problem-Solving Mindset, Accounting Fundamentals, IT Foundational Skills, and Overview of Artificial Intelligence. Signed by Mehul Mehta, Global Delivery Head – TCS iON.',
    imageUrl: '/certificates/cert_tcs_career_edge.svg',
    topics: ['IT Foundational Skills', 'Artificial Intelligence Overview', 'Problem Solving', 'Workplace Success', 'Tata Consultancy Services'],
    verified: true,
  }
];

export const INITIAL_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Hackathon Competitor & Builder',
    organization: 'CODEFIESTA Hackathon 4.0',
    location: 'Global Institute of Technology, Jaipur',
    duration: '09–10 October 2025',
    type: 'hackathon',
    description: 'Participated in a rigorous 24-hour hackathon, designing and developing an end-to-end technical solution under high-pressure competitive conditions.',
    highlights: [
      'Engineered an innovative prototype within a strict 24-hour sprint',
      'Collaborated effectively on architecture, code reviews, and pitch presentation',
      'Recognized with official certificate of participation and achievement'
    ],
    certificateId: 'cert-codefiesta',
    technologies: ['Software Development', 'Rapid Prototyping', 'Git', 'Problem Solving']
  },
  {
    id: 'exp-2',
    role: 'AI Edge Engineering Intern',
    organization: 'CodeUp',
    location: 'Hybrid / Virtual',
    duration: '22 June 2026 – 08 July 2026',
    type: 'internship',
    description: 'Completed the intensive 15-Day AI Edge Internship Program, implementing AI workflows, software logic, and computational automation.',
    highlights: [
      'Engineered edge computing algorithms and tested AI models',
      'Authored clean, maintainable Python scripts for data processing',
      'Completed verified program milestones under mentor supervision'
    ],
    certificateId: 'cert-codeup-aiedge',
    technologies: ['Python', 'AI Edge Systems', 'Data Structures', 'Automation']
  },
  {
    id: 'exp-3',
    role: 'Python & Cloud Engineering Trainee',
    organization: 'LinuxWorld #13',
    location: 'Jaipur / Virtual',
    duration: '13 July 2026 – 27 July 2026',
    type: 'internship',
    description: 'Completed 20+ hours of advanced Python with AWS Cloud hands-on training with 5 production-ready cloud project deployments.',
    highlights: [
      'Automated AWS cloud resources using Boto3, EC2, S3, and Lambda',
      'Built and monitored serverless applications with CloudWatch and DynamoDB',
      'Earned official certification under mentor Syed Jibbran Ali and Vimal Daga'
    ],
    certificateId: 'cert-linuxworld-aws',
    technologies: ['Python', 'AWS CLI', 'Boto3', 'AWS Lambda', 'Amazon S3', 'EC2']
  }
];

export const INITIAL_CREATIVE_WORKS: CreativeItem[] = [
  {
    id: 'cw-1',
    title: 'Cyberpunk Portrait Color Grade',
    category: 'Photo Editing',
    description: 'Dual-tone neon color grading with high-frequency skin texture preservation, localized dodge & burn, and cinematic atmosphere.',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    beforeImageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Photo Editing', 'Color Grading', 'Lighting'],
  },
  {
    id: 'cw-2',
    title: 'Futuristic Sci-Fi Composite',
    category: 'Photo Editing',
    description: 'Multi-layer composite blending architectural geometry, digital holographic elements, and perspective illumination balance.',
    imageUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
    tags: ['Photo Editing', 'Photoshop', 'Compositing'],
  },
  {
    id: 'cw-3',
    title: 'Editorial Clean Studio Portrait',
    category: 'Photo Editing',
    description: 'High-end frequency separation retouching maintaining natural skin pores, specular highlight shaping, and clean backdrop isolation.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    tags: ['Photo Editing', 'Studio Portrait', 'Texture'],
  },
  {
    id: 'cw-4',
    title: 'Minimalist Social Product Carousel',
    category: 'Social Media Design',
    description: 'Clean high-CTR carousel slides designed for social media feeds with balanced negative space and clear value propositions.',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    tags: ['Social Media Design', 'Figma', 'Product Carousel'],
  },
  {
    id: 'cw-5',
    title: 'Cinematic Teaser Motion Poster',
    category: 'Social Media Design',
    description: 'High-impact promotional social graphic optimized for engagement, featuring custom typography lockups and directional light flares.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['Social Media Design', 'Poster', 'Typography'],
  },
  {
    id: 'cw-6',
    title: 'Cinematic Video Reel & Color Sequence',
    category: 'Video Editing',
    description: 'Dynamic video sequence with multi-track sound design, seamless scene cuts, and cinematic color pacing.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    tags: ['Video Editing', 'Premiere Pro', 'Motion Pacing'],
  }
];
