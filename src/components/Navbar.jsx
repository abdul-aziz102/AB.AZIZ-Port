import { useState } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Projects', to: '/projects' },
    { name: 'Skills', to: '/skills' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/abdulazizyousufzaie' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com/in/yourusername' },
    { icon: <FiTwitter />, href: 'https://twitter.com/yourusername' },
    { icon: <FiMail />, href: 'mailto:youremail@example.com' },
  ];

  return (
    <header className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md py-2 shadow-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              AZ.BRAND
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-4 px-4 pt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;