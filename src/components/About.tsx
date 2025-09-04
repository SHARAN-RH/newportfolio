import { motion } from 'framer-motion';
import { User, Code, Server, Cloud, Database, GitBranch, Shield, Award, Target, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
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

  const skills = [
    { icon: Code, name: 'Development', description: 'Full-stack development with modern frameworks', color: 'from-blue-500 to-cyan-500' },
    { icon: Server, name: 'DevOps', description: 'Infrastructure automation and deployment', color: 'from-green-500 to-teal-500' },
    { icon: Cloud, name: 'Cloud', description: 'AWS, Azure, and cloud-native solutions', color: 'from-purple-500 to-pink-500' },
    { icon: Database, name: 'Databases', description: 'SQL, NoSQL, and data management', color: 'from-orange-500 to-red-500' },
    { icon: GitBranch, name: 'Version Control', description: 'Git workflows and collaboration', color: 'from-indigo-500 to-purple-500' },
    { icon: Shield, name: 'Security', description: 'Application and infrastructure security', color: 'from-red-500 to-pink-500' }
  ];

  const highlights = [
    { icon: Award, title: 'Certified Professional', description: 'Multiple cloud and DevOps certifications' },
    { icon: Target, title: 'Goal-Oriented', description: 'Focused on delivering scalable solutions' },
    { icon: Lightbulb, title: 'Innovation-Driven', description: 'Always exploring cutting-edge technologies' }
  ];

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
            {/* Main headline with inline subtitle */}
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
                    ABOUT ME
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
                Passionate about building scalable infrastructure and automating intelligent workflows
              </motion.p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 items-start mb-8">
            {/* Left Column - Profile */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div 
                className="glass-effect rounded-3xl p-6 hover:shadow-2xl transition-all duration-300"
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
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            {[
              { number: '1', label: 'Years Experience', color: 'from-blue-600 to-cyan-600' },
              { number: '10+', label: 'Projects Completed', color: 'from-purple-600 to-pink-600' },
              { number: '8+', label: 'Technologies', color: 'from-green-600 to-teal-600' }
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

export default About;