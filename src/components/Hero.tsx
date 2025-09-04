import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const [displayedName, setDisplayedName] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [nameIndex, setNameIndex] = useState(0);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [showNameCursor, setShowNameCursor] = useState(true);
  const [showSubtitleCursor, setShowSubtitleCursor] = useState(false);
  const [nameComplete, setNameComplete] = useState(false);
  const { isDark } = useTheme();

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const headerHeight = 85; // Account for fixed header
      const elementPosition = aboutSection.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const name = `${personalInfo.name}\nDevOps Engineer`;
  const subtitle = personalInfo.description;

  // Blinking cursor for name
  useEffect(() => {
    const interval = setInterval(() => {
      setShowNameCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Blinking cursor for subtitle
  useEffect(() => {
    if (nameComplete) {
      const interval = setInterval(() => {
        setShowSubtitleCursor(prev => !prev);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [nameComplete]);

  // Type name character by character
  useEffect(() => {
    if (nameIndex < name.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(name.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!nameComplete) {
      setNameComplete(true);
      setShowNameCursor(false);
      setShowSubtitleCursor(true);
    }
  }, [nameIndex, name, nameComplete]);

  // Type subtitle character by character after name is complete
  useEffect(() => {
    if (nameComplete && subtitleIndex < subtitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedSubtitle(subtitle.slice(0, subtitleIndex + 1));
        setSubtitleIndex(subtitleIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [subtitleIndex, subtitle, nameComplete]);

  const handleContactClick = (type: string) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${personalInfo.email}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${personalInfo.phone}`, '_blank');
        break;
      case 'github':
        window.open(personalInfo.github, '_blank');
        break;
      case 'linkedin':
        window.open(personalInfo.linkedin, '_blank');
        break;
    }
  };

  return (
    <section id="hero" className="myservicecart-hero h-[90vh] w-full overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Text Content Container - Independent */}
      <div className="absolute left-0 top-16 w-3/5 h-full flex items-center justify-end z-20">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left w-full max-w-lg">
            {/* Name with Blinking Cursor */}
            <div>
              <h1 className="font-semibold mb-4 break-words" style={{ color: '#6A1FB4', fontFamily: 'Inter, sans-serif', letterSpacing: '-1.96px', lineHeight: '57px', fontSize: '65px' }}>
                {displayedName.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line.split(' ').map((word, wordIndex) => {
                      if (word === 'Developer') {
                        return <span key={wordIndex} className="gradient-word">Developer</span>;
                      }
                      return word + ' ';
                    })}
                    {lineIndex < displayedName.split('\n').length - 1 && <br />}
                  </span>
                ))}
                {showNameCursor && <span className="animate-pulse">|</span>}
              </h1>
            </div>

            {/* Subtitle with Blinking Cursor */}
            <div>
              <p className="leading-relaxed mt-6" style={{ color: '#6A1FB4', fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '22px' }}>
                {displayedSubtitle}
                {showSubtitleCursor && <span className="animate-pulse">|</span>}
              </p>
            </div>

            {/* Download Resume Button */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href={personalInfo.resumeUrl}
                download
                className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg"
              >
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm font-semibold">Download Resume</div>
                </div>
              </a>
              
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-3 bg-transparent border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 shadow-lg"
              >
                <div className="text-left">
                  <div className="text-sm font-semibold">Explore My Work</div>
                </div>
              </button>
            </div>

            {/* Contact Icons */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-8">
              {[
                { icon: Mail, type: 'email', color: 'text-blue-600' },
                { icon: Phone, type: 'phone', color: 'text-green-600' },
                { icon: Github, type: 'github', color: 'text-gray-800' },
                { icon: Linkedin, type: 'linkedin', color: 'text-blue-700' },
              ].map(({ icon: Icon, type, color }) => (
                <button
                  key={type}
                  onClick={() => handleContactClick(type)}
                  className={`p-3 rounded-full ${color} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  style={{
                    boxShadow: isDark 
                      ? '0 0 15px rgba(0, 191, 255, 0.2)' 
                      : '0 0 15px rgba(0, 128, 255, 0.2)'
                  }}
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Images Container - Independent */}
      <div className="absolute right-0 top-16 w-3/5 h-full flex items-center justify-start z-20">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main Profile Image with Ripple Effects */}
          <div className="relative z-20">
            <div className="relative">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 animate-float">
                <div className={`w-full h-full rounded-full flex items-center justify-center text-6xl font-bold ${
                  isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
                } border-4 border-purple-500`}>
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              {/* Ripple Effects */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-30 animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
              <div className="absolute inset-0 rounded-full border-2 border-pink-400 opacity-25 animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>

              {/* Secondary Profile Images - Overlapping */}
              <div className="absolute top-2 right-2 z-30">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 animate-float border-2 border-white" style={{ animationDelay: '1s' }}>
                  <div className="w-full h-full rounded-full flex items-center justify-center text-xs font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    JS
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-2 left-2 z-30">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 animate-float border-2 border-white" style={{ animationDelay: '1.5s' }}>
                  <div className="w-full h-full rounded-full flex items-center justify-center text-xs font-bold bg-gradient-to-r from-green-500 to-teal-500 text-white">
                    TS
                  </div>
                </div>
              </div>
              
              <div className="absolute top-12 left-1 z-30">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 animate-float border-2 border-white" style={{ animationDelay: '2.5s' }}>
                  <div className="w-full h-full rounded-full flex items-center justify-center text-xs font-bold bg-gradient-to-r from-pink-500 to-red-500 text-white">
                    RT
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 right-1 z-30">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 animate-float border-2 border-white" style={{ animationDelay: '3s' }}>
                  <div className="w-full h-full rounded-full flex items-center justify-center text-xs font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                    PY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Button */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center space-y-2 text-black hover:text-black transition-colors duration-300 focus:outline-none focus:ring-0 focus:bg-transparent active:bg-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          
          {/* Animated line */}
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-black to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 3.5, duration: 0.8 }}
          />
          
          {/* Arrow icon below line */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.5 }}
            className="mt-2"
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown className="w-4 h-4 text-black" />
            </motion.div>
          </motion.div>
        </motion.button>
      </motion.div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .gradient-word {
          background: linear-gradient(45deg, #6A1FB4, #9333EA, #C084FC);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default Hero;