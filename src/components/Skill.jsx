import React, { useState, useEffect, useRef } from 'react';
import { 
  FaHtml5, FaBootstrap, FaNodeJs, FaGitAlt, FaJsSquare, 
  FaReact, FaFigma, FaPython, FaAws 
} from 'react-icons/fa';
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandTailwind, TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress, SiPostman, SiVercel } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

const SkillsComponent = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);
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

  useEffect(() => {
    if (isVisible) {
      const timers = skillsData[activeCategory].map((_, index) => 
        setTimeout(() => {
          setAnimatedSkills(prev => [...prev, index]);
        }, 100 * index)
      );
      
      return () => {
        timers.forEach(timer => clearTimeout(timer));
        setAnimatedSkills([]);
      };
    }
  }, [isVisible, activeCategory]);

  const skillsData = {
    frontend: [
      { name: 'HTML', level: 100, icon: <FaHtml5 className="text-orange-500 text-3xl" />, color: 'from-orange-500 to-orange-600' },
      { name: 'CSS', level: 90, icon: <IoLogoCss3 className="text-blue-500 text-3xl" />, color: 'from-blue-500 to-blue-600' },
      { name: 'JavaScript', level: 60, icon: <FaJsSquare className="text-yellow-500 text-3xl" />, color: 'from-yellow-500 to-yellow-600' },
      { name: 'React', level: 85, icon: <FaReact className="text-blue-400 text-3xl" />, color: 'from-blue-400 to-cyan-500' },
      
      { name: 'Tailwind CSS', level: 95, icon: <TbBrandTailwind className="text-cyan-400 text-3xl" />, color: 'from-cyan-400 to-cyan-600' },
      { name: 'Bootstrap', level: 90, icon: <FaBootstrap className="text-purple-600 text-3xl" />, color: 'from-purple-600 to-purple-800' }
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: <FaNodeJs className="text-green-500 text-3xl" />, color: 'from-green-500 to-green-700' },
      { name: 'Express.js', level: 80, icon: <SiExpress className="text-gray-500 text-3xl" />, color: 'from-gray-500 to-gray-700' },
      { name: 'MongoDB', level: 75, icon: <SiMongodb className="text-green-600 text-3xl" />, color: 'from-green-600 to-green-800' },
      
      
    ],
    tools: [
      { name: 'Git', level: 70, icon: <FaGitAlt className="text-orange-600 text-3xl" />, color: 'from-orange-600 to-orange-700' },
      { name: 'VS Code', level: 75, icon: <VscVscodeInsiders className="text-blue-500 text-3xl" />, color: 'from-blue-500 to-blue-700' },
      
      { name: 'Postman', level: 60, icon: <SiPostman className="text-orange-500 text-3xl" />, color: 'from-orange-500 to-orange-600' },
      { name: 'Vercel', level: 85, icon: <SiVercel className="text-white text-3xl" />, color: 'from-gray-700 to-gray-900' }
    ]
  };

  const categories = [
    { id: 'frontend', name: 'Frontend Development' },
    { id: 'backend', name: 'Backend Development' },
    { id: 'tools', name: 'Tools & Platforms' }
  ];

  return (
    <div 
      ref={sectionRef}
      className="relative w-full pt-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-20 overflow-hidden"
      id="skills"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className={`absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-400 blur-3xl ${isVisible ? 'animate-pulse-slow' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-500 blur-3xl ${isVisible ? 'animate-pulse-slow' : 'opacity-0'}`}></div>
      </div>

      {/* Floating icons in background */}
      <div className={`absolute top-1/4 left-1/5 opacity-15 ${isVisible ? 'animate-float' : 'opacity-0'}`}>
        <FaHtml5 size={40} className="text-orange-500" />
      </div>
      <div className={`absolute top-1/3 right-1/4 opacity-15 ${isVisible ? 'animate-float-delay' : 'opacity-0'}`}>
        <FaNodeJs size={50} className="text-green-600" />
      </div>
      <div className={`absolute bottom-1/4 left-1/3 opacity-15 ${isVisible ? 'animate-float-delay-2' : 'opacity-0'}`}>
        <FaJsSquare size={35} className="text-yellow-500" />
      </div>
      <div className={`absolute bottom-1/3 right-1/5 opacity-15 ${isVisible ? 'animate-float' : 'opacity-0'}`}>
        <IoLogoCss3 size={45} className="text-blue-500" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Skills</span>
          </h1>
          <p className={`text-lg text-gray-300 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{transitionDelay: '0.2s'}}>
            Technologies and tools I use to bring ideas to life and create amazing digital experiences
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{transitionDelay: '0.3s'}}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              {activeCategory === category.id && (
                <div className="w-2 h-2 rounded-full bg-white"></div>
              )}
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-xl border border-gray-700 transform transition-all duration-500 ${
                animatedSkills.includes(index) 
                  ? 'animate-fade-in-up opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              } hover:-translate-y-1`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-blue-400 font-mono font-bold">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                <div
                  className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: animatedSkills.includes(index) ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-400">
                <span>Beginner</span>
                <span>Advanced</span>
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
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 0.85; }
        }
        .animate-fade-in-up { 
          animation: fadeInUp 0.8s forwards; 
        }
        .animate-float { 
          animation: float 8s ease-in-out infinite; 
        }
        .animate-float-delay { 
          animation: float 7s ease-in-out infinite; 
          animation-delay: 1s; 
        }
        .animate-float-delay-2 { 
          animation: float 9s ease-in-out infinite; 
          animation-delay: 2s; 
        }
        .animate-pulse-slow { 
          animation: pulseSlow 6s ease-in-out infinite; 
        }
      `}</style>
    </div>
  );
};

export default SkillsComponent;