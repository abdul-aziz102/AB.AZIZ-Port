import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration, product management, and user authentication.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      github: "#",
      live: "https://fascinating-gumdrop-b14219.netlify.app/",
      image: "/shopweb2.png"
    },
    {
      id: 2,
      title: "AI Chat Bot",
      description: "I made a chatbot using Google's Gemini API, allowing users to ask questions and receive AI-generated responses.",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/abdul-aziz102/CodeMind",
      live: "https://code-mind-iota.vercel.app/",
      image: "/ai.jpg"
    },
    {
      id: 4,
      title: "Learnify Website",
      description: "I built a full-stack educational platform where students can sign up, log in, and access English learning content including stories, poems, and articles.",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      github: "#",
      live: "https://zippy-zabaione-6406a6.netlify.app/",
      image: "/learnify.png"
    },
    {
      id: 5,
      title: "English Learning Website",
      description: "A modern educational site where students can log in to read English stories, poems, news, and articles. Includes search functionality and a responsive design.",
      tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      github: "#",
      live: "https://guileless-sfogliatella-ac168a.netlify.app/",
      image: "/english .png"
    },
     {
      id: 5,
      title: "E-commerce Website",
      description: "A responsive e-commerce website built using React, Tailwind CSS, Node.js, Express.js, and MongoDB. Features user authentication, product management, and payment integration.",
      tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      github: "#",
      live: "https://zesty-sfogliatella-e5c6e3.netlify.app/",
      image: "/shopweb.png"
    },
   
  ];

  return (
    <div className="w-full  min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12">
      <div className="max-w-7xl mx-auto mt-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">My Projects</h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
          A collection of my recent work and contributions.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-500 hover:underline"
                  >
                    <FiGithub /> Code
                  </a>
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
    </div>
  );
};

export default ProjectsPage;
