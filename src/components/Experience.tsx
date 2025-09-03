import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'ByVal Technologies India Private Limited',
    role: 'Full Stack Developer',
    period: '10/2023 - Present',
    location: 'Coimbatore, Tamil Nadu (Assigned to Brinks Pvt Ltd)',
    highlights: [
      'Solely responsible for development and maintenance of multiple internal mobile applications used by Brinks operations teams',
      'Built systems handling 900–1200 daily route creations with minimal error rate',
      'Developed efficient .NET Core APIs for large media uploads and real-time syncing',
      'Technology Stack: Flutter (Frontend), .NET Core APIs, SQL Server Management Studio'
    ]
  },
  {
    company: 'Orient Technologies',
    role: 'Software Developer',
    period: '12/2021 - 09/2023',
    location: 'Mumbai, Andhari East',
    highlights: [
      'Developed and delivered multiple Flutter Web and Mobile applications for Android',
      'Built dynamic applications with advanced features and custom widgets',
      'Experienced in developing RESTful APIs that are efficient, scalable, and secure',
      'Worked in Agile development environment collaborating with teams to meet project deadlines'
    ]
  },
  {
    company: 'Simple Inc',
    role: 'Junior Java Developer',
    period: '10/2021 - 12/2021',
    location: 'Mumbai, India',
    highlights: [
      'Created Android Applications using Java with OOPS concepts',
      'Integrated Firebase Notification and CRUD operations in Android apps',
      'Integrated Firebase Store for data management',
      'Developed problem-solving skills to troubleshoot and resolve issues efficiently'
    ]
  }
];

export function Experience() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                />

                {/* Content */}
                <div className="ml-16 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl mb-1 text-white">{exp.role}</h3>
                      <div className="flex items-center text-purple-400 mb-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span>{exp.company}</span>
                      </div>
                      {exp.location && (
                        <p className="text-sm text-gray-400">{exp.location}</p>
                      )}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.5 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start text-gray-300"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}