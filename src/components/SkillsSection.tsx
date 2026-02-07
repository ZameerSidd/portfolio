import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Smartphone, 
  Server, 
  Database, 
  Wifi, 
  Globe, 
  GitBranch,
  Zap,
  Code2
} from "lucide-react";

const skillCategories = [
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "Mobile UI/UX"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: [".NET Core", "Rust", "REST APIs"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "Query Optimization"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Real-Time",
    icon: Wifi,
    skills: ["WebSocket", "SignalR", "Live Data Sync"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "API Design",
    icon: Globe,
    skills: ["GraphQL API", "REST", "HLS Streaming"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Systems",
    icon: Zap,
    skills: ["Video Sync (Rust)", "HLS Streaming (Rust)", "Media Processing"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "DevOps",
    icon: GitBranch,
    skills: ["Git", "CI/CD", "Cloud Deployment"],
    color: "from-teal-500 to-green-500",
  },
  {
    title: "Architecture",
    icon: Code2,
    skills: ["Offline-First", "Scalable Systems", "Clean Code"],
    color: "from-rose-500 to-pink-500",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A comprehensive skill set spanning mobile development, backend systems, 
            real-time communication, and scalable architecture.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.2)" 
                }}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li 
                      key={skill} 
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
