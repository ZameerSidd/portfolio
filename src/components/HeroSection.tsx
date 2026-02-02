import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThreeScene = lazy(() => import("./ThreeScene"));

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Suspense
        fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        }
      >
        <ThreeScene />
      </Suspense>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-primary font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              Zameer Siddique
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Software Engineer
          </motion.h2>

          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65 }}
          >
            <span className="text-sm md:text-base text-primary font-medium">
              Internal Enterprise System | Flutter, Android, APIs, Media Processing
            </span>
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-muted-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Built a server-driven mobile platform where workflows and application logic were dynamically controlled by backend systems
          </motion.p>

          {/* Key Highlights */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            {[
              "Media Processing & Large File Uploads",
              "Offline Sync with Retries",
              "Native Android Background Services",
              "API-Driven Data Validation"
            ].map((highlight, index) => (
              <span
                key={highlight}
                className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-muted border border-border text-muted-foreground"
              >
                {highlight}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button variant="outline" size="lg" asChild className="gap-2">
              <a href="/Zameer_Siddique_Resume.pdf" download>
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.2 },
          y: { duration: 1.5, repeat: Infinity } 
        }}
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
