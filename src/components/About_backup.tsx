import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Code, Award, Briefcase, 
  Calendar, MapPin, ExternalLink, CheckCircle 
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, controls } = useScrollAnimation();
  const [activeSection, setActiveSection] = useState('overview');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.15 }
    }
  };

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Technical Skills', icon: Code },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];

  const skills = [
    { name: 'Docker & Kubernetes', level: 90, category: 'DevOps' },
    { name: 'AWS Cloud Services', level: 85, category: 'Cloud' },
    { name: 'CI/CD Pipelines', level: 88, category: 'DevOps' },
    { name: 'Python & Bash', level: 82, category: 'Programming' },
    { name: 'Terraform', level: 80, category: 'IaC' },
    { name: 'Monitoring & Logging', level: 85, category: 'Operations' }
  ];

  const highlights = [
    { icon: Code, text: 'Automated deployment processes reducing release time by 60%' },
    { icon: Award, text: 'AWS Certified Solutions Architect Associate' },
    { icon: CheckCircle, text: 'Led infrastructure migration to cloud-native architecture' }
  ];

  const experiences = [
    {
      title: 'DevOps Engineer Intern',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      location: 'Remote',
      achievements: [
        'Implemented CI/CD pipelines using Jenkins and GitLab',
        'Containerized applications using Docker and orchestrated with Kubernetes',
        'Automated infrastructure provisioning with Terraform'
      ]
    }
  ];

  const certificates = [
    {
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SAA-2023-001',
      skills: ['AWS', 'Cloud Architecture', 'Security', 'Scalability']
    }
  ];

  const renderOverviewContent = () => (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.div className="glass-effect rounded-3xl p-6 hover:shadow-2xl transition-all duration-200">
            <div className="flex items-center mb-4">
              <motion.div className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600">
                <User className="text-white" size={24} />
              </motion.div>
              <h3 className="text-xl font-bold ml-4 text-gray-900 dark:text-white">Professional Journey</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                As an aspiring DevOps Engineer with a Master's in Computer Applications, I'm passionate about 
                building scalable infrastructure and automating intelligent workflows.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Bangalore, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Available Now</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="glass-effect rounded-3xl p-6">
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Key Highlights</h3>
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-start space-x-3 p-3 rounded-xl">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                    <highlight.icon className="text-white" size={16} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{highlight.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderExperienceContent = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Professional Experience</h3>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={itemVariants} className="glass-effect rounded-3xl p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-sm text-gray-500">{exp.period}</p>
                <p className="text-sm text-gray-500">{exp.location}</p>
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Achievements:</h5>
              {exp.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">{achievement}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderSkillsContent = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Technical Skills</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div key={index} variants={itemVariants} className="glass-effect rounded-2xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            <span className="text-xs text-gray-500 mt-1">{skill.category}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderCertificationsContent = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Certifications</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div key={index} variants={itemVariants} className="glass-effect rounded-3xl p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600">
                <Award className="text-white" size={24} />
              </div>
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{cert.title}</h4>
            <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">{cert.issuer}</p>
            <p className="text-gray-500 text-xs mb-3">{cert.date}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {cert.skills.map((skill, idx) => (
                <span key={idx} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">ID: {cert.credentialId}</span>
              <ExternalLink size={14} className="text-gray-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'experience':
        return renderExperienceContent();
      case 'skills':
        return renderSkillsContent();
      case 'certifications':
        return renderCertificationsContent();
      default:
        return renderOverviewContent();
    }
  };

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="w-full px-6 py-16 relative z-10">
        <motion.div className="max-w-[100rem] mx-auto" variants={containerVariants} initial="hidden" animate={controls}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="gradient-text">About Me</span>
            </h2>
            <motion.div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4" />
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate about building scalable infrastructure and automating intelligent workflows
            </p>
          </motion.div>
          <div className="flex gap-8">
            <motion.div variants={itemVariants} className="w-1/6 flex-shrink-0">
              <div className="sticky top-24 space-y-2">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center space-x-3 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'glass-effect text-gray-700 dark:text-gray-300 hover:shadow-md'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="font-medium text-sm">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex-1" key={activeSection} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
              {renderContent()}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
  ];

  const renderOverviewContent = () => (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {/* Left Column - Profile */}
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.div 
            className="glass-effect rounded-3xl p-6 hover:shadow-2xl transition-all duration-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-4">
              <motion.div 
                className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <User className="text-white" size={24} />
              </motion.div>
              <h3 className="text-xl font-bold ml-4 text-gray-900 dark:text-white">
                Professional Journey
              </h3>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                As an aspiring DevOps Engineer with a Master's in Computer Applications, I'm passionate about 
                building scalable infrastructure and automating intelligent workflows. My journey combines 
                technical expertise with innovative problem-solving.
              </p>

              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                I specialize in cloud technologies, containerization, and CI/CD pipelines, always seeking 
                to bridge the gap between development and operations through efficient automation and 
                monitoring solutions.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="space-y-3">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect rounded-2xl p-4 hover:shadow-lg transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                    <highlight.icon className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-white">{highlight.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Skills Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect rounded-2xl p-3 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className={`p-3 rounded-2xl bg-gradient-to-r ${skill.color} mb-3 w-fit`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <skill.icon className="text-white" size={20} />
              </motion.div>
              
              <h4 className="font-bold text-sm mb-1 text-gray-900 dark:text-white group-hover:gradient-text transition-all duration-300">
                {skill.name}
              </h4>
              
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-tight">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {[
          { number: '2+', label: 'Years Experience', color: 'from-blue-600 to-cyan-600' },
          { number: '25+', label: 'Projects Completed', color: 'from-purple-600 to-pink-600' },
          { number: '15+', label: 'Technologies', color: 'from-green-600 to-teal-600' },
          { number: '100%', label: 'Client Satisfaction', color: 'from-orange-600 to-red-600' }
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
    </div>
  );

  const renderExperienceContent = () => (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="glass-effect rounded-3xl p-6 hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {exp.title}
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold">
                {exp.company}
              </p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              {exp.period}
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {exp.description}
          </p>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
            <ul className="space-y-1">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderSkillsContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="glass-effect rounded-2xl p-4 hover:shadow-xl transition-all duration-300 group cursor-pointer"
          whileHover={{ 
            scale: 1.05,
            rotateY: 5,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} mb-4 w-fit`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <skill.icon className="text-white" size={24} />
          </motion.div>
          
          <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:gradient-text transition-all duration-300">
            {skill.name}
          </h4>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {skill.description}
          </p>
        </motion.div>
      ))}
    </div>
  );

  const renderCertificationsContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certificates.map((cert) => (
        <motion.div
          key={cert.id}
          variants={itemVariants}
          className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600">
                <Award className="text-white" size={20} />
              </div>
              <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Verified
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="w-3 h-3" />
              <span>{cert.date}</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {cert.title}
          </h3>
          
          <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">
            {cert.issuer}
          </p>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {cert.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {cert.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                ID: {cert.credentialId}
              </span>
              <motion.button
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 text-sm font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                Verify
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'experience':
        return renderExperienceContent();
      case 'skills':
        return renderSkillsContent();
      case 'certifications':
        return renderCertificationsContent();
      default:
        return renderOverviewContent();
    }
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black"
    >
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
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
          className="max-w-[100rem] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="gradient-text">About Me</span>
            </h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate about building scalable infrastructure and automating intelligent workflows
            </p>
          </motion.div>

          {/* 15-85 Layout */}
          <div className="flex gap-8">
            {/* 15% - Sidebar Navigation */}
            <motion.div 
              variants={itemVariants}
              className="w-1/6 flex-shrink-0"
            >
              <div className="sticky top-24 space-y-2">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center space-x-3 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'glass-effect text-gray-700 dark:text-gray-300 hover:shadow-md hover:scale-105'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon size={20} />
                    <span className="font-medium text-sm">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* 85% - Content Area */}
            <motion.div 
              variants={itemVariants}
              className="flex-1"
              key={activeSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
              </h3>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                As an aspiring DevOps Engineer with a Master's in Computer Applications, I'm passionate about 
                building scalable infrastructure and automating intelligent workflows. My journey combines 
                technical expertise with innovative problem-solving.
              </p>

              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                I specialize in cloud technologies, containerization, and CI/CD pipelines, always seeking 
                to bridge the gap between development and operations through efficient automation and 
                monitoring solutions.
              </p>
            </div>
          </motion.div>
          </motion.div>

          {/* Highlights */}
          <div className="space-y-3">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect rounded-2xl p-4 hover:shadow-lg transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                    <highlight.icon className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-white">{highlight.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Skills Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect rounded-2xl p-3 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className={`p-3 rounded-2xl bg-gradient-to-r ${skill.color} mb-3 w-fit`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <skill.icon className="text-white" size={20} />
              </motion.div>
              
              <h4 className="font-bold text-sm mb-1 text-gray-900 dark:text-white group-hover:gradient-text transition-all duration-300">
                {skill.name}
              </h4>
              
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-tight">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {[
          { number: '2+', label: 'Years Experience', color: 'from-blue-600 to-cyan-600' },
          { number: '25+', label: 'Projects Completed', color: 'from-purple-600 to-pink-600' },
          { number: '15+', label: 'Technologies', color: 'from-green-600 to-teal-600' },
          { number: '100%', label: 'Client Satisfaction', color: 'from-orange-600 to-red-600' }
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
    </div>
  );

  const renderExperienceContent = () => (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="glass-effect rounded-3xl p-6 hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {exp.title}
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold">
                {exp.company}
              </p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              {exp.period}
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {exp.description}
          </p>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
            <ul className="space-y-1">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderSkillsContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="glass-effect rounded-2xl p-4 hover:shadow-xl transition-all duration-300 group cursor-pointer"
          whileHover={{ 
            scale: 1.05,
            rotateY: 5,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} mb-4 w-fit`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <skill.icon className="text-white" size={24} />
          </motion.div>
          
          <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:gradient-text transition-all duration-300">
            {skill.name}
          </h4>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {skill.description}
          </p>
        </motion.div>
      ))}
    </div>
  );

  const renderCertificationsContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certificates.map((cert) => (
        <motion.div
          key={cert.id}
          variants={itemVariants}
          className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600">
                <Award className="text-white" size={20} />
              </div>
              <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Verified
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="w-3 h-3" />
              <span>{cert.date}</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {cert.title}
          </h3>
          
          <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">
            {cert.issuer}
          </p>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {cert.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {cert.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                ID: {cert.credentialId}
              </span>
              <motion.button
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 text-sm font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                Verify
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'experience':
        return renderExperienceContent();
      case 'skills':
        return renderSkillsContent();
      case 'certifications':
        return renderCertificationsContent();
      default:
        return renderOverviewContent();
    }
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black"
    >
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
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
          className="max-w-[100rem] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="gradient-text">About Me</span>
            </h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate about building scalable infrastructure and automating intelligent workflows
            </p>
          </motion.div>

          {/* 15-85 Layout */}
          <div className="flex gap-8">
            {/* 15% - Sidebar Navigation */}
            <motion.div 
              variants={itemVariants}
              className="w-1/6 flex-shrink-0"
            >
              <div className="sticky top-24 space-y-2">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center space-x-3 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'glass-effect text-gray-700 dark:text-gray-300 hover:shadow-md hover:scale-105'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon size={20} />
                    <span className="font-medium text-sm">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* 85% - Content Area */}
            <motion.div 
              variants={itemVariants}
              className="flex-1"
              key={activeSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;