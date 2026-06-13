import {
  Database,
  BrainCircuit,
  Code2,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  {
    label: "Experience",
    href: "#experience",
    subItems: [
      { label: "Work Experience", href: "#work-experience" },
      { label: "Organizational Experience", href: "#experience" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    title: "Data Science",
    Icon: Database,
    items: [
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Data Visualization",
      "Statistical Analysis",
      "Hypothesis Testing",
      "Predictive Analytics",
      "SQL Querying",
    ],
  },
  {
    title: "Machine Learning",
    Icon: BrainCircuit,
    items: [
      "Supervised Learning",
      "Regression",
      "Classification",
      "Model Evaluation",
      "Random Forest",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "SMOTE",
      "NLP Basics",
    ],
  },
  {
    title: "Software Engineering - Web Development",
    Icon: Code2,
    items: [
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
      "REST API",
      "FastAPI",
      "Streamlit",
    ],
  },
  {
    title: "Programming & Database",
    Icon: LayoutDashboard,
    items: [
      "Python",
      "SQL",
      "R",
      "Java",
      "PostgreSQL",
      "MySQL",
      "NoSQL Basics",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Libraries & Tools",
    Icon: Sparkles,
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Google Colab",
      "VS Code",
      "Vercel",
    ],
  },
];

export const projects = [
  {
    title:
      "Comparative Analysis of SMOTE Technique on Random Forest, CatBoost, LightGBM and XGBoost Algorithms in Heart Disease Prediction",
    category: "Machine Learning Research",
    description:
      "Analyzed machine learning performance across Random Forest, CatBoost, LightGBM, and XGBoost for heart disease risk classification. Implemented SMOTE oversampling to handle imbalanced data and improve model sensitivity for high-risk patients.",
    repositoryUrl:
      "https://github.com/nabilakhyarotunnisa/analisis-perbandingan-algoritma-dengan-teknik-SMOTE",
    caseStudyUrl:
      "https://github.com/nabilakhyarotunnisa/analisis-perbandingan-algoritma-dengan-teknik-SMOTE",
    tags: [
      "Machine Learning",
      "Classification",
      "SMOTE",
      "Medical Predictive Analytics",
      "Model Evaluation",
    ],
  },
  {
    title: "Smart City Unified Dashboard",
    category: "Machine Learning / Software Engineering",
    description:
      "Built a unified Smart City dashboard integrating real-time IoT monitoring and AI-powered citizen complaint classification. Implemented an XGBoost model through FastAPI to classify public reports and support government agency decision-making.",
    repositoryUrl: "https://github.com/nabilakhyarotunnisa/FastAPI-XGBoost-SmartCity",
    caseStudyUrl: "https://github.com/nabilakhyarotunnisa/FastAPI-XGBoost-SmartCity",
    tags: [
      "FastAPI",
      "XGBoost",
      "Smart City",
      "Machine Learning",
      "Dashboard",
      "IoT Monitoring",
    ],
  },
  {
    title: "Managein",
    category: "Software Engineering / Web Development",
    description:
      "Developed an internal management dashboard built with React.js and TypeScript. The system includes authentication, responsive UI components, and data management features using CSV or Excel data integration.",
    repositoryUrl: "https://github.com/nabilakhyarotunnisa/managein",
    caseStudyUrl: "https://github.com/nabilakhyarotunnisa/managein",
    tags: [
      "React.js",
      "TypeScript",
      "Dashboard",
      "Authentication",
      "CSV/Excel Data",
      "Frontend Development",
    ],
  },
  {
    title: "Student Management System",
    category: "Software Engineering / Web Development",
    description:
      "Built a CRUD-based student management system using PHP and MySQL. The application includes student data entry, search functionality, and responsive dashboard layout for managing academic data.",
    repositoryUrl:
      "https://github.com/nabilakhyarotunnisa/Student-Management-System-PHP",
    caseStudyUrl:
      "https://github.com/nabilakhyarotunnisa/Student-Management-System-PHP",
    tags: [
      "PHP",
      "MySQL",
      "CRUD",
      "Student Management",
      "Web Application",
      "Dashboard",
    ],
  },
  {
    title: "Dapoer Arna Website",
    category: "Web Development / Company Profile",
    description:
      "Created a company profile website for Dancecorner with a clean landing page structure, responsive layout, and modern interface to present brand information and digital presence.",
    repositoryUrl: "https://github.com/nabilakhyarotunnisa/dapoerarna",
    caseStudyUrl: "https://github.com/nabilakhyarotunnisa/dapoerarna",
    tags: [
      "Website",
      "Company Profile",
      "Responsive Design",
      "Frontend Development",
      "UI Design",
    ],
  },
];

export const achievements = [
  {
    title: "3rd Winner — National Business Plan Competition",
    organization: "JACSEN Jambi University",
    role: "Chief Marketing Officer, Pengen Menang Team",
    year: "2025",
    description:
      "Developed Safi Watch, a technology business idea focused on user security through an advanced smartwatch solution.",
  },
  {
    title: "Passed P2MW Funding Program",
    organization: "Belmawa Dikti KEMENDIKBUD",
    role: "Chief Marketing Officer, Recad",
    year: "2024",
    description:
      "Secured business funding worth IDR 12,700,000 for Recad, a medical equipment rental and leasing marketplace.",
  },
  {
    title: "2nd Winner — Innovation Hackathon",
    organization: "Google DSC Institut Teknologi Telkom Purwokerto",
    role: "UI/UX Designer, Si Paling Core Team",
    year: "2023",
    description:
      "Designed ToGether, an innovative application for recycling waste and improving waste management systems in Indonesia.",
  },
];

export const certifications = [
  {
    title: "Python Fundamental for Data Science",
    issuer: "DQLab - Xeratic",
    date: "Completed",
    certificateUrl:
      "https://drive.google.com/file/d/1l_N7W0AWpaSs1M9Pn_K8FxGsqbSX8oxu/view?usp=drive_link",
    scope: [
      "Python basics",
      "Data types and variables",
      "Control flow",
      "Functions",
      "Basic data processing",
    ],
  },
  {
    title: "R Fundamental for Data Science",
    issuer: "DQLab - Xeratic",
    date: "Completed",
    certificateUrl:
      "https://drive.google.com/file/d/15gq8YAxgv7YN_28wal3_S3VKgLKWUw0g/view?usp=drive_link",
    scope: [
      "R programming basics",
      "Data structures",
      "Basic statistics",
      "Data manipulation",
      "Data analysis fundamentals",
    ],
  },
  {
    title: "Fundamental SQL Using SELECT Statement",
    issuer: "DQLab - Xeratic",
    date: "Completed",
    certificateUrl:
      "https://drive.google.com/file/d/1TV8Wf6rz-Ewq3V48n8y9ac_fUUYRak7I/view?usp=drive_link",
    scope: [
      "SQL SELECT statement",
      "Filtering data",
      "Sorting data",
      "Basic SQL query",
      "Data retrieval",
    ],
  },
  {
    title: "JavaScript Fundamental",
    issuer: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
    date: "Completed",
    certificateUrl:
      "https://drive.google.com/file/d/1WvJ4wnLFPWeL716nTf6tiOdw6bSGqYjs/view?usp=drive_link",
    scope: [
      "JavaScript basic syntax",
      "Variables and data types",
      "Functions",
      "DOM basics",
      "Web interactivity",
    ],
  },
  {
    title: "Fundamental Web Programming",
    issuer: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
    date: "Completed",
    certificateUrl:
      "https://drive.google.com/file/d/1_9KajdVis4fmwpyHJaZL1tL2NnYOn_vm/view?usp=drive_link",
    scope: [
      "HTML fundamentals",
      "CSS fundamentals",
      "JavaScript basics",
      "Responsive web layout",
      "Website structure",
    ],
  },
  {
    title: "Data Science Course — Case 1",
    issuer: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
    date: "Completed",
    certificateUrl:
      "https://drive.google.com/file/d/1BzdnABc5mR530_nLMQqor3oxu5ohr8Bh/view?usp=drive_link",
    scope: [
      "Data science introduction",
      "Data understanding",
      "Data preparation",
      "Case study analysis",
      "Data-driven problem solving",
    ],
  },
  {
    title: "Fundamental Database Management System",
    issuer: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
    date: "Completed",
    certificateUrl:
      "https://drive.google.com/file/d/1RDcffTJvRZs4t6oQZ3Fk6Gg4vQegMN3c/view?usp=drive_link",
    scope: [
      "Database management basics",
      "Relational database concept",
      "Data modeling",
      "Database structure",
      "Basic DBMS workflow",
    ],
  },
  {
    title: "Oracle for Beginner",
    issuer: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
    date: "Completed",
    certificateUrl:
      "https://drive.google.com/file/d/1WgQl-64u-ZTdNafNuWmyw2dZxWBgVzsc/view?usp=drive_link",
    scope: [
      "Oracle database introduction",
      "Basic SQL in Oracle",
      "Database object basics",
      "Query fundamentals",
    ],
  },
  {
    title: "Oracle for Intermediate",
    issuer: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
    date: "Completed",
    certificateUrl:
      "https://drive.google.com/file/d/1DxNMo1nlmLtc6aTbX2WtEOGc4MVBKvBj/view?usp=drive_link",
    scope: [
      "Intermediate Oracle database",
      "Advanced SQL query",
      "Data manipulation",
      "Database practice",
    ],
  },
  {
    title: "SQL Server for Beginner",
    issuer: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
    date: "Completed",
    certificateUrl:
      "https://drive.google.com/file/d/1Y6k84A-JbyOeTDWQLBvbbyX74xgWcC2D/view?usp=drive_link",
    scope: [
      "SQL Server introduction",
      "Basic database operation",
      "Basic SQL query",
      "Database table management",
    ],
  },
  {
    title: "SQL Server for Intermediate",
    issuer: "Lembaga Pengembangan Komputerisasi Universitas Gunadarma",
    date: "Completed",
    certificateUrl:
      "https://drive.google.com/file/d/1RcRk9Gokz5j39sTZqSm5ukBZxPGtxfQs/view?usp=drive_link",
    scope: [
      "Intermediate SQL Server",
      "Query optimization basics",
      "Data manipulation",
      "Relational database practice",
    ],
  },
  {
    title: "Certificate of Competence",
    issuer: "BNSP",
    date: "August 2022 – August 2025",
    certificateUrl:
      "https://drive.google.com/file/d/14klCSh--5W_GpYZivCGe81ua-1v6G94g/view?usp=drive_link",
    scope: [
      "KKNI Level II on Multimedia Skills Competencies",
      "Graphic design",
      "Multimedia production",
      "Creative digital asset development",
    ],
  },
];

export const workExperiences = [
  {
    role: "Data Entry",
    company: "Indokarya Recta Propertindo",
    period: "Oct 2022 – Present · 3 yrs 9 mos",
    location: "Bogor Regency, West Java, Indonesia",
    skills: [
      "Microsoft Excel",
      "Microsoft Word",
      "Data Processing",
      "Data Validation",
      "Data Management",
    ],
    responsibilities: [
      "Input, update, and maintain company data accurately.",
      "Ensure data consistency and completeness.",
      "Generate reports using Microsoft Excel.",
      "Manage administrative and operational records.",
    ],
  },
  {
    role: "Digital Marketing Analyst",
    company: "Indokarya Recta Propertindo",
    period: "Oct 2022 – Present · 3 yrs 9 mos",
    location: "Bogor Regency, West Java, Indonesia",
    skills: [
      "Social Media Marketing",
      "Meta Ads",
      "Data Analysis",
    ],
    responsibilities: [
      "Analyze marketing campaign performance.",
      "Monitor website and social media analytics.",
      "Create performance reports and insights.",
      "Support data-driven marketing decisions.",
    ],
  },
];

export const experiences = [
  {
    role: "Chief Marketing Officer",
    organization: "Google DGoC Gunadarma University",
    period: "September 2024 – Present",
    responsibilities: [
      "Determining marketing goals and achievements.",
      "Understanding the latest marketing practices.",
      "Designing marketing strategy.",
    ],
  },
  {
    role: "Media Creative Core Team",
    organization: "Google DSC Indonesia",
    period: "March 2024 – September 2024",
    responsibilities: [
      "Created and prepared graphic needs for GDSC Indonesia.",
      "Coordinated social media content with other divisions.",
      "Managed GDSC Indonesia social media accounts.",
      "Held Women in Tech event WomenLand: Girls Who Code, Girls Who Inspire!",
    ],
  },
  {
    role: "Media Creative Core Team",
    organization: "Google DSC Gunadarma University",
    period: "September 2023 – September 2024",
    responsibilities: [
      "Designed and produced advertising and broadcast materials.",
      "Created art, photo, video, and layout design assets.",
    ],
  },
  {
    role: "Liaison Officer",
    organization: "Volunteer GDSC Event Pack",
    period: "January 2024 – February 2024",
    responsibilities: [
      "Contacted speakers.",
      "Ensured speakers attended according to event rundown.",
    ],
  },
  {
    role: "Concept Team",
    organization: "Festival Film Boash",
    period: "December 2021 – February 2022",
    responsibilities: [
      "Created creative festival concepts.",
      "Collaborated with teams to deliver meaningful event experience.",
    ],
  },
];
