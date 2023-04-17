import {
    mobile,
    backend,
    creator,
    web,
    backendService,
    pythonService,
    aiService,
    contentCreatorService,
    frontendService,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    beryllium,
    catolica,
    tesla,
    shopify,
    carrent,
    tripguide,
    datapinder,
    threejs,
    python,
    tensorflow,
    django,
    opencv,
    ubuntu,
    bootstrap,
    bash,
    postgres,
    keras,
    gelber,
    adriel,
    roberto
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "content",
      title: "Content",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  export const contentVideos = [
    {
      title: "IA Sign Languge",
      video: "https://youtube.com/embed/x-qX_taqT10?autoplay=0"
    },
    {
      title: "IA Sign Languge",
      video: "https://youtube.com/embed/x-qX_taqT10?autoplay=0"
    },
    {
      title: "IA Sign Languge",
      video: "https://youtube.com/embed/x-qX_taqT10?autoplay=0"
    },
    {
      title: "IA Sign Languge",
      video: "https://youtube.com/embed/x-qX_taqT10?autoplay=0"
    },
    {
      title: "IA Sign Languge",
      video: "https://youtube.com/embed/x-qX_taqT10?autoplay=0"
    },
    {
      title: "IA Sign Languge",
      video: "https://youtube.com/embed/x-qX_taqT10?autoplay=0"
    },
  ]
  
  const services = [
    {
      title: "Python Developer",
      icon: pythonService,
    },
    {
      title: "AI scientific",
      icon: aiService,
    },
    {
      title: "Backend Developer",
      icon: backendService,
    },
    {
      title: "Frontend Developer",
      icon: frontendService,
    },
    {
      title: "Content Creator",
      icon: contentCreatorService,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "Keras",
      icon: keras,
    },
    {
      name: "Opencv",
      icon: opencv,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Ubuntu",
      icon: ubuntu,
    },
    {
      name: "Bash",
      icon: bash,
    },
    {
      name: "Postgres",
      icon: postgres,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    { /* https://www.coursera.org/articles/back-end-developer */
      title: "Backend Developer",
      company_name: "Beryllium SAC",
      icon: beryllium,
      iconBg: "#FEFEFE",
      date: "April 2022 - August 2022",
      points: [
        "Implementation of a service monitoring system and ensuring cross-server communication through sockets.",
        "Developing and maintaining web-applications and end-points using Django and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, frontend developers and others to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Manage server crontab and server services manager (systemctl, supervisor), handling security ssh credentials and implement bash scripts into a ubuntu terminal environment.",
      ],
    },
    { /* https://www.prospects.ac.uk/job-profiles/machine-learning-engineer */
      title: "Machine learning Scientific",
      company_name: "UCSM Arequipa",
      icon: catolica,
      iconBg: "#02B967",
      date: "July 2022 - Present",
      points: [
        "Build algorithms based on statistical modelling procedures to build and maintain scalable solutions to achieve the finest alpaca fiber quality.",
        "Use data modelling and evaluation strategy to find patterns and predict unseen instances about alpaca fiber characteristics.",
        "Understand and apply computer science fundamentals, algorithms, complexity to analyse large, complex datasets to extract insights and decide on the appropriate technique.",
        "Liaise with stakeholders to analyse business problems, clarify requirements and define the scope of the resolution needed.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Gerardo proved me wrong.",
      name: "Gelber Martinez",
      designation: "CFO",
      company: "DataPinder",
      image: gelber,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Gerardo does.",
      name: "Roberto Ancco",
      designation: "COO",
      company: "UNSA",
      image: roberto,
    },
    {
      testimonial:
        "After Gerardo optimize our website, your traffic decreased by 50%. We can't thank them enough!",
      name: "Adriel Yaseff",
      designation: "CTO",
      company: "Citesoft",
      image: adriel,
    },
  ];
  
  const projects = [
    {
      name: "DataPinder",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "green-text-gradient",
        },
        {
          name: "postgres",
          color: "pink-text-gradient",
        },
      ],
      image: datapinder,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects }