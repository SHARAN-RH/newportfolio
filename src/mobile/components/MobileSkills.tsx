import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cloud, Database, Settings, Zap } from 'lucide-react';
import { skills } from '../../data/portfolioData';

const MobileSkills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All', icon: Settings },
    { id: 'devops', label: 'DevOps', icon: Server },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'programming', label: 'Code', icon: Code },
    { id: 'database', label: 'Data', icon: Database },
  ];

  const getSkillCategory = (skillName: string) => {
    const devopsSkills = ['Docker', 'Kubernetes', 'Ansible', 'Terraform', 'Jenkins', 'ArgoCD'];
    const cloudSkills = ['AWS', 'Prometheus', 'Grafana'];
    const programmingSkills = ['Python', 'JavaScript', 'Go', 'React', 'Flask', 'HTML', 'CSS'];
    const databaseSkills = ['SQL', 'Machine Learning'];

    if (devopsSkills.includes(skillName)) return 'devops';
    if (cloudSkills.includes(skillName)) return 'cloud';
    if (programmingSkills.includes(skillName)) return 'programming';
    if (databaseSkills.includes(skillName)) return 'database';
    return 'devops';
  };

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => getSkillCategory(skill.name) === selectedCategory);

  const getSkillColor = (proficiency: number) => {
    if (proficiency >= 80) return 'from-green-500 to-emerald-500';
    if (proficiency >= 70) return 'from-blue-500 to-cyan-500';
    if (proficiency >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  return (
    <section id="skills" className="py-16 px-4">
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
            <Zap className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-1 px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-3 h-3" />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 gap-4"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              layout
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
                      {skill.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {skill.projects} projects
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-900 dark:text-white">
                    {skill.proficiency}%
                  </div>
                  {skill.certification && (
                    <div className="text-xs text-green-600 dark:text-green-400">
                      Certified
                    </div>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                <motion.div
                  className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.proficiency)}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>

              {/* Certification Badge */}
              {skill.certification && (
                <div className="mt-2">
                  <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                    {skill.certification}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Skill Overview
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                {skills.length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Total Skills</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {Math.round(skills.reduce((acc, skill) => acc + skill.proficiency, 0) / skills.length)}%
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Avg Proficiency</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileSkills;
