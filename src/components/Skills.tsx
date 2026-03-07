import React from 'react';
import { Code, Database, Globe, Layout, Server, Terminal } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: string[];
}

interface SkillProps {
  id: string;
}

const Skills: React.FC<SkillProps> = ({ id }) => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'JavaScript', 'PHP']
    },
    {
      title: 'Machine Learning & AI',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Data Analysis']
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: ['Python', 'FastAPI', 'Flask', 'Django', 'Laravel', 'REST APIs']
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'PostgreSQL']
    },
    {
      title: 'Web Technologies',
      icon: <Layout className="w-6 h-6" />,
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Tools & DevOps',
      icon: <Globe className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'GitLab', 'AWS', 'CI/CD', 'GitHub Actions']
    }
  ];

  return (
    <section 
      id={id} 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Technologies and tools I use to build Python applications, machine learning models, and data-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  {category.icon}
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;