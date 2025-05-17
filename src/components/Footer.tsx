import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center">
              <div className="font-bold text-xl cursor-pointer">
                <span className="text-primary-600">Port</span>
                <span className="text-gray-800">folio</span>
              </div>
              <div className="ml-2 text-sm text-gray-500">
                © {currentYear} All rights reserved.
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center">
              <span className="text-sm text-gray-500 flex items-center">
                Made with <Heart size={16} className="mx-1 text-red-500" /> in React & Tailwind
              </span>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
                Navigate
              </h3>
              <ul className="mt-4 space-y-2">
                {['About', 'Skills', 'Experience', 'Projects', /*'Certifications',*/ 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
                Connect
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  { label: 'GitHub 🚀', href: 'https://github.com/AmbikaJeyamurugesan' },
                  { label: 'LinkedIn 💼', href: 'https://www.linkedin.com/in/ambikajeyamurugesan/' },
                  { label: 'Instagram 📸', href: 'https://www.instagram.com/ambikajeyamurugesan/' },
                ].map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
                Contact
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-500">
                  ambikajdeveloper@gmail.com
                </li>
                <li className="text-gray-500">
                  Tamil Nadu, India
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              This site was designed and built with passion and attention to detail.
            </p>
            
            <div className="mt-4 md:mt-0">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;