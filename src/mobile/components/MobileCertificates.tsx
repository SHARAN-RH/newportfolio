import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Shield } from 'lucide-react';
import { certifications } from '../../data/portfolioData';

const MobileCertificates: React.FC = () => {
  return (
    <section id="certificates" className="py-16 px-4">
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
            <Award className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certificates</h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Certificates Grid */}
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Certificate Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl">
                  <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 text-xs font-medium mb-2">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credential ID */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Credential ID</p>
                <p className="text-xs font-mono text-gray-700 dark:text-gray-300">
                  {cert.credentialId}
                </p>
              </div>

              {/* Verify Button */}
              <motion.a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-xs font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-3 h-3" />
                Verify Certificate
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Certificates Summary */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Certification Overview
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                {certifications.length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Active Certifications</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                100%
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Verification Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Achievement Badge */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs font-bold shadow-lg">
            <Award className="w-4 h-4" />
            Certified Professional
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileCertificates;
