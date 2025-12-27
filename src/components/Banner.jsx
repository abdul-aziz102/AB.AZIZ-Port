import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView, useAnimationControls } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const PortfolioBanner = () => {
  // eslint-disable-next-line no-unused-vars
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [time, setTime] = useState(new Date());
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setScrollProgress(scrollPercent);
    };

    const timer = setInterval(() => setTime(new Date()), 1000);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x * 0.5 + 50}% ${mousePosition.y * 0.5 + 50}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImciIGN4PSIwJSIgY3k9IjAlIiByPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDA3Y2ZmIiBzdG9wLW9wYWNpdHk9Ii4xIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNzgzY2E4IiBzdG9wLW9wYWNpdHk9Ii4wNSIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          transition: 'transform 0.1s linear'
        }}></div>

        {/* Particle system */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                x: Math.sin(i) * 100 + mousePosition.x * 2,
                y: Math.cos(i) * 100 + mousePosition.y * 2,
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.1
              }}
              style={{
                left: `${(i * 20) % 100}%`,
                top: `${(i * 15) % 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating 3D elements */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 opacity-10 blur-xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left column */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 backdrop-blur-sm"
            >
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping absolute"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full relative"></div>
              </div>
              <span className="text-sm font-medium text-blue-300">
                OPEN FOR COLLABORATION
              </span>
             
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Hello, I'm
              </span>
              <span className="block mt-2 relative">
                <span className="relative z-10">Abdul Aziz</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-50"></span>
              </span>
            </motion.h1>

            {/* Animated typing */}
            <motion.div variants={itemVariants}>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Tech Enthusiast',
                  2000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              I craft <span className="text-blue-400 font-semibold">immersive digital experiences</span> that blend cutting-edge technology with elegant design. Currently pushing boundaries with <span className="text-purple-400">React.js.</span>
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 max-w-md"
            >
              {[
                { value: '50+', label: 'Projects' },
                { value: '4+', label: 'Month Exp' },
                { value: '100%', label: 'Satisfaction' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-gradient-to-b from-gray-900/50 to-black/50 border border-gray-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative flex items-center gap-3 text-lg font-semibold">
                  <span>Explore Projects</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </div>
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-xl border-2 border-gray-700 hover:border-blue-500 bg-black/30 backdrop-blur-sm hover:bg-blue-900/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-lg font-semibold">
                  <span>Let's Connect</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </motion.a>
            </motion.div>

            {/* Tech stack */}
            <motion.div variants={itemVariants} className="pt-8">
              <p className="text-gray-400 text-sm mb-4">Tech Stack:</p>
              <div className="flex flex-wrap gap-3">
                {['React' , 'Node.js', 'Tailwind' , 'MongoDB' , 'Express'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-800 text-sm text-gray-300 hover:text-white hover:border-blue-500/50 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - Profile image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img
                    src="/gemini.png"
                    alt="Abdul Aziz"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>

              {/* Floating elements around image */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-lg"
                animate={floatingVariants}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-lg"
                animate={floatingVariants}
                transition={{ delay: 1 }}
              />

              {/* Interactive code snippet */}
              <motion.div
                className="absolute -right-32 top-1/4 w-64 p-4 rounded-xl bg-gray-900/90 backdrop-blur-sm border border-gray-800 shadow-2xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="text-xs text-gray-400 ml-auto">developer.js</div>
                </div>
                <pre className="text-xs  text-gray-300 font-mono">
                  <code>{`
const developer = {
  name: "Abdul Aziz",
  role: "Full Stack Dev",
  skills: ["React", "Node", "UI/UX"],
  status: "Coding...",
  getMotivation() {
    return "Building the future";
  }
}`}</code>
                </pre>
              </motion.div>

              {/* Location badge */}
              <motion.div
                className="absolute -left-4 bottom-8 px-4 py-2 rounded-full bg-gray-900/90 backdrop-blur-sm border border-gray-800 flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">Remote • Worldwide</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mx-auto"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900/50 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
};

export default PortfolioBanner;