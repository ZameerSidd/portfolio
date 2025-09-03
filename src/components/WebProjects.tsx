import { motion } from 'motion/react';
import { ExternalLink, Globe } from 'lucide-react';
import { Button } from './ui/button';

const webProjects = [
  {
    title: 'Securens',
    description: 'Security and compliance management platform with real-time monitoring and automated reporting.',
    liveUrl: 'https://ns-34fdc.web.app/#/',
    technologies: ['Flutter Web', 'Firebase'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Wealth Paver',
    description: 'Financial planning and wealth management application with portfolio tracking and analysis.',
    liveUrl: 'https://wealthpaver.web.app/',
    technologies: ['Flutter Web', 'APIs'],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'HTL International',
    description: 'Professional business portfolio website showcasing international services.',
    liveUrl: 'http://www.htlinternational.in/#/',
    technologies: ['Web Development', 'Responsive'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online shopping platform with payment integration and admin dashboard.',
    liveUrl: '#',
    technologies: ['React', 'Node.js', 'MongoDB'],
    color: 'from-orange-500 to-red-500'
  }
];

export function WebProjects() {
  return (
    <section className="py-16 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Web Applications
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Live web applications and websites built with modern technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {webProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Compact Project Preview */}
              <div className="relative p-4 pb-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-gray-900 rounded-lg p-1 shadow-lg"
                >
                  {/* Mini Browser Header */}
                  <div className="bg-gray-800 rounded-t-md px-2 py-1.5 flex items-center space-x-1">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Compact Screen Content */}
                  <div className="relative bg-white rounded-b-md h-32 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                    <div className="relative h-full flex items-center justify-center">
                      <Globe className="w-8 h-8 text-gray-400" />
                    </div>
                    
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Compact Project Details */}
              <div className="px-4 pb-4">
                <div className="mb-3">
                  <h3 className="text-lg mb-1 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => project.liveUrl !== '#' && window.open(project.liveUrl, '_blank')}
                  disabled={project.liveUrl === '#'}
                  size="sm"
                  className={`w-full group/live bg-gradient-to-r ${project.color} hover:shadow-md transition-all duration-300 text-white text-xs ${
                    project.liveUrl === '#' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <ExternalLink className="mr-1 h-3 w-3 group-hover/live:rotate-12 transition-transform" />
                  {project.liveUrl === '#' ? 'Coming Soon' : 'View Live'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-800/50 via-purple-900/30 to-gray-800/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-2xl mb-4 text-white">
              Interested in working together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I specialize in building scalable web applications with modern frameworks. 
              Let's discuss your next project and bring your ideas to life.
            </p>
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}