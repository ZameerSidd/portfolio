import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechnicalHighlights from "@/components/TechnicalHighlights";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <div className="min-h-screen bg-background">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <TechnicalHighlights />
          <ExperienceSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
