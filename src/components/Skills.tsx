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
      title: 'Frontend',
      icon: <Layout className="w-6 h-6" />,
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: ['PHP', 'Laravel','Python', 'Flask']
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL']
    },
    {
      title: 'DevOps',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['AWS', 'Git', 'Git Lab', 'CI/CD', 'GitHub', 'GitHub Actions']
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['JavaScript', 'PHP', 'Python', 'Laravel']
    },
    {
      title: 'Other',
      icon: <Globe className="w-6 h-6" />,
      skills: ['RESTful APIs', 'Multi-Tenant Architecture', 'WebSockets', 'Microservices', 'Git']
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
            Here are some of the technologies and tools I've worked with throughout my career.
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

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">Technical Proficiency</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">Frontend Development</span>
                <span className="text-primary-600 dark:text-primary-400 font-medium">70%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">Backend Development</span>
                <span className="text-primary-600 dark:text-primary-400 font-medium">85%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">Database Management</span>
                <span className="text-primary-600 dark:text-primary-400 font-medium">70%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            
            {/* <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">UI/UX Design</span>
                <span className="text-primary-600 dark:text-primary-400 font-medium">70%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div> */}
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">DevOps</span>
                <span className="text-primary-600 dark:text-primary-400 font-medium">60%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            
            {/* <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">System Architecture</span>
                <span className="text-primary-600 dark:text-primary-400 font-medium">85%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;