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
      company: "ESEVEL Pte. Ltd. (Skuad)",
      position: "Backend Developer",
      period: "June 2024 - August 2026",
      description: "Building and maintaining backend systems and REST APIs for a multi-tenant SaaS platform deployed on AWS, serving 50+ clients across 3+ subscription tiers.",
      responsibilities: [
        "Designed, tested, and maintained 10+ secure Open API endpoints for user, device, and asset management workflows, writing clean, reusable code to internal standards.",
        "Debugged and resolved critical production issues, improving platform stability and reducing customer-reported incidents by 60%, while improving API response times by 35%.",
        "Integrated Google Workspace, Microsoft Entra ID, and third-party connectors via REST APIs and JSON payloads, handling authentication and data validation across 10+ client accounts.",
        "Refactored multi-tenant architecture across 3+ subscription tiers serving 50+ clients, using Git-based version control for reliable, incremental delivery.",
        "Deployed and monitored production releases on AWS on a biweekly-to-monthly cadence, documenting workflows and troubleshooting steps for the team."
      ]
    },
    {
      id: 2,
      company: "MAXVY Technologies",
      position: "Graduate Engineer Trainee",
      period: "January 2023 - March 2024",
      description: "Developed backend APIs and applications for IoT device integration and internal business systems.",
      responsibilities: [
        "Built and maintained 5+ REST API endpoints for IoT device integration, handling JSON-based real-time communication and debugging connectivity issues.",
        "Developed a responsive, 7+ module CRM system (PHP, HTML, CSS, JavaScript), applying OOP principles for maintainable, reusable code.",
        "Streamlined a Flutter-based hybrid app for BLE connectivity and QR scanning, documenting technical workflows for handoff.",
        "Implemented CI/CD pipelines using GitLab to streamline builds and deployments.",
        "Earned the 'Shining Star Award' for consistent, high-quality delivery."
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
            My professional experience building backend systems, APIs, and scalable applications while expanding my expertise in Python and Generative AI.
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