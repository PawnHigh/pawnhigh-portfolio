import {
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
    datapinder,
    manualmanager,
    flowaterin,
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
      title: "Data Scientist",
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Javascript",
      icon: javascript,
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
        "I achieved the implementation of a service monitoring system and ensuring cross-server communication through sockets.",
        "I was in charge of developing and maintaining web-applications and end-points using Django and other related technologies.",
        "I collaborated with cross-functional full teams including designers, product managers, frontend developers and others to create high-quality products.",
        "I participated in code and project reviews, providing constructive feedback to other developers and final users.",
        "I took over the server crontab and server services manager (systemctl, supervisor), handling security ssh credentials and implementing bash scripts into a ubuntu environment.",
      ],
    },
    { /* https://www.prospects.ac.uk/job-profiles/machine-learning-engineer */
      title: "Machine learning Scientific",
      company_name: "UCSM Arequipa",
      icon: catolica,
      iconBg: "#02B967",
      date: "July 2022 - Present",
      points: [
        "I built algorithms based on statistical modelling procedures and project requirements to maintain scalable solutions, achieving high recognition rates on test and validation data.",
        "I applied data modelling and strategic evaluation to find patterns and predict implicit instances about qualitative and quantitative data characteristics.",
        "I understood and employed computer science fundamentals, developed AI algorithms and analyze complexity to process large and robust datasets to extract singular properties, determining the most appropriate technique.",
        "I liaised with stakeholders to analyse business problems, clarify requirements and define the scope of the resolution needed.",
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
        "After Gerardo advised us, our researches and projects couldn't be more active. We can't thank them enough!",
      name: "Adriel Yaseff",
      designation: "CTO",
      company: "Citesoft",
      image: adriel,
    },
  ];
  
  const projects = [
    {
      name: "Data Pinder",
      description:
        "Web-based platform that allows users to search, publish, earn pasive income and manage your own datasets, providing essential and crucial information for any market, personal purposes or scientific need.",
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
    {
      name: "Citesoft Manual Manager",
      description:
        "Web-based platform that allows scientifics to manage web and documented manuals about citesoft lab instruments. Allowing new members as assistants or researchers to get involved in the environment",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: manualmanager,
      source_code_link: "https://github.com/",
    },
    {
      name: "Flowaterin",
      description:
        "Web-based platform that allows plant irrigation management, through plants creation and elimination. Allowing users to control the state of irrigations, knowing the exact date of the last irrigation.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: flowaterin,
      source_code_link: "https://github.com/GerardoUnsa/gestion-riego-plantas",
    },
  ];

  const social = [
    {
      name: "linkedin",
      color: "#0077b5",
      path: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
      link: "https://www.linkedin.com/in/gerardo-portocarrero-banda-8182161b2/",
    },
    {
      name: "youtube",
      color: "#ff0000",
      path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
      link: "https://www.youtube.com/channel/UC7fm-C1DHFtPbpBizDXU-hw",
    },
  ]
  
  export { services, technologies, experiences, testimonials, projects, social }