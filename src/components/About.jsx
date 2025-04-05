import { useEffect, useRef } from 'react';
import { FiDownload, FiMail, FiMapPin } from 'react-icons/fi';

const AboutPage = () => {
  const aboutRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (aboutRef.current) {
        const { left, top, width, height } = aboutRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        aboutRef.current.style.setProperty('--mouse-x', x);
        aboutRef.current.style.setProperty('--mouse-y', y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={aboutRef}
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
      
      {/* About content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Profile image section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-400/30 overflow-hidden">
              <div className="w-full h-full bg-gray-700/50 flex items-center justify-center text-gray-400">
                <img src="az.jpg" alt="" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-400/50 transition-all duration-500 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
        
        {/* About text section */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              About Me
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
            Full Stack Developer & UI/UX Designer
          </h2>
          
          <div className="prose prose-invert max-w-none text-gray-300 mb-8">
            <p className="text-lg mb-4">
              I'm a passionate developer with expertise in building modern web applications. With experience in both frontend and backend development, I create seamless, responsive, and user-friendly digital experiences.
            </p>
            <p className="text-lg mb-4">
              My journey in web development began 5 years ago, and since then I've worked with various technologies including React, Node.js, MongoDB, and Tailwind CSS. I specialize in creating performant applications with clean, maintainable code.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me contributing to open-source projects, learning new technologies, or sharing my knowledge with the developer community.
            </p>
          </div>
          
          {/* Personal info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <FiMail className="text-blue-400 mr-3 text-xl" />
              <span className="text-gray-300">your.email@example.com</span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="text-blue-400 mr-3 text-xl" />
              <span className="text-gray-300">San Francisco, CA</span>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
          
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center">
              <FiMail className="mr-2" /> Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;