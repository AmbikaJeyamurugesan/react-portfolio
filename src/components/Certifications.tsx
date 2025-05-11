import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credential: string;
  image: string;
}

interface CertificationsProps {
  id: string;
}

const Certifications: React.FC<CertificationsProps> = ({ id }) => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Dec 2022",
      credential: "https://example.com/credential/123",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Professional Frontend Developer",
      issuer: "Meta",
      date: "Aug 2022",
      credential: "https://example.com/credential/456",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Machine Learning Engineer",
      issuer: "Google",
      date: "Mar 2022",
      credential: "https://example.com/credential/789",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "Jan 2022",
      credential: "https://example.com/credential/101",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section 
      id={id} 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-primary-600 dark:text-primary-400">Certifications</span> & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Professional certifications and credentials that validate my expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="md:w-1/3 relative">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-48 md:h-full object-cover"
                />
                {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-600/50 to-secondary-600/50 flex items-center justify-center">
                  <Award className="w-16 h-16 text-white" />
                </div> */}
              </div>
              
              <div className="p-6 md:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{cert.title}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{cert.issuer}</p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar size={18} />
                    <span className="ml-2">{cert.date}</span>
                  </div>
                </div>
                
                <a 
                  href={cert.credential} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  View Credential <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;