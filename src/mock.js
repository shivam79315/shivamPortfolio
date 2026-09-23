// Mock data for portfolio website
import { icons } from "./assets";
import ecommerceImage from "./assets/images/ecommerce.png";

export const personalInfo = {
    greeting: "Hello, I'm",
    name: "Shivam",
    title: "I Build Web Products From Idea to Production.",
    tagline: "Full-Stack Web Developer · 3+ Years Experience",
    bio: "Passionate full-stack developer specializing in modern web technologies. I build scalable, performant applications with clean code and exceptional user experiences. Available for freelance projects and full-time opportunities.",
    email: "shivamsahotra3@gmail.com",
    location: "Mohali, Punjab",
    resumeUrl: "https://ninjasfiles.s3.amazonaws.com/shivamResume.pdf_00ac29d60daef911b77be0ee5b7c9536/shivamResume.pdf",
    social: {
      github: "https://github.com/shivam79315",
      linkedin: "https://linkedin.com/in/shivam-shivam-83a880232",
    }
  };

  export const heroStats = [
    { id: "experience", value: "1+", label: "Years Experience" },
    { id: "projects", value: "10+", label: "Projects Completed" },
    { id: "clients", value: "Happy Clients", label: "Freelance & Organizations" },
    { id: "education", value: "B.Tech", label: "Computer Science" },
  ];

  export const skills = [
    { 
      category: "Frontend", 
      items: [
        { name: "React", icon: icons.react },
        { name: "Next.js", icon: icons.nextjs },
        { name: "Tailwind CSS", icon: icons.tailwind },
        { name: "HTML5", icon: icons.html },
        { name: "CSS3", icon: icons.css },
        { name: "JavaScript", icon: icons.js },
        { name: "TypeScript", icon: icons.ts }
      ]
    },
    { 
      category: "Backend", 
      items: [
        { name: "Node.js", icon: icons.node },
        { name: "Express", icon: icons.express },
        { name: "REST API", icon: icons.restapi },
        { name: "Laravel", icon: icons.laravel },
        { name: "PHP", icon: icons.php },
        { name: "Stripe", icon: icons.stripe },
        { name: "Razorpay", icon: icons.razorpay }
      ]
    },
    { 
      category: "CMS & Tools", 
      items: [
        { name: "WordPress", icon: icons.wordpress },
        { name: "Docker", icon: icons.docker },
        { name: "Git", icon: icons.git },
        { name: "GitHub", icon: icons.github },
        { name: "cPanel", icon: icons.cpanel },
        { name: "Simply.com", icon: icons.simply }
      ]
    },
    { 
      category: "Database", 
      items: [
        { name: "MongoDB", icon: icons.mongodb },
        { name: "MySQL", icon: icons.mysql },
        { name: "PostgreSQL", icon: icons.postgresql },
        { name: "Google Firebase", icon: icons.firebase }
      ]
    }
  ];
  
  export const experience = [
    {
      id: 1,
      type: "work",
      role: "Full Stack Developer",
      company: "Suntech Infra Solutions Limited",
      location: "Mohali, Punjab",
      period: "Jul 2026 - Present",
      dateTop: "Jul 2026",
      dateBottom: "- Present",
      duration: "3+ Months",
      current: true,
      techs: ["Python", "FastAPI", "Next.js", "React Native", "PostgreSQL", "DigitalOcean", "CI/CD"],
      summary: "Building a full-scale ERP platform covering finance, billing, construction operations, and business process management across multiple modules.",
      achievements: [
        "Developed backend services using Python and FastAPI, implementing 50+ APIs for business logic.",
        "Designed and developed 10+ responsive Next.js dashboards and interfaces.",
        "Built a cross-platform React Native mobile application with offline-first architecture.",
        "Implemented data synchronization between web and mobile applications.",
        "Managed production infrastructure using DigitalOcean and VPS environments.",
        "Implemented CI/CD pipelines for automated deployments."
      ]
    },
    {
      id: 2,
      type: "work",
      role: "Full Stack Developer",
      company: "Codesapient Labs Pvt. Ltd.",
      location: "Mohali, Punjab",
      period: "Nov 2024 - Jun 2026",
      dateTop: "Nov 2024",
      dateBottom: "- Jun 2026",
      duration: "1 Yr 7 Mo",
      current: false,
      techs: ["Node.js", "Laravel", "Next.js", "Stripe", "DigitalOcean", "CI/CD"],
      summary: "Built lead funnels, automated workflows, and integrated payment systems to streamline customer onboarding.",
      achievements: [
        "Built 10+ lead funnels and automated registration workflows using ActiveCampaign and GoHighLevel.",
        "Developed 20+ REST API endpoints using Node.js and Laravel.",
        "Integrated Stripe payment workflows for checkout, subscriptions, and webhooks.",
        "Built 10+ webhook-driven integrations for real-time data sync across systems.",
        "Developed an AI-powered RAG chatbot for automated website support.",
        "Managed deployments and CI/CD pipelines across DigitalOcean and VPS environments."
      ]
    },
    {
      id: 3,
      type: "work",
      role: "MERN Stack Developer",
      company: "Meander Software Solutions Pvt. Ltd.",
      location: "Ahmedabad, India",
      period: "Jan 2024 - Jun 2024",
      dateTop: "Jan 2024",
      dateBottom: "- Jun 2024",
      duration: "6 Months",
      current: false,
      techs: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
      summary: "Developed and maintained full-stack web applications for global clients using the MERN stack.",
      achievements: [
        "Designed and developed end-to-end MERN stack applications.",
        "Built and integrated RESTful APIs using Node.js and Express.",
        "Worked with MongoDB, React, Node.js, and modern JavaScript.",
        "Collaborated with designers, backend engineers, and product teams."
      ]
    },
    {
      id: 4,
      type: "education",
      role: "B.Tech - Computer Science",
      company: "IEC University",
      location: "India",
      period: "Jun 2020 - Jun 2024",
      dateTop: "2021",
      dateBottom: "- 2024",
      duration: "4 Years",
      current: false,
      techs: ["Data Structures", "Algorithms", "Web Technologies", "DBMS"],
      summary: "Built a strong foundation in computer science fundamentals through coursework and personal projects.",
      achievements: [
        "Worked on academic and personal projects.",
        "Developed problem-solving and analytical skills.",
        "Explored web development and modern technologies."
      ]
    }
  ];
  
  export const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration, inventory management, and admin dashboard.",
      image: ecommerceImage,
      tech: ["React.js", "Firebase"],
      github: "https://github.com/shivam79315/busy-busy",
      live: "https://busy-busy-new.vercel.app/"
    },
    {
      id: 2,
      title: "Photofolio",
      description: "Collaborative project management tool with real-time updates, team chat, and task tracking.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tech: ["React", "Express", "Socket.io", "PostgreSQL"],
      github: "https://github.com/shivam79315/Photofolio",
      live: "https://photofolio-fawn.vercel.app/"
    },
    {
      id: 3,
      title: "Movieflix",
      description: "Custom WordPress theme with advanced features, SEO optimization, and performance enhancements.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "JavaScript"],
      github: "https://github.com/shivam79315/Movie_flix",
      live: "https://github.com/shivam79315/Movie_flix"
    },
  ];