import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Code2, Sparkles, Zap } from 'lucide-react';

const skills = [
  'Flutter', 'Android', 'Dart', 'Node.js', 'JavaScript', 'Java', 
  'Python', 'SQL Server', 'Git', 'SVN', 'Jira', 'PostgreSQL', 
  'Firebase', '.NET Core', 'REST APIs'
];

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
    <section className="py-20 bg-background relative overflow-hidden">
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Animated Code Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Code Block */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-2">developer.dart</span>
                </div>
                
                <div className="space-y-2 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-purple-400"
                  >
                    class <span className="text-blue-400">Developer</span> &#123;
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                    className="text-gray-300 pl-4"
                  >
                    final String <span className="text-cyan-400">name</span> = <span className="text-green-400">'Flutter Developer'</span>;
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="text-gray-300 pl-4"
                  >
                    final int <span className="text-cyan-400">experience</span> = <span className="text-yellow-400">5+</span>;
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    viewport={{ once: true }}
                    className="text-gray-300 pl-4"
                  >
                    final List skills = [<span className="text-green-400">'Flutter'</span>, <span className="text-green-400">'.NET'</span>];
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    viewport={{ once: true }}
                    className="text-purple-400"
                  >
                    &#125;
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              <FloatingIcon 
                icon={Code2} 
                className="absolute -top-6 -right-6" 
                delay={0.5}
              />
              <FloatingIcon 
                icon={Sparkles} 
                className="absolute -bottom-6 -left-6" 
                delay={1.0}
              />
              <FloatingIcon 
                icon={Zap} 
                className="absolute top-1/2 -right-12" 
                delay={1.5}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
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

            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="text-xl mb-4 text-white"
              >
                Skills & Technologies
              </motion.h3>
              
              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 cursor-default text-gray-200 hover:text-white backdrop-blur-sm"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}