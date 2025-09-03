import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Siddharth College of Arts Science and Commerce',
    period: '2018 - 2021',
    location: 'Mumbai University',
    type: 'Bachelor\'s Degree',
    icon: GraduationCap,
    achievements: [
      'Completed comprehensive study in Information Technology',
      'Strong foundation in programming and software development',
      'Studied database management and system analysis',
      'Gained expertise in web technologies and mobile development'
    ],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    degree: 'Diploma in Computer Science',
    school: 'A.I Abdul Razzak Kalsekar Polytechnic',
    period: '2015 - 2018',
    location: 'Mumbai',
    type: 'Diploma',
    icon: BookOpen,
    achievements: [
      'Specialized in Computer Science fundamentals',
      'Learned core programming concepts and algorithms',
      'Hands-on experience with various programming languages',
      'Project-based learning approach with practical applications'
    ],
    color: 'from-purple-500 to-pink-600'
  }
];

export function Education() {
  return (
    <section className="py-16 bg-gray-900/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -15, 15, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-purple-400/30 rounded-full blur-sm"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
              style={{ perspective: '1000px' }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Floating Icon Background */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${edu.color}/10 rounded-full blur-xl`}
                />

                <div className="relative z-10">
                  {/* Header with Icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.2, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <edu.icon className="w-8 h-8 text-white" />
                      </div>
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${edu.color}/30 rounded-xl blur-md`}
                      />
                    </motion.div>

                    <div className="flex-1">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 + 0.4 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 mb-2"
                      >
                        {edu.type}
                      </motion.div>
                      
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl text-white mb-2 leading-tight"
                      >
                        {edu.degree}
                      </motion.h3>
                    </div>
                  </div>

                  {/* School Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-3 mb-6"
                  >
                    <div className="flex items-center text-blue-400">
                      <Award className="w-4 h-4 mr-3" />
                      <span className="text-lg">{edu.school}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-400 bg-gray-700/30 rounded-lg px-3 py-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <motion.h4
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.7 }}
                      viewport={{ once: true }}
                      className="text-white mb-3"
                    >
                      Key Learning Areas
                    </motion.h4>
                    
                    {edu.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.3 + 0.8 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          className={`w-2 h-2 bg-gradient-to-r ${edu.color} rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:shadow-lg transition-all duration-300`}
                          style={{
                            filter: 'drop-shadow(0 0 4px currentColor)'
                          }}
                        />
                        <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-white transition-colors duration-300">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-100`}
                  style={{ 
                    mask: 'linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)',
                    maskComposite: 'xor'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}