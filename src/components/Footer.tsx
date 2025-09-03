import { motion } from 'motion/react';
import { Heart, Download } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

const handleDownloadResume = () => {
  // Download resume from local assets folder
  const link = document.createElement('a');
  link.href = '/portfolio/assets/Zameer_Siddique_Resume.pdf'; // Adjust path if needed
  link.download = 'Zameer_Siddique_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
    <footer className="bg-gray-900 text-white py-10">
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
              Zameer Siddique
            </h3>
            <p className="text-gray-400 max-w-md mx-auto mb-6">
              Flutter & Full Stack Developer passionate about creating beautiful and functional applications
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleDownloadResume}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </motion.div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">
                © {currentYear} Zameer Siddique. All rights reserved.
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