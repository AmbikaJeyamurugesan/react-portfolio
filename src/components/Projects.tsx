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
      title: "RESTful API Service",
      category: "backend",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A scalable RESTful API service for CRM, Multi-tenant applications.",
      technologies: ["Laravel", "PHP", "Python", "JWT"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Film-vault",
      category: "frontend",
      image: "https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A React-based movie listing app using the OMDB API. Allows users to search, view details, and manage a list of favorite movies.",
      technologies: ["React", "Tailwind CSS", "OMDB API"],
      demoLink: "https://react-film-vault.netlify.app/",
      githubLink: "https://github.com/AmbikaJeyamurugesan/react-film-vault"
    },
    {
      id: 3,
      title: "PCO Detector",
      category: "fullstack",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Implemented a deep learning model using CNN to detect PCO in post-cataract surgery images.",
      technologies: ["Python", "HTML", "CSS"],
      demoLink: "#",
      githubLink: "https://github.com/AmbikaJeyamurugesan/pco-detector"
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "frontend",
      image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A responsive portfolio website showcasing projects, skills, and professional experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#"
    },
    // {
    //   id: 4,
    //   title: "Real-time Chat Application",
    //   category: "fullstack",
    //   image: "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   description: "A real-time chat platform with private messaging, group chats, and file sharing capabilities.",
    //   technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    //   demoLink: "#",
    //   githubLink: "#"
    // },
    // {
    //   id: 5,
    //   title: "Weather Forecast Dashboard",
    //   category: "frontend",
    //   image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   description: "An interactive weather dashboard displaying current conditions and forecast for multiple locations.",
    //   technologies: ["React", "Redux", "Chart.js", "OpenWeather API"],
    //   demoLink: "#",
    //   githubLink: "#"
    // }
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