import { useEffect, useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  const contactRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (contactRef.current) {
        const { left, top, width, height } = contactRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        contactRef.current.style.setProperty('--mouse-x', x);
        contactRef.current.style.setProperty('--mouse-y', y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={contactRef}
      className="relative overflow-hidden w-full min-h-screen border border-gray-800 bg-gray-900 p-8 md:p-12"
      style={{
        '--mouse-x': 0.5,
        '--mouse-y': 0.5,
      }}
    >
      {/* Animated gradient background - identical to banner */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_calc(var(--mouse-x)*100%)_calc(var(--mouse-y)*100%),rgba(99,102,241,0.3),transparent_70%)] transition-all duration-300"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_80%_50%,#0ea5e9,#6366f1,#a855f7,#0ea5e9)] opacity-10 animate-spin-slow [animation-duration:10s]"></div>
      </div>
      
      {/* Decorative elements - identical to banner */}
      <div className="absolute right-10 bottom-10 w-24 h-24 rounded-full bg-purple-500/20 blur-xl"></div>
      <div className="absolute left-20 top-20 w-16 h-16 rounded-full bg-blue-500/20 blur-xl"></div>
      
      {/* Grid pattern - identical to banner */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      
      {/* Contact content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Contact Me
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl">
          Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
        
        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <a 
            href="mailto:your.email@example.com" 
            className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300 mr-4">
                <FiMail className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Email</h3>
            </div>
            <p className="text-gray-300 mb-2">Send me a message directly</p>
            <p className="text-blue-400 font-medium">your.email@example.com</p>
          </a>
          
          {/* Phone */}
          <a 
            href="tel:+1234567890" 
            className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300 mr-4">
                <FiPhone className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Phone</h3>
            </div>
            <p className="text-gray-300 mb-2">Call or send me a text</p>
            <p className="text-blue-400 font-medium">+1 (234) 567-890</p>
          </a>
          
          {/* WhatsApp */}
          <a 
            href="https://wa.me/1234567890" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300 mr-4">
                <FaWhatsapp className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
            </div>
            <p className="text-gray-300 mb-2">Message me on WhatsApp</p>
            <p className="text-blue-400 font-medium">+1 (234) 567-890</p>
          </a>
          
          {/* Address */}
          <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm group">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300 mr-4">
                <FiMapPin className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Location</h3>
            </div>
            <p className="text-gray-300 mb-2">Based in</p>
            <p className="text-blue-400 font-medium">San Francisco, California</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;