import React, { useState } from 'react';
import { FaHtml5, FaBootstrap, FaNodeJs, FaGitAlt, FaJsSquare } from 'react-icons/fa';
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandTailwind } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

const SkillsComponent = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillsData = {
    frontend: [
      { name: 'HTML', level: 100, icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
      { name: 'CSS', level: 100, icon: <IoLogoCss3 className="text-blue-500 text-2xl" /> },
      { name: 'JavaScript', level: 75, icon: <FaJsSquare className="text-yellow-500 text-2xl" /> },
      { name: 'Tailwind CSS', level: 90, icon: <TbBrandTailwind className="text-cyan-400 text-2xl" /> },
      { name: 'Bootstrap', level: 100, icon: <FaBootstrap className="text-purple-600 text-2xl" /> }
    ],
    backend: [
      { name: 'Node.js', level: 80, icon: <FaNodeJs className="text-green-500 text-2xl" /> },
      { name: 'MongoDB', level: 70, icon: <SiMongodb className="text-green-600 text-2xl" /> }
    ],
    tools: [
      { name: 'Git', level: 85, icon: <FaGitAlt className="text-orange-600 text-2xl" /> },
      { name: 'VS Code', level: 95, icon: <VscVscodeInsiders className="text-blue-500 text-2xl" /> },
    ]
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 px-6 py-12 transition-colors">
      <div className="max-w-6xl mt-14 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            My Skills
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Technologies I use and work with regularly
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
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
              className="p-5 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
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
    </div>
  );
};

export default SkillsComponent;
