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
  username: "Trần Bảo Nguyên",
  title: "Hi all, I'm Nguyên",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 building robust applications across web, mobile, and desktop platforms. Currently specializing in .NET Core and Advanced Web Architecture."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/trng1006",
  gmail: "trng1006.work@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER EXPERORING EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Building scalable backend systems using .NET Core and modern architectures"),
    emoji("⚡ Exploring Machine Learning and Deep Learning models for practical applications")
  ],
  softwareSkills: [
    { skillName: "C#", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
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
      schoolName: "University",
      logo: require("./assets/images/harvardLogo.png"), // Default image placeholder
      subHeader: "Computer Science and Software Engineering",
      duration: "2023 - Present (Class of 2005)",
      desc: "3rd Year Student (Semester 2). Focusing on fundamental and advanced software engineering concepts.",
      descBullets: [
        "Specializing in .NET Core and Web Architecture",
        "Exploring mobile app development with Flutter"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    { Stack: "Backend (.NET)", progressPercentage: "85%" },
    { Stack: "Frontend (React/JS)", progressPercentage: "80%" },
    { Stack: "Mobile (Flutter)", progressPercentage: "70%" }
  ],
  displayCodersrank: false 
};

// Work experience section
const workExperiences = {
  display: false, // Hidden for now as user is student
  experience: []
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
  number: "",
  email_address: "trng1006.work@gmail.com"
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
