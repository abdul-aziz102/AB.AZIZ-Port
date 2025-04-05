import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsPage = () => {
  const projectsRef = useRef(null);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (projectsRef.current) {
        const { left, top, width, height } = projectsRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        projectsRef.current.style.setProperty('--mouse-x', x);
        projectsRef.current.style.setProperty('--mouse-y', y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration, product management, and user authentication.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      category: "fullstack",
      github: "#",
      live: "#",
      image: "/ecommerce.jpg"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Modern responsive portfolio with animated elements and dark mode support.",
      tags: ["React", "Tailwind", "Framer Motion"],
      category: "frontend",
      github: "#",
      live: "#",
      image: "/portfolio.jpg"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Productivity application with drag-and-drop interface and real-time updates.",
      tags: ["React", "Firebase", "Redux"],
      category: "frontend",
      github: "#",
      live: "#",
      image: "/taskapp.jpg"
    },
    
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div 
      ref={projectsRef}
      className="relative overflow-hidden w-full min-h-screen border border-gray-800 bg-gray-900 p-8 md:p-12"
      style={{
        '--mouse-x': 0.5,
        '--mouse-y': 0.5,
      }}
    >
      {/* Animated gradient background - identical to banner */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_calc(var(--mouse-x)*100%)_calc(var(--mouse-y)*100%),rgba(99,102,241,0.3),transparent_70%)] transition-all duration-300"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_80%_50%,#0ea5e9,#6366f1,#a855f7,#0ea5e9)] opacity-10 animate-spin-slow [animation-duration:10s]"></div>
      </div>
      
      {/* Decorative elements - identical to banner */}
      <div className="absolute right-10 bottom-10 w-24 h-24 rounded-full bg-purple-500/20 blur-xl"></div>
      <div className="absolute left-20 top-20 w-16 h-16 rounded-full bg-blue-500/20 blur-xl"></div>
      
      {/* Grid pattern - identical to banner */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      
      {/* Projects content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            My Projects
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          A collection of my recent work and contributions
        </p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 border border-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
            >
              {/* Project image */}
              <div className="h-48 bg-gray-700/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Project Image
                </div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs font-mono px-2 py-1 bg-gray-700/50 text-blue-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;