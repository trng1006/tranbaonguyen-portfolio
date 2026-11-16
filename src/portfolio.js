/* Personal Portfolio Configuration */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen (disabled for instant first paint)
const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: false
};

const greeting = {
  username: "Tran Bao Nguyen",
  availabilityBadge: "Available for Backend / Fullstack Internship",
  title: "Tran Bao Nguyen",
  roleTitle: "Backend & Fullstack Software Engineering Student",
  subTitle:
    "Third-year Software Engineering student at HUIT with a solid foundation in OOP, relational database design, and end-to-end Web & Mobile development — from RESTful APIs to responsive interfaces.",
  profileCard: {
    avatarUrl: "https://avatars.githubusercontent.com/trng1006",
    handle: "@trng1006",
    university: "HUIT — Software Engineering",
    gpa: "3.1 / 4.0",
    location: "Ho Chi Minh City, Vietnam",
    focus: "Backend & Fullstack",
    coreStack: ["Java", "Spring Boot", "Python", "FastAPI", "React", "PostgreSQL"]
  },
  resumeLink: "", // Set URL or file path to show resume button
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/trng1006",
  gmail: "Trng1006.work@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "Engineering Capabilities & Stack",
  subTitle:
    "Focused on building maintainable backend services, clean database schemas, and responsive client applications.",
  skills: [
    "Develop scalable RESTful APIs using Spring Boot (Java) and FastAPI (Python)",
    "Build responsive Frontend and Mobile applications with React, Vue, and Flutter",
    "Relational database design, query optimization, and management across PostgreSQL, MySQL, SQL Server, and Oracle"
  ],
  capabilities: [
    {
      id: "backend",
      title: "Backend & RESTful APIs",
      description:
        "Design layered architectures, authentication flows, and clean API contracts using Java Spring Boot, Python FastAPI, and Node.js."
    },
    {
      id: "frontend",
      title: "Frontend & Mobile Apps",
      description:
        "Craft responsive web interfaces with React & Vue and cross-platform mobile experiences with Flutter & Dart."
    },
    {
      id: "database",
      title: "Database Architecture",
      description:
        "Model normalized schemas, write efficient SQL queries, and tune indexes on PostgreSQL, MySQL, SQL Server, and Oracle."
    }
  ],
  skillGroups: [
    {
      category: "Backend & Languages",
      items: [
        {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
        {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
        {skillName: "C#", fontAwesomeClassname: "fab fa-microsoft"},
        {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"}
      ]
    },
    {
      category: "Frontend & Mobile",
      items: [
        {skillName: "React", fontAwesomeClassname: "fab fa-react"},
        {skillName: "Vue", fontAwesomeClassname: "fab fa-vuejs"},
        {skillName: "Flutter / Dart", fontAwesomeClassname: "fas fa-mobile-alt"},
        {skillName: "HTML5 & CSS3", fontAwesomeClassname: "fab fa-html5"}
      ]
    },
    {
      category: "Databases & Core",
      items: [
        {skillName: "PostgreSQL / MySQL", fontAwesomeClassname: "fas fa-database"},
        {skillName: "SQL Server / Oracle", fontAwesomeClassname: "fas fa-server"},
        {skillName: "Git & GitHub", fontAwesomeClassname: "fab fa-git-alt"},
        {skillName: "REST APIs", fontAwesomeClassname: "fas fa-plug"}
      ]
    }
  ],
  softwareSkills: [
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "C#", fontAwesomeClassname: "fab fa-microsoft"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Vue", fontAwesomeClassname: "fab fa-vuejs"},
    {skillName: "SQL Database", fontAwesomeClassname: "fas fa-database"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"}
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Ho Chi Minh City University of Industry and Trade (HUIT)",
      logo: require("./assets/images/huit_logo.jpg"),
      subHeader: "B.Eng. in Software Engineering",
      duration: "09/2023 – 12/2027 (Expected)",
      gpa: "GPA: 3.1 / 4.0",
      desc: "Solid academic grounding in Object-Oriented Programming, Data Structures, Database Management Systems, and Software Architecture.",
      descBullets: [
        "Core coursework in OOP, Relational Databases (SQL Server, Oracle, PostgreSQL), and Web/Mobile Development",
        "Actively seeking a Backend or Fullstack Software Engineering Internship to contribute to production systems"
      ]
    }
  ]
};

// Tech proficiency bars disabled in favor of grouped Bento Stack
const techStack = {
  viewSkillBars: false,
  experience: [
    {Stack: "Backend (Java/Python)", progressPercentage: "85%"},
    {Stack: "Frontend (React/Vue)", progressPercentage: "75%"},
    {Stack: "Mobile (Flutter)", progressPercentage: "70%"},
    {Stack: "Database Management", progressPercentage: "80%"}
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Freelance Tutor",
      company: "Private Tutoring",
      iconType: "tutor",
      date: "Part-time · Past",
      desc: "Broke down complex logic and math/programming problems into clear, step-by-step explanations tailored to each student.",
      descBullets: [
        "Built strong debugging patience, structured communication, and time-management skills alongside university coursework."
      ]
    },
    {
      role: "F&B Service Staff",
      company: "Restaurant & Cafe",
      iconType: "service",
      date: "Part-time · Past",
      desc: "Operated under high-pressure peak hours while keeping orders accurate and customer interactions calm and attentive.",
      descBullets: [
        "Coordinated smoothly with cashiers and kitchen teams to minimize bottlenecks and keep service flow consistent."
      ]
    }
  ]
};

// Open Source Section (GitHub Pinned Repos)
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Project enrichment metadata matched by GitHub repo name
const projectMeta = {
  CloStore: {
    category: "Fullstack E-Commerce",
    featured: true,
    summary:
      "End-to-end clothing e-commerce platform with multi-criteria product search, shopping cart workflow, online payment integration, and secure user authentication.",
    stack: ["HTML/CSS", "JavaScript", "Auth & Cart", "Online Payment"]
  },
  ApiChatBox: {
    category: "Backend API",
    featured: true,
    summary:
      "RESTful backend service powering a real-time chatbox application, handling message routing, session state, and structured JSON API endpoints.",
    stack: ["JavaScript", "REST API", "Backend Service"]
  },
  LTDD_DoAn: {
    category: "Mobile Application",
    featured: false,
    summary:
      "Cross-platform mobile application project built for coursework, focusing on responsive mobile layouts, clean state flow, and API integration.",
    stack: ["Flutter", "Dart", "Mobile UI"]
  },
  LearnEnglishForMe: {
    category: "Web Application",
    featured: false,
    summary:
      "Interactive web application designed to support daily English vocabulary and comprehension practice with structured learning flows.",
    stack: ["JavaScript", "Web App", "Interactive UI"]
  }
};

// Big Projects
const bigProjects = {
  title: "Selected Projects",
  subtitle: "SOME HIGHLIGHTS OF MY WORK",
  projects: [],
  display: false
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements"),
  subtitle: "",
  achievementsCards: [],
  display: false
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false
};

const contactInfo = {
  title: "Let's Connect",
  subtitle:
    "Looking for a motivated Backend or Fullstack Intern? My inbox is open — feel free to reach out for internships or project collaborations.",
  number: "0369340700",
  email_address: "Trng1006.work@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  projectMeta,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
