import React from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  Download,
  ExternalLink,
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
  Code2,
  Database,
  BrainCircuit,
  LayoutDashboard,
} from "lucide-react";
import "./styles.css";

const navItems = [
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

const skills = [
  {
    title: "Data Science",
    icon: <Database size={22} />,
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
    icon: <BrainCircuit size={22} />,
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
    icon: <Code2 size={22} />,
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
    icon: <LayoutDashboard size={22} />,
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
    icon: <Sparkles size={22} />,
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

const projects = [
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
    repositoryUrl:
      "https://github.com/nabilakhyarotunnisa/FastAPI-XGBoost-SmartCity",
    caseStudyUrl:
      "https://github.com/nabilakhyarotunnisa/FastAPI-XGBoost-SmartCity",
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

const achievements = [
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

const certifications = [
  {
    title: "Python Fundamental for Data Science",
    issuer: "DQLab - Xeratic",
    date: "Completed",
    certificateUrl: "https://drive.google.com/file/d/1l_N7W0AWpaSs1M9Pn_K8FxGsqbSX8oxu/view?usp=drive_link",
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
    certificateUrl: "https://drive.google.com/file/d/15gq8YAxgv7YN_28wal3_S3VKgLKWUw0g/view?usp=drive_link",
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
    certificateUrl: "https://drive.google.com/file/d/1TV8Wf6rz-Ewq3V48n8y9ac_fUUYRak7I/view?usp=drive_link",
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
    certificateUrl: "https://drive.google.com/file/d/1WvJ4wnLFPWeL716nTf6tiOdw6bSGqYjs/view?usp=drive_link",
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
    certificateUrl: "https://drive.google.com/file/d/1_9KajdVis4fmwpyHJaZL1tL2NnYOn_vm/view?usp=drive_link",
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
    certificateUrl: "https://drive.google.com/file/d/1BzdnABc5mR530_nLMQqor3oxu5ohr8Bh/view?usp=drive_link",
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
    certificateUrl: "https://drive.google.com/file/d/1RDcffTJvRZs4t6oQZ3Fk6Gg4vQegMN3c/view?usp=drive_link",
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
    certificateUrl: "https://drive.google.com/file/d/1WgQl-64u-ZTdNafNuWmyw2dZxWBgVzsc/view?usp=drive_link",
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
    certificateUrl: "https://drive.google.com/file/d/1DxNMo1nlmLtc6aTbX2WtEOGc4MVBKvBj/view?usp=drive_link",
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
    certificateUrl: "https://drive.google.com/file/d/1Y6k84A-JbyOeTDWQLBvbbyX74xgWcC2D/view?usp=drive_link",
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
    certificateUrl: "Mhttps://drive.google.com/file/d/1RcRk9Gokz5j39sTZqSm5ukBZxPGtxfQs/view?usp=drive_link",
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
    certificateUrl: "https://drive.google.com/file/d/14klCSh--5W_GpYZivCGe81ua-1v6G94g/view?usp=drive_link",
    scope: [
      "KKNI Level II on Multimedia Skills Competencies",
      "Graphic design",
      "Multimedia production",
      "Creative digital asset development",
    ],
  },
];

const workExperiences = [
  {
    role: "Data Entry",
    company: "Current Company",
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
    company: "Current Company",
    period: "Present",
    location: "Indonesia",
    skills: [
      "Google Analytics",
      "SEO",
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

const experiences = [
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

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function NavDropdown({ item }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleTriggerClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSubItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href={item.href}
        className="nav-dropdown-trigger"
        onClick={handleTriggerClick}
      >
        {item.label}
      </a>

      {isOpen && (
        <div className="nav-dropdown-menu">
          {item.subItems.map((subItem) => (
            <a
              key={subItem.label}
              href={subItem.href}
              className="nav-dropdown-item"
              onClick={handleSubItemClick}
            >
              {subItem.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo">
          Nabila<span>.</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            item.subItems ? (
              <NavDropdown key={item.label} item={item} />
            ) : (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            )
          ))}
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="hero-badge">
              Data Scientist · Machine Learning Enthusiast · Software Engineer
            </p>

            <h1>
              Hi, I’m <span>Nabila Khyarotunnisa</span>
            </h1>

            <p className="hero-subtitle">
              Final-year Informatics Engineering student focused on Data Science,
              Machine Learning, and Software Engineering, especially Web
              Development. I enjoy building data-driven solutions, AI-powered
              applications, and responsive digital products.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn primary">
                View My Work <ArrowRight size={18} />
              </a>

              <a
                href="/Nabila Khyarotunnisa_CV.pdf"
                className="btn secondary"
                download
              >
                Download CV <Download size={18} />
              </a>

              <a href="#contact" className="btn ghost">
                Let’s Connect
              </a>
            </div>

            <div className="social-links">
              <a href="mailto:nabila.khy@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>

              <a
                href="https://github.com/nabilakhyarotunnisa"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/nabila-khyarotunnisa"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>

              <a
                href="https://instagram.com/nabilakhy._"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-card profile-card"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="profile-photo-wrapper">
            <img
                src="/nabila.png"
                alt="Nabila Khyarotunnisa"
                className="profile-photo"
              />
          </div>

          <div className="hero-card-inner">
            <Sparkles size={34} />
            <h3>Data & Web Technology Portfolio</h3>
            <p>
              A personal website highlighting data science, machine learning,
              software engineering, web development, achievements, and
              professional experience.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="about" className="section">
        <SectionHeader
          eyebrow="About"
          title="About Me"
          description="A quick introduction about my academic background, interests, and professional direction."
        />

        <div className="about-grid">
          <div className="about-card">
            <p>
              I am a final-year Informatics Engineering student at Gunadarma
              University with a strong interest in Data Science, Machine
              Learning, and Software Engineering, especially Web Development. I
              enjoy transforming data into meaningful insights and building
              technology-driven solutions that combine analytics, development,
              and user-centered design.
            </p>

            <p>
              Through academic research, startup initiatives, and technology
              communities, I have gained experience in predictive analytics,
              machine learning, dashboard development, UI/UX design, frontend
              development, and strategic marketing. I am passionate about
              building practical digital products that solve real problems.
            </p>
          </div>

          <div className="education-card">
            <h3>
              <GraduationCap size={22} /> Education
            </h3>

            <div>
              <h4>Gunadarma University</h4>
              <p>Informatics Engineering</p>
              <span>GPA: 3.78 / 4.00</span>
            </div>

            <div>
              <h4>Taruna Terpadu Vocational School</h4>
              <p>Multimedia</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section soft-section">
        <SectionHeader
          eyebrow="Skills"
          title="Skills & Tools"
          description="Technical skills grouped around data science, machine learning, software engineering, and web development."
        />

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <div className="card-title">
                {skill.icon}
                <h3>{skill.title}</h3>
              </div>

              <div className="badge-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Projects"
          description="Selected projects across data science, machine learning, web development, dashboard development, and AI-powered applications."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="badge-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-actions">
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noreferrer"
                className="small-link"
              >
                View Case Study <ExternalLink size={16} />
              </a>

              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="small-link"
              >
                View Repository <ExternalLink size={16} />
              </a>
            </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="achievements" className="section soft-section">
        <SectionHeader
          eyebrow="Milestones"
          title="Achievements"
          description="Competition, innovation, and business funding achievements."
        />

        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <article className="achievement-card" key={achievement.title}>
              <div className="achievement-icon">
                <Award size={24} />
              </div>

              <div>
                <span>{achievement.year}</span>
                <h3>{achievement.title}</h3>
                <h4>{achievement.organization}</h4>
                <p className="role">{achievement.role}</p>
                <p>{achievement.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" className="section">
        <SectionHeader
          eyebrow="Learning"
          title="Training & Certifications"
          description="Relevant certifications and learning roadmap in data science, machine learning, and web development."
        />

              <div className="cert-grid">
        {certifications.map((cert) => (
          <article className="cert-card" key={cert.title}>
            <div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span>{cert.date}</span>

              <ul>
                {cert.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="cert-button"
            >
              View Certificate <ExternalLink size={16} />
            </a>
          </article>
        ))}
      </div>
      </section>

<section id="work-experience" className="section">
  <SectionHeader
    eyebrow="Professional"
    title="Work Experience"
    description="Professional experience in administration, data management, and digital marketing."
  />

  <div className="timeline">
    {workExperiences.map((experience) => (
      <article
        className="timeline-item"
        key={`${experience.role}-${experience.company}`}
      >
        <div className="timeline-dot" />

        <div className="timeline-card">
          <h3>
            <BriefcaseBusiness size={20} />
            {experience.role}
          </h3>

          <p className="timeline-org">
            {experience.company}
          </p>

          <span>{experience.period}</span>

          <p
            style={{
              marginTop: "8px",
              color: "#64748b",
            }}
          >
            {experience.location}
          </p>

          <div
            className="badge-list"
            style={{ marginTop: "14px" }}
          >
            {experience.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <ul>
            {experience.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </article>
    ))}
  </div>
</section>

      <section id="experience" className="section soft-section">
        <SectionHeader
          eyebrow="Experience"
          title="Organizational Experience"
          description="Leadership, creative, event, marketing, and community experience."
        />

        <div className="timeline">
          {experiences.map((experience) => (
            <article
              className="timeline-item"
              key={`${experience.role}-${experience.organization}`}
            >
              <div className="timeline-dot" />

              <div className="timeline-card">
                <h3>
                  <BriefcaseBusiness size={20} />
                  {experience.role}
                </h3>

                <p className="timeline-org">{experience.organization}</p>
                <span>{experience.period}</span>

                <ul>
                  {experience.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s Connect"
          description="Open for internship opportunities, data-related projects, web development collaboration, professional networking, and technology communities."
        />

        <div className="contact-card">
          <h3>Interested in working together?</h3>
          <p>
            Feel free to reach me through email, LinkedIn, GitHub, or Instagram.
          </p>

          <div className="contact-links">
            <a href="mailto:nabila.khy@gmail.com">
              <Mail size={18} /> nabila.khy@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/nabila-khyarotunnisa"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={18} /> LinkedIn
            </a>

            <a
              href="https://github.com/nabilakhyarotunnisa"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={18} /> GitHub
            </a>

            <a
              href="https://instagram.com/nabilakhy._"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={18} /> Instagram
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>
          © 2026 Nabila Khyarotunnisa. Built with React & modern responsive
          styling.
        </p>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);