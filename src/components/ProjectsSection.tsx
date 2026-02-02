import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Globe, 
  ChevronDown, 
  ExternalLink, 
  Github,
  Smartphone,
  Server,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const enterpriseProjects = [
  {
    id: "atm-crm",
    title: "ATM_CRM",
    subtitle: "ATM Cash Refill Management System",
    client: "Brinks Pvt Ltd (via Byval Technologies)",
    stack: ["Flutter", ".NET Core", "SQL Server"],
    scale: "200-300 routes daily",
    description: "A route-based field operations app used by cash officers to refill ATMs daily.",
    features: [
      "Daily route assignment (1 user → 1 route → multiple ATM stops)",
      "Dynamic workflow screens controlled by backend logic",
      "6-10 images captured per stop with video recording",
      "Offline data handling + smart sync"
    ],
    contributions: [
      "Built Flutter app with dynamic screen rendering from server-driven config",
      "Designed high-performance media sync APIs in .NET Core",
      "Handled large video + image uploads with metadata",
      "Optimized syncing for poor network field conditions"
    ]
  },
  {
    id: "cit",
    title: "CIT",
    subtitle: "Cash In Transit Operations",
    client: "Brinks Pvt Ltd (via Byval Technologies)",
    stack: ["Flutter", ".NET Core", "SQL Server"],
    scale: "900-1200 routes, 20-40 stops each daily",
    description: "A field app for pickup and delivery of cash, cheques, and DDs to homes and shops.",
    features: [
      "Route-based stop management",
      "Capture transaction data: slip numbers, amounts",
      "Multiple images per stop",
      "Status tracking & audit logs"
    ],
    contributions: [
      "Designed backend APIs focused on fast and reliable sync",
      "Ensured safe upload of images and financial metadata",
      "Reduced data loss risk in unstable networks",
      "Built system processing thousands of daily records"
    ]
  },
  {
    id: "bgs",
    title: "BGS",
    subtitle: "Brinks Gold & Silver Asset Management",
    client: "Brinks Pvt Ltd (via Byval Technologies)",
    stack: ["Flutter", ".NET Core", "SQL Server"],
    scale: "Branch → Vault → Rack → Pallet → Bar",
    description: "A QR-code–based tracking system for gold & silver bars inside Brinks vaults.",
    features: [
      "QR code on each pallet and bar box",
      "Scan to fetch Pallet ID, Rack ID, Vault location",
      "Bar movement requests (increase/decrease stock)",
      "Smart placement suggestions"
    ],
    contributions: [
      "Implemented QR scanning workflows",
      "Designed logic to map physical vault structure → digital system",
      "Ensured accurate asset lookup when location is unknown",
      "Supports secure internal audit operations"
    ]
  }
];

const websiteProjects = [
  {
    id: "securens",
    title: "Securens",
    description: "Security solutions platform with modern UI and comprehensive service offerings",
    stack: ["Angular", "Firebase", "TypeScript"],
    link: "https://ns-34fdc.web.app/#/"
  },
  {
    id: "wealth-paver",
    title: "Wealth Paver",
    description: "Financial services and wealth management platform",
    stack: ["Angular", "Firebase", "TypeScript"],
    link: "https://wealthpaver.web.app/"
  },
  {
    id: "htl-international",
    title: "HTL International",
    description: "International business solutions and services website",
    stack: ["Angular", "TypeScript", "Bootstrap"],
    link: "https://www.htlinternational.in/#/"
  },
  {
    id: "deep-solution",
    title: "DEEP SOLUTION",
    description: "Security and surveillance solutions provider",
    stack: ["React", "JavaScript", "CSS"],
    link: "https://www.deepsecc.com/"
  },
  {
    id: "al-sakb",
    title: "AL SAKB",
    description: "Business services and solutions platform",
    stack: ["Angular", "TypeScript", "Bootstrap"],
    link: "https://www.alsakb.in/"
  },
  {
    id: "mas-global",
    title: "MAS Global Steel",
    description: "Steel manufacturing and trading company website",
    stack: ["Angular", "Firebase", "TypeScript"],
    link: "https://masglobalsteel.com/#/home"
  },
  {
    id: "air-view-travel",
    title: "Air View Travel",
    description: "Travel agency platform for flight bookings and travel services",
    stack: ["React", "TypeScript", "Tailwind"],
    link: "https://airviewtravel.ae/"
  }
];

const ProjectCard = ({ project, isExpanded, onToggle }: { 
  project: typeof enterpriseProjects[0]; 
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      layout
      className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
            <p className="text-primary text-sm">{project.subtitle}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Building2 className="w-3 h-3" />
            {project.client.split("(")[0]}
          </span>
          <span className="text-primary font-medium">{project.scale}</span>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border"
          >
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-primary" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                  <Server className="w-4 h-4 text-primary" />
                  My Contributions
                </h4>
                <ul className="space-y-2">
                  {project.contributions.map((contribution, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WebsiteCard = ({ project }: { project: typeof websiteProjects[0] }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <Globe className="w-8 h-8 text-primary" />
        <div className="flex gap-2">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
          </a>
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="outline" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"enterprise" | "websites">("enterprise");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            From enterprise-grade applications handling thousands of daily transactions 
            to modern websites with beautiful user experiences.
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-muted rounded-lg p-1">
              <button
                onClick={() => setActiveTab("enterprise")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeTab === "enterprise" 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Building2 className="w-4 h-4" />
                Enterprise Apps
              </button>
              <button
                onClick={() => setActiveTab("websites")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeTab === "websites" 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Globe className="w-4 h-4" />
                Websites
              </button>
            </div>
          </div>

          {/* Enterprise Projects */}
          <AnimatePresence mode="wait">
            {activeTab === "enterprise" && (
              <motion.div
                key="enterprise"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid gap-6 max-w-4xl mx-auto"
              >
                {enterpriseProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    isExpanded={expandedProject === project.id}
                    onToggle={() => setExpandedProject(
                      expandedProject === project.id ? null : project.id
                    )}
                  />
                ))}
              </motion.div>
            )}

            {activeTab === "websites" && (
              <motion.div
                key="websites"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              >
                {websiteProjects.map((project) => (
                  <WebsiteCard key={project.id} project={project} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
