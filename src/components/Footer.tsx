import React from 'react';
import { Heart, Brain, Database } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <span>© 2025 Your Name. Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and powered by</span>
              <Brain className="w-4 h-4 text-blue-500" />
              <span>AI</span>
            </div>
            
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Research Papers
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              Specialized in AI/ML • Data Science • Computer Vision • NLP • Predictive Analytics
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;