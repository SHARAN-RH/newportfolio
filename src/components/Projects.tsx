import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Database, Cloud, GitBranch, Zap, Shield, ArrowUpRight, Clock, Activity, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const { ref, controls } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState(0); // Selected project index

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      kubernetes: <Cloud className="w-5 h-5" />,
      docker: <Code className="w-5 h-5" />,
      aws: <Cloud className="w-5 h-5" />,
      azure: <Cloud className="w-5 h-5" />,
      terraform: <Database className="w-5 h-5" />,
      ansible: <GitBranch className="w-5 h-5" />,
      jenkins: <Zap className="w-5 h-5" />,
      prometheus: <Shield className="w-5 h-5" />,
      grafana: <Shield className="w-5 h-5" />,
      python: <Code className="w-5 h-5" />,
      github: <Github className="w-5 h-5" />,
      elk: <Database className="w-5 h-5" />,
      elastic: <Database className="w-5 h-5" />
    };
    return iconMap[tech.toLowerCase()] || <Code className="w-5 h-5" />;
  };


  return (
    <section 
      id="projects" 
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-black dark:to-gray-900"
    >
      {/* Magazine-style decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="w-full px-6 py-16 relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Magazine-style Header */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full">
              <div className="flex items-center gap-4 w-full mb-4">
                <motion.div 
                  className="h-px bg-gradient-to-r from-purple-600 to-blue-600 flex-1 max-w-20"
                  initial={{ width: 0 }}
                  whileInView={{ width: "5rem" }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                />
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold leading-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="block text-gray-900 dark:text-white">
                    FEATURED PROJECTS
                  </span>
                </motion.h2>
                <motion.div 
                  className="h-px bg-gradient-to-r from-blue-600 to-purple-600 flex-1"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                />
              </div>

              
              <motion.p 
                className="text-base text-gray-600 dark:text-gray-300 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                A curated collection of innovative solutions and technical achievements that showcase modern development practices and cutting-edge technologies.
              </motion.p>
            </div>
          </motion.div>

          {/* Magazine-style split layout */}
          <div className="grid grid-cols-12 gap-8">
            {/* Project List - Left Side */}
            <motion.div
              className="col-span-12 lg:col-span-5"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 h-[600px] flex flex-col">
                {/* List Header */}
                <motion.div 
                  className="mb-6"
                  key={`header-${selectedProject}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Project Collection
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">
                    Select a project to view details {projects.length > 3 && `• Scroll for more (${projects.length} total)`}
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-4"></div>
                </motion.div>

                {/* Project List - Scrollable Container */}
                <div className="space-y-3 flex-1 overflow-y-auto pr-2" style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#a855f7 #f3f4f6'
                }}>
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                        selectedProject === index
                          ? 'bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-300 dark:border-purple-600 shadow-lg'
                          : 'bg-gray-50 dark:bg-gray-700/50 border-transparent hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-md'
                      }`}
                      onClick={() => setSelectedProject(index)}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Project Number */}
                      <motion.div 
                        className={`absolute top-3 right-3 text-xl font-black select-none transition-colors ${
                          selectedProject === index
                            ? 'text-purple-200 dark:text-purple-800'
                            : 'text-gray-200 dark:text-gray-600'
                        }`}
                        animate={{ 
                          scale: selectedProject === index ? 1.1 : 1,
                          rotate: selectedProject === index ? 5 : 0
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.div>

                      <div className="flex items-start gap-4">
                        {/* Project Icon */}
                        <motion.div 
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            selectedProject === index
                              ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg'
                              : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30'
                          }`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          {getTechIcon(project.technologies[0])}
                        </motion.div>

                        {/* Project Info */}
                        <div className="flex-1 min-w-0">
                          <motion.h4 
                            className={`text-sm font-bold mb-2 transition-colors ${
                              selectedProject === index
                                ? 'text-purple-700 dark:text-purple-300'
                                : 'text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400'
                            }`}
                          >
                            {project.title}
                          </motion.h4>

                          <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                            {project.description}
                          </p>

                          {/* Tech Preview */}
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                                  selectedProject === index
                                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                                    : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded text-xs">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Project Detail View - Right Side */}
            <motion.div
              className="col-span-12 lg:col-span-7"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.article
                key={selectedProject}
                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700 h-[600px] flex flex-col"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >

                {/* Hero image area */}
                <motion.div 
                  className="relative h-32 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="text-4xl text-white/80"
                    initial={{ scale: 0.8, rotate: -5 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {getTechIcon(projects[selectedProject]?.technologies[0] || 'code')}
                  </motion.div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>

                {/* Project Content */}
                <div className="p-6 space-y-4 flex-1 overflow-y-auto">
                  <div className="flex items-start justify-between mb-4">
                    <motion.h3 
                      className="text-lg font-bold text-gray-900 dark:text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {projects[selectedProject]?.title}
                    </motion.h3>
                    
                    <motion.div 
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        projects[selectedProject]?.status === 'Production' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                          : projects[selectedProject]?.status === 'Active'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                          : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {projects[selectedProject]?.status}
                    </motion.div>
                  </div>

                  <motion.p 
                    className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {projects[selectedProject]?.description}
                  </motion.p>

                  {/* Project Meta Info */}
                  <motion.div 
                    className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 py-2 border-y border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{projects[selectedProject]?.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Activity className="w-3 h-3" />
                      <span>Active Development</span>
                    </div>
                  </motion.div>

                  {/* Key Achievements */}
                  <div className="grid grid-cols-1 gap-4">
                    {/* Key Highlights */}
                    <motion.div
                      key={`highlights-${selectedProject}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="space-y-2"
                    >
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Key Achievements
                      </h4>
                      <div className="space-y-1 ml-4">
                        {projects[selectedProject]?.highlights?.map((highlight, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start gap-3 text-xs text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 + index * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                  </div>

                  {/* Technologies */}
                  <motion.div
                    key={`tech-${selectedProject}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="space-y-2"
                  >
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject]?.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.6 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="mr-2">{getTechIcon(tech)}</span>
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    key={`actions-${selectedProject}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                    className="flex gap-2 pt-3 border-t border-gray-200 dark:border-gray-700"
                  >  
                    <motion.a
                      href={projects[selectedProject]?.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                    
                  </motion.div>
                </div>
              </motion.article>
            </motion.div>
          </div>

          {/* Magazine-style footer */}
          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-4 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>Explore All Projects</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;