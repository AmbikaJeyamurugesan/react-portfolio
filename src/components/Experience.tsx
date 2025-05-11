import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
}

interface ExperienceProps {
  id: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "Esevel Pte Ltd",
      position: "Junior Software Developer",
      period: "June 2024 - Present",
      description: "Leading the development of cloud-based enterprise solutions.",
      responsibilities: [
        "Enhanced and supported scalable features in a multi-tenant Laravel-based SaaS platform.",
        "Wrote RESTful APIs and unit tests to ensure high code reliability and maintainability.",
        "Participated in AWS deployments (EC2, RDS, S3) and managed CI/CD pipelines for production releases.",
        "Resolved 15+ production issues per quarter, improving stability and reducing customer-reported bugs by 60%.",
        "Engaged in daily stand-ups, peer code reviews, and team retrospectives in an agile environment."
      ]
    },
    {
      id: 2,
      company: "Maxvy Technologies",
      position: "Full Stack Developer",
      period: "Apr 2023 - Mar 2024",
      description: "Developed and maintained web applications for clients across various industries.",
      responsibilities: [
        "Constructed a responsive CRM system using PHP, HTML, CSS, and JS with 100% mobile responsiveness.",
        "Streamlined hybrid mobile apps with Flutter for BLE connectivity, QR scanning, and real-time logs.",
        "Created and maintained Laravel APIs for seamless data exchange between IoT devices and backend systems.",
        "Implemented CI/CD pipelines using GitLab.",
        "Recognized with the 'Shining Star Award' (Nov 2023) for excellence in backend system integration and deliver."
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <section 
      id={id} 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Work <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            My professional journey through various roles and companies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline navigation */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              {experiences.map((exp) => (
                <div 
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`flex items-center p-4 mb-4 cursor-pointer transition-all rounded-lg ${
                    activeTab === exp.id 
                      ? 'bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-600 dark:border-primary-400'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeTab === exp.id 
                        ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                      <Briefcase size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className={`font-medium ${
                      activeTab === exp.id
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-800 dark:text-white'
                    }`}>
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.position}</p>
                  </div>
                  {activeTab === exp.id && (
                    <div className="ml-auto">
                      <ChevronRight className="text-primary-600 dark:text-primary-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience details */}
          <div className="lg:col-span-8">
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                className={`bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 transform transition-all duration-300 ${
                  activeTab === exp.id 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8 absolute pointer-events-none'
                }`}
                style={{ display: activeTab === exp.id ? 'block' : 'none' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{exp.position}</h3>
                    <p className="text-xl text-primary-600 dark:text-primary-400">{exp.company}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar size={18} />
                    <span className="ml-2">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {exp.description}
                </p>

                <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Key Responsibilities:</h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400"></div>
                      </div>
                      <p className="ml-4 text-gray-600 dark:text-gray-300">{responsibility}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;