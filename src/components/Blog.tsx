import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Clock, ArrowRight, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Autodeploying a Flask Microservice with Jenkins & Docker: A Step-by-Step Guide with Real Code",
      excerpt: "Complete guide to automating Flask microservice deployment using Jenkins pipelines and Docker containerization with practical examples.",
      date: "2024-08-15",
      readTime: "8 min read",
      category: "DevOps",
      tags: ["Flask", "Jenkins", "Docker"],
      image: "/api/placeholder/400/250",
      url: "https://medium.com/@sharan-rh/autodeploying-a-flask-microservice-with-jenkins-docker-a-step-by-step-guide-with-real-code-0b484b3d4bcd",
      featured: true
    },
    {
      id: 2,
      title: "From Monolith to Microservices: Building & Deploying Flask-Based Microservices with Docker",
      excerpt: "Learn how to break down monolithic applications into microservices architecture using Flask and Docker containerization.",
      date: "2024-08-10",
      readTime: "10 min read",
      category: "Architecture",
      tags: ["Flask", "Microservices", "Docker"],
      image: "/api/placeholder/400/250",
      url: "https://medium.com/@sharan-rh/from-monolith-to-microservices-building-deploying-flask-based-microservices-with-docker-cda112b9e520",
      featured: false
    },
    {
      id: 3,
      title: "From Zero to Full CI/CD Pipeline: Jenkins, Ansible, Docker & Kubernetes with Minikube",
      excerpt: "Complete walkthrough of building a production-ready CI/CD pipeline using Jenkins, Ansible, Docker, and Kubernetes on Minikube.",
      date: "2024-08-05",
      readTime: "12 min read",
      category: "DevOps",
      tags: ["Jenkins", "Ansible", "Kubernetes"],
      image: "/api/placeholder/400/250",
      url: "https://medium.com/@sharan-rh/from-zero-to-full-ci-cd-pipeline-jenkins-ansible-docker-kubernetes-minikube-52c032fc3131",
      featured: false
    },
    {
      id: 4,
      title: "Automating the Future: Build an Ansible Cluster with Docker and Kubernetes Step-by-Step",
      excerpt: "Master infrastructure automation by building an Ansible cluster integrated with Docker and Kubernetes for scalable deployments.",
      date: "2024-07-30",
      readTime: "9 min read",
      category: "Automation",
      tags: ["Ansible", "Docker", "Kubernetes"],
      image: "/api/placeholder/400/250",
      url: "https://medium.com/@sharan-rh/automating-the-future-build-an-ansible-cluster-with-docker-and-kubernetes-step-by-step-for-44826e71c648",
      featured: false
    },
    {
      id: 5,
      title: "Ansible-Driven Configuration Management Inside Kubernetes Pods: A Hands-On Guide for Beginners",
      excerpt: "Learn how to use Ansible for configuration management within Kubernetes pods with practical examples and best practices.",
      date: "2024-07-25",
      readTime: "8 min read",
      category: "Configuration",
      tags: ["Ansible", "Kubernetes", "Configuration"],
      image: "/api/placeholder/400/250",
      url: "https://medium.com/@sharan-rh/ansible-driven-configuration-management-inside-kubernetes-pods-a-hands-on-guide-for-beginners-a29c0636c538",
      featured: false
    },
    {
      id: 6,
      title: "Deploying Jenkins + Ansible on a Manually Created Kubernetes Cluster with kubeadm",
      excerpt: "Step-by-step guide to setting up Jenkins and Ansible on a manually created Kubernetes cluster using kubeadm for complete DevOps automation.",
      date: "2024-07-20",
      readTime: "11 min read",
      category: "DevOps",
      tags: ["Jenkins", "Ansible", "kubeadm"],
      image: "/api/placeholder/400/250",
      url: "https://medium.com/@sharan-rh/deploying-jenkins-ansible-on-a-manually-created-kubernetes-cluster-with-kubeadm-067fb15ae607",
      featured: false
    },
    {
      id: 7,
      title: "Building a Jenkins CI/CD Cluster with Custom Docker & Kubernetes — No Prebuilt Images",
      excerpt: "Create a complete Jenkins CI/CD cluster using custom Docker images and Kubernetes without relying on prebuilt images.",
      date: "2024-07-15",
      readTime: "10 min read",
      category: "CI/CD",
      tags: ["Jenkins", "Docker", "Kubernetes"],
      image: "/api/placeholder/400/250",
      url: "https://medium.com/@sharan-rh/building-a-jenkins-ci-cd-cluster-with-custom-docker-kubernetes-no-prebuilt-images-no-c97549ba566a",
      featured: false
    },
    {
      id: 8,
      title: "From Zero to Production: How I Built a Full CI/CD Pipeline with Jenkins, Docker & Ansible",
      excerpt: "Complete journey of building a production-ready CI/CD pipeline from scratch using Jenkins, Docker, and Ansible with real-world examples.",
      date: "2024-07-10",
      readTime: "13 min read",
      category: "DevOps",
      tags: ["Jenkins", "Docker", "Ansible"],
      image: "/api/placeholder/400/250",
      url: "https://medium.com/@sharan-rh/from-zero-to-production-how-i-built-a-full-ci-cd-pipeline-with-jenkins-docker-ansible-no-e931c368bcee",
      featured: false
    },
    {
      id: 9,
      title: "No DockerHub: Building a Complete CI/CD Pipeline with Local Registry",
      excerpt: "Learn how to build a complete CI/CD pipeline without relying on DockerHub by setting up and using a local Docker registry.",
      date: "2024-07-05",
      readTime: "7 min read",
      category: "DevOps",
      tags: ["Docker", "Registry", "CI/CD"],
      image: "/api/placeholder/400/250",
      url: "https://medium.com/@sharan-rh/no-dockerhub-16edfb07483a",
      featured: false
    },
    {
      id: 10,
      title: "Deploy a Dockerized Flask App on Kubernetes Using Ansible: A Real-World DevOps Walkthrough",
      excerpt: "Comprehensive guide to deploying a Dockerized Flask application on Kubernetes using Ansible automation with practical DevOps workflows.",
      date: "2024-06-30",
      readTime: "9 min read",
      category: "DevOps",
      tags: ["Flask", "Kubernetes", "Ansible"],
      image: "/api/placeholder/400/250",
      url: "https://medium.com/@sharan-rh/deploy-a-dockerized-flask-app-on-kubernetes-using-ansible-a-real-world-devops-walkthrough-9fc2af9bc0d8",
      featured: false
    }
  ];


  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };


  return (
    <section 
      id="blog" 
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div 
            className="particles-container absolute inset-0" 
            style={{
              background: `
                radial-gradient(circle at 30% 40%, rgba(96, 76, 253, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(253, 164, 76, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 50% 20%, rgba(15, 187, 180, 0.1) 0%, transparent 50%)
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
                    LATEST BLOG POSTS
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
                Insights, tutorials, and thoughts on modern development practices
              </motion.p>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white hover:bg-purple-600 hover:text-white backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white hover:bg-purple-600 hover:text-white backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide px-12 py-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {blogPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={cardVariants}
                  className="group relative flex-shrink-0 w-96"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300/50 dark:hover:border-purple-600/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                  {/* Modern gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Animated border glow */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Blog image placeholder - moved to top */}
                  <motion.div 
                    className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center group-hover:from-purple-100 group-hover:to-blue-100 dark:group-hover:from-purple-900/30 dark:group-hover:to-blue-900/30 transition-all duration-500 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: post.id * 0.1 }}
                  >
                    <motion.div
                      className="text-4xl text-gray-400 dark:text-gray-500 group-hover:text-purple-500 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <BookOpen className="w-12 h-12" />
                    </motion.div>
                    
                    {/* Category overlay on image */}
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 rounded-lg text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </motion.div>

                  <div className="relative z-10 p-6">

                    {/* Title */}
                    <motion.h2 
                      className="text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2"
                      whileHover={{ x: 5 }}
                    >
                      {post.title}
                    </motion.h2>

                    {/* Excerpt */}
                    <p className="text-sm mb-4 text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <motion.span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime} min read</span>
                      </div>
                      <motion.a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 text-sm font-semibold transition-colors"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
            </div>
          </div>

          {/* View All Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="https://medium.com/@sharan-rh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              <div className="text-left">
                <div className="text-sm font-semibold">View All Articles</div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;