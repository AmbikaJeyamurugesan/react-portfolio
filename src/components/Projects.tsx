import React, { useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

interface ProjectsProps {
  id: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "LexQuery AI-Powered Legal Document",
      category: "backend",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "AI-powered REST API that lets users upload legal PDFs and ask natural language questions, returning precise answers with page-level citations using RAG architecture.",
      technologies: ["Python", "FastAPI", "LangChain", "ChromaDB", "PostgreSQL", "OpenAI API", "Docker"],
      demoLink: "#",
      githubLink: "https://github.com/AmbikaJeyamurugesan/Lexquery-RAG-API"
    },
    {
      id: 2,
      title: "RESTful API Service",
      category: "backend",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // code on screen
      description: "A scalable RESTful API service for CRM, Multi-tenant applications.",
      technologies: ["Python", "Laravel", "JWT"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "PCO Detector",
      category: "fullstack",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // eye / medical
      description: "Implemented a deep learning model using CNN to detect PCO in post-cataract surgery images.",
      technologies: ["Python", "HTML", "CSS"],
      demoLink: "#",
      githubLink: "https://github.com/AmbikaJeyamurugesan/pco-detector"
    },
    {
      id: 4,
      title: "Support Ticket Classifier",
      category: "backend",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // customer support headset
      description: "A Django REST API that automatically classifies customer support tickets using Machine Learning, secured with JWT authentication, backed by MySQL, and tested with pytest.",
      technologies: ["Django REST Framework", "JWT authentication", "MySQL", "ML integration", "pytest"],
      demoLink: "#",
      githubLink: "https://github.com/AmbikaJeyamurugesan/support-ticket-classifier"
    },
    {
      id: 5,
      title: "Log Analytics API",
      category: "backend",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // analytics / charts / monitoring
      description: "A Log Analytics Backend API built using FastAPI, SQLAlchemy, and MySQL. The system ingests application logs, stores them efficiently, and exposes analytics APIs for filtering, aggregation, and monitoring.",
      technologies: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "PyTest"],
      demoLink: "#",
      githubLink: "https://github.com/AmbikaJeyamurugesan/log-analytics-api"
    },
    {
      id: 6,
      title: "Task Automation API",
      category: "backend",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // automation / workflow gears
      description: "A Python, FastAPI, MySQL, SQLAlchemy, Pydantic, JWT Authentication, Pytest, Docker, REST API",
      technologies: ["Python", "FastAPI", "MySQL", "SQLAlchemy", "Pydantic", "JWT Authentication", "Pytest", "Docker", "REST API"],
      demoLink: "#",
      githubLink: "https://github.com/AmbikaJeyamurugesan/fastapi-task-automation"
    },
    {
      id: 7,
      title: "URL Shortener API",
      category: "backend",
      image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // internet / network / browser links
      description: "A simple URL shortener API built with Flask and SQLAlchemy.",
      technologies: ["Python", "Flask", "SQLAlchemy", "MySQL"],
      demoLink: "#",
      githubLink: "https://github.com/AmbikaJeyamurugesan/python-url-shortener"
    },
    {
      id: 8,
      title: "Film-vault",
      category: "frontend",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // cinema / movie reels / popcorn
      description: "A React-based movie listing app using the OMDB API. Allows users to search, view details, and manage a list of favorite movies.",
      technologies: ["React", "Tailwind CSS", "OMDB API"],
      demoLink: "https://react-film-vault.netlify.app/",
      githubLink: "https://github.com/AmbikaJeyamurugesan/react-film-vault"
    },
    {
      id: 9,
      title: "Portfolio Website",
      category: "frontend",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // laptop / developer workspace
      description: "A responsive portfolio website showcasing projects, skills, and professional experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#"
    },
  ];

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id={id} 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A showcase of my recent work spanning various technologies and domains.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter.value
                  ? 'bg-primary-600 dark:bg-primary-500 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex space-x-4">
                    {project.demoLink != "#" && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                        aria-label="View Demo"
                      >
                        <Play size={20} />
                      </a>
                    )}
                    {project.githubLink != "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
                        aria-label="View Code on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  <span className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {project.demoLink != "#" && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 font-medium flex items-center hover:underline"
                    >
                      Live Demo <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                  {project.githubLink != "#" && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 font-medium flex items-center hover:underline"
                    >
                      View Code <Github size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show all projects button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/AmbikaJeyamurugesan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
          >
            <Github size={20} className="mr-2" />
            See More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;