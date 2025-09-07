import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, GraduationCap } from 'lucide-react';
import { personalInfo, education } from '../../data/portfolioData';

const MobileAbout: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-sm mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <User className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About Me</h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* About Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Description */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              I'm a passionate DevOps Engineer with a Master's in Computer Applications, 
              specializing in building scalable infrastructure and automating complex workflows. 
              My journey in technology is driven by curiosity and a commitment to continuous learning.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 gap-4">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <MapPin className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Belagavi, Karnataka</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">2+ Years</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-600" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                  {edu.degree}
                </h4>
                <p className="text-xs text-purple-600 dark:text-purple-400 mb-1">
                  {edu.institution}
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>{edu.location}</span>
                  <span>{edu.year}</span>
                </div>
                <div className="mt-2">
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                    {edu.cgpa || edu.gpa}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Preview */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Core Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {['DevOps', 'Docker', 'Kubernetes', 'AWS', 'Python', 'Jenkins'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium shadow-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAbout;
