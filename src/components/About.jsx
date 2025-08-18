import { useState, useEffect } from 'react';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';

const AboutPage = () => {
  // Scroll to top functionality
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Tech stack data
  const techStack = [
    { name: 'React', icon: <FaReact className="text-blue-400" />, level: 90 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 85 },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, level: 75 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, level: 95 },
    { name: 'Database', icon: <FaDatabase className="text-blue-500" />, level: 85 },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12" id="about">
      <div className="max-w-6xl mt-14 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 flex justify-center relative">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative group w-64 h-64 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 overflow-hidden shadow-xl">
                <img
                  src="az.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-400/50 transition-all duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute -inset-4 rounded-full bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          </div>

          {/* About Content */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                About Me
              </span>
            </h1>

            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
            >
              Full Stack Developer & UI/UX Designer
            </motion.h2>

            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="space-y-4 mb-6"
            >
              <motion.p variants={item} className="text-lg text-gray-700 dark:text-gray-300">
                I'm a passionate developer with expertise in building modern web applications. I specialize in creating seamless, responsive, and user-friendly experiences across the entire stack.
              </motion.p>
              <motion.p variants={item} className="text-lg text-gray-700 dark:text-gray-300">
                With 1+ year of experience, I've delivered production-ready solutions using React, Node.js, MongoDB, and Tailwind CSS. I prioritize clean, maintainable code and intuitive user interfaces.
              </motion.p>
              <motion.p variants={item} className="text-lg text-gray-700 dark:text-gray-300">
                When I'm not coding, I contribute to open-source projects, mentor junior developers, and continuously expand my skills through online courses and tech communities.
              </motion.p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                My Tech Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="text-xl">
                      {tech.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-gray-200">{tech.name}</div>
                      <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-1.5">
                        <div 
                          className="h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3">
                  <FiMail className="text-blue-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                  <div className="text-gray-700 dark:text-gray-300">your.email@example.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3">
                  <FiMapPin className="text-blue-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                  <div className="text-gray-700 dark:text-gray-300">San Francisco, CA</div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4"
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <FiGithub className="text-gray-700 dark:text-gray-300" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <FiLinkedin className="text-gray-700 dark:text-gray-300" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <FiTwitter className="text-gray-700 dark:text-gray-300" />
              </a>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all transform hover:-translate-y-1">
                Contact Me
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              My Experience
            </span>
          </h2>
          
          <div className="relative">
            {/* Timeline bar */}
            <div className="absolute left-4 md:left-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"></div>
            
            <div className="space-y-8">
              {/* Timeline item 1 */}
              <div className="relative pl-12 md:pl-0 md:flex justify-center">
                <div className="md:w-5/12 md:pr-8 md:text-right">
                  <div className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Full Stack Developer</h3>
                  <p className="text-gray-600 dark:text-gray-300">Tech Solutions Inc.</p>
                </div>
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 md:left-1/2"></div>
                <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <p className="text-gray-700 dark:text-gray-300">
                    Build scalable web applications with modern frameworks. Implemented CI/CD pipelines and optimized performance.
                  </p>
                </div>
              </div>

              {/* Timeline item 2 */}
              <div className="relative pl-12 md:pl-0 md:flex justify-center">
                <div className="md:w-5/12 md:pr-8 md:text-right">
                  <div className="text-sm text-gray-500 dark:text-gray-400">2021 - 2023</div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Frontend Developer</h3>
                  <p className="text-gray-600 dark:text-gray-300">Digital Creations</p>
                </div>
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-purple-500 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 md:left-1/2"></div>
                <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <p className="text-gray-700 dark:text-gray-300">
                    Developed responsive UIs and collaborated with designers to implement pixel-perfect interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll-to-top button */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp className="text-xl" />
        </motion.button>
      )}
    </div>
  );
};

export default AboutPage;