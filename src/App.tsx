import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { WebProjects } from './components/WebProjects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen dark relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black -z-10">
        {/* Neural Network Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-green-500/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />
        </div>
        
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px),
              linear-gradient(rgba(139,92,246,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
          }} />
        </div>

        {/* Scan Lines */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.1) 2px, rgba(34,211,238,0.1) 4px)',
            animation: 'scan-line-move 8s linear infinite'
          }} />
        </div>

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0),
            radial-gradient(circle at 2px 2px, rgba(34,211,238,0.2) 1px, transparent 0)
          `,
          backgroundSize: '3px 3px, 5px 5px',
          animation: 'grain 0.2s infinite'
        }} />
      </div>

      <Navigation />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="mobile-projects">
          <Projects />
        </section>
        
        <section id="web-projects">
          <WebProjects />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}