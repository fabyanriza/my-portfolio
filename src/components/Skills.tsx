import React, { useState } from 'react';
import { 
  Brain, 
  Database, 
  BarChart3, 
  Code, 
  Cpu, 
  TrendingUp,
  Zap,
  BookOpen
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('ml');

  const skillCategories = {
    ml: {
      title: 'Machine Learning & AI',
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 95, color: 'from-blue-500 to-yellow-500' },
        { name: 'TensorFlow', level: 88, color: 'from-orange-500 to-red-500' },
        { name: 'PyTorch', level: 85, color: 'from-red-500 to-pink-500' },
        { name: 'Scikit-learn', level: 92, color: 'from-blue-500 to-green-500' },
        { name: 'OpenCV', level: 87, color: 'from-green-500 to-blue-500' },
        { name: 'Keras', level: 90, color: 'from-red-500 to-purple-500' }
      ]
    },
    data: {
      title: 'Data Science & Analytics',
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
        { name: 'Pandas', level: 93, color: 'from-blue-600 to-purple-600' },
        { name: 'NumPy', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'Matplotlib', level: 88, color: 'from-orange-500 to-yellow-500' },
        { name: 'Seaborn', level: 85, color: 'from-blue-500 to-teal-500' },
        { name: 'Jupyter', level: 92, color: 'from-orange-500 to-red-500' },
        { name: 'R', level: 75, color: 'from-blue-600 to-indigo-600' }
      ]
    },
    database: {
      title: 'Database & Tools',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'SQL', level: 87, color: 'from-blue-600 to-indigo-600' },
        { name: 'MySQL', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'PostgreSQL', level: 80, color: 'from-blue-400 to-blue-600' },
        { name: 'MongoDB', level: 78, color: 'from-green-500 to-green-700' },
        { name: 'Git', level: 92, color: 'from-orange-500 to-red-500' },
        { name: 'Docker', level: 75, color: 'from-blue-400 to-cyan-500' }
      ]
    },
    web: {
      title: 'Web Development',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'React.js', level: 88, color: 'from-blue-500 to-cyan-500' },
        { name: 'Next.js', level: 82, color: 'from-gray-700 to-gray-900' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 85, color: 'from-teal-400 to-blue-500' },
        { name: 'Laravel', level: 80, color: 'from-red-500 to-orange-500' },
        { name: 'PHP', level: 78, color: 'from-purple-500 to-indigo-600' }
      ]
    }
  };

  const categories = [
    { key: 'ml', label: 'ML & AI', icon: <Brain className="w-5 h-5" /> },
    { key: 'data', label: 'Data Science', icon: <BarChart3 className="w-5 h-5" /> },
    { key: 'database', label: 'Database', icon: <Database className="w-5 h-5" /> },
    { key: 'web', label: 'Web Dev', icon: <Code className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit spanning AI/ML, data science, and modern web technologies
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.key
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.icon}
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-blue-400">
                {skillCategories[activeCategory as keyof typeof skillCategories].icon}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {skillCategories[activeCategory as keyof typeof skillCategories].title}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="h-full bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-gray-400">
              <BookOpen className="w-5 h-5 text-green-500" />
              <span>Continuously learning and exploring cutting-edge AI technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;