import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import ScrollIndicator from './components/ScrollIndicator';
import IconShowcase from './components/IconShowcase';
import CustomCursor from './components/CustomCursor';
import { useTheme } from './contexts/ThemeContext';

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showIconShowcase, setShowIconShowcase] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    // Check URL for icon showcase
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('icons') === 'true') {
      setShowIconShowcase(true);
    }
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (showIconShowcase) {
    return <IconShowcase />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`} style={{ fontFamily: 'Verdana, sans-serif' }}>
      <Preloader isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <CustomCursor />
          <Header />
          <ScrollIndicator />
          <main className="relative">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Certificates />
            <Blog />
            <Contact />
            
            {/* Portfolio Issue - Fixed Bottom Right */}
            <motion.div 
              className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <Calendar className="w-3 h-3" />
                <span>Last Update</span>
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <span className="text-xs font-mono text-gray-500 dark:text-gray-400 tracking-wider uppercase">
                Dec 2025
              </span>
            </motion.div>
          </main>
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
