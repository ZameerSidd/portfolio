import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';
import { ChevronDown, Download, Code2, Terminal, Zap, Cpu, Binary, GitBranch, Brain, Eye, Hexagon } from 'lucide-react';
import { Button } from './ui/button';


const DigitalParticle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [0, -100, -200],
        x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeOut"
      }}
      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        filter: 'drop-shadow(0 0 3px rgba(34,211,238,0.8))',
      }}
    />
  );
};

const HexagonGrid = ({ className }: { className: string }) => (
  <div className={`absolute ${className} opacity-10`}>
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ rotate: 360 }}
        transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
        className="absolute"
        style={{
          left: `${(i % 3) * 40}%`,
          top: `${Math.floor(i / 3) * 40}%`,
        }}
      >
        <Hexagon className="w-8 h-8 text-cyan-400/30" />
      </motion.div>
    ))}
  </div>
);

const GlassCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
    className={`glass-card ${className}`}
  >
    {children}
  </motion.div>
);

const RobotEye = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, delay }}
    className="absolute"
    style={{
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 80 + 10}%`,
    }}
  >
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 1, 0.3]
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <div className="w-4 h-4 bg-cyan-400 rounded-full relative">
        <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-60" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-1 border border-white/60 rounded-full"
        />
      </div>
    </motion.div>
  </motion.div>
);

export function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const roles = [
    'AI Developer',
    'Digital Architect', 
    'Code Synthesizer',
    'Neural Engineer',
    'System Matrix'
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotateY: [0, 360],
      scale: [1, 1.05, 1],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
  // Download resume from local assets folder
  const link = document.createElement('a');
  link.href = '/portfolio/assets/Zameer_Siddique_Resume.pdf'; // Adjust path if needed
  link.download = 'Zameer_Siddique_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Digital Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => {
          const delay = Math.random() * 5;
          return (
            <React.Fragment key={i}>
              <DigitalParticle delay={delay} />
            </React.Fragment>
          );
        })}
      </div>

      {/* Hexagon Grid Background */}
      <HexagonGrid className="top-0 left-0 w-full h-full" />

      {/* Robot Eyes */}
      {[...Array(8)].map((_, i) => (
        <React.Fragment key={i}>
          <RobotEye delay={i * 0.5} />
        </React.Fragment>
      ))}

      {/* Neural Network Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              transformOrigin: 'left center',
              filter: 'drop-shadow(0 0 3px rgba(34,211,238,0.8))',
            }}
          />
        ))}
      </div>

      {/* Main Robotic Interface */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-center min-h-screen py-20">
          
          {/* Left Panel - System Status */}
          <GlassCard delay={0.2} className="space-y-6">
            <div className="p-6">
              <h3 className="grainy-text text-cyan-400 mb-4 flex items-center">
                <Terminal className="w-5 h-5 mr-2" />
                SYSTEM STATUS
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Neural Network</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                    <span className="text-green-400 grainy-text">ONLINE</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Code Matrix</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
                    <span className="text-blue-400 grainy-text">ACTIVE</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">AI Processing</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" />
                    <span className="text-purple-400 grainy-text">OPTIMIZED</span>
                  </div>
                </div>
              </div>
              
              {/* Progress Bars */}
              <div className="mt-6 space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Flutter Expertise</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>.NET Core</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 2, delay: 0.8 }}
                      className="bg-gradient-to-r from-purple-400 to-pink-500 h-1 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Mobile Dev</span>
                    <span>98%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 2, delay: 1.1 }}
                      className="bg-gradient-to-r from-green-400 to-emerald-500 h-1 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Center Panel - Main Interface */}
          <GlassCard delay={0.4} className="lg:col-span-1 text-center">
            <div className="p-8">
              {/* Robotic Avatar */}
              <motion.div
                animate={controls}
                className="relative mb-8 mx-auto w-40 h-40"
                style={{ perspective: '1000px' }}
              >
                <div className="relative w-full h-full">
                  {/* Main Head */}
                  <div className="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-cyan-400/30 shadow-2xl">
                    <div className="absolute inset-2 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-xl" />
                    
                    {/* Eyes */}
                    <div className="absolute top-8 left-8 w-4 h-4 bg-cyan-400 rounded-full animate-pulse">
                      <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm opacity-60" />
                    </div>
                    <div className="absolute top-8 right-8 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}>
                      <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm opacity-60" />
                    </div>
                    
                    {/* Mouth/Interface */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-purple-400/50 rounded-full">
                      <motion.div
                        animate={{ scaleX: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-full h-full bg-purple-400 rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Floating Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-cyan-400/30 rounded-3xl"
                  />
                  
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-cyan-400/10 rounded-3xl blur-xl animate-pulse" />
                </div>
              </motion.div>

              {/* Identity Display */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-4xl md:text-5xl mb-4 grainy-text-large"
                style={{
                  background: 'linear-gradient(45deg, #00f5ff, #8b5cf6, #00f5ff)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradient-shift 3s ease-in-out infinite'
                }}
              >
                ZAMEER.EXE
              </motion.h1>

              {/* Role Typewriter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mb-6"
              >
                <div className="text-xl md:text-2xl text-cyan-400 grainy-text mb-2">
                  {text}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-cyan-400"
                  >
                    _
                  </motion.span>
                </div>
                <p className="text-gray-400 text-sm grainy-text">
                  Advanced mobile application architect specializing in high-performance systems
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  onClick={handleDownloadResume}
                  className="glass-button group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </span>
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="glass-button-outline group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    CONNECT
                  </span>
                </Button>
              </motion.div>
            </div>
          </GlassCard>

          {/* Right Panel - Tech Stack */}
          <GlassCard delay={0.6} className="space-y-6">
            <div className="p-6">
              <h3 className="grainy-text text-purple-400 mb-4 flex items-center">
                <Cpu className="w-5 h-5 mr-2" />
                TECH MATRIX
              </h3>
              
              <div className="space-y-4">
                {[
                  { name: 'Flutter', level: 98, color: 'from-blue-400 to-cyan-400', icon: Code2 },
                  { name: '.NET Core', level: 95, color: 'from-purple-400 to-pink-400', icon: Terminal },
                  { name: 'Mobile Dev', level: 96, color: 'from-green-400 to-emerald-400', icon: Zap },
                  { name: 'SQL Server', level: 88, color: 'from-orange-400 to-red-400', icon: Binary }
                ].map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <tech.icon className="w-4 h-4 mr-2 text-cyan-400" />
                        <span className="text-sm text-gray-300 grainy-text">{tech.name}</span>
                      </div>
                      <span className="text-xs text-gray-400 grainy-text">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ duration: 1.5, delay: 1 + idx * 0.1 }}
                        className={`h-full bg-gradient-to-r ${tech.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl grainy-text-large text-cyan-400">4+</div>
                    <div className="text-xs text-gray-400 grainy-text">YEARS</div>
                  </div>
                  <div>
                    <div className="text-2xl grainy-text-large text-purple-400">7+</div>
                    <div className="text-xs text-gray-400 grainy-text">PROJECTS</div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors group"
          >
            <span className="text-xs mb-2 grainy-text group-hover:text-cyan-400">SCROLL TO EXPLORE</span>
            <ChevronDown className="w-5 h-5 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}