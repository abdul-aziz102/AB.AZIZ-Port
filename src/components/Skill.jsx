import React, { useState, useEffect, useRef } from 'react';
import { FaHtml5, FaBootstrap, FaNodeJs, FaGitAlt, FaJsSquare } from 'react-icons/fa';
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandTailwind } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

const SkillsComponent = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillsData = {
    frontend: [
      { name: 'HTML', level: 100, icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
      { name: 'CSS', level: 100, icon: <IoLogoCss3 className="text-blue-500 text-3xl" /> },
      { name: 'JavaScript', level: 75, icon: <FaJsSquare className="text-yellow-500 text-3xl" /> },
      { name: 'Tailwind CSS', level: 90, icon: <TbBrandTailwind className="text-cyan-400 text-3xl" /> },
      { name: 'Bootstrap', level: 100, icon: <FaBootstrap className="text-purple-600 text-3xl" /> }
    ],
    backend: [
      { name: 'Node.js', level: 80, icon: <FaNodeJs className="text-green-500 text-3xl" /> },
      { name: 'MongoDB', level: 70, icon: <SiMongodb className="text-green-600 text-3xl" /> }
    ],
    tools: [
      { name: 'Git', level: 85, icon: <FaGitAlt className="text-orange-600 text-3xl" /> },
      { name: 'VS Code', level: 95, icon: <VscVscodeInsiders className="text-blue-500 text-3xl" /> },
    ]
  };

  return (
    <div 
      ref={sectionRef}
      className="relative w-full bg-white dark:bg-gray-900 px-6 py-16 overflow-hidden transition-colors"
    >
      {/* Background glowing circles */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20 pointer-events-none">
        <div className={`absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-400 blur-3xl ${isVisible ? 'animate-pulse-slow' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-500 blur-3xl ${isVisible ? 'animate-pulse-slow' : 'opacity-0'}`}></div>
      </div>

      {/* Floating icons in bg */}
      <div className={`absolute top-1/4 left-1/5 opacity-20 ${isVisible ? 'animate-float' : 'opacity-0'}`}>
        <FaHtml5 size={40} className="text-orange-500" />
      </div>
      <div className={`absolute top-1/3 right-1/4 opacity-20 ${isVisible ? 'animate-float-delay' : 'opacity-0'}`}>
        <FaNodeJs size={50} className="text-green-600" />
      </div>
      <div className={`absolute bottom-1/4 left-1/3 opacity-20 ${isVisible ? 'animate-float-delay-2' : 'opacity-0'}`}>
        <FaJsSquare size={35} className="text-yellow-500" />
      </div>
      <div className={`absolute bottom-1/3 right-1/5 opacity-20 ${isVisible ? 'animate-float' : 'opacity-0'}`}>
        <IoLogoCss3 size={45} className="text-blue-500" />
      </div>

      <div className="max-w-6xl mt-14 mx-auto relative z-10">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            My Skills
          </span>
        </h1>
        <p className={`text-lg text-gray-600 dark:text-gray-300 mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{transitionDelay: '0.2s'}}>
          Technologies I use and work with regularly
        </p>

        {/* Category Tabs */}
        <div className={`flex flex-wrap gap-3 mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{transitionDelay: '0.3s'}}>
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-md text-sm font-semibold transition ${
                activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={index}
              className={`p-5 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transform transition-all duration-700 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  {skill.icon}
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-blue-500 dark:text-blue-400 font-mono">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-3">
                <div
                  className="h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
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
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 0.85; }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float 7s ease-in-out infinite; animation-delay: 1s; }
        .animate-float-delay-2 { animation: float 5s ease-in-out infinite; animation-delay: 2s; }
        .animate-pulse-slow { animation: pulseSlow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default SkillsComponent;
