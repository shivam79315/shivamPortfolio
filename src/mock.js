// Mock data for portfolio website
import { icons } from "./assets";

export const personalInfo = {
    name: "Shivam",
    title: "Full Stack Web Developer",
    tagline: "React • Node.js • Next.js • Freelancer",
    bio: "Passionate full-stack developer specializing in modern web technologies. I build scalable, performant applications with clean code and exceptional user experiences. Available for freelance projects and full-time opportunities.",
    email: "shivamsahotra3@gmail.com",
    location: "Mohali, Punjab",
    resumeUrl: "https://ninjasfiles.s3.amazonaws.com/shivamResume.pdf_00ac29d60daef911b77be0ee5b7c9536/shivamResume.pdf",
    social: {
      github: "https://github.com/shivam79315",
      linkedin: "www.linkedin.com/in/shivam-shivam-83a880232",
    }
  };
  
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
      role: "MERN Stack Developer",
      company: "Meander Software Solutions Pvt. Ltd.",
      period: "Jan 2024 - June 2024",
      description: "Developed and maintained full-stack web applications for global clients using the MERN stack, with a focus on performance, scalability, and clean code.",
      achievements: [
        "Designed and developed end-to-end MERN stack applications",
        "Integrated frontend components with backend services and databases",
        "Built and tested RESTful APIs using Node.js and Express"
      ]
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "CodeSapient Technologies LLP",
      period: "August 2024 - Current",
      description: "Developing and maintaining scalable full-stack web applications for multiple clients using React, Node.js, and Laravel, with a strong focus on performance, security, and maintainability.",
      achievements: [
        "Developed dynamic and responsive user interfaces using React and modern JavaScript",
        "Built and integrated RESTful APIs using Node.js and Laravel",
        "Worked with MongoDB, SQL, and Firebase for data storage and real-time features",
        "Containerized applications and supported deployments using Docker",
        "Collaborated closely with designers, backend engineers, and product teams"
      ]
    }
  ];
  
  export const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tech: ["React.js", "Firebase"],
      github: "https://github.com/shivam79315/busy-busy",
      live: "https://busy-busy-git-main-shivams-projects-1802b251.vercel.app/"
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