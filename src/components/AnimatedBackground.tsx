import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // DevOps-inspired network topology and infrastructure elements
    const networkNodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      type: 'server' | 'database' | 'load-balancer' | 'container' | 'pipeline' | 'monitor';
      opacity: number;
      pulsePhase: number;
      connections: number[];
    }> = [];

    const gridLines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      opacity: number;
      flow: number;
    }> = [];

    // Create network topology nodes
    for (let i = 0; i < 20; i++) {
      networkNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        size: Math.random() * 15 + 10,
        type: ['server', 'database', 'load-balancer', 'container', 'pipeline', 'monitor'][Math.floor(Math.random() * 6)] as any,
        opacity: Math.random() * 0.3 + 0.1,
        pulsePhase: Math.random() * Math.PI * 2,
        connections: []
      });
    }

    // Create grid infrastructure lines
    const gridSpacing = 80;
    for (let x = 0; x < canvas.width; x += gridSpacing) {
      gridLines.push({
        x1: x,
        y1: 0,
        x2: x,
        y2: canvas.height,
        opacity: Math.random() * 0.1 + 0.02,
        flow: Math.random() * 0.01
      });
    }
    for (let y = 0; y < canvas.height; y += gridSpacing) {
      gridLines.push({
        x1: 0,
        y1: y,
        x2: canvas.width,
        y2: y,
        opacity: Math.random() * 0.1 + 0.02,
        flow: Math.random() * 0.01
      });
    }

    // Establish connections between nearby nodes
    networkNodes.forEach((node, i) => {
      networkNodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          if (distance < 150 && node.connections.length < 3) {
            node.connections.push(j);
          }
        }
      });
    });

    let animationId: number;
    let time = 0;

    const primaryColor = isDark ? '#00BFFF' : '#0080FF'; // Deep sky blue
    const secondaryColor = isDark ? '#6366F1' : '#4F46E5'; // Indigo
    const accentColor = isDark ? '#10B981' : '#059669'; // Emerald

    const drawServer = (x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = primaryColor + '60';
      ctx.lineWidth = 1.5;
      
      // Server rack representation
      const width = size * 1.2;
      const height = size * 0.8;
      ctx.strokeRect(x - width/2, y - height/2, width, height);
      
      // Server slots
      for (let i = 0; i < 3; i++) {
        const slotY = y - height/2 + (i + 0.5) * (height/3);
        ctx.beginPath();
        ctx.moveTo(x - width/2 + 4, slotY);
        ctx.lineTo(x + width/2 - 4, slotY);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const drawDatabase = (x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = secondaryColor + '60';
      ctx.lineWidth = 1.5;
      
      // Database cylinder
      const width = size;
      const height = size * 0.6;
      
      // Top ellipse
      ctx.beginPath();
      ctx.ellipse(x, y - height/2, width/2, height/4, 0, 0, Math.PI * 2);
      ctx.stroke();
      
      // Bottom ellipse
      ctx.beginPath();
      ctx.ellipse(x, y + height/2, width/2, height/4, 0, 0, Math.PI * 2);
      ctx.stroke();
      
      // Side lines
      ctx.beginPath();
      ctx.moveTo(x - width/2, y - height/2);
      ctx.lineTo(x - width/2, y + height/2);
      ctx.moveTo(x + width/2, y - height/2);
      ctx.lineTo(x + width/2, y + height/2);
      ctx.stroke();
      
      ctx.restore();
    };

    const drawContainer = (x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = accentColor + '60';
      ctx.lineWidth = 1.5;
      
      // Container box
      const containerSize = size * 0.8;
      ctx.strokeRect(x - containerSize/2, y - containerSize/2, containerSize, containerSize);
      
      // Docker-like layers
      for (let i = 0; i < 3; i++) {
        const layerY = y - containerSize/2 + (i + 1) * (containerSize/4);
        ctx.beginPath();
        ctx.moveTo(x - containerSize/2 + 2, layerY);
        ctx.lineTo(x + containerSize/2 - 2, layerY);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const drawPipeline = (x: number, y: number, size: number, opacity: number, time: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      
      // Pipeline flow
      const segments = 4;
      const segmentWidth = size * 0.3;
      
      for (let i = 0; i < segments; i++) {
        const segmentX = x - (segments * segmentWidth)/2 + i * segmentWidth;
        
        // Pipeline segment
        ctx.strokeStyle = primaryColor + '40';
        ctx.lineWidth = 2;
        ctx.strokeRect(segmentX, y - segmentWidth/2, segmentWidth, segmentWidth);
        
        // Data flow animation
        if (i < segments - 1) {
          const flowProgress = (time * 0.002 + i * 0.3) % 1;
          const flowX = segmentX + segmentWidth + flowProgress * segmentWidth * 0.5;
          
          ctx.beginPath();
          ctx.arc(flowX, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = accentColor + 'AA';
          ctx.fill();
        }
      }
      
      ctx.restore();
    };

    const drawMonitor = (x: number, y: number, size: number, opacity: number, time: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = secondaryColor + '60';
      ctx.lineWidth = 1.5;
      
      // Monitor screen
      const width = size * 1.2;
      const height = size * 0.8;
      ctx.strokeRect(x - width/2, y - height/2, width, height);
      
      // Monitoring graph
      ctx.strokeStyle = accentColor + '80';
      ctx.lineWidth = 1;
      ctx.beginPath();
      
      const points = 8;
      for (let i = 0; i < points; i++) {
        const pointX = x - width/2 + (i / (points - 1)) * width;
        const pointY = y + Math.sin(time * 0.01 + i * 0.5) * height * 0.2;
        
        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          ctx.lineTo(pointX, pointY);
        }
      }
      ctx.stroke();
      
      ctx.restore();
    };

    const drawLoadBalancer = (x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = primaryColor + '60';
      ctx.lineWidth = 1.5;
      
      // Central hub
      ctx.beginPath();
      ctx.arc(x, y, size * 0.3, 0, Math.PI * 2);
      ctx.stroke();
      
      // Distribution lines
      const branches = 6;
      for (let i = 0; i < branches; i++) {
        const angle = (i * Math.PI * 2) / branches;
        const endX = x + Math.cos(angle) * size;
        const endY = y + Math.sin(angle) * size;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        // End nodes
        ctx.beginPath();
        ctx.arc(endX, endY, 3, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const drawConnections = () => {
      networkNodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const connectedNode = networkNodes[connectionIndex];
          if (connectedNode) {
            ctx.save();
            ctx.globalAlpha = 0.1;
            ctx.strokeStyle = primaryColor;
            ctx.lineWidth = 1;
            
            // Data flow along connection
            const flowProgress = (time * 0.001) % 1;
            const flowX = node.x + (connectedNode.x - node.x) * flowProgress;
            const flowY = node.y + (connectedNode.y - node.y) * flowProgress;
            
            // Connection line
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.stroke();
            
            // Data packet
            ctx.beginPath();
            ctx.arc(flowX, flowY, 2, 0, Math.PI * 2);
            ctx.fillStyle = accentColor + '80';
            ctx.fill();
            
            ctx.restore();
          }
        });
      });
    };

    const drawGrid = () => {
      gridLines.forEach(line => {
        ctx.save();
        ctx.globalAlpha = line.opacity;
        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 0.5;
        
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
        
        ctx.restore();
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;

      // Draw infrastructure grid
      drawGrid();

      // Draw network connections
      drawConnections();

      // Update and draw network nodes
      networkNodes.forEach(node => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Pulse effect
        const pulse = Math.sin(time * 0.01 + node.pulsePhase) * 0.3 + 1;

        // Draw node based on type
        switch (node.type) {
          case 'server':
            drawServer(node.x, node.y, node.size * pulse, node.opacity);
            break;
          case 'database':
            drawDatabase(node.x, node.y, node.size * pulse, node.opacity);
            break;
          case 'container':
            drawContainer(node.x, node.y, node.size * pulse, node.opacity);
            break;
          case 'pipeline':
            drawPipeline(node.x, node.y, node.size * pulse, node.opacity, time);
            break;
          case 'monitor':
            drawMonitor(node.x, node.y, node.size * pulse, node.opacity, time);
            break;
          case 'load-balancer':
            drawLoadBalancer(node.x, node.y, node.size * pulse, node.opacity);
            break;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default AnimatedBackground;