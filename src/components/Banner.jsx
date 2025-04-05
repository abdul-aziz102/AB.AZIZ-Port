import { useEffect, useRef } from 'react';

const PortfolioBanner = () => {
  const bannerRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (bannerRef.current) {
        const { left, top, width, height } = bannerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        bannerRef.current.style.setProperty('--mouse-x', x);
        bannerRef.current.style.setProperty('--mouse-y', y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={bannerRef}
      className="relative overflow-hidden w-full h-full md:h-[32rem] border border-gray-800 bg-gray-900 p-8 md:p-12"
      style={{
        '--mouse-x': 0.5,
        '--mouse-y': 0.5,
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_calc(var(--mouse-x)*100%)_calc(var(--mouse-y)*100%),rgba(99,102,241,0.3),transparent_70%)] transition-all duration-300"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_80%_50%,#0ea5e9,#6366f1,#a855f7,#0ea5e9)] opacity-10 animate-spin-slow [animation-duration:10s]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 mt-5 h-full flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
        {/* Text content - left side */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Hello, I'm
            </span>
            <br />
            <span className="text-white">Abdul Aziz</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
            Full Stack Developer & UI/UX Designer
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            Crafting beautiful, functional digital experiences with React, Node.js, and modern web technologies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
             <a href="/projects">View My Work</a> 
            </button>
            <button className="px-6 py-3 border border-gray-700 text-white font-medium rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <a href="/contact">Contact Me</a>
            </button>
          </div>
        </div>

        {/* Image - right side */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative group w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 overflow-hidden">
              <img 
                src="/az.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-400/50 transition-all duration-500 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute -inset-4 rounded-full bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-10 bottom-10 w-24 h-24 rounded-full bg-purple-500/20 blur-xl"></div>
      <div className="absolute left-20 top-20 w-16 h-16 rounded-full bg-blue-500/20 blur-xl"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
    </div>
  );
};

export default PortfolioBanner;