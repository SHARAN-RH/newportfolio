import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, CheckCircle, Globe, Download, Heart, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: personalInfo.github },
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin },
    { icon: Globe, label: 'Medium', href: 'https://medium.com/@sharan-rh' },
    { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}` },
    { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}` }
  ];


  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-blue-950 border-t border-slate-200 dark:border-slate-700" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Header */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
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
                CONTACTS
              </span>
            </motion.h2>
            <motion.div 
              className="h-px bg-gradient-to-r from-blue-600 to-purple-600 flex-1"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </div>
        </motion.div>

        {/* Main Content - No Background Container */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="p-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left Side - Main CTA */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Let's Collaborate
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                  Ready to discuss your next project or explore opportunities together? 
                  I specialize in DevOps, automation, and scalable infrastructure solutions.
                </p>
                <div className="mb-6 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                  <p className="text-xs text-green-700 dark:text-green-300 flex items-center font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Available for freelance projects and full-time opportunities
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={personalInfo.resumeUrl}
                    download
                    className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-sm font-semibold">Download Resume</div>
                    </div>
                  </motion.a>
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center justify-center gap-3 bg-transparent border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-sm font-semibold">Start Conversation</div>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Right Side - Contact Info */}
              <div className="lg:col-span-3 space-y-8">
                {/* Contact Information */}
                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Get In Touch
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  </div>
                  
                  {/* Contact Information with Text */}
                  <div className="mb-8 space-y-4">
                    {/* Email - Full Width */}
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">Email</p>
                        <motion.a
                          href={`mailto:${personalInfo.email}`}
                          className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          {personalInfo.email}
                        </motion.a>
                      </div>
                    </div>
                    
                    {/* Phone and Location - Side by Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        <div>
                          <p className="text-sm font-bold text-gray-900 dark:text-white">Phone</p>
                          <motion.a
                            href={`tel:${personalInfo.phone}`}
                            className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                          >
                            {personalInfo.phone}
                          </motion.a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        <div>
                          <p className="text-sm font-bold text-gray-900 dark:text-white">Location</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Bengaluru, India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Links */}
                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Professional Links
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  </div>
                  
                  {/* Professional Links Icons */}
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.label}
                        className="p-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <link.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {personalInfo.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;