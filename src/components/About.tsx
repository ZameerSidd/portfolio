import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Code2, Sparkles, Zap, Database, Cloud, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    category: 'Mobile Development',
    icon: Smartphone,
    skills: ['Flutter', 'Android', 'Dart', 'iOS'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Backend Development',
    icon: Database,
    skills: ['Node.js', '.NET Core', 'Java', 'Python'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Databases & Tools',
    icon: Database,
    skills: ['SQL Server', 'PostgreSQL', 'Firebase', 'Git'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Web Technologies',
    icon: Code2,
    skills: ['JavaScript', 'REST APIs', 'SVN', 'Jira'],
    color: 'from-orange-500 to-red-500'
  }
];

// Technology icons mapping
const techIcons = {
  'Flutter': '🦋',
  'Android': '🤖',
  'Dart': '🎯',
  'Node.js': '⚡',
  'JavaScript': '📜',
  'Java': '☕',
  'Python': '🐍',
  'SQL Server': '🗄️',
  'Git': '📋',
  'SVN': '📝',
  'Jira': '📊',
  'PostgreSQL': '🐘',
  'Firebase': '🔥',
  '.NET Core': '⚙️',
  'REST APIs': '🔗',
  'iOS': '🍎'
};

const FloatingIcon = ({ icon: Icon, className, delay }: { icon: any, className: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    animate={{ 
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      repeatType: "reverse",
      ease: "easeInOut",
      delay
    }}
    className={className}
  >
    <Icon className="w-8 h-8 text-purple-400" />
  </motion.div>
);

export function About() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Skills & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl mb-6 text-white flex items-center gap-3"
            >
              <Code2 className="w-6 h-6 text-purple-400" />
              Skills & Technologies
            </motion.h3>
            
            <div className="space-y-6">
              {skillCategories.map((category, categoryIndex) => {
                const CategoryIcon = category.icon;
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + categoryIndex * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}/20 border border-gray-600/50`}>
                        <CategoryIcon className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-sm text-gray-300">{category.category}</h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                          className="group"
                        >
                          <div className="flex items-center gap-2 p-2 bg-gray-700/30 hover:bg-gray-700/50 rounded-lg border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300">
                            <span className="text-lg group-hover:scale-110 transition-transform">
                              {techIcons[skill] || '⚡'}
                            </span>
                            <span className="text-xs text-gray-300 group-hover:text-white transition-colors">
                              {skill}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>


          </motion.div>

          {/* Right side - Content & Code Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                With 3 to 4 years of Flutter and Android development experience, I focus on building high performance, 
                appealing, and scalable mobile apps for both Android and iOS. I am an expert in the full stack - 
                backend development using .NET Core, database design with SQL Server.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Successfully delivered internal enterprise apps for Brinks Pvt Ltd, supporting daily operations at scale — 
                including route-based logistics, secure media handling, and QR-code–based asset tracking. Built systems 
                that handle hundreds of routes and thousands of records per day with minimal error.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                I take ownership of my work and I want to make apps that are not only feature rich but also robust, 
                user-friendly and reliable in a real world environment.
              </motion.p>
            </div>

            {/* Code Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-2">zameer_dev.dart</span>
                </div>
                
                <div className="space-y-2 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    viewport={{ once: true }}
                    className="text-purple-400"
                  >
                    class <span className="text-blue-400">ZameerSiddique</span> &#123;
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    viewport={{ once: true }}
                    className="text-gray-300 pl-4"
                  >
                    final String <span className="text-cyan-400">role</span> = <span className="text-green-400">'Flutter Developer'</span>;
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                    viewport={{ once: true }}
                    className="text-gray-300 pl-4"
                  >
                    final int <span className="text-cyan-400">experience</span> = <span className="text-yellow-400">4</span>;
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.0 }}
                    viewport={{ once: true }}
                    className="text-gray-300 pl-4"
                  >
                    final String <span className="text-cyan-400">location</span> = <span className="text-green-400">'Mumbai, India'</span>;
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.2 }}
                    viewport={{ once: true }}
                    className="text-purple-400"
                  >
                    &#125;
                  </motion.div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      initial={{
                        x: Math.random() * 300,
                        y: Math.random() * 200,
                        opacity: 0
                      }}
                      animate={{
                        y: [null, -10, 10],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Icons */}
              <FloatingIcon 
                icon={Code2} 
                className="absolute -top-4 -right-4" 
                delay={1.5}
              />
              <FloatingIcon 
                icon={Zap} 
                className="absolute -bottom-4 -left-4" 
                delay={2.0}
              />
            </motion.div>

            {/* Key Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 mt-6"
            >
              <h4 className="text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                Key Achievements
              </h4>
              <div className="space-y-3 text-gray-300">
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 2.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Successfully handled 900-1200 daily route creations with minimal error rate</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 2.8 }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Developed and maintained 3 critical enterprise apps for Brinks operations</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 3.0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-purple-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Achieved zero asset mismatch incidents in QR-based tracking system</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 3.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-cyan-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Built robust media syncing APIs for high-frequency uploads</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}