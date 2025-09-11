import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiMenu, FiX, FiGithub, FiLinkedin, FiMail,
  FiHome, FiBriefcase, FiAward, FiUser, FiSend, FiTool
} from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: '/', icon: <FiHome size={16} /> },
    { name: 'Projects', to: '/projects', icon: <FiBriefcase size={16} /> },
    { name: 'Skills', to: '/skills', icon: <FiAward size={16} /> },
    { name: 'About', to: '/about', icon: <FiUser size={16} /> },
    { name: 'Contact', to: '/contact', icon: <FiSend size={16} /> },
    { name: 'Services', to: '/services', icon: <FiTool size={16} /> },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/abdul-aziz102?tab=repositories' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/abdul-aziz-yousufzia-a98340356' },
    { icon: <FiMail />, href: 'mailto:abdulazizyousufzia@gmail.com' },
  ];

  return (
    <header 
      className={`fixed  w-full  z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 shadow-xl backdrop-blur-md border border-gray-800' 
          : 'bg-black/90 shadow-lg backdrop-blur-sm border border-gray-700'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-transform hover:scale-105"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">AZ</span>
            </div>
            AZ.TECH
          </Link>

          {/* Desktop nav center */}
          <nav className="hidden md:flex space-x-1 mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="flex items-center px-4 py-2 text-gray-300 hover:text-white font-medium rounded-full transition-all duration-300 group relative"
              >
                <span className="mr-2 opacity-70 group-hover:opacity-100">{item.icon}</span>
                {item.name}
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-1">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
            <div className="h-6 w-px bg-gray-700 mx-2"></div>
            
            <a
              href="/contact"
              className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 pb-4 pt-2 space-y-2 bg-gray-900 rounded-b-2xl shadow-inner border border-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              <span className="mr-3 text-blue-400">{item.icon}</span>
              {item.name}
            </Link>
          ))}
          
          <div className="pt-4 border-t border-gray-800 mt-2">
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-blue-900/30 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;