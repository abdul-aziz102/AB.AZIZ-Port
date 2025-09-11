import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (footerRef.current) {
        const { left, top, width, height } = footerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        footerRef.current.style.setProperty('--mouse-x', x);
        footerRef.current.style.setProperty('--mouse-y', y);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/yourusername", color: "hover:text-gray-300" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", color: "hover:text-blue-400" },
    { icon: <FaInstagram />, url: "https://instagram.com/yourusername", color: "hover:text-pink-400" },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "Skills", url: "/skills" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  const contactInfo = [
    { icon: <FiMail />, text: "abdulazizyousufzia@gmail.com", url: "mailto:abdulazizyousufzia@gmail.com" },
    { icon: <FaWhatsapp />, text: "+92 3452489424", url: "https://wa.me/923452489424" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-gray-800 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8 md:p-12 overflow-hidden"
      style={{
        '--mouse-x': 0.5,
        '--mouse-y': 0.5,
      }}
    >
      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.a 
              href="#" 
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Abdul Aziz
              </span>
            </motion.a>
            <p className="text-gray-400 max-w-md text-lg">
              Full Stack Developer specializing in modern web technologies. Creating performant, accessible, and visually stunning applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  onHoverStart={() => setHoveredLink(index)}
                  onHoverEnd={() => setHoveredLink(null)}
                >
                  <a 
                    href={link.url} 
                    className={`flex items-center text-gray-400 hover:text-blue-400 transition-colors ${
                      hoveredLink === index ? 'translate-x-1' : ''
                    }`}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 transition-all duration-300"
                      style={{ opacity: hoveredLink === index ? 1 : 0 }}
                    ></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Contact Me</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <span className="text-blue-400 mr-3 mt-1">{info.icon}</span>
                  <a 
                    href={info.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {info.text}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 text-xl p-2 rounded-full bg-gray-800 ${social.color} transition-colors`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Abdul Aziz. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-200 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp className="text-xl" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
