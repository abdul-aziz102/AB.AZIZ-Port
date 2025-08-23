import React, { useState, useEffect, useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
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
      live: "https://fascinating-gumdrop-b14219.netlify.app/",
      image: "/shopweb2.png",
    },
    {
      id: 2,
      title: "AI Chat Bot",
      description:
        "I made a chatbot using Google's Gemini API, allowing users to ask questions and receive AI-generated responses.",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/abdul-aziz102/CodeMind",
      live: "https://code-mind-iota.vercel.app/",
      image: "/ai.jpg",
    },
    {
      id: 3,
      title: "Learnify Website",
      description:
        "A full-stack educational platform where students can sign up, log in, and access English learning content including stories, poems, and articles.",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      github: "#",
      live: "https://zippy-zabaione-6406a6.netlify.app/",
      image: "/learnify.png",
    },
    {
      id: 4,
      title: "English Learning Website",
      description:
        "A modern educational site where students can read English stories, poems, news, and articles. Includes search functionality and responsive design.",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      live: "https://guileless-sfogliatella-ac168a.netlify.app/",
      image: "/english .png",
    },
    {
      id: 5,
      title: "E-commerce Website",
      description:
        "Responsive e-commerce website with authentication, product management, and payments.",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      live: "https://clothes-shop-zeta.vercel.app/",
      image: "/cloth.png",
    },
    {
      id: 6,
      title: "Company Portfolio",
      description:
        "Company portfolio website with authentication, project management, and a contact form.",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      live: "https://company-portfolio-pxdb.vercel.app/",
      image: "/pic.png",
    },
    {
      id: 7,
      title: "Home Academy",
      description:
        "Online learning platform with authentication, course management, and a contact form.",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      live: "https://home-academy-pi.vercel.app/",
      image: "/home.png",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20 pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl ${
            isVisible ? "animate-pulse-slow" : "opacity-0"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl ${
            isVisible ? "animate-pulse-slow" : "opacity-0"
          }`}
        ></div>
      </div>

      {/* Floating Icons */}
      <div
        className={`absolute top-1/4 left-10 opacity-20 ${
          isVisible ? "animate-float" : "opacity-0"
        }`}
      >
        <FaReact size={50} className="text-blue-500" />
      </div>
      <div
        className={`absolute top-1/2 right-10 opacity-20 ${
          isVisible ? "animate-float-delay" : "opacity-0"
        }`}
      >
        <FaNodeJs size={55} className="text-green-500" />
      </div>
      <div
        className={`absolute bottom-1/4 left-1/3 opacity-20 ${
          isVisible ? "animate-float-delay-2" : "opacity-0"
        }`}
      >
        <SiMongodb size={45} className="text-green-600" />
      </div>
      <div
        className={`absolute bottom-1/3 right-1/4 opacity-20 ${
          isVisible ? "animate-float" : "opacity-0"
        }`}
      >
        <SiTailwindcss size={50} className="text-cyan-400" />
      </div>

      <div className="max-w-7xl mx-auto mt-14 relative z-10">
        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            My Projects
          </span>
        </h1>
        <p
          className={`text-gray-600 dark:text-gray-400 text-center mb-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          A collection of my recent work and contributions.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transform transition-all duration-700 hover:shadow-xl hover:scale-[1.02] ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    >
                      <FiGithub /> Code
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-500 hover:underline"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes pulseSlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.85;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 7s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-delay-2 {
          animation: float 5s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
