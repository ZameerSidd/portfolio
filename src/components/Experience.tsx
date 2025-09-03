import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Zap, Code, Database } from 'lucide-react';

const experiences = [
  {
    company: 'ByVal Technologies India Private Limited',
    role: 'Full Stack Developer',
    period: '10/2023 - Present',
    location: 'Coimbatore, Tamil Nadu (Assigned to Brinks Pvt Ltd)',
    icon: Briefcase,
    highlights: [
      'Solely responsible for development and maintenance of multiple internal mobile applications used by Brinks operations teams',
      'Built systems handling 900–1200 daily route creations with minimal error rate',
      'Developed efficient .NET Core APIs for large media uploads and real-time syncing',
      'Technology Stack: Flutter (Frontend), .NET Core APIs, SQL Server Management Studio'
    ],
    color: 'from-purple-500 to-blue-600'
  },
  {
    company: 'Orient Technologies',
    role: 'Software Developer',
    period: '12/2021 - 09/2023',
    location: 'Mumbai, Andhari East',
    icon: Code,
    highlights: [
      'Developed and delivered multiple Flutter Web and Mobile applications for Android',
      'Built dynamic applications with advanced features and custom widgets',
      'Experienced in developing RESTful APIs that are efficient, scalable, and secure',
      'Worked in Agile development environment collaborating with teams to meet project deadlines'
    ],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    company: 'Simple Inc',
    role: 'Junior Java Developer',
    period: '10/2021 - 12/2021',
    location: 'Mumbai, India',
    icon: Database,
    highlights: [
      'Created Android Applications using Java with OOPS concepts',
      'Integrated Firebase Notification and CRUD operations in Android apps',
      'Integrated Firebase Store for data management',
      'Developed problem-solving skills to troubleshoot and resolve issues efficiently'
    ],
    color: 'from-cyan-500 to-green-600'
  }
];

export function Experience() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Enhanced Timeline Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full shadow-lg">
            <div className="absolute inset-0 w-1 bg-gradient-to-b from-purple-400 via-blue-400 to-cyan-400 rounded-full blur-sm opacity-60"></div>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, rotateY: 45 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-8"
                style={{ perspective: '1000px' }}
              >
                {/* Enhanced Timeline Dot */}
                <motion.div
                  initial={{ scale: 0, rotateZ: -180 }}
                  whileInView={{ scale: 1, rotateZ: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="relative flex-shrink-0"
                >
                  <div className={`w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-gray-800 relative overflow-hidden`}>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-1 border-2 border-white/20 rounded-full"
                    />
                    <exp.icon className="w-8 md:w-10 h-8 md:h-10 text-white relative z-10" />
                  </div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0.8, 0.3],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute inset-0 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br ${exp.color.replace('500', '400').replace('600', '500')}/40 rounded-full blur-md`}
                  />
                </motion.div>

                {/* Enhanced Experience Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="flex-1 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Card Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color}/5 rounded-2xl`} />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <motion.h3 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                          viewport={{ once: true }}
                          className="text-2xl md:text-3xl mb-2 text-white"
                        >
                          {exp.role}
                        </motion.h3>
                        
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                          viewport={{ once: true }}
                          className="flex items-center text-purple-400 mb-3"
                        >
                          <Briefcase className="w-5 h-5 mr-3" />
                          <span className="text-lg">{exp.company}</span>
                        </motion.div>
                        
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                          viewport={{ once: true }}
                          className="flex items-center text-gray-400 mb-4"
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.9 }}
                        viewport={{ once: true }}
                        className="flex items-center text-gray-300 bg-gray-700/50 rounded-lg px-4 py-2 lg:mt-0 mt-4"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </motion.div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-4">
                      {exp.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 1.0 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start group"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:shadow-lg group-hover:shadow-purple-400/50"
                          />
                          <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}