import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experience } from '../data/portfolioData';

const Experience: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="experience" 
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black"
    >
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-2xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
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
          {/* Section Header */}
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
                    EXPERIENCE
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
                My professional journey in DevOps and software development
              </motion.p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-6 items-start mb-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                
                {experience.map((job, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="relative flex items-start mb-8"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Timeline Dot */}
                    <motion.div 
                      className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white dark:border-gray-900 z-10"
                      whileHover={{ scale: 1.2 }}
                    />
                    
                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <motion.div 
                        className="glass-effect rounded-3xl p-6 hover:shadow-2xl transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {/* Job Header */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {job.title}
                          </h3>
                          
                          <div className="flex flex-wrap items-center gap-4 mb-3">
                            <div className="text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {job.company}
                            </div>
                            
                            <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            
                            <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
                              <Calendar className="w-4 h-4" />
                              <span>{job.period}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Achievements */}
                        <div className="space-y-2">
                          {job.achievements.map((achievement, achievementIndex) => (
                            <motion.div 
                              key={achievementIndex} 
                              className="flex items-start space-x-3"
                              whileHover={{ x: 5 }}
                            >
                              <div className="p-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mt-1">
                                <ChevronRight className="w-3 h-3 text-white flex-shrink-0" />
                              </div>
                              <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            {[
              { number: '2+', label: 'Years Experience', color: 'from-blue-600 to-cyan-600' },
              { number: '2', label: 'Companies', color: 'from-purple-600 to-pink-600' },
              { number: '3', label: 'Projects Delivered', color: 'from-green-600 to-teal-600' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center glass-effect rounded-2xl p-3 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.8 }}
              >
                <motion.div 
                  className="text-2xl md:text-3xl font-bold mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 1, type: "spring", stiffness: 200 }}
                >
                  <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </span>
                </motion.div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;