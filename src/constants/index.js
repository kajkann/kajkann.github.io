import {
    mobile,
    backend,
    creator,
    web,
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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,

  
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Mechanical & Electronics Engineering",
      icon: web,
    },
    {
      title: "Programming (C++, React, Matlab)",
      icon: mobile,
    },
    {
      title: "Management Accounting & Finance",
      icon: backend,
    },
    {
      title: "Product Design (CAD & CAM proficiency, FEA) ",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Fusion 360",
      icon: docker,
    },
    {
      name: "C++",
      icon: figma,
    },
    {
      name: "Matlab",
      icon: mongodb,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Excel",
      icon: git,
    },
    {
      name: "PowerPoint",
      icon: typescript,
    },
    {
      name: "Adobe Photoshop",
      icon: redux,
    },
  ];
  
  const experiences = [
    {
      title: "Shift Manager",
      company_name: "ExpressTest, Cignpost Ltd.",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jul 2021 - Feb 2022",
      points: [
        "Responsible for handling customer data, using the Salesforce software to a high level of proficiency",
        "Worked with hundreds of customers per day, ensuring a high level of customer service is delivered consistently and in a time efficient manner",
        "Managed a team of 15 to 20, & helped run the business on a day to day basis.",
      ],
    },
    {
      title: "Data Manager",
      company_name: "Care Optics Ltd.",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Sep 2019 - Apr 2023",
      points: [
        "Responsible for management activities that are essential to run the business on a day to day basis",
        "Ensuring customer data is processed promptly and in a timely manner following appointments, coordinating with optometrists to provide clear and precise records",
        "Took on management accounting responsibilities including: Preparation of the management accounts, Statutory Reporting, Filing, Consolidation Accounts, Reconciliation & reporting to various parties"
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CANDI (Diagnostic Machine Learning Research Group) ",
      description:
        "FiNANCiAL LEAD, PiTCH & REPORT DESiGNER - Managed a multidisciplinary team to evaluate commercial viability of ML Prostate Cancer diagnosis software, & present it to investors",
      tags: [
        {
          name: "Finance",
          color: "blue-text-gradient",
        },
        {
          name: "Excel",
          color: "green-text-gradient",
        },
        {
          name: "Powerpoint",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Assistive Technology: Computer Mouse controlled via Myoelectric Sensors",
      description:
        "Designed and coded a device that would enable an individual, who has lost their hand, to control a computer mouse via myoelectric sensors on their forearm with 5 Degrees of Freedom, using Arduino and C++ ",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "green-text-gradient",
        },
        {
          name: "Anatomy",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Diagnostic podiatric wearable technology",
      description:
        "Designed an electronic wearable product to assist with diagnosing orthopaedic conditions such as flat feet (pes planus) or high arch (pes cavus)",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "green-text-gradient",
        },
        {
          name: "Anatomy",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };