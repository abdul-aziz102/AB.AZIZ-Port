import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiMenu, FiX, FiGithub, FiLinkedin, FiMail,
  FiHome, FiBriefcase, FiAward, FiUser, FiSend, FiTool,
  FiChevronRight, FiCode, FiCpu
} from 'react-icons/fi';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('/');
  const [isHovering, setIsHovering] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Home', to: '/', icon: <FiHome size={18} /> },
    { name: 'Projects', to: '/projects', icon: <FiBriefcase size={18} /> },
    { name: 'Skills', to: '/skills', icon: <FiAward size={18} /> },
    { name: 'About', to: '/about', icon: <FiUser size={18} /> },
    { name: 'Services', to: '/services', icon: <FiTool size={18} /> },
    { name: 'Contact', to: '/contact', icon: <FiSend size={18} /> },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/abdul-aziz102?tab=repositories', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/abdul-aziz-yousufzia-a98340356', label: 'LinkedIn' },
    { icon: <FiMail />, href: 'mailto:abdulazizyousufzia@gmail.com', label: 'Email' },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header 
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 bg-black/95 backdrop-blur-xl shadow-2xl border-b border-gray-800/30' 
          : 'py-3 bg-black/90 backdrop-blur-lg shadow-lg'
      }`}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        {/* Animated particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: '50%',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link
            to="/"
            className="flex items-center group relative z-10"
            onMouseEnter={() => setIsHovering('logo')}
            onMouseLeave={() => setIsHovering(null)}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Logo container */}
              <div className="flex items-center space-x-3">
                {/* Animated logo icon */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all duration-500">
                    <FiCode className="text-white text-xl" />
                  </div>
                  
                  {/* Pulsing effect */}
                  <motion.div
                    className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 blur opacity-20"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-400 rounded-tl-lg"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-purple-400 rounded-tr-lg"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-pink-400 rounded-bl-lg"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blue-400 rounded-br-lg"></div>
                </div>

                {/* Logo text */}
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
                      Abdul Aziz
                    </span>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiCpu className="text-blue-400 text-xs" />
                    <span className="text-xs text-gray-400 font-medium tracking-wider">
                      FULL STACK DEVELOPER
                    </span>
                  </div>
                </div>
              </div>

              {/* Logo hover line */}
              <AnimatePresence>
                {isHovering === 'logo' && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '100%', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 mx-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="relative group"
                onMouseEnter={() => setIsHovering(item.to)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <div className={`flex items-center px-5 py-3 rounded-xl transition-all duration-300 ${
                  activeNav === item.to
                    ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}>
                  <span className={`mr-2 transition-transform duration-300 ${activeNav === item.to ? 'scale-110' : ''}`}>
                    {item.icon}
                  </span>
                  <span className="font-medium text-sm tracking-wide">
                    {item.name}
                  </span>
                  
                  {activeNav === item.to && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>

                {/* Hover underline effect */}
                <AnimatePresence>
                  {isHovering === item.to && activeNav !== item.to && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: '60%', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Social links */}
            <div className="hidden md:flex items-center space-x-2">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2 rounded-full text-gray-400 hover:text-white transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <div className="relative z-10">{link.icon}</div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden md:block h-8 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

            {/* Enhanced Hire Me Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <a
                href="/contact"
                className="relative px-6 py-3 rounded-xl overflow-hidden flex items-center"
              >
                {/* Main gradient background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                
                {/* Border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative flex items-center space-x-2 text-white font-semibold text-sm tracking-wide">
                  <span>Hire Me</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiChevronRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </div>
              </a>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900 rounded-lg text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                Let's build something amazing!
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden"
            >
              <motion.nav 
                className="flex flex-col mt-4 p-6 rounded-2xl bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-4 py-4 my-1 rounded-xl transition-all duration-300 ${
                        activeNav === item.to
                          ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      <span className={`mr-4 ${activeNav === item.to ? 'text-blue-400' : ''}`}>
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                      {activeNav === item.to && (
                        <motion.div 
                          className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile social links */}
                <motion.div 
                  variants={itemVariants}
                  className="pt-6 mt-4 border-t border-gray-800/50"
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-center space-x-4">
                      {socialLinks.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={itemVariants}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="p-3 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300"
                          aria-label={link.label}
                        >
                          {link.icon}
                        </motion.a>
                      ))}
                    </div>

                    {/* Mobile CTA */}
                    <motion.div
                      variants={itemVariants}
                      transition={{ delay: 1 }}
                      className="mt-4"
                    >
                      <a
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="w-full py-4 text-center rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Start a Project</span>
                        <FiChevronRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ width: 0 }}
        animate={{ width: `${(typeof window !== 'undefined' ? (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 : 0)}%` }}
        transition={{ duration: 0.1 }}
      />
    </header>
  );
};

export default Navbar;