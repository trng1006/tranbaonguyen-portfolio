/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tran Bao Nguyen",
  title: "Hi all, I'm Nguyen",
  subTitle: emoji(
    "A third-year Software Engineering student with a solid foundation in Object-Oriented Programming, Database Management, and Web/Mobile development. Experienced in designing and building complete systems from Database and Backend to Frontend."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/trng1006",
  gmail: "Trng1006.work@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER FOCUSING ON BACKEND & FULLSTACK DEVELOPMENT",
  skills: [
    emoji("⚡ Develop scalable RESTful APIs using Spring Boot (Java) and FastAPI (Python)"),
    emoji("⚡ Build responsive Front end and Mobile applications with React, Vue, and Flutter"),
    emoji("⚡ Database design, optimization, and management (PostgreSQL, MySQL, SQL Server, Oracle)")
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "C#", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Vue", fontAwesomeClassname: "fab fa-vuejs" },
    { skillName: "SQL Database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ho Chi Minh City University of Food Industry (HUIT)",
      logo: require("./assets/images/harvardLogo.png"), // Default image placeholder
      subHeader: "Major: Software Engineering",
      duration: "09/2023 - 12/2027 (Expected)",
      desc: "GPA: 3.1/4.0 (Good).",
      descBullets: [
        "Focusing on Object-Oriented Programming, Database Management, and Web/Mobile development",
        "Looking for a Backend/Fullstack Internship opportunity to apply knowledge to real-world products"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    { Stack: "Backend (Java/Python)", progressPercentage: "85%" },
    { Stack: "Frontend (React/Vue)", progressPercentage: "75%" },
    { Stack: "Mobile (Flutter)", progressPercentage: "70%" },
    { Stack: "Database Management", progressPercentage: "80%" }
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
      companylogo: require("./assets/images/contactMail.webp"),
      date: "Past",
      desc: "Demonstrated the ability to break down complex problems into simple, logical steps for students. Highly patient in troubleshooting and finding solutions to difficult concepts.",
      descBullets: [
        "Successfully balanced tutoring schedules, university coursework, and self-taught programming hours."
      ]
    },
    {
      role: "F&B Service Staff",
      company: "Restaurant & Cafe",
      companylogo: require("./assets/images/contactMail.webp"),
      date: "Past",
      desc: "Trained to stay calm, prioritize tasks efficiently, and handle continuous customer requests during peak hours.",
      descBullets: [
        "Coordinated seamlessly with cashiers and kitchen staff to optimize service speed."
      ]
    }
  ]
};

// Open Source Section (GitHub Pinned Repos)
const openSource = {
  showGithubProfile: "true", 
  display: true 
};

// Big Projects
const bigProjects = {
  title: "Selected Projects",
  subtitle: "SOME HIGHLIGHTS OF MY WORK",
  projects: [],
  display: false // Using GitHub pinned repos instead to avoid missing images
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements 🏆"),
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
  title: emoji("Podcast 🎙️"),
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
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
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
