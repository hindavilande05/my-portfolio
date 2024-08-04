import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  AchievementType,
} from "./types/sections";




export const greetings: GreetingsType = {
  name: "Hindavi Lande",
  title: "Hi all, I'm Hindavi",
  description:
    "I'm a passionate Full Stack web developer and Android developer with experience developing applications with Angular, React.js and React-Native. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "",
};

export const openSource = {
  githubUserName: "hindavilande05",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:landehindavi05@gmail.com",
  linkedin: "https://www.linkedin.com/in/hindavilande/",
  github: "https://github.com/hindavilande05",
  instagram: "https://www.instagram.com/_hindavi_vinod/",
 
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY Android and FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Android & Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in Angular & React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building Android Applications in React-Native"),
      ],
      softwareSkills: [
    
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Angular",
          iconifyTag: "vscode-icons:file-type-angular",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon",
        },
        {
          skillName: "React Native",
          iconifyTag: "logos:react",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "vscode-icons:file-type-mongo",
        },
        
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "60",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Shri. Guru Gobind Singhji Institute of Engineering & Technology, Nanded",
    subHeader: "Bachelor of Technology in Computer Science & Engineering",
    duration: "November 2022 - May 2025",
    desc: "",
    // grade: "-",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Government Polytechnic Pune",
    subHeader: "Diploma in Computer Engineering",
    duration: "August 2019 - May 2022",
    desc: "",
    grade: "92.53 %",
    descBullets: [], 
  }
];


export const experience: ExperienceType[] = [
  {
    role: "Summer Intern",
    company: "Indian Institute of Technology (IIT), Palakkad",
    companyLogo: "/img/icons/common/iitpkd.png",
    date: "June 2024 - July 2024",
    desc: "Worked on the development of ERP system for IIT Palakkad. Developed a web application for the students and faculties to manage their academic and administrative activities. Used Angular and spring boot. Also worked for software testing.",
  
  },
  {
    role: "Web Developer Intern",
    company: "Linkcode Technologies Pvt. Ltd. Pune",
    companyLogo: "/img/icons/common/linkcode.png",
    date: "Aug 2021 - Sept 2021",
    desc: "Crafted robust educational web application frontend employing JavaScript, html, css, bootstrap. Leveraged Firebase as a database and used Firebase Authentication to build secure authentication systems . Collaborated in team using github. Designed intuitive UIs, empowering client to effortlessly manage their digital presence.",
   
  },
 
];

export const projects: ProjectType[] = [
  {
    name: "My Portfolio website",
    desc: "My Portfolio Website built with react.js and next.js bootstrap",
    github: "https://github.com/hindavilande05/developer-portfolio",
    link: "#",
  },
  {
    name: "TaskStack: Task Management App",
    desc: "TaskStack is an Android application designed to track and manage work assignments and projects efficiently. It helps teams keep records and stay organized throughout their tasks.",
    github: "https://github.com/atharva030/Neons",
    link: "https://play.google.com/store/apps/details?id=com.taskstack&pcampaignid=web_share",
  },
  {
    name: "Lande Computer Hub Application",
    desc: "Created a web application for Government recognized computer typing institute and computer learning center.",
    github: "https://github.com/hindavilande05/Lande-Computer-Hub",
    link: "https://hindavilande05.github.io/Lande-Computer-Hub/",
  },
  {
    name: "GramSwaraj App",
    desc: "GramSwaraj: Digital Panchayat. The objective is to facilitate, improve and digitize the functioning of village level administration by easily getting the information of government services and apply for them.",
    link: "#",
  },
  
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Vinod Lande",
    role: "Director, Lande Computers ",
    feedback:
      "I am impressed by your team's ability to deliver the project on time and with high quality. I am very happy with the work done by your team. I would like to work with you again in the future.",
  }
];

export const achievements: AchievementType[] = [
  {
    title: "Smart India Hackathon (SIH) 2023 Winner",
    desc: "Team Abhigya - at GMRIT, Rajam, Andhra Pradesh",
    photo1: "img/icons/common/sih1.jpg",
    photo2: "img/icons/common/sih2.jpg"
    
  },
  
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Hindavi Lande",
  description: greetings.description,
  author: "Hindavi Lande",
  image: "https://avatars.githubusercontent.com/u/72275736?s=400&u=2edd67aa53e0643db465807043a7eb2e742ed0b8&v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hindavi",
    "Hindavi Lande",
    "landehindavi05",
    "Portfolio",
    "Hindavi Portfolio ",
    "Hindavi Lande Portfolio",
    
  ],
};
