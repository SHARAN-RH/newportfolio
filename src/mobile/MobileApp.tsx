import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from '../contexts/ThemeContext';
import MobileHeader from './components/MobileHeader';
import MobileHero from './components/MobileHero';
import MobileAbout from './components/MobileAbout';
import MobileExperience from './components/MobileExperience';
import MobileSkills from './components/MobileSkills';
import MobileProjects from './components/MobileProjects';
import MobileCertificates from './components/MobileCertificates';
import MobileBlog from './components/MobileBlog';
import MobileContact from './components/MobileContact';
import MobilePreloader from './components/MobilePreloader';
import { useTheme } from '../contexts/ThemeContext';

const MobileAppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`} style={{ fontFamily: 'Inter, sans-serif' }}>
      <MobilePreloader isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <MobileHeader />
          <main className="relative">
            <MobileHero />
            <MobileAbout />
            <MobileExperience />
            <MobileSkills />
            <MobileProjects />
            <MobileCertificates />
            <MobileBlog />
            <MobileContact />
          </main>
        </>
      )}
    </div>
  );
};

function MobileApp() {
  return (
    <ThemeProvider>
      <MobileAppContent />
    </ThemeProvider>
  );
}

export default MobileApp;
