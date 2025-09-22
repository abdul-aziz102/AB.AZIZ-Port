import React, { useEffect, useRef, useState } from 'react';

const PortfolioBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative w-full min-h-screen pt-10 flex items-center bg-gradient-to-br text-white px-8 md:px-12 transition-colors duration-300 overflow-hidden"
    >
      {/* Background elements with animation */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 filter blur-3xl ${isVisible ? 'animate-pulse-slow' : 'opacity-0'}`} 
             style={{ transition: 'opacity 1.5s ease-in-out, transform 2s ease-in-out' }}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-500 filter blur-3xl ${isVisible ? 'animate-pulse-slow' : 'opacity-0'}`} 
             style={{ transition: 'opacity 1.5s ease-in-out 0.5s, transform 2s ease-in-out 0.5s' }}></div>
      </div>
      
      {/* Floating tech icons with enhanced animation */}
      <div className={`absolute top-1/4 left-1/5 opacity-20 ${isVisible ? 'animate-float' : 'opacity-0'}`}
           style={{ transition: 'opacity 0.8s ease-in-out 1s' }}>
        <TechIcon icon="react" size={40} />
      </div>
      <div className={`absolute top-1/3 right-1/4 opacity-20 ${isVisible ? 'animate-float-delay' : 'opacity-0'}`}
           style={{ transition: 'opacity 0.8s ease-in-out 1.2s' }}>
        <TechIcon icon="node" size={50} />
      </div>
      <div className={`absolute bottom-1/4 left-1/3 opacity-20 ${isVisible ? 'animate-float-delay-2' : 'opacity-0'}`}
           style={{ transition: 'opacity 0.8s ease-in-out 1.4s' }}>
        <TechIcon icon="js" size={30} />
      </div>
      <div className={`absolute bottom-1/3 right-1/5 opacity-20 ${isVisible ? 'animate-float' : 'opacity-0'}`}
           style={{ transition: 'opacity 0.8s ease-in-out 1.6s' }}>
        <TechIcon icon="css" size={45} />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-14 h-full flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto w-full">
        {/* Text content */}
        <div className="lg:w-1/2">
          <div className={`mb-2 flex items-center gap-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
               style={{ transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out', transitionDelay: '0.2s' }}>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <span className="text-sm font-medium text-blue-400">
              AVAILABLE FOR FREELANCE
            </span>
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out', transitionDelay: '0.3s' }}>
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Hello, I'm
            </span>
            <br />
            <span className="text-white relative inline-block">
              Abdul Aziz
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
            </span>
          </h1>

          <h2 className={`text-xl md:text-2xl font-medium text-gray-300 mb-6 relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2/3 before:bg-gradient-to-b before:from-blue-500 before:to-purple-600 before:rounded-full ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out', transitionDelay: '0.4s' }}>
            Full Stack Developer & UI/UX Designer
          </h2>

          <p className={`text-gray-400 mb-8 text-lg max-w-lg ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
             style={{ transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out', transitionDelay: '0.5s' }}>
            I build exceptional digital experiences with modern web technologies. 
            Currently specializing in <span className="font-medium text-blue-400">React</span>,{' '}
            <span className="font-medium text-purple-400">Node.js</span>, and{' '}
            <span className="font-medium text-green-400">UI/UX Design</span>.
          </p>

          <div className={`flex flex-wrap gap-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
               style={{ transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out', transitionDelay: '0.6s' }}>
            <a href="/projects">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-500/30 flex items-center gap-2 group">
                <span>View My Work</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </a>
            <a href="/contact">
              <button className="px-6 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 group">
                <span>Contact Me</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </a>
          </div>

          {/* Social links */}
          <div className={`mt-8 flex items-center gap-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
               style={{ transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out', transitionDelay: '0.7s' }}>
            <p className="text-gray-400 text-sm">Follow me:</p>
            <div className="flex gap-3">
              {['github', 'linkedin', 'twitter', 'dribbble'].map((social, index) => (
                <a 
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out', transitionDelay: `${0.8 + index * 0.1}s` }}
                >
                  <SocialIcon platform={social} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Image with enhanced animation */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className={`relative group w-72 h-72 md:w-80 md:h-80 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
               style={{ transition: 'opacity 1s ease-in-out, transform 1s ease-in-out', transitionDelay: '0.9s' }}>
            <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 overflow-hidden shadow-xl">
              <img
                src="/cv.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-400/50 transition-all duration-500 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute -inset-4 rounded-full bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-purple-500/10 blur-md animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-blue-500/10 blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Badge */}
            <div className="absolute -bottom-2 -right-2 bg-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2 border border-gray-700 transform hover:scale-105 transition-transform duration-300">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes pulseSlow {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1s forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 7s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-delay-2 {
          animation: float 5s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Helper component for tech icons
const TechIcon = ({ icon, size = 24 }) => {
  const icons = {
    react: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
        <path fill="#00d8ff" d="M24,34C11.1,34,1,29.6,1,24s10.1-10,23-10s23,4.4,23,10S36.9,34,24,34z M24,16c-12.6,0-21,4.1-21,8s8.4,8,21,8s21-4.1,21-8S36.6,16,24,16z"/>
        <path fill="#00d8ff" d="M15.1,44c-1.1,0-2.1-0.3-2.9-0.9c-2.1-1.6-2.4-4.9-0.8-7.3l9.2-15.4c1.6-2.7,4.4-2.7,6,0l9.2,15.4c1.6,2.7,1.3,6-0.8,7.6c-2.1,1.6-5.3,1.3-6.9-0.8L24,30.7l-8.9,14.9C14.1,47,14.5,48,15.1,48L15.1,44z"/>
        <path fill="#00d8ff" d="M32.9,44c0.6,0,1-1,0.8-1.4L24,27.7l-9.7,16.1c-0.2,0.4,0.2,1.2,0.8,1.2c0.6,0,1.4-0.2,1.7-0.6L24,30.7l8.9,14.9C33.5,46,34.3,48,32.9,48L32.9,44z"/>
        <path fill="#00d8ff" d="M15.1,4c1.1,0,2.1,0.3,2.9,0.9c2.1,1.6,2.4,4.9,0.8,7.3l-9.2,15.4c-1.6,2.7-4.4,2.7-6,0l-9.2-15.4c-1.6-2.7-1.3-6,0.8-7.6C5.6,0.8,8.8,1.1,10.4,4l8.9,14.9L24,4.3L15.1,4z"/>
        <path fill="#00d8ff" d="M32.9,4c-0.6,0-1,1-0.8,1.4L24,20.3l9.7-16.1c0.2-0.4-0.2-1.2-0.8-1.2c-0.6,0-1.4,0.2-1.7,0.6L24,17.3l-8.9-14.9C14.5,2,13.7,0,15.1,0L32.9,4z"/>
      </svg>
    ),
    node: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
        <path fill="#8bc34a" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"/>
        <path fill="#fff" d="M24,10c7.7,0,14,6.3,14,14s-6.3,14-14,14S10,31.7,10,24S16.3,10,24,10z"/>
        <path fill="#4caf50" d="M24,8c8.8,0,16,7.2,16,16s-7.2,16-16,16S8,32.8,8,24S15.2,8,24,8z M24,12c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S30.6,12,24,12z"/>
        <path fill="#388e3c" d="M24,14c5.5,0,10,4.5,10,10s-4.5,10-10,10s-10-4.5-10-10S18.5,14,24,14z"/>
        <path fill="#8bc34a" d="M24,16c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S19.6,16,24,16z"/>
      </svg>
    ),
    js: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
        <path fill="#ffd600" d="M6,42V6h36v36H6z"/>
        <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/>
      </svg>
    ),
    css: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/>
        <path fill="#039BE5" d="M24 8v31.9l11.2-3.2L37.7 8z"/>
        <path fill="#FFF" d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z"/>
        <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"/>
      </svg>
    )
  };
  
  return icons[icon] || null;
};

// Helper component for social icons
const SocialIcon = ({ platform, size = 24 }) => {
  const icons = {
    github: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.790-1.75-1.764s.784-1.764 1.75-1.764 1.75.790 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    ),
    dribbble: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.847 7.929c-.634 3.223-2.475 5.947-5.115 7.453.002-.166.004-.332.004-.499 0-.076-.001-.151-.002-.227.798-.585 1.493-1.281 2.136-2.047 1.034.482 1.79 1.416 2.101 2.534.237-.18.462-.375.676-.583-.408-.93-1.098-1.714-1.943-2.251 1.619-1.833 2.586-4.271 2.586-6.912 0-.115-.003-.229-.007-.342.872.649 1.62 1.493 2.171 2.533-.207-.616-.514-1.185-.896-1.699zm-3.848-1.52c1.152.693 2.086 1.676 2.774 2.832.088-.006.176-.009.265-.009 2.213 0 4.212.913 5.656 2.383-.146-2.958-1.553-5.466-3.737-6.787-.898 1.035-2.338 1.913-4.958 1.581zm-6.269 1.137c-3.167.355-5.91 2.477-6.797 5.495-1.662-2.333-2.616-5.379-2.616-8.664 0-.198.005-.395.014-.59.984-.165 1.998-.251 3.036-.251 3.170 0 6.119 1.097 8.428 2.925-.98-.122-1.945-.184-2.913-.184-.378 0-.755.014-1.132.042zm-5.142 13.414c-.372-1.21-.574-2.494-.574-3.824 0-1.045.108-2.063.312-3.041 1.14.772 2.529 1.239 4.032 1.239 1.645 0 3.158-.537 4.389-1.439.272 1.021.409 2.107.409 3.239 0 1.532-.328 2.982-.911 4.291-2.056-.613-3.868-1.974-4.657-3.465zm5.735 3.912c1.088-1.587 1.821-3.522 2.093-5.588.889.268 1.753.612 2.57 1.028-.409 2.054-1.693 3.814-3.445 4.843-.408-.095-.799-.209-1.180-.341.017-.318.026-.639.026-.961 0-.311-.009-.618-.024-.921.362.12.732.228 1.108.323.002.016.004.032.004.048 0 .325-.012.647-.034.967-.706-.26-1.364-.611-1.958-1.039zm7.056-1.678c-.646-.382-1.336-.708-2.063-.971.19-1.619.19-3.257 0-4.876.727-.263 1.417-.589 2.063-.971 2.086 1.482 3.426 3.813 3.426 6.409 0 2.596-1.34 4.927-3.426 6.409zm4.122-8.409c-.335.94-.929 1.756-1.71 2.386-.045-.033-.089-.068-.134-.101-1.185-1.147-2.729-1.882-4.433-2.050.673-2.266.673-4.571 0-6.837 1.704-.168 3.248-.903 4.433-2.050.045-.033.089-.068.134-.101.781.63 1.375 1.446 1.71 2.386.335.94.517 1.963.517 3.036s-.182 2.096-.517 3.036z"/>
      </svg>
    )
  };
  
  return icons[platform] || null;
};

export default PortfolioBanner;