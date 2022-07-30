/* Change this file to change your portfolio  */

const DEFAULT_SMOOTH_SCROLL_DURATION = 500;
const APP_TITLE = process.env.REACT_APP_TITLE
  ? process.env.REACT_APP_TITLE
  : "Personal Portfolio";

// Enter your api key in the env to start sending emails.
const GET_FORM_API_URL = `https://getform.io/f/${process.env.REACT_GET_FORM_API_KEY}`

// Your personal details
const yourDetails = {
  name: "Your Name",
  phone: "Your Number",
  email: "Your Phone",
  about: {
    heading: "About",
    title:
      "Hi. I'm Armash, nice to meet you have a look around at my portfolio.",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  }
};

const greeting = {
  title: "Hi, My Name is",
  typewriter: {
    //typewriter configuration
    pauseFor: 2500, // pause the typewriter, defaults to 2500
    firstText: "I'm a ",
    secondText: "Student",
    deleteChars: 7, // deletes secondText characters to show the next text
    thirdText: "Software Engineer"
  },
  viewWorkButton: {
    title: "View Work",
    displayIcon: true, // Set false to hide the icon
    hover: true // Set false to stop the hover of icon
  },
  display: true // Set false to hide this section, defaults to true
};

// Your projects
const projects = {
  title: "Work",
  description: "// Check out some of my recent work",
  items: [
    // projects
    {
      title: "Your Project One",
      backgroundImage: "",
      demoText: "Demo",
      codeText: "Code",
      demoLink: "/",
      codeLink: "/"
    },
    {
      title: "Your Project Two",
      backgroundImage: "",
      demoText: "Demo",
      codeText: "Code",
      demoLink: "/",
      codeLink: "/"
    },
    {
      title: "Your Project Three",
      backgroundImage: "",
      demoText: "Demo",
      codeText: "Code",
      demoLink: "/",
      codeLink: "/"
    },
    {
      title: "Your Project Four",
      backgroundImage: "",
      demoText: "Demo",
      codeText: "Code",
      demoLink: "/",
      codeLink: "/"
    },
    {
      title: "Your Project Five",
      backgroundImage: "",
      demoText: "Demo",
      codeText: "Code",
      demoLink: "/",
      codeLink: "/"
    },
    {
      title: "Your Project Six",
      backgroundImage: "",
      demoText: "Demo",
      codeText: "Code"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const navItems = [
  {
    name: "Home",
    to: "home",
    smooth: true, // smooth scrolls
    duration: DEFAULT_SMOOTH_SCROLL_DURATION // default duration of smooth scrolls
  },
  {
    name: "About",
    to: "about",
    smooth: true,
    duration: DEFAULT_SMOOTH_SCROLL_DURATION
  },
  {
    name: "Skills",
    to: "skills",
    smooth: true,
    duration: DEFAULT_SMOOTH_SCROLL_DURATION
  },
  {
    name: "Work",
    to: "work",
    smooth: true,
    duration: DEFAULT_SMOOTH_SCROLL_DURATION
  },
  {
    name: "Contact",
    to: "contact",
    smooth: true,
    duration: DEFAULT_SMOOTH_SCROLL_DURATION
  }
];

const skills = {
  title: "Skills",
  description: "These are the technologies I've worked with",
  items: [ // skills
    {
      title: "HTML5",
      img: ""
    },
    {
      title: "CSS",
      img: ""
    },
    {
      title: "Javascript",
      img: ""
    },
    {
      title: "React",
      img: ""
    },
    {
      title: "Node",
      img: ""
    },
    {
      title: "Firebase",
      img: ""
    },
    {
      title: "AWS",
      img: ""
    },
    {
      title: "Github",
      img: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

export {APP_TITLE, greeting, yourDetails, projects, navItems, skills, GET_FORM_API_URL};
