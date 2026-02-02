import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/zameersidd",
    color: "hover:text-foreground"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/zameersidd",
    color: "hover:text-blue-500"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:786zameer6@gmail.com",
    color: "hover:text-primary"
  }
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 bg-card border border-border rounded-xl text-muted-foreground transition-colors ${link.color}`}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:786zameer6@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/Zameer_Siddique_Resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
