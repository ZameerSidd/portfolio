import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import handleDownload from "./constant";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isHeroInView = useInView(sectionRef, {
    amount: 0.2,
    margin: "200px 0px 200px 0px",
  });

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <Card className="w-full max-w-7xl mx-4 bg-background/50 backdrop-blur-sm border-border/50 relative overflow-hidden">
        {isHeroInView && (
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="hsl(var(--primary))"
          />
        )}

        <div className="flex flex-col lg:flex-row min-h-[80vh]">
          {/* Left content */}
          <div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center">
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                  Zameer Siddique
                </span>
              </motion.h1>

              <motion.h2
                className="text-xl md:text-2xl text-muted-foreground mb-4"
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
                className="text-base md:text-lg text-muted-foreground/80 max-w-xl mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Built a server-driven mobile platform where workflows and application logic were dynamically controlled by backend systems
              </motion.p>

              {/* Key Highlights */}
              <motion.div
                className="flex flex-wrap gap-2 mb-8 max-w-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
              >
                {[
                  "Media Processing & Large File Uploads",
                  "Offline Sync with Retries",
                  "Native Android Background Services",
                  "API-Driven Data Validation"
                ].map((highlight) => (
                  <span
                    key={highlight}
                    className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-muted border border-border text-muted-foreground"
                  >
                    {highlight}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
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
                  <a  onClick={handleDownload}>
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right content - Spline 3D Scene */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-0">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      {/* Scroll Indicator (pause when hero is off-screen to keep scrolling smooth) */}
      {isHeroInView && (
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2 },
            y: { duration: 1.5, repeat: Infinity },
          }}
        >
          <ArrowDown size={24} />
        </motion.button>
      )}
    </section>
  );
};

export default HeroSection;
