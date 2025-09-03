import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Information Technology (BSC IT)',
    institution: 'Siddharth College',
    period: '2021 - 2023',
    description: 'Comprehensive study of information technology, software development, database management, and web technologies. Focused on practical application of programming concepts.',
    achievements: ['Software Development Projects', 'Database Design & Management', 'Web Technologies']
  },
  {
    degree: 'Diploma in Engineering',
    institution: 'A.I Abdul Razzak Kalsekar Polytechnic',
    period: '2018 - 2021',
    description: 'Foundation in engineering principles, programming fundamentals, and technical problem-solving. Strong emphasis on practical learning and hands-on projects.',
    achievements: ['Engineering Fundamentals', 'Programming Foundation', 'Technical Projects']
  }
];

export function Education() {
  return (
    <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-2xl text-white">{edu.degree}</h3>
                  </div>
                  
                  <p className="text-lg text-purple-400 mb-2">{edu.institution}</p>
                  
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{edu.period}</span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-yellow-400 mr-2" />
                  <h4 className="text-lg text-white">Key Areas</h4>
                </div>
                <motion.div 
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {edu.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.5 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-3 text-center hover:scale-105 transition-transform duration-200"
                    >
                      <span className="text-gray-800">{achievement}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}