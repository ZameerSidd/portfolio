import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack & Mobile Developer",
    company: "Byval Technologies",
    client: "Client: Brinks Pvt Ltd",
    location: "India",
    period: "Present",
    description: "Developing enterprise-grade mobile and backend applications for financial and logistics operations.",
    achievements: [
      "Built 3 major enterprise applications (ATM_CRM, CIT, BGS)",
      "Designed high-performance media sync systems handling 200-300 routes daily",
      "Implemented offline-first mobile architecture for unreliable network conditions",
      "Developed QR-based asset tracking for gold & silver vault management"
    ]
  },
  {
    title: "Backend Engineer (Rust)",
    company: "Systems Development",
    location: "Remote",
    period: "Recent",
    description: "Building high-performance backend systems using Rust for video streaming and real-time applications.",
    achievements: [
      "Developed Rust-based video streaming API with HLS support",
      "Implemented chunk-based video delivery for optimal performance",
      "Created scalable API architecture for media upload and streaming"
    ]
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Building enterprise applications and high-performance systems 
            that power real-world operations.
          </p>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      {exp.client && (
                        <p className="text-sm text-muted-foreground">{exp.client}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li 
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
