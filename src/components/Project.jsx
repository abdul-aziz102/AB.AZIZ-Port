import React, { useState, useEffect, useRef } from "react";
import { FiGithub, FiExternalLink, FiFilter } from "react-icons/fi";

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // ✅ mobile ke liye fix
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-featured online store with payment integration, product management, and user authentication.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      github: "#",
      live: "https://ecommerce-pro-iota.vercel.app/",
      image: "/update.png",
      category: "fullstack",
    },
    {
      id: 2,
      title: "AI Chat Bot",
      description:
        "A chatbot using Google's Gemini API, allowing users to ask questions and receive AI-generated responses.",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/abdul-aziz102/CodeMind",
      live: "https://pak-ai-code.vercel.app/",
      image: "/ai.jpg",
      category: "fullstack",
    },
    {
      id: 3,
      title: "Learnify Website",
      description:
        "A full-stack educational platform where students can sign up, log in, and access English learning content.",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      github: "#",
      live: "https://zippy-zabaione-6406a6.netlify.app/",
      image: "/learnify.png",
      category: "fullstack",
    },
    {
      id: 4,
      title: "English Learning Website",
      description:
        "A modern educational site with English stories, poems, news, and articles. Includes search functionality.",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      live: "https://guileless-sfogliatella-ac168a.netlify.app/",
      image: "/english .png",
      category: "fullstack",
    },
    {
      id: 5,
      title: "E-commerce Website",
      description:
        "Responsive e-commerce website with authentication, product management, and payments.",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      live: "https://clothes-shop-zeta.vercel.app/",
      image: "/cloth.png",
      category: "fullstack",
    },
    {
      id: 6,
      title: "Company Portfolio",
      description:
        "Company portfolio website with authentication, project management, and a contact form.",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      live: "https://company-portfolio-pxdb.vercel.app/",
      image: "/pic.png",
      category: "fullstack",
    },
    {
      id: 7,
      title: "Home Academy",
      description:
        "Online learning platform with authentication, course management, and a contact form.",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      live: "https://home-academy-p.vercel.app/",
      image: "/home.png",
      category: "fullstack",
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend" },
  ];

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter)
      );
    }
  }, [activeFilter]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-16 overflow-hidden"
      id="projects"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Projects
            </span>
          </h1>
          <p
            className={`text-gray-300 text-center max-w-2xl mx-auto ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            A collection of my recent work showcasing my skills in web
            development, UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Filter */}
        <div
          className={`flex justify-center mb-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-3 bg-gray-800 p-2 rounded-full shadow-md border border-gray-700">
            <span className="flex items-center text-sm text-gray-400 px-2">
              <FiFilter className="mr-1" /> Filter:
            </span>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-md hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white"
                      >
                        <FiGithub size={16} />
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-blue-900/30 text-blue-300 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white"
                    >
                      <FiGithub size={16} /> Code
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
                  >
                    <FiExternalLink size={16} /> Live Demo
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
