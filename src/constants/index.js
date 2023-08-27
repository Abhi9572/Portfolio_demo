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
    Blog_web_img1,
    Newsletter_img,
    product2_img,
    subhadeep,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Abhishek proved me wrong.",
      name: "Pritam Kalita",
      designation: "CEO",
      company: "Enterprises",
      image: "https://pps.whatsapp.net/v/t61.24694-24/361651773_792177492703446_5350654263241944726_n.jpg?ccb=11-4&oh=01_AdRaTLOWMCeax5e3cR9ELC8l88h-uw-1eUZ8ERCBQyBdBA&oe=64F88E78&_nc_cat=106",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Abhishek does.",
      name: "Dhrubajyoti Sarma",
      designation: "COO",
      company: "Facebook",
      image: "https://pps.whatsapp.net/v/t61.24694-24/355124974_848065113417044_3786352148572460323_n.jpg?ccb=11-4&oh=01_AdQvxkiYFrb-5ZkEtPML8nTX5xebPOJI3vFpKmog-_EjJg&oe=64F89F46&_nc_cat=105",
    },
    {
      testimonial:
        "After Abhishek optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Subhadeep Supriya",
      designation: "CTO",
      company: "Apple",
      image: subhadeep,
    },
  ];
  
  const projects = [
    {
      name: "Blog Website",
      description:
        "A Blog Website is an online platform that hosts a collection of regularly updated articles or posts on various topics. It serves as a digital space for individuals, companies, or organizations to share insights, information, and opinions with a wider audience, facilitating discussion and engagement.",
      tags: [
        {
          name: "HTML, CSS, JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "NodeJs(Express)",
          color: "pink-text-gradient",
        },
      ],
      image: Blog_web_img1,
      source_code_link: "https://github.com/Abhi9572",
      demo_link: "http://www.demo" ,
    },
    {
      name: "Newsletter Sign-Up Page",
      description:
        "A Newsletter Sign-Up Page is a web page where visitors can easily provide their email addresses to subscribe for updates, promotions, or content from a website, company, or individual.",
      tags: [
        {
          name: "HTML, CSS, JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJs",
          color: "green-text-gradient",
        },
        {
          name: " Mailchimp",
          color: "pink-text-gradient",
        },
      ],
      image: Newsletter_img,
      source_code_link: "https://github.com/Abhi9572",
      demo_link: "http://www.demo" ,
    },
    {
      name: "Product Listing WebApp",
      description:
        "A comprehensive Product listing platform that allows users to book product and offers curated recommendations for popular products.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB, mongoose",
          color: "green-text-gradient",
        },
        {
          name: "NodeJs, ExpressJs",
          color: "pink-text-gradient",
        },
      ],
      image: product2_img,
      source_code_link: "https://github.com/Abhi9572",
      demo_link: "https://product-list-chi.vercel.app/" ,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };