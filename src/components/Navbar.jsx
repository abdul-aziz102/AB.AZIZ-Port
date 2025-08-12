import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiSun, FiMoon
} from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Projects', to: '/projects' },
    { name: 'Skills', to: '/skills' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
    
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/abdul-aziz102?tab=repositories' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/abdul-aziz-yousufzia-a98340356' },
  ];

  return (
    <div className='relative flex justify-center items-center   bg-white dark:bg-gray-900 shadow-md z-50'>
    <header className="fixed top-0 w-4/5 mt-4 rounded-full border border-black z-50 bg-white dark:bg-gray-900 shadow-md backdrop-blur-md transition">
      <div className="max-w-7xl mx-auto  px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            AZ.BRAND
          </Link>

          {/* Desktop nav center */}
          <nav className="hidden md:flex space-x-6 mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white font-medium relative group transition"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-white transition"
              >
                {link.icon}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="text-xl p-2 rounded-full text-yellow-400 dark:text-yellow-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title="Toggle Theme"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="text-xl text-gray-700 dark:text-yellow-300">
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden transition-max-height duration-500 overflow-hidden ${
          isOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-4 pb-4 pt-2 space-y-2 bg-white dark:bg-gray-900">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex space-x-4 pt-3 px-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
    </div>
  );
};

export default Navbar;
