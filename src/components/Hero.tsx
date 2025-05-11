import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const typingTextRef = useRef<HTMLSpanElement>(null);
  const phrases = ['Software Developer', 'Full Stack Engineer'];
  
  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        if (typingTextRef.current) {
          typingTextRef.current.textContent = currentPhrase.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        }
        typingSpeed = 50;
      } else {
        if (typingTextRef.current) {
          typingTextRef.current.textContent = currentPhrase.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }
        typingSpeed = 100;
      }
      
      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        // Start deleting after a delay
        isDeleting = true;
        typingSpeed = 1000; // Pause at the end of the word
      } else if (isDeleting && currentCharIndex === 0) {
        // Move to the next phrase
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before starting the next word
      }
      
      setTimeout(type, typingSpeed);
    };
    
    type();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id={id}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          <span>Hi, I'm </span>
          <span className="text-primary-600 dark:text-primary-400">Ambika J</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-gray-700 dark:text-gray-300 animate-fade-in-up animation-delay-300">
          I'm a <span ref={typingTextRef} className="text-secondary-600 dark:text-secondary-400 font-medium"></span>
          <span className="typing-cursor">|</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 animate-fade-in-up animation-delay-600">
          Transforming ideas into digital experiences with clean code and creative solutions.
        </p>
        
        <div className="animate-fade-in-up animation-delay-900">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all transform hover:scale-105 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:outline-none"
          >
            Explore My Work
          </button>
        </div>
      </div>
      
      <div 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      </div>

      {/* Animated shape decorations */}
      <div className="hidden lg:block absolute -top-20 -right-20 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-50 animate-float"></div>
      <div className="hidden lg:block absolute -bottom-20 -left-20 w-96 h-96 bg-secondary-100 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-50 animate-float-delay"></div>
    </section>
  );
};

export default Hero;