import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Smartphone, 
  Server, 
  Database, 
  Wifi, 
  Video, 
  CheckCircle2,
  Zap
} from "lucide-react";

const keyContributions = [
  {
    icon: Server,
    title: "Server-Driven Workflows",
    description: "Architected dynamic application workflows where screens, validation logic, and process steps were configured by backend responses."
  },
  {
    icon: Video,
    title: "Media Processing Pipeline",
    description: "Built media capture pipeline including video recording, timestamp overlays, compression, and storage management for field usage."
  },
  {
    icon: Wifi,
    title: "Large File Upload Systems",
    description: "Implemented 50MB+ media uploads with metadata sync, retry mechanisms, and failure recovery for unstable networks."
  },
  {
    icon: Smartphone,
    title: "Native Background Services",
    description: "Integrated Android background services for video compression and post-processing, reducing UI thread load."
  },
  {
    icon: Database,
    title: "Offline-First Sync",
    description: "Designed API-driven synchronization with offline support, local persistence, validation layers, and retry strategies."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimized for operational environments focusing on memory usage, background execution, and long-running processes."
  }
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          
          {/* Role & Overview */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4"
            >
              <span className="text-primary font-medium text-sm">
                Software Engineer – Mobile & Backend-Integrated Systems
              </span>
            </motion.div>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Designed and developed production-grade enterprise mobile platforms used in operational field environments 
              where application behavior, workflows, and data capture processes are dynamically controlled by backend systems. 
              Specialized in media capture, large file transfers, and high-reliability data synchronization.
            </p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { number: "3+", label: "Years Experience" },
              { number: "6+", label: "Enterprise Apps" },
              { number: "7+", label: "Websites Built" },
              { number: "1000+", label: "Daily Routes Managed" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-card border border-border rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Engineering Contributions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-center mb-8">
              Key Engineering <span className="text-primary">Contributions</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyContributions.map((contribution, index) => (
                <motion.div
                  key={contribution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.5)" }}
                  className="bg-card border border-border rounded-xl p-5 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <contribution.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{contribution.title}</h4>
                      <p className="text-sm text-muted-foreground">{contribution.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* System Characteristics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {[
              "Enterprise Internal Systems",
              "Backend-Controlled Workflows",
              "Media-Heavy Operations",
              "Field Usage with Network Constraints",
              "Performance-Critical Processing"
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground border border-border"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
