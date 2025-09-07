import React, { useState, useEffect } from 'react';

const ScrollIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-2 top-1/2 transform -translate-y-1/2 z-50">
      <div className="lqd-stickybar-wrap lqd-stickybar-right">
        <div className="lqd-scrl-indc d-flex ws-nowrap lqd-scrl-indc-style-dot flex-col items-center">
          <button 
            onClick={handleScrollClick}
            className="lqd-scrl-indc-inner d-flex align-items-center cursor-pointer bg-transparent border-none mb-6"
          >
            <span className="lqd-scrl-indc-txt text-gray-600 text-sm font-medium tracking-wider transform -rotate-90 whitespace-nowrap">
              Scroll
            </span>
          </button>
          
          {/* Scroll Progress Line */}
          <div className="scroll-progress-container relative h-32 w-px bg-gray-300">
            <div 
              className="scroll-progress-line absolute top-0 left-0 w-full bg-gray-600 transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress}%` }}
            ></div>
            {/* Moving Dot */}
            <div 
              className="scroll-progress-dot absolute w-2 h-2 bg-gray-600 rounded-full transform -translate-x-1/2 left-1/2 transition-all duration-300 ease-out"
              style={{ top: `${scrollProgress}%`, transform: 'translateX(-50%) translateY(-50%)' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
