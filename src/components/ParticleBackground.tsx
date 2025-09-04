import React, { useEffect } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    // Load particles.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.onload = () => {
      // Add a small delay to ensure DOM is ready
      setTimeout(() => {
        if (window.particlesJS && document.getElementById('particles-js')) {
          // MyServiceCart exact particle configuration
          window.particlesJS('particles-js', {
            particles: {
              number: {
                value: 8
              },
              color: {
                value: ["#604CFD", "#FDA44C", "#0FBBB4", "#F85976"]
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: 1
              },
              size: {
                value: 5,
                random: true
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false
                },
                onclick: {
                  enable: false
                },
                resize: true
              }
            },
            retina_detect: true
          });
        }
      }, 100);
    };
    
    script.onerror = () => {
      console.error('Failed to load particles.js');
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      id="particles-js" 
      className="absolute inset-0 z-10 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default ParticleBackground;
