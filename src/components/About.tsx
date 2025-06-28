import React from 'react';
import { Brain, TrendingUp, Database, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning Expertise",
      description: "Developing intelligent models for computer vision, NLP, and predictive analytics"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Science Mastery",
      description: "Extracting meaningful insights from complex datasets using statistical methods"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Building models that forecast trends and support data-driven decision making"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Applying AI solutions to real-world challenges in healthcare, business, and technology"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Data Science student with a deep fascination for artificial intelligence 
                and machine learning. My journey involves transforming raw data into actionable insights 
                and building intelligent systems that solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Through my academic projects and personal research, I've developed expertise in computer vision, 
                natural language processing, and predictive modeling. From detecting medical conditions through 
                image analysis to understanding customer behavior patterns, I love exploring how AI can make 
                a meaningful impact across different domains.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My approach combines strong theoretical foundations with practical implementation skills. 
                I'm constantly experimenting with new algorithms, frameworks, and techniques to stay at 
                the forefront of this rapidly evolving field.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  Data Science Student
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  15+ ML Projects
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                  AI Enthusiast
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;