import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  // Development & Programming
  Code, Code2, Terminal, FileCode, Braces, Binary,
  // Frontend & UI
  Monitor, Smartphone, Tablet, Layout, Palette, Eye, Paintbrush,
  // Backend & Server
  Server, Database, HardDrive, Cpu, Activity, Zap,
  // Cloud & DevOps
  Cloud, GitBranch, GitCommit, Workflow, Settings, Cog,
  // Network & API
  Globe, Network, Wifi, Link, Share, Layers,
  // Tools & Frameworks
  Wrench, Hammer, Package, Box, Puzzle, Component,
  // Security & Quality
  Shield, Lock, Key, CheckCircle, Bug, Search,
  // Additional Popular Icons
  Rocket, Star, Heart, ThumbsUp, Award, Target, Lightbulb, Coffee,
  Play, Pause, Download, Upload, Folder, File, Image, Video,
  Mail, Phone, MapPin, Calendar, Clock, User, Users, Home
} from 'lucide-react';

const IconShowcase: React.FC = () => {
  const [selectedIcons, setSelectedIcons] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const iconCategories = {
    'Development & Programming': [
      { name: 'Code', icon: Code },
      { name: 'Code2', icon: Code2 },
      { name: 'Terminal', icon: Terminal },
      { name: 'FileCode', icon: FileCode },
      { name: 'Braces', icon: Braces },
      { name: 'Binary', icon: Binary },
    ],
    'Frontend & UI': [
      { name: 'Monitor', icon: Monitor },
      { name: 'Smartphone', icon: Smartphone },
      { name: 'Tablet', icon: Tablet },
      { name: 'Layout', icon: Layout },
      { name: 'Palette', icon: Palette },
      { name: 'Eye', icon: Eye },
      { name: 'Paintbrush', icon: Paintbrush },
    ],
    'Backend & Server': [
      { name: 'Server', icon: Server },
      { name: 'Database', icon: Database },
      { name: 'HardDrive', icon: HardDrive },
      { name: 'Cpu', icon: Cpu },
      { name: 'Activity', icon: Activity },
      { name: 'Zap', icon: Zap },
    ],
    'Cloud & DevOps': [
      { name: 'Cloud', icon: Cloud },
      { name: 'Upload', icon: Upload },
      { name: 'Download', icon: Download },
      { name: 'GitBranch', icon: GitBranch },
      { name: 'GitCommit', icon: GitCommit },
      { name: 'Workflow', icon: Workflow },
      { name: 'Settings', icon: Settings },
      { name: 'Cog', icon: Cog },
    ],
    'Network & API': [
      { name: 'Globe', icon: Globe },
      { name: 'Network', icon: Network },
      { name: 'Wifi', icon: Wifi },
      { name: 'Link', icon: Link },
      { name: 'Share', icon: Share },
      { name: 'Layers', icon: Layers },
    ],
    'Tools & Frameworks': [
      { name: 'Wrench', icon: Wrench },
      { name: 'Hammer', icon: Hammer },
      { name: 'Package', icon: Package },
      { name: 'Box', icon: Box },
      { name: 'Puzzle', icon: Puzzle },
      { name: 'Component', icon: Component },
    ],
    'Security & Quality': [
      { name: 'Shield', icon: Shield },
      { name: 'Lock', icon: Lock },
      { name: 'Key', icon: Key },
      { name: 'CheckCircle', icon: CheckCircle },
      { name: 'Bug', icon: Bug },
      { name: 'Search', icon: Search },
    ],
    'Popular Icons': [
      { name: 'Rocket', icon: Rocket },
      { name: 'Star', icon: Star },
      { name: 'Heart', icon: Heart },
      { name: 'ThumbsUp', icon: ThumbsUp },
      { name: 'Award', icon: Award },
      { name: 'Target', icon: Target },
      { name: 'Lightbulb', icon: Lightbulb },
      { name: 'Coffee', icon: Coffee },
    ],
    'Media & Files': [
      { name: 'Play', icon: Play },
      { name: 'Pause', icon: Pause },
      { name: 'Download', icon: Download },
      { name: 'Upload', icon: Upload },
      { name: 'Folder', icon: Folder },
      { name: 'File', icon: File },
      { name: 'Image', icon: Image },
      { name: 'Video', icon: Video },
    ],
    'Communication': [
      { name: 'Mail', icon: Mail },
      { name: 'Phone', icon: Phone },
      { name: 'MapPin', icon: MapPin },
      { name: 'Calendar', icon: Calendar },
      { name: 'Clock', icon: Clock },
      { name: 'User', icon: User },
      { name: 'Users', icon: Users },
      { name: 'Home', icon: Home },
    ]
  };

  const toggleIconSelection = (iconName: string) => {
    setSelectedIcons(prev => 
      prev.includes(iconName) 
        ? prev.filter(name => name !== iconName)
        : [...prev, iconName]
    );
  };

  const filteredCategories = Object.entries(iconCategories).reduce((acc, [category, icons]) => {
    const filteredIcons = icons.filter(icon => 
      icon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredIcons.length > 0) {
      acc[category as keyof typeof iconCategories] = filteredIcons;
    }
    return acc;
  }, {} as Partial<typeof iconCategories>);

  const copySelectedIcons = () => {
    const importStatement = `import { ${selectedIcons.join(', ')} } from 'lucide-react';`;
    navigator.clipboard.writeText(importStatement);
    alert('Import statement copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Icon Showcase
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Click on icons to select them for your skills section
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto mb-8">
              <input
                type="text"
                placeholder="Search icons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Selected Icons Display */}
            {selectedIcons.length > 0 && (
              <motion.div 
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-200/50 dark:border-gray-700/50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Selected Icons ({selectedIcons.length})
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedIcons.map(iconName => (
                    <span 
                      key={iconName}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {iconName}
                    </span>
                  ))}
                </div>
                <button
                  onClick={copySelectedIcons}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Copy Import Statement
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Icon Categories */}
          <div className="space-y-12">
            {Object.entries(filteredCategories).map(([category, icons], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {category}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                  {icons.map(({ name, icon: IconComponent }) => (
                    <motion.div
                      key={name}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedIcons.includes(name)
                          ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-lg'
                          : 'border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 hover:border-purple-300 hover:shadow-md'
                      }`}
                      onClick={() => toggleIconSelection(name)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <IconComponent 
                          className={`w-8 h-8 ${
                            selectedIcons.includes(name)
                              ? 'text-purple-600'
                              : 'text-gray-600 dark:text-gray-400'
                          }`}
                        />
                        <span className={`text-xs font-medium text-center ${
                          selectedIcons.includes(name)
                            ? 'text-purple-800 dark:text-purple-300'
                            : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Instructions */}
          <motion.div 
            className="mt-16 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              How to Use
            </h3>
            <div className="text-gray-600 dark:text-gray-300 space-y-2">
              <p>1. Click on icons to select/deselect them</p>
              <p>2. Use the search bar to find specific icons</p>
              <p>3. Copy the import statement when you're done</p>
              <p>4. Let me know which icons you've selected and I'll update your skills section</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IconShowcase;
