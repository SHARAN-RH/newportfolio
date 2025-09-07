import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Tag, Calendar } from 'lucide-react';
import { blogs } from '../../data/portfolioData';

const MobileBlog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const categories = ['all', 'CI/CD', 'DevOps', 'Kubernetes', 'Architecture', 'Automation'];

  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const loadMore = () => {
    setVisibleBlogs(prev => Math.min(prev + 6, filteredBlogs.length));
  };

  return (
    <section id="blog" className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
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
            <BookOpen className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Blog</h2>
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
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleBlogs(6);
              }}
              className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'All Posts' : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts */}
        <div className="space-y-4">
          {filteredBlogs.slice(0, visibleBlogs).map((blog, index) => (
            <motion.article
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Blog Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-purple-600" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight mb-2">
                    {blog.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                      <Tag className="w-3 h-3" />
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {blog.platform}
                    </span>
                  </div>
                </div>
              </div>

              {/* Blog Snippet */}
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {blog.snippet}
              </p>

              {/* Read More Button */}
              <motion.a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-xs font-medium w-full justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-3 h-3" />
                Read on Medium
              </motion.a>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        {visibleBlogs < filteredBlogs.length && (
          <div className="mt-8 text-center">
            <motion.button
              onClick={loadMore}
              className="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-full font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Load More Posts ({filteredBlogs.length - visibleBlogs} remaining)
            </motion.button>
          </div>
        )}

        {/* Blog Stats */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Writing Stats
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                {blogs.length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Published Articles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {categories.length - 1}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Categories</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="https://medium.com/@sharan-rh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4" />
            Follow on Medium
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileBlog;
