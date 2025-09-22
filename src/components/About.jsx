import { useState, useEffect, useRef } from 'react';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import { motion, useInView } from 'framer-motion';

const AboutPage = () => {
  // Scroll to top functionality
  const [showScroll, setShowScroll] = useState(false);
  
  // Refs for scroll animations
  const experienceRef = useRef(null);
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

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
  
  // Scroll animation variants
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="w-full min-h-screen t  px-6 py-12" id="about">
      <div className="max-w-6xl mt-14 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div 
            className="w-full lg:w-1/3 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative group w-64 h-64 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 overflow-hidden shadow-xl">
                <img
                  src="/cv.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-400/50 transition-all duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute -inset-4 rounded-full bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <div className="w-full lg:w-2/3">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                About Me
              </span>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white mb-6"
            >
              Full Stack Developer & UI/UX Designer
            </motion.h2>

            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="space-y-4 mb-6"
            >
              <motion.p variants={item} className="text-lg text-white">
                I'm a passionate developer with expertise in building modern web applications. I specialize in creating seamless, responsive, and user-friendly experiences across the entire stack.
              </motion.p>
              <motion.p variants={item} className="text-lg text-white">
                With 1+ year of experience, I've delivered production-ready solutions using React, Node.js, MongoDB, and Tailwind CSS. I prioritize clean, maintainable code and intuitive user interfaces.
              </motion.p>
              <motion.p variants={item} className="text-lg text-white">
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
              <h3 className="text-lg font-semibold text-white mb-4">
                My Tech Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  >
                    <div className="text-xl">
                      {tech.icon}
                    </div>
                    <div>
                      <div className="font-medium   text-gray-200">{tech.name}</div>
                      <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-1.5">
                        <motion.div 
                          className="h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: 1.2 + index * 0.1, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
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
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3">
                  <FiMail className="text-blue-500" />
                </div>
                <div>
                  <div className="text-sm text-white">Email</div>
                  <div className="text-white">abdulazizyousufzia@gmail.com</div>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3">
                  <FiMapPin className="text-blue-500" />
                </div>
                <div>
                  <div className="text-sm text-white">Location</div>
                  <div className="text-white">Karachi.PK</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          ref={experienceRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isExperienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={isExperienceInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              My Experience
            </span>
          </motion.h2>
          
          <div className="relative" ref={timelineRef}>
            {/* Timeline bar */}
            <motion.div 
              className="absolute left-4 md:left-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"
              initial={{ scaleY: 0 }}
              animate={isTimelineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ originY: 0 }}
            ></motion.div>
            
            <motion.div 
              className="space-y-8"
              variants={staggerVariants}
              initial="hidden"
              animate={isTimelineInView ? "visible" : "hidden"}
            >
              {/* Timeline item 1 */}
              <motion.div 
                className="relative pl-12 md:pl-0 md:flex justify-center"
                variants={timelineItemVariants}
              >
                <div className="md:w-5/12 md:pr-8 md:text-right">
                  <div className="text-sm text-white">2023 - Present</div>
                  <h3 className="text-xl font-semibold text-white">Full Stack Developer</h3>
                  <p className="text-white">Tech Solutions Inc.</p>
                </div>
                <motion.div 
                  className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 md:left-1/2"
                  initial={{ scale: 0 }}
                  animate={isTimelineInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                ></motion.div>
                <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <p className="text-white">
                    Build scalable web applications with modern frameworks.
                  </p>
                </div>
              </motion.div>

              {/* Timeline item 2 */}
              <motion.div 
                className="relative pl-12 md:pl-0 md:flex justify-center"
                variants={timelineItemVariants}
              >
                <div className="md:w-5/12 md:pr-8 md:text-right">
                  <div className="text-sm text-white">2023 - 2025</div>
                  <h3 className="text-xl font-semibold text-white">Frontend Developer</h3>
                  <p className="text-white">Digital Creations</p>
                </div>
                <motion.div 
                  className="absolute left-0 top-0 w-8 h-8 rounded-full bg-purple-500 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 md:left-1/2"
                  initial={{ scale: 0 }}
                  animate={isTimelineInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                ></motion.div>
                <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <p className="text-white">
                    Developed responsive UIs and collaborated with designers to implement pixel-perfect interfaces.
                  </p>
                </div>
              </motion.div>
            </motion.div>
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
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp className="text-xl" />
        </motion.button>
      )}
     <div className='flex justify-center mt-5'>
  <a 
    href="/resume.pdf" 
    download="AbdulAziz_Resume.pdf"
    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md"
  >
    Download Resume
  </a>
</div>

    </div>
  );
};

export default AboutPage;