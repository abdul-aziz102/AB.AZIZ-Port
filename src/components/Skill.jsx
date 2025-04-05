import { useEffect, useRef, useState } from 'react';

const SkillsComponent = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const skillsRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (skillsRef.current) {
        const { left, top, width, height } = skillsRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        skillsRef.current.style.setProperty('--mouse-x', x);
        skillsRef.current.style.setProperty('--mouse-y', y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillsData = {
    frontend: [
      { name: 'HTML', level: 100, icon: '📄' },
      { name: 'CSS', level: 100, icon: '🎨' },
      { name: 'JavaScript', level: 75, icon: '💛' },
      { name: 'Tailwind CSS', level: 90, icon: '🌀' },
      { name: 'Bootstrap', level: 100, icon: '🅱️' }
    ],
    backend: [
      { name: 'Node.js', level: 80, icon: '🟢' },
      { name: 'MongoDB', level: 70, icon: '🍃' }
    ],
    tools: [
      { name: 'Git', level: 85, icon: '📌' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Figma', level: 75, icon: '✏️' }
    ]
  };

  return (
    <div 
      ref={skillsRef}
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
      
      {/* Skills content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            My Skills
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          Technologies I've mastered and regularly work with
        </p>
        
        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {Object.keys(skillsData).map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 border border-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData[activeCategory].map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <span className="text-blue-400 font-mono text-lg">{skill.level}%</span>
              </div>
              
              {/* Progress bar */}
              <div className="w-full bg-gray-700/50 rounded-full h-3">
                <div
                  style={{ width: `${skill.level}%` }}
                  className="h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-1000 ease-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;