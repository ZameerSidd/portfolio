import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              John Doe
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Flutter & Full Stack Developer passionate about creating beautiful and functional applications
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">
                © {currentYear} John Doe. All rights reserved.
              </p>
              
              <motion.div 
                className="flex items-center text-gray-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="mx-2"
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>and lots of coffee ☕</span>
              </motion.div>

              <p className="text-gray-400">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}