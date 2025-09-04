import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = isScrolled ? 80 : 150; // Account for dynamic header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const leftNavItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
  ];

  const rightNavItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const allNavItems = [...leftNavItems, ...rightNavItems];

  return (
    <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-out ${
      isScrolled 
        ? 'top-0 h-[80px] bg-white dark:bg-gray-900 backdrop-blur-md shadow-md border-b border-gray-200/50 dark:border-gray-700/50' 
        : 'top-12 h-[120px] flex items-center justify-center'
    }`}>
      <div className={`transition-all duration-300 ease-out ${
        isScrolled 
          ? 'w-full h-full flex items-center justify-center px-6' 
          : 'backdrop-blur-md rounded-full shadow-lg border bg-white/90 dark:bg-gray-800/90 border-gray-200/20 dark:border-gray-700/20 px-8 py-4'
      }`}>
        <div className={`flex items-center justify-between transition-all duration-300 ease-out ${
          isScrolled ? 'w-full max-w-6xl' : 'max-w-4xl'
        }`}>
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {leftNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="flex items-center mx-8">
            <a href="#" className="flex items-center" onClick={() => scrollToSection('hero')}>
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400 tracking-tight">
                &lt;SHARAN H&gt;
              </span>
            </a>
          </div>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {rightNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
              {allNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
