import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certificates: React.FC = () => {

  const certificates = [
    {
      id: 1,
      title: "Terraform Associate Certification",
      issuer: "KodeKloud",
      date: "2025",
      credentialId: "TF-ASSOC-2024-001",
      image: "/Terraform cert.png",
      skills: ["Terraform", "Infrastructure as Code", "DevOps"],
      verifyUrl: "/Terraform.pdf",
      description: "Advanced certification in Terraform for infrastructure automation and cloud resource management.",
      position: "1st place"
    },
    {
      id: 2,
      title: "Mastering Git & GitHub from Basic to Advanced",
      issuer: "Udemy",
      date: "2025",
      credentialId: "GIT-ADV-2024-002",
      image: "/Master Git.png",
      skills: ["Git", "GitHub", "Version Control"],
      verifyUrl: "/Mastering Git.pdf",
      description: "Comprehensive course covering Git workflows, branching strategies, and collaborative development.",
      position: "2nd place"
    },
    {
      id: 3,
      title: "Software Programmer - Python",
      issuer: "NASSCOM",
      date: "2024",
      credentialId: "PY-PROG-2024-003",
      image: "/Python.png",
      skills: ["Python", "Programming", "Software Development"],
      verifyUrl: "/Python.pdf",
      description: "Professional certification in Python programming fundamentals and advanced concepts.",
      position: "3rd place"
    },
    {
      id: 4,
      title: "AI Solutions on Cisco Infrastructure Essentials (DCAIE)",
      issuer: "Cisco",
      date: "2025",
      credentialId: "DCAIE-2024-004",
      image: "/Cisco DCAIE.png",
      skills: ["AI", "Cisco Infrastructure", "Data Center"],
      verifyUrl: "/Sharan_H_Cisco_DCAIE_Certificate-1.pdf",
      description: "Certification in AI solutions deployment on Cisco data center infrastructure.",
      position: "4th place"
    }
  ];



  return (
    <section 
      id="certificates" 
      className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div 
            className="particles-container absolute inset-0" 
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(96, 76, 253, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(253, 164, 76, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(15, 187, 180, 0.1) 0%, transparent 50%)
              `
            }}
          />
        </div>
      </div>

      <div className="w-full px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
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
                    CERTIFICATIONS & ACHIEVEMENTS
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
                Professional certifications and achievements in cloud technologies and development
              </motion.p>
            </div>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="group relative"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Certificate Image */}
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 flex items-center justify-center">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const fallback = document.createElement('div');
                            fallback.className = 'w-12 h-12 text-purple-600 opacity-50 flex items-center justify-center';
                            fallback.innerHTML = '<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L3.09 8.26L12 22L20.91 8.26L12 2Z"/></svg>';
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                    <div className="absolute top-2 right-2">
                      <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Verified
                      </div>
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center justify-between gap-2 text-gray-600 dark:text-gray-300 mb-2">
                        <span className="text-sm font-semibold">{cert.issuer}</span>
                        <div className="flex items-center gap-1 text-xs">
                          <Calendar className="w-3 h-3" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Verify Button */}
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                      <motion.a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 text-sm font-semibold transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Verify Certificate
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Certificates;
