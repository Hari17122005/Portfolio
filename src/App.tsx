import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'motion/react';
import { Starfield } from './components/Starfield';
import { 
  Linkedin, 
  Mail, 
  MapPin, 
  Code2,
  Terminal,
  Database,
  Briefcase,
  GraduationCap,
  Award,
  Github,
  ExternalLink
} from 'lucide-react';

const devIcons: Record<string, string> = {
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "HTML/CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "Java Core": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "OOPs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "ESP32": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  "Embedded Systems": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/embeddedc/embeddedc-original.svg",
  "REST APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
  "Sensors": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg",
  "Automation": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
  "Wireless Comm.": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg",
  "TCP/IP": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg",
  "Shell Scripting": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
  "Razorpay": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Google GenAI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
  "Recharts": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "React 19": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const projectsData = [
  {
    title: "Autonomous Runway Inspection Vehicle",
    date: "Dec 2024 - May 2025",
    description: "Designed and developed an autonomous runway inspection vehicle to automate surface condition monitoring. Integrated sensors, motor control, and wireless communication for real-time data analysis. Implemented image processing techniques to detect runway anomalies and trigger real-time GSM alerts.",
    skills: ["ESP32", "Python", "Embedded Systems", "Sensors", "Automation", "Wireless Comm."],
    liveUrl: "#",
    githubUrl: "https://github.com/Hari17122005/road-crack-detection.git",
    images: [
      "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    title: "Supermarket Management Web App",
    date: "Aug 2025 - Sep 2025",
    description: "Engineered a scalable full-stack supermarket web application using the MERN stack. Structured RESTful APIs to enable secure user authentication, product management, and order workflows. Incorporated Razorpay payment gateway to support secure online transactions.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Razorpay"],
    liveUrl: "https://hhmart.netlify.app/",
    githubUrl: "https://github.com/Hari17122005/Hmart.git",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    ]
  },
  {
    title: "EcoRoad",
    date: "May 2026",
    description: "A sustainable infrastructure platform powered by Gemini AI to analyze and optimize the integration of textile waste into asphalt mixtures. Features include AI analysis, an impact calculator, road quality evaluation, and a built-in AI chatbot.",
    skills: ["React 19", "TypeScript", "Tailwind CSS", "Firebase", "Google GenAI", "Recharts"],
    liveUrl: "https://ecoroad.netlify.app/",
    githubUrl: "https://github.com/Hari17122005/Eco-Road.git",
    images: [
      "/screenshot_1.png",
      "/screenshot_2.png",
      "/screenshot_3.png"
    ]
  },
  {
    title: "Collab AI",
    date: "Current",
    description: "Intelligent Team Management Platform with a glassmorphism design. Features AI-powered team insights using Google Gemini, dynamic drag-and-drop Kanban boards, interactive progress dashboards, precise role-based access control, strategic roadmapping, and direct PDF exports.",
    skills: ["React 19", "TypeScript", "Tailwind CSS", "Motion", "Firebase", "Google GenAI", "Recharts"],
    liveUrl: "https://nexflow-ops.netlify.app/",
    githubUrl: "https://github.com/Hari17122005/Collab-AI.git",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];

export function TechBadge({ name, delay = 0 }: { name: string, delay?: number }) {
  const iconUrl = devIcons[name];
  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center justify-center gap-3 p-2 group cursor-pointer z-10 w-24 h-24 xl:w-28 xl:h-28"
    >
      {iconUrl ? (
        <img src={iconUrl} alt={name} className="w-12 h-12 xl:w-16 xl:h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all duration-300" />
      ) : (
         <div className="w-4 h-4 rounded-full bg-brand-primary shadow-[0_0_15px_rgba(139,92,246,0.8)] group-hover:shadow-[0_0_30px_rgba(139,92,246,1)] transition-all duration-300" />
      )}
      <span className="text-xs xl:text-sm text-center text-slate-400 group-hover:text-white transition-colors duration-300 font-medium">{name}</span>
    </motion.div>
  )
}

