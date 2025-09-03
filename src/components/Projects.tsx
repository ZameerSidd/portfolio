import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'CIT (Cash In Transit)',
    description: 'A route-based app for secure pickup and delivery of cash, cheques, and DDs from/to customer locations. Agents perform 20–40 stops per route and enter data such as deposit slip numbers and transaction amounts. Handles 900–1200 daily route creations with seamless backend syncing.',
    image: 'https://images.unsplash.com/photo-1621691187532-bbeb671757ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBmbHV0dGVyfGVufDF8fHx8MTc1Njc0MTc1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Flutter', '.NET Core', 'SQL Server', 'REST APIs'],
    liveUrl: '#',
    githubUrl: '#',
    duration: '12/2023 - 10/2024',
    keyFeatures: ['Route-based logistics', 'Secure cash handling', 'Real-time data sync', 'Transaction tracking']
  },
  {
    title: 'ATM CBR CRM',
    description: 'A task-based application that assigns field agents a daily route of ATMs for cash refilling operations. Each stop requires capturing 6–10 images and a video. Handles 200–300 routes daily with integrated dynamic counter workflows and efficient media upload handling.',
    image: 'https://images.unsplash.com/photo-1611605862651-c91b8778ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG0lMjBiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc1Njc0MTc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Flutter', '.NET Core', 'SQL Server', 'Media APIs'],
    liveUrl: '#',
    githubUrl: '#',
    duration: '03/2024 - Present',
    keyFeatures: ['ATM route management', 'Media capture & upload', 'Dynamic workflows', 'Network optimization']
  },
  {
    title: 'BGS (Brinks Gold & Silver)',
    description: 'A QR-code–based asset tracking system to manage and audit gold and silver bars stored across Brinks vaults. Each bar (≈30 KG) and pallet (25–32 bars) has unique QR codes with metadata. Supports real-time scanning and structured vault hierarchy management.',
    image: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NTY3NDE3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Flutter', '.NET Core', 'QR Scanning', 'SQL Server'],
    liveUrl: '#',
    githubUrl: '#',
    duration: '11/2024 - 03/2025',
    keyFeatures: ['QR-based tracking', 'Vault hierarchy', 'Inventory management', 'Zero asset mismatch']
  }
];

export function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Mobile Applications
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Cross-platform mobile applications built with Flutter
          </p>
        </motion.div>

        <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Project Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg group">
                  <ImageWithFallback
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl text-white">
                      {projects[currentProject].title}
                    </h3>
                    <span className="text-sm text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
                      {projects[currentProject].duration}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg mb-4">
                    {projects[currentProject].description}
                  </p>
                  
                  {projects[currentProject].keyFeatures && (
                    <div className="mb-4">
                      <h5 className="text-sm text-gray-400 mb-2">Key Features:</h5>
                      <div className="flex flex-wrap gap-2">
                        {projects[currentProject].keyFeatures.map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-lg mb-3 text-white">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-gray-200 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    onClick={() => window.open(projects[currentProject].liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="group border-gray-600 hover:border-purple-400 text-gray-300 hover:text-white"
                    onClick={() => window.open(projects[currentProject].githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    View Code
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={prevProject}
              className="group rounded-full p-3 hover:bg-purple-500/20 hover:border-purple-400 border-gray-600 text-gray-300"
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-purple-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextProject}
              className="group rounded-full p-3 hover:bg-purple-500/20 hover:border-purple-400 border-gray-600 text-gray-300"
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}