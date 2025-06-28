import { useState } from "react";
import { Github, Filter, Brain, Camera, Users, TrendingUp } from "lucide-react";
import fotoEyenmia from "../images/eyenemia.png";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Anemia Detection Through Eye Analysis",
      description:
        "Computer vision model using deep learning to detect anemia by analyzing conjunctival pallor in eye images. Achieved 92% accuracy using CNN architecture with data augmentation techniques.",
      image: fotoEyenmia,
      category: "computer-vision",
      tech: ["Python", "TensorFlow", "OpenCV", "CNN"],
      accuracy: "92%",
      dataset: "200+ images",
      githubUrl: "https://github.com/fabyanriza/EyeNemia",
      icon: <Camera className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Facial Emotion Recognition System",
      description:
        "Real-time emotion detection system that classifies 7 different emotions from facial expressions using deep learning. Implemented with live camera feed for real-time analysis.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "computer-vision",
      tech: ["Python", "PyTorch", "OpenCV", "ResNet"],
      accuracy: "89%",
      dataset: "35,000+ images",
      githubUrl: "#",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Customer Segmentation Analysis",
      description:
        "Advanced customer segmentation using K-means clustering and RFM analysis to identify distinct customer groups for targeted marketing strategies. Includes comprehensive data visualization.",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "data-science",
      tech: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
      accuracy: "4 Segments",
      dataset: "10,000+ customers",
      githubUrl: "#",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "Sales Forecasting Model",
      description:
        "Time series forecasting model using LSTM neural networks to predict future sales trends. Incorporates seasonal patterns and external factors for improved accuracy.",
      image:
        "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "machine-learning",
      tech: ["Python", "TensorFlow", "LSTM", "Time Series"],
      accuracy: "94%",
      dataset: "5 years data",
      githubUrl: "#",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: 5,
      title: "Medical Image Classification",
      description:
        "Deep learning model for classifying medical X-ray images to assist in diagnostic processes. Trained on large medical imaging datasets with transfer learning techniques.",
      image:
        "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "computer-vision",
      tech: ["Python", "Keras", "Transfer Learning", "VGG16"],
      accuracy: "96%",
      dataset: "15,000+ X-rays",
      githubUrl: "#",
      icon: <Camera className="w-5 h-5" />,
    },
    {
      id: 6,
      title: "Sentiment Analysis Dashboard",
      description:
        "NLP-powered sentiment analysis tool for social media monitoring. Real-time analysis of customer feedback with interactive dashboard for business insights.",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "nlp",
      tech: ["Python", "NLTK", "Streamlit", "BERT"],
      accuracy: "91%",
      dataset: "50,000+ reviews",
      githubUrl: "#",
      icon: <Brain className="w-5 h-5" />,
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "computer-vision", label: "Computer Vision" },
    { key: "machine-learning", label: "Machine Learning" },
    { key: "data-science", label: "Data Science" },
    { key: "nlp", label: "NLP" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI & ML Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Showcasing innovative machine learning solutions across computer
              vision, NLP, and data science domains
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    filter === filterOption.key
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  {filterOption.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 bg-blue-600/90 text-white px-3 py-1 rounded-full text-sm">
                      {project.icon}
                      <span className="font-medium">{project.accuracy}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-gray-700/90 rounded-full text-white hover:bg-gray-600 transition-colors duration-200"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                    <span>Dataset: {project.dataset}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Interested in collaborating on AI/ML projects?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <Brain size={20} />
              Let's Discuss AI Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