function ProjectCard({ project, idx }: { project: any, idx: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const [imgIdx, setImgIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setImgIdx(i => (i + 1) % project.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", willChange: "transform" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full bg-transparent rounded-[2rem] p-6 lg:p-10 overflow-visible group transition-all duration-500 hover:scale-[1.01] hover:-translate-y-2 flex flex-col lg:flex-row gap-10 items-stretch border border-white/5 hover:border-brand-primary/50 shadow-2xl hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.5),0_0_80px_-20px_rgba(14,165,233,0.3)] z-20`}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"
        style={{ transform: "translateZ(-1px)" }} 
      />

      <div className="w-full lg:w-[55%] flex flex-col justify-center gap-5 z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold tracking-wider uppercase text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full border border-brand-secondary/20 shadow-sm">
            {project.date}
          </span>
        </div>
        
        <h3 className="text-2xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 group-hover:from-brand-primary group-hover:to-brand-secondary transition-all pb-1">
          {project.title}
        </h3>
        
        <p className="text-slate-300 text-lg leading-relaxed font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4 mt-2">
          {project.skills.map((skill: string, i: number) => (
            <TechBadge key={i} name={skill} delay={i * 0.2} />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[45%] flex flex-col gap-6 justify-center z-10" style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        <div className="relative w-full h-56 md:h-72 rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10 group-hover:border-brand-primary/50 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-700">
           {project.images.map((img: string, i: number) => (
             <motion.img 
               key={i}
               src={img} 
               alt={`${project.title} preview`}
               initial={{ opacity: 0, scale: 1.05 }}
               animate={{ opacity: i === imgIdx ? 1 : 0, scale: i === imgIdx ? 1 : 1.05 }}
               transition={{ duration: 1.2, ease: "easeInOut" }}
               className={`absolute inset-0 w-full h-full ${project.title === 'EcoRoad' ? 'object-contain bg-slate-900/50' : 'object-cover'}`}
             />
           ))}
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-brand-primary/20 hover:bg-brand-primary/40 border border-brand-primary/50 text-white font-medium transition-all duration-300 group/btn">
              <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              <span>View Live</span>
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-white font-medium transition-all duration-300 group/btn">
              <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  
  // Scroll animations
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Section observer for active link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -40% 0px" }
    );

    const sections = document.querySelectorAll('section[id], footer[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = ['about', 'skills', 'experience', 'projects'];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const treeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: projectScrollY } = useScroll({
    target: treeRef,
    offset: ["start center", "end center"]
  });

  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary/30 text-slate-300 overflow-x-hidden">
      <Starfield />

      {/* Navigation */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="w-full max-w-3xl glass-panel rounded-full transition-all duration-500 bg-slate-950/70 pointer-events-auto backdrop-blur-2xl">
          <div className="px-8 py-4 flex justify-center md:justify-between items-center">
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] transition-all duration-500 cursor-pointer relative group overflow-hidden bg-slate-900/50">
              <div className="absolute inset-0 bg-brand-primary/20 blur-xl rounded-full animate-pulse opacity-50 group-hover:opacity-100 transition-opacity" />
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain relative z-10 scale-[2.2] translate-y-1 group-hover:scale-[2.5] transition-transform duration-500" />
            </div>
            <div className="flex space-x-6 md:space-x-10 text-sm font-medium">
              {navLinks.map((link) => (
                <a 
                  key={link}
                  href={`#${link}`} 
                  onClick={(e) => scrollToSection(e, link)}
                  className={`relative capitalize transition-all ${
                    activeSection === link ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link}
                  {activeSection === link && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute -bottom-4 left-0 right-0 h-[2px] bg-brand-primary rounded-t-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`hidden md:block px-5 py-2 rounded-full border border-brand-primary/50 transition-all text-sm font-semibold font-heading ${
                activeSection === 'contact' 
                  ? 'bg-brand-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.6)]' 
                  : 'text-brand-primary hover:bg-brand-primary hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]'
              }`}
            >
              Contact Me
            </a>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
            style={{ y: heroY, opacity: heroOpacity, willChange: 'transform, opacity' }}
          >
            <motion.div variants={fadeInUp} className="inline-block">
              <span className="px-4 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                Junior Software Engineer
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-heading font-extrabold text-4xl md:text-6xl leading-tight text-white tracking-tighter drop-shadow-2xl">
              Hi, I'm <br />
              <span className="font-stylized text-5xl md:text-7xl text-gradient-animated mt-2 block tracking-wide pb-4">
                Hariharan T.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-base md:text-xl text-slate-400 max-w-lg leading-relaxed font-light">
              Aspiring Software Engineer focused on building scalable full-stack applications and creating meaningful digital experiences.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="px-8 py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Contact Me
              </a>
              <a href="#projects" className="px-8 py-4 rounded-xl glass-panel hover:bg-white/10 transition-colors font-semibold border-white/20">
                View Work
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="flex justify-center md:justify-end perspective-1000"
          >
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] group mx-auto md:ml-auto md:mr-0 z-20">
              {/* Glow Effect Background */}
              <div className="absolute inset-0 rounded-full bg-brand-primary blur-[40px] md:blur-[60px] opacity-40 group-hover:opacity-60 transition-all duration-700 animate-pulse" style={{ willChange: 'opacity, filter' }} />
              
              <img 
                // To change this photo: Add your own photo in the public folder and change 'src="/my-photo.jpg"' or paste an image URL.
                src="/my-photo.png" 
                alt="Hariharan T" 
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-brand-primary/50 group-hover:shadow-[0_0_60px_rgba(139,92,246,0.5)]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative z-10 scroll-m-20">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeInUp}
            className="glass-panel p-8 md:p-12 rounded-[3rem] relative overflow-hidden group text-center shadow-2xl"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25)_0,transparent_70%)] transition-colors duration-1000 z-0" />
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-gradient mb-8 relative z-10">About Me</h2>
            <div className="space-y-6 relative z-10">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                I am an aspiring Software Engineer with hands-on experience in the 
                <span className="text-white font-medium bg-brand-primary/20 px-2.5 py-0.5 rounded-lg mx-1.5 inline-block border border-brand-primary/30 shadow-[0_0_10px_rgba(139,92,246,0.2)] text-base md:text-lg">MERN stack</span> (MongoDB, Express.js, React.js, Node.js), 
                <span className="text-white font-medium">Java Core, Object-Oriented Programming (OOPs),</span> Java-based application development, and <span className="text-white font-medium bg-brand-secondary/20 px-2.5 py-0.5 rounded-lg mx-1.5 inline-block border border-brand-secondary/30 shadow-[0_0_10px_rgba(14,165,233,0.2)] text-base md:text-lg">Linux system administration</span>.
              </p>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                I have a strong command over <strong className="text-white">Java fundamentals</strong> and <strong className="text-white">OOP concepts</strong> such as inheritance, polymorphism, encapsulation, and abstraction. 
                My background lies in establishing strong foundations in <span className="text-white font-medium shadow-sm decoration-brand-secondary decoration-2 underline-offset-4 underline">computer networking, TCP/IP, and routing concepts</span>, 
                driving the development of scalable full-stack applications and reliable RESTful APIs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative z-10 shadow-[inset_0_4px_30px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
            className="mb-20 text-center"
          >
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-gradient">Technical Arsenal</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { title: "Languages", skills: ["Java", "Java Core", "OOPs", "Python", "JavaScript", "HTML/CSS"] },
              { title: "Systems & Network", skills: ["Linux", "TCP/IP", "Shell Scripting", "Embedded Systems", "ESP32"] },
              { title: "Web Tech", skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"] }
            ].map((category, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }
                }}
                className="flex flex-col items-center md:items-start group"
              >
                <h3 className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 mb-8 tracking-wide drop-shadow-sm">{category.title}</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {category.skills.map((skill, j) => (
                    <TechBadge key={j} name={skill} delay={j * 0.15 + i} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          {/* Experience */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-brand-primary/10 rounded-xl border border-brand-primary/20">
                <Briefcase className="w-8 h-8 text-brand-primary" />
              </div>
              <h2 className="font-heading font-extrabold text-3xl text-gradient drop-shadow-md pb-2">Experience</h2>
            </div>
            
            <motion.div variants={fadeInUp} className="relative pl-10 border-l-2 border-brand-primary/30 pb-12 group">
              <div className="absolute w-5 h-5 bg-slate-950 border-[3px] border-brand-primary rounded-full -left-[11px] top-1 group-hover:bg-brand-primary transition-colors shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
              <h3 className="font-heading font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 pb-1">MERN Stack Intern</h3>
              <p className="text-brand-primary font-medium text-lg mt-1 mb-4">Revamp Academy</p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Completed a 30-day internship developing 30+ hands-on projects covering frontend, backend, database integration, and RESTful APIs.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative pl-10 border-l-2 border-brand-primary/30 group">
              <div className="absolute w-5 h-5 bg-slate-950 border-[3px] border-brand-primary rounded-full -left-[11px] top-1 group-hover:bg-brand-primary transition-colors shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
              <h3 className="font-heading font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 pb-1">System & Network Eng.</h3>
              <p className="text-brand-primary font-medium text-lg mt-1 mb-4">Ongoing Skill Development</p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Applied computer networking concepts including TCP/IP, subnetting, routing, and switching. Gained hands-on experience with Linux administration, shell scripting, and user management.
              </p>
            </motion.div>
          </motion.div>

          {/* Education & Certs */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-brand-secondary/10 rounded-xl border border-brand-secondary/20">
                <GraduationCap className="w-8 h-8 text-brand-secondary" />
              </div>
              <h2 className="font-heading font-extrabold text-3xl text-gradient drop-shadow-md pb-2">Education</h2>
            </div>
            
            <motion.div variants={fadeInUp} className="relative pl-10 border-l-2 border-brand-secondary/30 pb-16 group">
              <div className="absolute w-5 h-5 bg-slate-950 border-[3px] border-brand-secondary rounded-full -left-[11px] top-1 group-hover:bg-brand-secondary transition-colors shadow-[0_0_15px_rgba(14,165,233,0.6)]" />
              <h3 className="font-heading font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 leading-tight pb-1">B.Tech Information Technology</h3>
              <p className="text-brand-secondary font-medium text-lg mt-1 mb-4">Sri Sairam Engineering College</p>
              <div className="flex justify-between items-center text-slate-300 text-base font-medium">
                <span className="bg-slate-800/80 px-3 py-1 rounded-lg border border-white/5">2023 – 2027</span>
                <span className="text-white bg-brand-secondary/20 px-3 py-1 rounded-lg border border-brand-secondary/30 font-bold tracking-wider">CGPA: 8.82</span>
              </div>
            </motion.div>

            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl text-gradient drop-shadow-md pb-2">Certifications</h2>
            </div>
            
            <motion.ul variants={fadeInUp} className="space-y-4">
              {[
                "Networking Essentials & Linux Essentials (Cisco)",
                "Introduction to IoT & Digital Transformation (Cisco)",
                "Machine Learning & Java Programming (NPTEL)",
                "Computer Networks & Internet Protocols (NPTEL)",
                "The Complete Python Pro Bootcamp (Udemy)"
              ].map((cert, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-300 text-lg glass-panel p-4 rounded-xl border border-white/5 hover:border-purple-400/30 transition-colors">
                  <span className="block mt-1.5 w-2 h-2 rounded-full bg-purple-400 shrink-0 shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
                  {cert}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-24"
          >
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-gradient mb-6">Featured Projects</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light">
              A selection of my recent technical endeavors and full-stack applications.
            </p>
          </motion.div>

          {/* Timeline Animation Container */}
          <div ref={treeRef} className="relative mt-8">
            {/* The Track Line */}
            <div className="absolute left-6 md:left-[3.25rem] top-0 bottom-0 w-1.5 -translate-x-1/2 bg-slate-800 rounded-full" />
            
            {/* The Animated Fill Line */}
            <motion.div 
              className="absolute left-6 md:left-[3.25rem] top-0 bottom-0 w-1.5 -translate-x-1/2 bg-gradient-to-b from-brand-primary via-blue-500 to-brand-secondary rounded-full origin-top z-10"
              style={{ scaleY: projectScrollY, willChange: 'transform' }}
            />

            {/* The Water Drop Follower */}
            <motion.div
              className="absolute left-6 md:left-[3.25rem] z-30"
              style={{
                top: useTransform(projectScrollY, [0, 1], ["0%", "100%"]),
                x: "-50%",
                y: "-100%",
                willChange: "top"
              }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
                style={{ willChange: "transform" }}
              >
                {/* Glow behind the droplet to replace expensive SVG drop-shadow */}
                <div className="absolute inset-0 bg-brand-primary blur-[10px] rounded-full opacity-60 scale-150" />
                <svg width="24" height="32" viewBox="0 0 24 24" fill="none" className="text-brand-primary relative z-10">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="url(#dropletGradient)"/>
                  <defs>
                    <linearGradient id="dropletGradient" x1="12" y1="2.69" x2="12" y2="21.31" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8b5cf6" />
                      <stop offset="1" stopColor="#0ea5e9" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>

            <div className="space-y-32 md:space-y-40 pb-20 mt-10">
              {projectsData.map((project, idx) => (
                <motion.div 
                  key={idx} 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-100px" }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                  className="relative flex flex-col items-start pl-20 md:pl-28"
                >
                   {/* Node on the Timeline */}
                   <div className="absolute left-6 md:left-[3.25rem] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950 border-[4px] border-brand-primary z-20 shadow-[0_0_20px_rgba(139,92,246,0.8)]" style={{ transform: 'translate(-50%, -50%)' }}>
                       <div className="absolute inset-2 bg-brand-secondary rounded-full animate-pulse" />
                   </div>

                   {/* Actual Project Card */}
                   <ProjectCard project={project} idx={idx} />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-32 px-6 relative z-10 bg-slate-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
          >
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-gradient mb-8 pb-2">Let's Connect</h2>
            <p className="text-slate-400 text-lg md:text-xl mb-16 font-light max-w-3xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 text-left mb-24 max-w-4xl mx-auto">
              
              {/* Contact Info */}
              <div className="space-y-4 flex flex-col justify-center">
                <a href="mailto:iamhariharan45@gmail.com" className="flex items-center gap-4 px-6 py-4 rounded-xl glass-panel hover:bg-white/10 transition-all duration-300 group hover:border-brand-primary/50">
                  <div className="p-2.5 bg-slate-800/50 rounded-lg group-hover:scale-110 transition-transform border border-white/5">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" className="w-6 h-6 object-contain" />
                  </div>
                  <span className="text-base font-medium text-slate-200">iamhariharan45@gmail.com</span>
                </a>
                <a href="tel:+917339161509" className="flex items-center gap-4 px-6 py-4 rounded-xl glass-panel hover:bg-white/10 transition-all duration-300 group hover:border-green-500/50">
                  <div className="p-2.5 bg-slate-800/50 rounded-lg group-hover:scale-110 transition-transform border border-white/5 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <span className="text-base font-medium text-slate-200">+91 7339161509</span>
                </a>
                <a href="https://linkedin.com/in/iamhariharan17" target="_blank" rel="noreferrer" className="flex items-center gap-4 px-6 py-4 rounded-xl glass-panel hover:bg-white/10 transition-all duration-300 group hover:border-brand-secondary/50">
                  <div className="p-2.5 bg-slate-800/50 rounded-lg group-hover:scale-110 transition-transform border border-white/5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6 object-contain" />
                  </div>
                  <span className="text-base font-medium text-slate-200">linkedin.com/in/iamhariharan17</span>
                </a>
               <div className="flex items-center gap-4 px-6 py-4 rounded-xl glass-panel border border-white/5 hover:bg-white/10 transition-all duration-300 group hover:border-purple-500/50">
                  <div className="p-2.5 bg-slate-800/50 rounded-lg group-hover:scale-110 transition-transform border border-white/5">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="Google Maps" className="w-6 h-6 object-contain" />
                  </div>
                  <span className="text-base font-medium text-slate-200">Chennai, India</span>
                </div>
              </div>
              
              {/* Contact Form */}
              <form 
                className="glass-panel p-8 rounded-2xl space-y-5" 
                onSubmit={async (e) => {
                  e.preventDefault();
                  
                  // For Web3Forms, you would typically use an access key.
                  // E.g. get an access key from https://web3forms.com
                  const formData = new FormData(e.currentTarget as HTMLFormElement);
                  // Ensure you add your access key in the value below:
                  formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "");
                  
                  if (!formData.get("access_key")) {
                    alert("Please set up Web3Forms access key in .env to receive emails!");
                    return;
                  }

                  try {
                    const res = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: formData
                    });
                    const data = await res.json();
                    if (data.success) {
                      alert("Message sent successfully!");
                      (e.target as HTMLFormElement).reset();
                    } else {
                      alert("Something went wrong");
                    }
                  } catch (err) {
                    alert("Failed to send message.");
                  }
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input type="text" name="name" id="name" required className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all placeholder:text-slate-600" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input type="email" name="email" id="email" required className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all placeholder:text-slate-600" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea id="message" name="message" required rows={4} className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all placeholder:text-slate-600 resize-none" placeholder="Hello Hariharan..."></textarea>
                </div>
                <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-brand-primary to-purple-600 hover:from-brand-primary/90 hover:to-purple-600/90 text-white font-semibold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                  Send Message
                </button>
              </form>

            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
