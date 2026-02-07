import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Zameer Siddique. All rights reserved.
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built using React & Three.js
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
